import React from "react";
import Farm from "jest-worker/build/Farm";

const cherry = "🍒"
const apple = "🍎"
const orange = "🍊"

export enum Fruits {
     cherry = "🍒",
     apple = "🍎",
     melon = "🍉"
}

export interface SlotProps{
    value1 : Fruits
    value2 : Fruits
    value3 : Fruits
}

export class SlotLine extends React.Component<SlotProps, any>{
    render() {
        const {value1, value2, value3} = this.props

        let success = (value1 === value2) && (value2 === value3)

        return (<div>
            {value1} {value2} {value3}
            {success ? "Hooray you win" : "Better luck next time"}
        </div>);
    }
}