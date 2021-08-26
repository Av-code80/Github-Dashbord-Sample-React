import React from 'react'

import { IoChevronBack } from 'react-icons/io5'
import { FaRegCircle } from 'react-icons/fa'
import { FaRegSquare } from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = ({ onBackClick, onHomeClick }) => {
  return (
    <footer className={styles['main-footer']}>
      <div className={styles['footer-icons']}>
        <button onClick={onBackClick} className={styles.footerButton}>
          <IoChevronBack className={styles.backIcon} />
        </button>
        <button onClick={onHomeClick} className={styles.footerButton}>
          <FaRegCircle className={styles.icon} />
        </button>
        <button className={`${styles.footerButton} ${styles.deactive}`}>
          <FaRegSquare className={styles.icon} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
