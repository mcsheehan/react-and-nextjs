import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Link href="/pokedex">
            <a>Pokedex</a>
        </Link>
        <Link href="/slots">
            <a>Slots</a>
        </Link>
    </div>
  )
}

export default Home
