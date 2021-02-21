import Head from 'next/head'
import homeStyle from "../styles/Home.module.css"
// import { useSpring, animated } from "react-spring"
import React, { useEffect, useState } from 'react';

export default function Home() {

  return (
    <div>
      <Head>       {/* you can customize each page's info here such as title, name icon etc, good for SEO*/}
        <title>Main Page</title>
        <meta name='fruba' content='anime' />
      </Head>
      <div className={`${homeStyle.main_img_wrapper}`}>
        <img
          alt="main_image"
          className={`${homeStyle.main_img}`}
          src="/assets/main_page/ph_mainvisual_akito.jpg"
        />
      </div>
      <div className={`${homeStyle.main_title_wrapper}`}>
        <div className={`${homeStyle.title_container}`}>
          <div className={`${homeStyle.text_curtain}`} />
          <img
            className={`${homeStyle.title_img}`}
            alt="title"
            src="/assets/main_page/txt_mainvisual_top.svg"
          />
        </div>
        <div className={`${homeStyle.sub_title_wrapper}`}>
          <div className={`${homeStyle.sub_title_1_container}`}>
            <img
              alt="sub_title_1"
              src="/assets/main_page/txt_maincatch_01.svg"
            />
            <div className={`${homeStyle.text_curtain_sub_1}`} />
          </div>
          <div className={`${homeStyle.sub_title_2_container}`}>
            <img
              alt="sub_title_2"
              src="/assets/main_page/txt_maincatch_02.svg"
            />
            <div className={`${homeStyle.text_curtain_sub_2}`} />
          </div>
        </div>
      </div>
    </div>
  )
}