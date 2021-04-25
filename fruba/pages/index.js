import Head from 'next/head'
import styles from "../styles/Home.module.css"
import React from 'react';

export default function Home() {

  return (
    <>
      <Head>       {/* you can customize each page's info here such as title, name icon etc, good for SEO*/}
        <title>Main Page</title>
        <meta name='fruba' content='anime' />
      </Head>
      <section className={styles.image_section}>
        <div className={styles.img_wrapper}>
          <div className={styles.img_container}>
            <img
              alt="main_image"
              className={styles.main_img}
              src="/assets/main_page/ph_mainvisual_akito.jpg"
            />
          </div>
        </div>

        <div className={styles.main_title_wrapper}>
          <div className={styles.main_title_curtain} />
          <div className={styles.main_title_container}>
            <img
              className={styles.title_img}
              alt="title"
              src="/assets/main_page/txt_mainvisual_top.svg"
            />
          </div>
        </div>
        <div className={styles.sub_title_wrapper}>
          <div className={styles.sub_title_1_container}>
            <img
              alt="sub_title_1"
              src="/assets/main_page/txt_maincatch_01.svg"
            />
            {/* <div className={styles.text_curtain_sub_1} /> */}
          </div>
          <div className={styles.sub_title_2_container}>
            <img
              alt="sub_title_2"
              src="/assets/main_page/txt_maincatch_02.svg"
            />
            {/* <div className={styles.text_curtain_sub_2} /> */}
          </div>
        </div>
      </section>
    </>
  )
}