import React from 'react'
import styles from './Repo.module.css'

export default function Repo({ selectedRepo }) {
  return (
    <>
      <div className={styles.repo_container}>
        <div className={styles.repo_info_container}>
          <div className={styles.user_info}>
            <div className={styles.owner}>{selectedRepo.owner.login}</div>
            <div className={styles.url}>{selectedRepo.owner.url}</div>
          </div>
          <div className={styles.avatarWrapper}>
            <img
              src={selectedRepo.owner.avatar_url}
              className={styles.avatar_url}
              alt="Owner Avatar"
            />
            <div>
              <strong>{selectedRepo.owner.login}</strong>
              <p style={{ margin: '8px 0' }}>{selectedRepo.owner.url}</p>
            </div>
          </div>
        </div>
        <div className={styles.repo_name}>{selectedRepo.name}</div>
        <div className={styles.repo_language}>{selectedRepo.language}</div>
        <div className={styles.repo_desc}>{selectedRepo.description}</div>
        <div
          className={styles.repo_start}
        >{`Star : ${selectedRepo.stargazers_count}`}</div>
        <div className={styles.repo_start}>{`Created At : ${
          selectedRepo.created_at.split('T')[0]
        } ${selectedRepo.created_at.split('T')[1]}`}</div>
        <div className={styles.repo_start}>{`Updated At : ${
          selectedRepo.updated_at.split('T')[0]
        } ${selectedRepo.updated_at.split('T')[1]}`}</div>
        <div
          className={styles.repo_start}
        >{`Github url : ${selectedRepo.html_url}`}</div>
      </div>
    </>
  )
}
