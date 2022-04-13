import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
import { useState } from 'react';
// @ts-ignore
const MfExample = dynamic(() => import('MfExample/MfExample'), {
  ssr: false,
  //loading: () => <p>Loading...</p>
});

const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className={styles.container}>
      <h2>Module Federation Example</h2>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <MfExample />}
    </div>
  )
}

export default Home
