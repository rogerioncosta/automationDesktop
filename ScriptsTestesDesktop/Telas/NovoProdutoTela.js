function submeterNovoProdutoComErro(nome, valor, cores) {
  // Preenchendo os dados do produto
  let formularioAdicaoProduto = Aliases.Lojinha.frmPrincipal.PageControl1.TabSheet3.Panel6;
  formularioAdicaoProduto.edtNovoNomeProduto.SetText(nome);
  formularioAdicaoProduto.edtNovoValorProduto.SetText(valor);
  formularioAdicaoProduto.edtNovoCoresProduto.SetText(cores);
  
  // Pressionar o botão de adição de produto
  formularioAdicaoProduto.btnSalvarProduto.ClickButton();
}
module.exports.submeterNovoProdutoComErro = submeterNovoProdutoComErro;