import {NextPage} from "next";
import Dice from "../components/dice";
import style from "./diceRoller.module.css"
import {useState} from "react";

interface DiceValues{
    dice1: number
    dice2: number
    rolling: boolean
}

const DiceRoller: NextPage = () => {

    const [useDice, setDice] = useState<DiceValues>({dice1: 1, dice2: 1, rolling: false})

    const rollDice = () => {
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        const rolling = true
        setDice({dice1: randomNumber1, dice2: randomNumber2, rolling: true})
        setTimeout(() => {
            setDice((current) => ({ ...current, rolling: false }))
        }, 1000)
    }

    const diceText = useDice.rolling ? "Rolling" : "Roll Dice"
    return (
        <div className={style.diceDivider}>
            <Dice diceValue={useDice.dice1}/>
            <Dice diceValue={useDice.dice2}/>
            <br/>
            <button className={style.rollButton} onClick={rollDice} disabled={useDice.rolling}>
                {diceText}
            </button>
        </div>)
}


export default DiceRoller