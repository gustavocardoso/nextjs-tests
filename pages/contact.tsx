import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users
    }
  }
}

type User = {
  id: number
  name: string
  email: string
}

type Users = {
  users: [User]
}

export default function Contact({ users }: Users) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Contact!</a>
        </h1>

        <h2>Keep in touch with our team:</h2>

        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email.toLowerCase()}
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
