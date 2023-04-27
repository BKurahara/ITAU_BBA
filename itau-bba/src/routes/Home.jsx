import React from "react";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.scss";

const url = "http://localhost:3000/ibusiness";

const Home = () => {
  const [ibusiness, setIbusiness] = useState([]);

  const { data: polos } = useFetch(url);

  return (
    <div className="home-container">
      <div className="title-search-container">
        <div className="title-container">
          <h1 className="title"> Polos Itaú</h1>
          <h2 className="second-title">
            Confira abaixo alguns dos principais polos do Itaú
          </h2>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar..."
          />
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

export default Home;
