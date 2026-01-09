import React, { useState } from "react";
import Tamil from "../dataset/Tamil";
import { Timeline } from "../components/timeline";
import images from "../assets/images";
import { UseSmoothScroll } from "smooth-motion";
import LandingPage from "../components/LandingPage";

const Home = () => {
    const [lang, setLang] = useState("ta"); // ta | en

    const timelineData = Tamil
        .sort((a, b) => a.starting_year - b.starting_year)
        .map((item) => ({
            title: (
                <div className="">
                    <span className="space-x-0.5">
                        <span>{item.starting_year}</span>
                        <span>-</span>
                        <span>{item.end_year}</span>
                    </span>
                    <span className="text-gold/40 text-2xl inline-flex ml-2">{item.era}</span>
                </div>
            ),
            content: (
                <div className="space-y-3">
                    <h4 className="font-arima text-2xl md:text-5xl bg-gradient-to-r  from-gold-yellow to-gold bg-clip-text text-transparent leading-tight">
                        {lang === "en" ? <span className="font-arima">{item.engname}</span> : item.tamilname}
                    </h4>

                    <p className="text-neutral-300 text-lg">
                        <span className="text-gold">
                            {lang === "en" ? <span className="font-anek font-semibold">{item.tamilname}</span> : item.engname}
                        </span>{" "}
                        • {lang === "ta" ? <span className="font-anek">{item.emperor_ta}</span> : item.emperor}
                    </p>

                    <p className="text-neutral-400 leading-relaxed">
                        {lang === "ta" ? <span className="font-noto">{item.about_ta}</span> : item.about_eng}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {lang === "ta" ? item.conquered_regions_ta.map((region, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm font-noto rounded-full bg-gold/10 text-gold"
                            >
                                {region}
                            </span>
                        )) : item.conquered_regions_eng.map((region, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-gold/10 text-gold"
                            >
                                {region}
                            </span>
                        ))}
                    </div>
                </div>
            ),
        }));

    // give me the function for Translate the Page Tamil into English
    function TranslatePage() {
        setLang(prev => (prev === "ta" ? "en" : "ta"));
        // Scroll to top after translation
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className=" min-h-screen bg-dark text-white selection:bg-gold/10">
            <UseSmoothScroll speed={0.9} />
            <LandingPage lang={lang} />
            <div className="absolute top-[100vh] w-full bg-gradient-to-b from-black to-transparent h-20 left-0" />
            <Timeline data={timelineData} />
            <button onClick={TranslatePage} className=" bg-gold fixed bottom-2 right-2 p-2 rounded-3xl rounded-br-none cursor-pointer hover:scale-105 transition-all duration-300"><img className="w-12 h-12" src={images.TranslateIcon} alt="Translate" /></button>
            <div className="h-60 "></div>
            <footer className="flex justify-center relative gap-1 font-satoshi font-normal bg-black py-2 text-white/60">{lang === "ta" ? <span>உருவாக்கியது <a href="https://thinakaran.dev/" className="text-white underline" target="_blank">தினகரன் மனோகரன்</a></span> : <span>Developed by <a href="https://thinakaran.dev/" className="text-white underline" target="_blank">Thinakaran Manokaran</a></span>}</footer>
        </div>
    );
};

export default Home;
