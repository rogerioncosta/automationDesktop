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

function adicionarProduto() {
  Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet2.Panel3.btnNovoProduto.ClickButton();
}

function submeterNovoProdutoComErro(nome, valor, cores) {
  // Preenchendo os dados do produto
  let formularioAdicaoProduto = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet3.Panel6;
  formularioAdicaoProduto.edtNovoNomeProduto.SetText(nome);
  formularioAdicaoProduto.edtNovoValorProduto.SetText(valor);
  formularioAdicaoProduto.edtNovoCoresProduto.SetText(cores);
  
  // Pressionar o botão de adição de produto
  formularioAdicaoProduto.btnSalvarProduto.ClickButton();
}

function validarMensagemDeErro(mensagem) {
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, mensagem);
}

function fecharMensagemDeErro() {
  Aliases.Lojinha.dlgLojinha.btnOK.ClickButton();  
}

function fecharLojinha() {
  Aliases.Lojinha.frmPrincipal.Close();
  
}

function testValidarValoresInvalidosDoProduto() {
  abrirLojinha();
  login("usuario", "senha");
  adicionarProduto();
  submeterNovoProdutoComErro("testeCompllll..", "000", "green");
  validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  fecharMensagemDeErro();
  fecharLojinha();


  /*
  let lojinha = Aliases.Lojinha;
  let tfrmPrincipal = lojinha.frmPrincipal;
  let pageControl = tfrmPrincipal.PageControl1;
  pageControl.ClickTab("LOGIN");
  
  let tabSheet = pageControl.TabSheet1;
  let edit = tabSheet.edtUsuario;
  edit.Click(33, 8);
  edit.SetText("usuario");
  
  edit.Keys("[Tab]");
  edit = tabSheet.edtSenha;
  edit.SetText(Project.Variables.Password2);
  edit.Click(21, 10);
  edit.Drag(46, 3, -67, 9);
  edit.SetText(Project.Variables.Password1);
  tabSheet.btnEntrar.ClickButton();
  
  pageControl.TabSheet2.Panel3.btnNovoProduto.ClickButton();
  let panel = pageControl.TabSheet3.Panel6;
  edit = panel.edtNovoNomeProduto;
  edit.Click(161, 12);
  edit.SetText("teste");
  
  edit.Keys("[Caps]");
  edit.SetText("testeR");
  edit.Keys("[Caps]");
  edit.SetText("testeRefactor");
  edit.Keys("[Caps]");
  edit.SetText("testeRefactorC");
  edit.Keys("[Caps]");
  edit.SetText("testeRefactorComplete");
  edit.Keys("[Tab]");
  edit = panel.edtNovoValorProduto;
  edit.SetText("0,00");
  
  edit.Click(52, 12);
  edit = panel.edtNovoCoresProduto;
  edit.Click(39, 6);
  edit.SetText("teste, teste");
  
  panel.btnSalvarProduto.ClickButton();
  
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, "O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  
  lojinha.dlgLojinha.btnOK.ClickButton();
  tfrmPrincipal.Close();
  */
}