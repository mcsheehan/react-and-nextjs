import styles from "./lightgrid.module.css"
import {Light} from "./light";
import {useEffect, useState} from "react";


class LightMatrix {

    createEmptyMatrix(width: number, height: number): boolean[][] {
        const matrix = []

        for (let j = 0; j < height; j++) {
            const widthVector = new Array(width).fill(false)
            matrix.push(widthVector)
        }

        return matrix
    }

    toggleSurroundingCells(i: number, j: number) {
        this.matrix[i][j] = !this.matrix[i][j]

        if (i + 1 < this.width) {
            this.matrix[i+1][j] = !this.matrix[i+1][j]
        }
        if (i - 1 >= 0) {
            this.matrix[i-1][j] = !this.matrix[i-1][j]
        }
        if (j + 1 < this.height) {
            this.matrix[i][j+1] = !this.matrix[i][j+1]
        }
        if (j - 1 >= 0) {
            this.matrix[i][j-1] = !this.matrix[i][j-1]
        }
    }

    randomiseMatrix(percentage: number): void {
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

    toLights(callbackWithClicked: ((arg0: number, arg1: number) => void)) {
        const rows = []

        for (let j = 0; j < this.height; j++) {
            const row = []
            for (let i = 0; i < this.width; i++) {
                const lightOn = this.matrix[i][j]
                const clickHandler = () => {
                    callbackWithClicked(i, j)
                    console.log(`was clicked ${i} ${j}`)
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

    const lightMatrix = new LightMatrix(width, height)
    const [getter, setter] = useState<LightMatrix>(lightMatrix)

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

    const callbackWithClicked = (i: number, j: number) => {
        console.log(`setting ${i} ${j}`)
        // const matrix = new LightMatrix(width, height)
        lightMatrix.toggleSurroundingCells(i, j)
        setter(lightMatrix)
    }

    return (<div className={styles.lightGrid}>
        <button className={styles.randomise} onClick={randomise}>Randomise everything!!!</button>
        {getter.toLights(callbackWithClicked)}
    </div>)
}

export default LightGrid
