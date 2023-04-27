import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Polo = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/ibusiness/" + id;
  const { data: polo } = useFetch(url);
  if (!polo) return <p>carregando...</p>;
  return (
    <div>
      <h1>Polo {polo.name}</h1>
      <p>
        Polo {polo.name} #{polo.id}: {polo.business}
      </p>
      <form>
        <div>
          <input type="CEP" />
          nome da rua bairro cidade estado
        </div>
      </form>
    </div>
  );
};

export default Polo;
