import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare, faDiceOne, faDiceThree} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faReddit} from '@fortawesome/free-brands-svg-icons'
import style from "./dice.module.css";
const Navbar = (props: any) => {
    return <div className={styles.topnav}>
        <div className={styles.container}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/pokedex">
                <a>Pokemon game</a>
            </Link>
            <Link href="/slots">
                <a>Slot machine</a>
            </Link>
            <Link href="/diceRoller">
                <a>Dice roller &nbsp;
                    <FontAwesomeIcon icon={faDiceThree} size={"lg"}/>
                </a>

            </Link>
            <Link href="/redditPage">
                <a>
                    Reddit Browser &nbsp;
                    <FontAwesomeIcon icon={faReddit} size={"lg"}/>
                </a>
            </Link>
            <Link href="/lightsOut">
                Lights out
            </Link>
            <Link href="https://github.com/mcsheehan">
                <a>
                    Github &nbsp;
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </Link>
        </div>
    </div>
}

export default Navbar