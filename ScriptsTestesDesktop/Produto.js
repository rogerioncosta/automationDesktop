function Test1()
{
  TestedApps.Lojinha.Run();
  let lojinha = Aliases.Lojinha;
  let tfrmPrincipal = lojinha.frmPrincipal;
  let pageControl = tfrmPrincipal.PageControl1;
  pageControl.ClickTab("LOGIN");
  let tabSheet = pageControl.TabSheet1;
  let edit = tabSheet.edtUsuario;
  edit.Drag(30, 20, 3, -5);
  edit.Click(39, 9);
  edit.SetText("usuario");
  edit.Keys("[Tab]");
  edit = tabSheet.edtSenha;
  edit.SetText(Project.Variables.Password1);
  edit.Keys("[Enter]");
  pageControl.TabSheet2.Panel3.btnNovoProduto.ClickButton();
  let panel = pageControl.TabSheet3.Panel6;
  edit = panel.edtNovoNomeProduto;
  edit.Click(30, 9);
  edit.SetText("testecomplete");
  edit.Keys("[Left][Left][Left][Left][Left][Left][Left][Caps]");
  edit.SetText("testeComplete");
  edit = panel.edtNovoValorProduto;
  edit.Click(29, 11);
  edit.SetText("0,00");
  edit = panel.edtNovoCoresProduto;
  edit.Click(50, 8);
  edit.SetText("VERMELHO, AZUL");
  panel.btnSalvarProduto.Click(28, 9);
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, "O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  lojinha.dlgLojinha.btnOK.Click(53, 11);
  tfrmPrincipal.Close();
}