export async function onRequestPost(context) {
  const { senha } = await context.request.json();

  if (!senha || typeof senha !== "string") {
    return Response.json({ ok: false, error: "Senha inválida." }, { status: 400 });
  }

  const senhaSalva = await context.env.CARDAPIO_KV.get("admin_senha");

  if (!senhaSalva) {
    await context.env.CARDAPIO_KV.put("admin_senha", senha);
    return Response.json({ ok: true, firstTime: true });
  }

  if (senha === senhaSalva) {
    return Response.json({ ok: true });
  }

  return Response.json({ ok: false }, { status: 401 });
}
