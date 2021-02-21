import homeStyle from "../styles/Home.module.css"
import CharacterIntroSwiper from "../components/CharacterIntroSwiper"
import React, { useEffect, useState } from 'react';

export default function character() {
    return (
        <>
            <style jsx global>
                {`
                .swiper-section {
                    width: 100%;
                    height: 870px;
                    position: relative;
                    top: 85px;
                    left: -20px;
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
