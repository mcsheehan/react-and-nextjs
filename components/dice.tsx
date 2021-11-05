import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo} from "@fortawesome/free-solid-svg-icons";
import style from "./dice.module.css"

interface DiceProps{
    diceValue: number
}

const Dice = (props: DiceProps) => {
    const diceValue = props.diceValue

    const diceIconMap = new Map<number, any>([
        [1, <FontAwesomeIcon className={[style.dice, style.shaking].join(" ")} icon={faDiceOne} size={"10x"}/>],
        [2, <FontAwesomeIcon className={style.dice} icon={faDiceTwo} size={"10x"}/>],
        [3, <FontAwesomeIcon className={style.dice} icon={faDiceThree} size={"10x"}/>],
        [4, <FontAwesomeIcon className={style.dice} icon={faDiceFour} size={"10x"}/>],
        [5, <FontAwesomeIcon className={style.dice} icon={faDiceFive} size={"10x"}/>],
        [6, <FontAwesomeIcon className={style.dice} icon={faDiceSix} size={"10x"}/>]
    ])

    const answer = diceIconMap.get(diceValue)

    return (<>{answer}</>)
}

export default Dice