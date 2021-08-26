import React, { useRef, useState } from 'react'
import styles from './Search.module.css'

export default function Search({ onSearchComplete }) {
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef()  //useRef hook allows to directly create a reference to the DOM element

  const handleFormSubmit = (e) => {   // handle logic form submit
    e.preventDefault()    
    setIsLoading(true)
    const username = inputRef.current.value
    fetch(`https://api.github.com/users/${username}/repos`) 
      .then((res) => { 
        if (res.status === 200) {
          return res.json()
        } else {
          return []
        }
      })
      .then((data) => {
        onSearchComplete(username, data)
      })
      .catch((err) => console.log('err' + err))
      .finally(() => {        // run the code no matter what the previous outcomes
        setIsLoading(false)
      })
  }

  return (
    <div className={styles.form}>
      <form className={styles.control} onSubmit={handleFormSubmit}>
        <input ref={inputRef} placeholder="Username" />
        <div className={styles.action}>
          <button type="submit">{isLoading ? 'Loading...' : 'Search'}</button>
        </div>
      </form>
    </div>
  )
}
