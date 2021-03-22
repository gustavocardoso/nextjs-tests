import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

import styles from '../../styles/Home.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const posts = await res.json()

  const paths = posts.map(post => `/posts/${post.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

type Post = {
  post: {
    id: number
    title: string
    body: string
  }
}

export default function Post({ post }: Post) {
  const router = useRouter()
  // const { id } = router.query

  console.log(router.query)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Post {post.id}</a>
        </h1>

        <section className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>

        <Link href='/posts'>
          <a>Back to posts page</a>
        </Link>
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
