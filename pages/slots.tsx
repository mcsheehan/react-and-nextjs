import {NextPage} from "next";
import {Fruits, SlotLine} from "../components/slotLine";

const Slots: NextPage = () => {
    const a = Fruits.cherry
    const b = Fruits.cherry
    const c = Fruits.apple

    return (
        <div>
            <SlotLine value1={a} value2={b} value3={c}></SlotLine>
            <SlotLine value1={c} value2={c} value3={c}></SlotLine>
            <SlotLine value1={Fruits.melon} value2={b} value3={c}></SlotLine>
        </div>
    )
}

export default Slots
