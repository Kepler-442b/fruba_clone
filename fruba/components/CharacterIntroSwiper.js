import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
import { characters } from "../constants"
import { Button } from "react-bootstrap"

const CharacterIntroSwiper = () => {

    // initialize swiper that uses navigation
    SwiperCore.use([Navigation, Pagination, Thumbs])

    const [isSwitchedToAnimal, setIsSwitchedToAnimal] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const clickedThumbnail = useRef(0) // returns a single object current {current:0}
    const [slideIndex, setSlideIndex] = useState(null)
    console.log("slideIndx", slideIndex)
    useEffect(() => {

    })

    const onClickSwitch = () => {
        if (!isSwitchedToAnimal) {
            setIsSwitchedToAnimal(true)
        } else {
            setIsSwitchedToAnimal(false)
        }
    }
    
    const onClickThumbnail = (i) =>  {
        clickedThumbnail.current = i
    }

    const onInitSlide = (i) => {
        console.log("set slide index", i)
        setSlideIndex(i)
    }

    const slides = []
    characters.map((char, idx) => {
        slides.push(
            <SwiperSlide
                key={`slide-${idx}`}
                tag="li"
                className={char}
                style={{ backgroundImage: `url(/assets/char_background/${char}_ph_bg.jpg)` }}
            >
                <img className="title" src={`/assets/char_title/${char}_ttl_${char}.svg`} />
                <Button
                    className="switch-button"
                    onClick={onClickSwitch}
                >
                    <img
                        src={isSwitchedToAnimal
                            ? `/assets/close-button.svg`
                            : `/assets/char_switch/${char}_ph_switch.jpg`
                        }
                    />
                </Button>
                <div className="character-info">
                    <img className="name" src={`/assets/char_names/${char}_txt_name.svg`} />
                    <div className="introduction"> 反かどだみ退隊うド出慣アスイ横別ず泉印ラが面放ロカ野37載ヲスヤ是授ぱてあぞ号見レアヘ保属ハ連芸時ー事策送四登こ。止ょ能27重はし地集昨ごド梨2報ムミセ浸供ぎれざぐ国惑球クタホネ載属合て児属発ニヱ提漢まがスで示16統憂昌65治ロユミチ野帯了夫ほもゃめ。</div>
                    <img className="face" src={`/assets/char_main_faces/${char}_ph_face.jpg`} />
                </div>
                <img
                    className="full-body"
                    src={isSwitchedToAnimal
                        ? `/assets/char_animals/${char}_ph_animal.jpg`
                        : `/assets/char_full_body/${char}_ph_chara.jpg`
                    }
                />
            </SwiperSlide>
        )
    })

    const thumbsSlides = []
    characters.map((char, idx) => {
        thumbsSlides.push(
            <li
                key={`thumb-${idx}`}
                onClick={() => onClickThumbnail(idx)}
                className={`${char}_${idx}`}
            >
                <img
                    style={{ width: "60px", height: "60px", cursor:"pointer" }}
                    src={`/assets/char_thumbs/${char}_ph_thumb.jpg`}></img>
            </li>
        )
    })


    return (
        <>
            <style jsx global>
                {`
                .main-contents {
                    width: 800px !important;
                    margin-left: 238px;
                }
                .swiper-container {
                    height: 870px;
                }
                .swiper-slide {
                    background-color: aqua; 
                    color: #000;
                    text-shadow: none;
                    text-align:center;
                    border-radius: 10px 0px 0px 10px;
                    width: 100%;
                    margin-right: 0px;
                    background-repeat: no-repeat;
                    background-position: 100% 100%;
                }
                .swiper-wrapper {
                    padding-left: 0px;
                }
                .swiper-button-prev {
                    background-image: url(/assets/prev-button.svg);
                    background-repeat: no-repeat;
                    background-size: 40px;
                    width: 40px;
                    background-position: center;
                    margin-top: -180px;
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
                    margin-top: -180px;
                }
                .swiper-button-next::after {
                    display: none;
                }
                .switch-button {
                    background-color: transparent;
                    border-color: transparent;
                    position: relative;
                    top: 100px;
                    left: 210px
                }
                .switch-button :hover {
                    background-color: transparent;
                    border-color: transparent;
                }
                .switch-button > img {
                    border-radius: 50%;
                    background-color: #cccccc;      
                    padding: 15px;    
                }

                .character-info .introduction {
                    width: 380px; 
                    min-height: 140px;
                    text-align: left; 
                    font-size: 0.875rem;
                    margin-bottom: 10px;
                }
                .character-info .face {
                    margin-left: -475px;
                }
                .character-info .name {
                    display:block;
                }
                .full-body {
                    position: relative;
                    top: -530px;
                    left: 200px;
                }
                #thumbs .swiper-wrapper .swiper-slide{
                    background-color: pink !important;

                }

            `}
            </style>
            <React.Fragment>
                <Swiper
                    id="main"
                    tag="section"
                    // thumbs={{ swiper: thumbsSwiper }}
                    wrapperTag="ul"
                    navigation
                    pagination
                    loop
                    slidesPerView="1"
                    onInit={slide => onInitSlide(slide.activeIndex)}
                    onSlideChange={slide => onInitSlide(slide.activeIndex)}
                >
                    {slides}
                </Swiper>
                <div className="thumb-custon-slider">
                    <section id="thumbs">
                        <ul>
                            {thumbsSlides}
                        </ul>
                    </section>
                </div>
            </React.Fragment>
        </>
    )
}

export default CharacterIntroSwiper

// on how to customize navigation button: https://dev.to/timo_ernst/how-to-customize-prev-next-buttons-in-react-swiper-js-4lki