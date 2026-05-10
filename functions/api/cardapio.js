export async function onRequestGet(context) {
  const data = await context.env.CARDAPIO_KV.get("cardapio");
  const itens = data ? JSON.parse(data) : [];
  return Response.json(itens, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function onRequestPut(context) {
  const senha = context.request.headers.get("X-Admin-Senha");
  const senhaSalva = await context.env.CARDAPIO_KV.get("admin_senha");

  if (!senhaSalva || senha !== senhaSalva) {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }

  const itens = await context.request.json();
  await context.env.CARDAPIO_KV.put("cardapio", JSON.stringify(itens));
  return Response.json({ ok: true });
}
