import React, { useEffect, useState } from "react";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import "./styles.css";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  const pegarListaDePokemons = async () => {
    setIsLoading(true);
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }

    setListaPokemons(listaTemporaria);
    setIsLoading(false); // Define isLoading como false após buscar os dados
  };

  useEffect(() => {
    pegarListaDePokemons();
  }, [referenciasPokemons]);

  return (
    <div className="pokemon-container">
      {listaPokemons.map((pokemon) => (
        <CardPokemon
          key={pokemon.id} // Adicione uma chave única para cada CardPokemon
          nome={pokemon.name}
          foto={pokemon.sprites.front_default}
          id={pokemon.id}
          url={pokemon.forms[0].url}
        />
      ))}
      {isLoading && <LinearProgress className="linear-progress" />}{" "}
      {/* Renderiza o componente LinearProgress se isLoading for true */}
    </div>
  );
};

export default PokemonPage;
