import React from "react";
import {Pokemon} from "../pages/pokedex";
import styles from './pokecard.module.css'
import Image from "next/image";

type PokecardProps = {
    pokemon: Pokemon
}

function getFancyImageUrl(id: number): string {
    const fancyId = `00${id}`.slice(-3)
    const fancyImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fancyId}.png`
    return fancyImage
}

export class Pokecard extends React.Component<PokecardProps> {

    render() {
        const pokemon: Pokemon = this.props.pokemon
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        const fancyImage = getFancyImageUrl(pokemon.id)

        return (<div className={[styles.pokecard, styles.animate].join(" ")}>
            <h1 className={styles.pokecardTitle}>{pokemon.name}</h1>
            <Image className={styles.pokecardImage} src={fancyImage} width="150px" height="150px"/>
            <img className={styles.pokecardImage} src={image} />
            <div className={styles.pokecardData}>
                Type: <span className={[styles.red, styles.bold].join(" ")}>{pokemon.type}</span>
            </div>
            <div className={styles.pokecardData}>
                Exp: <span className={styles.othercolor}>{pokemon.base_experience}</span>
            </div>
        </div>)
    }
}


// class Pokecard extends Component {
//     render() {
//         let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
//         return (
//             <div className="Pokecard">
//                 <h1 className="Pokecard-title">{this.props.name}</h1>
//                 <div className="Pokecard-image">
//                     <img src={imgSrc} alt={this.props.name} />
//                 </div>
//                 <div className="Pokecard-data">Type: {this.props.type}</div>
//                 <div className="Pokecard-data">EXP: {this.props.exp}</div>
//             </div>
//         );
//     }
// }