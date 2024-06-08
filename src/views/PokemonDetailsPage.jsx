import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";

const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error("Pokemon no encontrado");
        }
        const data = await response.json();
        setPokemonData(data);
        setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`);
      } catch (error) {
        console.error("Error Pokemon details:", error);
        navigate("/pokemones");
      }
    };
    fetchPokemonData();
  }, [name, navigate]);

  const handleBackClick = () => {
    navigate("/pokemones");
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {pokemonData && (
        <Card className="pokemon-card mt-4">
          <Row>
            <Col md={5} className="pokemon-image-container">
              <Card.Img
                variant="top"
                src={pokemonImage}
                className="pokemon-image"
              />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>{pokemonData.name}</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                {pokemonData.stats.map(({ base_stat, stat: { name } }) => (
                  <ListGroup.Item key={name}>
                    <strong>{name.replace(/(^|\s)\S/g, letter => letter.toUpperCase())}:</strong> {base_stat}
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <strong>Types:</strong> {pokemonData.types.map(({ type }) => type.name).join(", ")}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      )}
      <Button variant="dark" onClick={handleBackClick} className="mt-4">
        Volver atrás
      </Button>
    </div>
  );
};

export default PokemonDetails;
