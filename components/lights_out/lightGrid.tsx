import styles from "./lightgrid.module.css"
import {Light} from "./light";
import {MouseEventHandler, useEffect, useState} from "react";


class LightMatrix {

    createEmptyMatrix(width: number, height: number): boolean[][] {
        const matrix = []

        for (let j = 0; j < height; j++) {
            const widthVector = new Array(width).fill(false)
            matrix.push(widthVector)
        }

        return matrix
    }

    randomiseMatrix(percentage: number): void{
        for (let j = 0; j < this.height; j++) {
            for (let i = 0; i < this.width; i++) {
                const random = (Math.random() * 100) < percentage
                this.matrix[i][j] = random
            }
        }
    }

    matrix: boolean[][]
    width: number
    height: number

    constructor(width: number, height: number) {
        this.matrix = this.createEmptyMatrix(width, height)
        this.width = width
        this.height = height
    }

    toLights() {
        const rows = []

        for (let j = 0; j < this.height; j++) {
            const row = []
            for (let i = 0; i < this.width; i++) {
                const lightOn = this.matrix[i][j]
                const clickHandler = () => {
                    console.log("was clicked")
                }

                const props = {lightOn, clickHandler}
                row.push(Light(props))
            }
            rows.push(row)
        }

        const builtTable = rows.map((rowItem, index) => {
            return (
                <tr key={index}>
                    {rowItem.map((item, index) => {
                        return (<td key={index}>{item}</td>)
                    })}
                </tr>)
        })

        return (
            <table>
                <tbody>

                {builtTable}

                </tbody>
            </table>
        )
    }
}


const LightGrid = () => {

    const height = 8
    const width = 8
    const [getter, setter] = useState<LightMatrix>(new LightMatrix(width, height))

    useEffect(() => {
        const matrix = new LightMatrix(width, height)
        matrix.randomiseMatrix(50)
        setter(matrix)
    }, [])

    const randomise = () => {
        const matrix = new LightMatrix(width, height)
        matrix.randomiseMatrix(50)
        setter(matrix)
    }

    return (<div className={styles.lightGrid}>
        <button className={styles.randomise} onClick={randomise}>Randomise everything!!!</button>
        {getter.toLights()}
    </div>)
}

export default LightGrid
