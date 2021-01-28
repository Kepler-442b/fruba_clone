import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>       {/* you can customize each page's info here such as title, name icon etc, good for SEO*/}
        <title>Main Page</title>
        <meta name='fruba' content='anime' />
      </Head>
      <h1>キャラクターページ</h1>
    </div>
  )
}
