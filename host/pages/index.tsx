import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';


const Home: NextPage = () => {
  const { push } = useRouter()
  const navigateToMfExample = () => {
    push('/mf-example')
  }
  return (
    <div className={styles.container}>
      <h2>Module Federation Example</h2>
      <button onClick={() => navigateToMfExample()}>Navigate to Module Federation With Routing Example</button>
    </div>
  )
}

export default Home
