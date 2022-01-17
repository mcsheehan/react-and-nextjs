import { MouseEventHandler } from "react"
import styles from "./lightgrid.module.css"

interface LightState {
    lightOn: boolean
    clickHandler: MouseEventHandler<HTMLButtonElement>
}

export const Light: (props: LightState) => JSX.Element = (props: LightState) => {
    const lightOn = props.lightOn

    let style = [styles.light, styles.lightOff].join(" ")

    if (lightOn){
        style = [styles.light, styles.lightOn].join(" ")
    }

    const text = lightOn ? "on" : "off"
    return (<button className={style} onClick={props.clickHandler}>{text}</button>)
}
