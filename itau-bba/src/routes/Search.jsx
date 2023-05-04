import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/ibusiness?" + searchParams;
  const { data: polos } = useFetch(url);
  return (
    <div className="home-container">
      <div className="title-search-container">
        <div className="title-container">
          <h1 className="title"> Resultado da pesquisa</h1>
        </div>
        <div className="search-bar">
          <button className="back">
            <Link className="link" to={`/`}>
              Voltar
            </Link>
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="ibusiness-table">
          <thead className="table-header">
            <tr>
              <th className="grid-row">Nome</th>
              <th className="grid-row">Business</th>
              <th className="grid-row">Valuation</th>
              <th className="grid-row">Status</th>
              <th className="grid-row">Ação</th>
            </tr>
          </thead>
          <tbody>
            {polos &&
              polos?.map((polos) => (
                <tr key={polos.id}>
                  <th className="grid-row">{polos.name}</th>
                  <th className="grid-row">{polos.business}</th>
                  <th className="grid-row">{polos.valuation}</th>
                  <th className="grid-row">
                    <span
                      className={`status ${polos.active ? "-green" : "-red"}`}
                    ></span>
                  </th>
                  <th>
                    <Link to={`/polo/${polos.id}`}>Aqui</Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
