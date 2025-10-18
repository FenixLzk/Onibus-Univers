export const cadastrarUniversitario = (req, res) => {
  try {
    const { cpf, telefone, email } = req.body;
    const comprovante = req.file;

    // verifica se enviou tudo
    if (!cpf || !telefone || !email || !comprovante) {
      return res.status(400).json({ message: "Preencha todos os campos e envie o PDF!" });
    }

    // Aqui no futuro eu salvo no bd
    console.log("Novo universitário cadastrado:", cpf, email);

    return res.status(200).json({
      message: "Cadastro recebido com sucesso!",
      data: {
        cpf,
        telefone,
        email,
        comprovante: comprovante.filename
      }
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
