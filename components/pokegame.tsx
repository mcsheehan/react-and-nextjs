import React from "react";
import {Pokemon} from "../pages/pokedex";
import {Pokecard} from "./pokecard";
import styles from './pokegame.module.css'

interface PokeGameProps {
    hand1: Array<Pokemon>
    hand2: Array<Pokemon>
}

export class Pokegame extends React.Component<PokeGameProps> {

    addExperience(pokemons: Array<Pokemon>): number {
        let experience = 0

        pokemons.forEach((pokemon) => {
                experience += pokemon.base_experience
            }
        )
        return experience
    }

    render() {
        const start = this.props.hand1;
        const end = this.props.hand2

        const hand1 = this.addExperience(start)
        const hand2 = this.addExperience(end)

        let key = 0
        const cards1 = start.map((pokemon) => {
            key += 1
            return <Pokecard pokemon={pokemon} key={key}/>
        })
        const cards2 = end.map((pokemon) => {
            key +=1
            return <Pokecard pokemon={pokemon} key={key}/>
        })

        let winner = ""
        if (hand1 > hand2) {
            winner = "Hand1"
        } else {
            winner = "Hand2"
        }

        const message = `The winner is ${winner}`

        return (<div>
            <div className={styles.pokegameHeader}><h1>{message}</h1></div>

            <h2 className={styles.pokegameHeader}>Hand 1:</h2>
            <div className={styles.pokegame}> {cards1} </div>
            <h2 className={styles.scores}> Score: {hand1} </h2>

            <h2 className={styles.pokegameHeader}>Hand 2:</h2>
            <div className={styles.pokegame}> {cards2} </div>
            <h2 className={styles.scores}> Score: {hand2}</h2>
        </div>);
    }
}
