import axios from "axios"

import { useEffect } from "react"
import { useState } from "react";

import Card from "./Card";
import Score from "./Score"

const GameBoard = () => {
    const [Pokemons, setPokemons] = useState([]);
    const [BestScore, setBestScore] = useState(0);
    const [CurrentScore, setCurrentScore] = useState(0);

    const sendLostStatus = (status) => {
       if(status === true) {
            setPokemons((prevPokemons) => shuffleArray([...prevPokemons]));
            setCurrentScore(0);
            if (CurrentScore > BestScore) {
                setBestScore(CurrentScore);
            }
       } else {
            setPokemons((prevPokemons) => shuffleArray([...prevPokemons]));
            setCurrentScore(CurrentScore + 1);
            
       }
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    useEffect(() => {
        const fetchPokemons = async () => {
          try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
    
            const pokemonUrls = response.data.results.map(pokemon => pokemon.url.replace('pokemon', 'pokemon-form'));

            const pokemonPromises = pokemonUrls.map(url => axios.get(url));
    
            const pokemonData = await Promise.all(pokemonPromises);

            const pokemonList = pokemonData.map(data => ({
              name: data.data.name,
              sprite: data.data.sprites.front_default
            }));
    
            setPokemons(pokemonList);
          } catch (error) {
            console.error("Error fetching Pokémon data:", error);
          }
        };
    
        fetchPokemons();
      }, []);

    return (
    <>
        <Score curr={CurrentScore} best={BestScore}></Score>
        <div className='flex flex-wrap text-center items-center justify-center max-w-6xl m-auto gap-5'>
                {Pokemons.map((pokemon) => (
                    <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} status={sendLostStatus}/>
                ))}
        </div>
    </>
    )
}

export default GameBoard