import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
import { characters } from "../constants"
// import { Button } from "react-bootstrap"
import styles from "../styles/CharacterIntroSwiper.module.css"
import SwitchButton from './SwitchButton';

const CharacterIntroSwiper = () => {

    // initialize swiper
    SwiperCore.use([Navigation, Pagination, Thumbs])

    const [isSwitchedToAnimal, setIsSwitchedToAnimal] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const onClickSwitch = () => {
        if (!isSwitchedToAnimal) {
            setIsSwitchedToAnimal(true)
        } else {
            setIsSwitchedToAnimal(false)
        }
    }

    const slides = []
    characters.map((char) => {
        slides.push(
            <SwiperSlide
                key={`slide_for_${char.name}`}
                tag="li"
                className={styles.swiper_background}
                style={{ backgroundImage: `url(/assets/char_background/${char.name}_ph_bg.jpg)` }}
            >
                <h2 className="txt-title">
                    <picture>
                        <source media="(min-width:768px)" srcSet={`/assets/char_title/${char.name}_ttl_${char.name}.svg`} />
                        <img className={styles.title_text_img} src={`/assets/char_title/${char.name}_ttl_${char.name}.svg`} />
                    </picture>
                </h2>
                <div className="row">
                    <div className={`${styles.character_info}`}>
                        <img className={styles.name} src={`/assets/char_names/${char.name}_txt_name.svg`} />
                        <div className={styles.introduction}> 反かどだみ退隊うド出慣アスイ横別ず泉印ラが面放ロカ野37載ヲスヤ是授ぱてあぞ号見レアヘ保属ハ連芸時ー事策送四登こ。止ょ能27重はし地集昨ごド梨2報ムミセ浸供ぎれざぐ国惑球クタホネ載属合て児属発ニヱ提漢まがスで示16統憂昌65治ロユミチ野帯了夫ほもゃめ。</div>
                        <img className={styles.face} src={`/assets/char_main_faces/${char.name}_ph_face.jpg`} />
                    </div>
                    <div>
                        <div className={styles.switch_button_wrapper}>
                            <SwitchButton
                                onClickHandler={onClickSwitch}
                                isSwitchedToAnimal={isSwitchedToAnimal}
                                isJyuniji={char.isJyuniji}
                                char={char.name}
                            />
                        </div>
                        <div style={{height:"990px"}}>
                        <img
                            className={char.isJyuniji ? `${styles.full_body_img}` : `${styles.full_body_img_non_jyuniji}`}
                            src={isSwitchedToAnimal
                                ? `/assets/char_animals/${char.name}_ph_animal.jpg`
                                : `/assets/char_full_body/${char.name}_ph_chara.jpg`
                            }
                        />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    const thumbsSlides = []
    characters.map((char) => {
        thumbsSlides.push(
            <SwiperSlide
                key={`thumb_for_${char.name}`}
                tag="li"
                className={char.name}
            >
                <img
                    style={{ width: "60px", height: "60px" }}
                    src={`/assets/char_thumbs/${char.name}_ph_thumb.jpg`}></img>
            </SwiperSlide>
        )
    })


    return (
        <>
            <style>
                {`
                .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
                    bottom: 160px !important;
                } 

                .swiper-button-prev {
                    background-image: url(/assets/prev-button.svg);
                    background-repeat: no-repeat;
                    background-size: 40px;
                    width: 40px;
                    background-position: center;
                    margin-top: -233px;
                    left: 15px;
                }
                
                .swiper-button-prev::after {
                    display: none;
                }
                
                .swiper-button-next {
                    background-image: url(/assets/next-button.svg);
                    background-repeat: no-repeat;
                    background-size: 40px;
                    width: 40px;
                    background-position: center;
                    margin-top: -233px;
                    right: 15px;
                }
                
                .swiper-button-next::after {
                    display: none;
                }

            #thumb_slider .swiper-wrapper {
                padding: 20px! important;
            }
                
            `}
            </style>
                <div className={styles.sliders}>
                    <Swiper
                        thumbs={{ swiper: thumbsSwiper }}
                        wrapperTag="ul"
                        navigation
                        pagination
                        loop
                        centeredSlides={true}
                        slidesPerView={1}
                    >
                        {slides}
                    </Swiper>
                </div>
                <div className={styles.thumb_slider} id="thumb_slider">
                    <Swiper
                        id="thumbs"
                        tag="section"
                        wrapperTag="ul"
                        onSwiper={setThumbsSwiper}
                        spaceBetween={6} // this sets margin of 6px
                        slidesPerColumnFill="row" // this is necessary for multi row slider 
                        slidesPerView={6}
                        slidesPerGroup={6}
                        slidesPerColumn={4}
                        style={{padding:"20px;"}}
                    >
                        {thumbsSlides}
                    </Swiper>
                </div>
        </>
    )
}

export default CharacterIntroSwiper

// on how to customize navigation button: https://dev.to/timo_ernst/how-to-customize-prev-next-buttons-in-react-swiper-js-4lki