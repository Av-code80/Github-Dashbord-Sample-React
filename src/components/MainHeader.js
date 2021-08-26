import React from 'react'
// This project is based on ESLint tool

import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import styles from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <div>
      <header className={styles['main-header']}>
        <IconContext.Provider value={{ color: '#ffffff' }}>
          <FaBars className={styles.faBars} />
        </IconContext.Provider>
        <h1>Github Dashbord Sample</h1>
      </header>
    </div>
  )
}

export default MainHeader
