import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className={styles.containercentre}>
            <div className={styles.container}>
                <Link href="/pokedex">
                    <a>Pokedex</a>
                </Link>
                <Link href="/slots">
                    <a>Slot machine</a>
                </Link>
                <Link href="/redditPage">
                    <a>RedditPage</a>
                </Link>
            </div>
        </div>
    )
}

export default Home
