import './style.css'

function Home() {
  return (
    <div className="container">
      <form className="card" noValidate>
        <h1>Cadastro Universitário</h1>
        <p className="subtitle">Digite suas informações abaixo</p>

        <label className="field">
          <span className="label-text">CPF</span>
          <input
            name="cpf"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength="11"
            placeholder="Digite seu CPF"
            required
          />
        </label>

        <label className="field file-field">
          <span className="label-text">Comprovante de Matrícula (PDF)</span>
          <input
            name="comprovante"
            type="file"
            accept="application/pdf"
            required
          />
          <span className="file-hint">Envie um PDF</span>
        </label>

        <label className="field">
          <span className="label-text">Telefone</span>
          <input
            name="telefone"
            type="tel"
            inputMode="tel"
            placeholder="(00) 0 0000-0000"
            required
          />
        </label>

        <label className="field">
          <span className="label-text">Email</span>
          <input
            name="email"
            type="email"
            placeholder="seu@exemplo.com"
            required
          />
        </label>

        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Home
