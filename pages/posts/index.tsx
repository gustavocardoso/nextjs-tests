import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

type Post = {
  id: number
  title: string
  body: string
}

type Posts = {
  posts: [Post]
}

export default function Posts({ posts }: Posts) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Posts!</a>
        </h1>

        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
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
