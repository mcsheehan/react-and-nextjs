import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.containercentre}>
            <div className={styles.container}>
                Hello I&apos;m Mark Sheehan and welcome to my site <br/>
                I have created a few web applications, which you are free to play with
                and you can see the code for this website on my github.
            </div>
        </div>
    )
}

export default Home
