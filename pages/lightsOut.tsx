import {NextPage} from "next";
import LightGrid from "../components/lights_out/lightGrid";
import styles from "../components/lights_out/lightgrid.module.css"

const LightsOut: NextPage = () => {
    return (
        <div className={styles.lightsApp}>
            <LightGrid></LightGrid>
        </div>)
}

export default LightsOut
