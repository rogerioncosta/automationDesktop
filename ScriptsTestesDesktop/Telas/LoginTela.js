function abrirLojinha() {
  // Executando o app da lojinha
  TestedApps.Lojinha.Run();
}

function login(usuario, senha) {
  // Clicando na aba de login
  Aliases.Lojinha.frmPrincipal.PageControl1.ClickTab("LOGIN");
  
  // Preenchendo o formulario de login
  let formularioLogin = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet1;
  formularioLogin.edtUsuario.SetText(usuario);
  formularioLogin.edtSenha.SetText(senha);
  formularioLogin.btnEntrar.ClickButton();
}
module.exports.abrirLojinha = abrirLojinha;
module.exports.login = login;