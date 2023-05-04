import React from "react";

export const cepHook = () => {
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
  searchCep(cep);
  return { cepData };
};
