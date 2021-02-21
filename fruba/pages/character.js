import homeStyle from "../styles/Home.module.css"
import CharacterIntroSwiper from "../components/CharacterIntroSwiper"
import React, { useEffect, useState } from 'react';

export default function character() {
    return (
        <>
            <style jsx global>
                {`
                .swiper-section {
                    margin-left: 205px;
                    margin-top: 80px
                }   
                 `}
            </style>
            <React.Fragment>
                <div className="swiper-section">
                    <CharacterIntroSwiper />
                </div>
            </React.Fragment>
        </>
    )
}