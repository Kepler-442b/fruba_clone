import Head from 'next/head'
import homeStyle from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>       {/* you can customize each page's info here such as title, name icon etc, good for SEO*/}
        <title>Main Page</title>
        <meta name='fruba' content='anime' />
      </Head>
      <div className={
        `${homeStyle.main_img}`
      }>
        <img
          alt="title"
          className={`${homeStyle.img}`}
          src="/assets/main_page/ph_mainvisual.jpg"
        />
      </div>
      <div className={`${homeStyle.main_text_wrapper}`}>
        <div className={`${homeStyle.txt_mainvisual_top}`}>
          <img
            alt="title"
            src="/assets/main_page/txt_mainvisual_top.svg"
          />
        </div>
        <div>
          <img
            alt="title"
            className={`${homeStyle.img_text_01}`}
            src="/assets/main_page/txt_maincatch_01.svg"
          />
        </div>
        <div>
          <img
            alt="title"
            className={`${homeStyle.img_text_02}`}
            src="/assets/main_page/txt_maincatch_02.svg"
          />
        </div>
      </div>
    </div>
  )
}
