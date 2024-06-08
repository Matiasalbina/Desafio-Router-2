import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PokemonForm = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const data = await response.json();
        setPokemonList(data.results.map((pokemon) => pokemon.name));
      } catch (error) {
        console.error("Error Pokemon api:", error);
      }
    };
    fetchPokemon();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  const handleSelectChange = (e) => setSelectedPokemon(e.target.value);

  return (
    <Form onSubmit={handleFormSubmit} className="d-flex flex-column align-items-center w-100">
      <Form.Group controlId="pokemonSelect" className="w-25 mb-4">
        <Form.Control as="select" value={selectedPokemon} onChange={handleSelectChange}>
          <option value="" disabled>
            Pokemones
          </option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="dark" type="submit">
        Ver detalles
      </Button>
    </Form>
  );
};

export default PokemonForm;
