import React, { useEffect, useState } from 'react'
import styles from './Repos.module.css'
import { FaSave } from 'react-icons/fa'

export default function Repos({ username, userRepos, onRepoSelect }) {
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (avatarUrl) return
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error('user avatar fetch failed')
        }
      })
      .then((data) => {
        setAvatarUrl(data.avatar_url)
      })
      .catch((err) => console.log('Error: ' + err))
  }, [username, avatarUrl])

  return (
    <>
      <div className={styles.reposWrapper}>
        <span>
          <div className={styles.avatarWrapper}>
            <div className={styles.imageContainer}>
              {avatarUrl && (
                <img className={styles.image} alt={username} src={avatarUrl} />
              )}
            </div>
            <div className={styles.usernameContainer}>{username}</div>
          </div>
        </span>
        {userRepos.map((repo) => (
          <div
            className={styles.item}
            key={repo.id}
            onClick={() => onRepoSelect(repo)}
          >
            <li className={styles.item}>
              <div className={styles.icon}>
                <FaSave />
              </div>
              <div className={styles.username}>{repo.name}</div>
            </li>
          </div>
        ))}
      </div>
    </>
  )
}
