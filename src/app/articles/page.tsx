import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import styles from "../../app/page.module.css";

const ArticleList = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>How to Buy Guides</h1>
      </main>
    </>
  )
}

export default ArticleList