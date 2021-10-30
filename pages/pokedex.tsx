import {NextPage} from "next";
import styles from './pokedex.module.css'
import {Pokegame} from "../components/pokegame";
import {useState} from "react";

export interface Pokemon {
    id: number
    name: string
    type: string
    base_experience: number
}

interface Props{
    deck1: Array<Pokemon>
    deck2: Array<Pokemon>
}

function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createDeck(pokemons: Array<Pokemon>): Array<Pokemon> {
    let deck: Array<Pokemon> = new Array<Pokemon>()

    for (let i = 0; i < 4; i++) {
        const integer = randomInteger(0, pokemons.length - 1)
        if (pokemons.at(integer) == null) {
            console.log("fail")
        }
        deck.push(pokemons.at(integer) as Pokemon)
    }
    return deck
}

const Pokedex: NextPage<Props> = (props) => {
    const [getPokemon, setPokemon] = useState<Props>(
        {
            deck1: pokemon.slice(0,4),
            deck2: pokemon.slice(0,4)
        });

    return(<div>
        <button onClick={() => setPokemon(        {
            deck1: createDeck(pokemon),
            deck2: createDeck(pokemon)
        })}>Regenerate hands</button>
        <div className={styles.pokedex}>
            <Pokegame hand1={getPokemon.deck1} hand2={getPokemon.deck2}/>
        </div>
        </div>
    )
};

const pokemon: Array<Pokemon> = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

Pokedex.defaultProps = {
    deck1 : createDeck(pokemon),
    deck2 : createDeck(pokemon)
}

export default Pokedex;