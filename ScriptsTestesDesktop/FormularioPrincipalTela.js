function fecharLojinha() {
  Aliases.Lojinha.frmPrincipal.Close();
  aqUtils.Delay (2000, "Aguarde 2 segundos para rodar o próximo teste");
}
module.exports.fecharLojinha = fecharLojinha;