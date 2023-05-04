import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";
import { IMaskInput } from "react-imask";

import "./Polo.scss";
const Polo = () => {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  async function searchCep(cep) {
    let cepUrl = `viacep.com.br/ws/${cep}/json/`;
    let req = await fetch(cepUrl);
    let res = req.json();
    setLogradouro(res.logradouro);
    setBairro(res.bairro);
    setCidade(res.cidade);
    setUf(res.uf);
  }
  const { id } = useParams();
  const url = "http://localhost:3000/ibusiness/" + id;
  const { data: polo } = useFetch(url);
  if (!polo) return <p>carregando...</p>;
  return (
    <div className="polo-body">
      <h1 className="title">Polo {polo.name}</h1>
      <p className="subtitle">
        Polo {polo.name} #{polo.id}: {polo.business}
      </p>
      <form className="form-polo">
        <h4 className="form-title">Detalhes do Endereço</h4>
        <div className="input-container">
          <label className="cep-label" htmlFor="cep">
            <span>CEP</span>
            <IMaskInput
              className="cep-input"
              type="text"
              required
              name="cep"
              mask="00000-000"
              placeholder="00000-000"
              value={`${polo.cep}`}
              onChange={(text) => {
                if (text.lenght == 8) {
                  searchCep(text);
                }
              }}
            />
          </label>
          <label htmlFor="street" className="street-label">
            <span>Nome da Rua</span>

            <input
              className="street-input"
              type="text"
              name="street"
              required
              value={logradouro || ""}
              placeholder="Nome da rua"
            />
          </label>
          <label htmlFor="bairro" className="bairro-label">
            <span>Bairro</span>

            <input
              className="bairro-input"
              type="text"
              name="bairro"
              required
              placeholder="Bairro"
              value={bairro}
            />
          </label>
          <label htmlFor="cidade" className="city-label">
            <span>Cidade</span>

            <input
              className="city-input"
              type="text"
              name="cidade"
              required
              placeholder="Cidade"
              value={cidade}
            />
          </label>
          <label htmlFor="estado" className="country-label">
            <span>Estado</span>

            <input
              className="country-input"
              type="text"
              name="estado"
              required
              placeholder="Estado"
              mask="000.000-00"
              value={uf}
            />
          </label>
        </div>
        <h4 className="form-title">Detalhes da Empresa</h4>
        <div className="input-container">
          <label>
            <span>Nome</span>
            <input type="text" value={polo.name} />
          </label>
          <label>
            <span>Business</span>
            <input type="text" value={polo.business} />
          </label>
          <label>
            <span>Valuation</span>
            <IMaskInput
              type="text"
              required
              name="valuation"
              mask="R$ 00.000.000.000,00"
              placeholder="00000-000"
              value={`${polo.valuation}`}
            />
          </label>
          <label>
            <span>CNPJ</span>
            <IMaskInput
              required
              name="cnpj"
              mask="00.000.000/0000-00"
              value={`${polo.cnpj}`}
            />
          </label>
          <label>
            <span>Ativo?</span>
            <select name="" id="" value={polo.active ? true : false}>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>
        </div>
        <div className="form-buttons">
          <button className="back">
            <Link className="link" to={`/`}>
              Voltar
            </Link>
          </button>
          <input className="submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Polo;
