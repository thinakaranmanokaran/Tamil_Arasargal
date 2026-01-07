// LandingPage.jsx

import React from 'react';
import images from '../assets/images';
import { motion, useScroll, useTransform } from 'framer-motion'

const LandingPage = ({ lang }) => {
    const { scrollYProgress } = useScroll()

    // Move images horizontally based on scroll
    const leftX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-60%'])
    const rightX = useTransform(scrollYProgress, [0, 0.3], ['0%', '60%'])

    // Optional fade a bit
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6])


    return (
        <div className=" relative h-full overflow-hidden">
            <img src={images.LandBG} className="h-screen absolute z-0 w-screen object-center object-cover pointer-events-none" alt="" />
            {/* Right Image */}
            <motion.img
                src={images.LandRight}
                style={{ x: rightX }}
                className="absolute z-20 right-0 w-screen h-screen pointer-events-none hidden md:block"
                alt=""
            />

            {/* Left Image */}
            <motion.img
                src={images.LandLeft}
                style={{ x: leftX }}
                className="absolute z-30 left-0 w-screen h-screen pointer-events-none hidden md:block"
                alt=""
            />
            <div className="flex justify-center min-h-screen relative z-10 items-center ">
                <div className=" md:max-w-3/5 flex flex-col items-center">
                    <h1 className="font-anek md:text-nowrap text-center font-bold text-3xl md:text-4xl xl:text-6xl leading-normal bg-gradient-to-r  from-gold-yellow to-gold bg-clip-text text-transparent">
                        {lang === "ta"
                            ? "பழந்தமிழகத்தை ஆண்ட அரசர்கள்"
                            : "Rulers Who Governed Ancient Tamizhagam"}
                    </h1>

                    <p className="mt-4 md:text-lg font-normal font-arima leading-relaxed px-1 md:px-0 md:max-w-4/5 text-center text-white/50">
                        {lang === "ta" ? (
                            <>
                                பழந்தமிழகம் அரசியல், பண்பாடு, வணிகம், கலை மற்றும் போர்முனை ஆகியவற்றில்
                                உலகிற்கு வழிகாட்டிய மாபெரும் அரசர்களால் ஆளப்பட்டது.
                                சேரர், சோழர், பாண்டியர் போன்ற தமிழராச்சிகள்
                                நிலத்தை மட்டும் அல்லாது நெஞ்சங்களையும் வென்றவர்கள்.
                                நீதி, வீரத்துவம், அறம், கல்வி ஆகியவை இவர்களின் ஆட்சியின் அடித்தளம் ஆகும்.
                            </>
                        ) : (
                            <>
                                Ancient Tamilakam was ruled by great monarchs who guided the world
                                in governance, culture, trade, art, and warfare.
                                Dynasties such as the Cheras, Cholas, and Pandyas conquered not only
                                lands but also the hearts of their people.
                                Justice, valor, virtue, and learning formed the foundation of their rule.
                            </>
                        )}
                    </p>

                    <div className="mt-6 px-1 md:px-0 md:text-xl font-medium italic font-satoshi">
                        {lang === "ta" ? (
                            <>
                                “நாடா கொன்றோ? காடா கொன்றோ?
                                <br />
                                கடலா கொன்றதோ? – அறம் கொன்றதே”
                                <div className="mt-2 text-sm not-italic text-end font-normal">
                                    — புறநானூறு
                                </div>
                            </>
                        ) : (
                            <>
                                “Was it the land that destroyed the kingdom?
                                <br />
                                Was it the forest or the sea?
                                <br />
                                No — it was the loss of righteousness.”
                                <div className="mt-2 text-sm not-italic text-end font-normal">
                                    — Purananuru
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
