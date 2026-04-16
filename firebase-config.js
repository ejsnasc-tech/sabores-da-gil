// ============================================
// 🔥 CONFIGURAÇÃO DO FIREBASE
// ============================================
// Siga os passos abaixo para configurar:
//
// 1. Acesse: https://console.firebase.google.com
// 2. Clique em "Criar um projeto" (ou "Add project")
// 3. Dê o nome: sabores-da-gil → Clique em Continuar
// 4. Desative o Google Analytics (não precisa) → Criar projeto
// 5. No painel do projeto, clique na engrenagem ⚙️ → Configurações do projeto
// 6. Em "Seus apps", clique no ícone </> (Web)
// 7. Dê o apelido: sabores-da-gil → Clique em "Registrar app"
// 8. Copie os valores de firebaseConfig e cole abaixo
// 9. Vá em "Criação" → "Realtime Database" → "Criar banco de dados"
// 10. Escolha a região (us-central1) → Próximo
// 11. Selecione "Iniciar no modo de teste" → Ativar
//
// IMPORTANTE: Depois troque as regras do banco para:
// {
//   "rules": {
//     "cardapio": {
//       ".read": true,
//       ".write": true
//     },
//     "admin_senha": {
//       ".read": true,
//       ".write": false
//     }
//   }
// }
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyBL5oEViQCUXW-IVfyn_bxLXm8Cj37kr_g",
  authDomain: "sabores-da-gil.firebaseapp.com",
  databaseURL: "https://sabores-da-gil-default-rtdb.firebaseio.com",
  projectId: "sabores-da-gil",
  storageBucket: "sabores-da-gil.firebasestorage.app",
  messagingSenderId: "601322057864",
  appId: "1:601322057864:web:d58dba2d86d3604049ef3d"
};
