import { useEffect, useState } from "react";
import "./App.css";
import diary from "./imgvid/diary.png";
import udaan from "./imgvid/udaan.jpg";
import valientine from "./imgvid/valentine.jpg";
import aakhri from "./imgvid/aakhri.png";
import aise from "./imgvid/Kaise.png";
import demo from "./imgvid/FINAL.mp4";
import audioFile from "./imgvid/audio.mp3";
function App() {
    const [isSplashVisible, setSplashVisible] = useState(true);
    const [popup, setPopup] = useState(false);
    const [audioplay, setAudioplay] = useState(false);
    const [audio] = useState(new Audio(audioFile)); // Audio instance ko state mein store kiya

    const handleAudioPlay = () => {
        if (audioplay) {
            audio.pause(); // Pause the audio
        } else {
            audio.play(); // Play the audio
        }
        setAudioplay(!audioplay); // Toggle the state
    };
    useEffect(() => {
        // const supportbtn = document.querySelector(".supportbtn");
        // const dropdown = document.querySelector(".dropdown-content");
        // const arrow = document.querySelector(".arrow");

        setTimeout(() => {
            setPopup(true);
        }, 5000);

        // supportbtn.addEventListener("click", () => {
        //     arrow.classList.toggle("rotate");
        //     let textNode = supportbtn.childNodes[0];
        //     if (textNode.nodeType === 3) {
        //         textNode.nodeValue = supportbtn.classList.contains("active") ? "Support  " : "Support";
        //     }
        //     supportbtn.classList.toggle("active");
        //     dropdown.classList.toggle("hide");
        // });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.body.style.backgroundPositionY = `${scrollY * -4}px`;
        };

        window.addEventListener("scroll", handleScroll);

        const video = document.getElementById("intro-video");
        video.addEventListener("ended", () => {
            setSplashVisible(false);
        });
    }, []);

    return (
        <>
            <div className="speaker" onClick={handleAudioPlay}>
                {audioplay ? <i className="ri-volume-up-line"></i> : <i className="ri-volume-mute-line"></i>}
            </div>

            <div className={"video " + (isSplashVisible ? "show" : "hidden")}>
                <video id="intro-video" src={demo} autoPlay muted></video>
            </div>

            <div className={"fullcontent " + (isSplashVisible ? "hidden" : "show")}>
                <div className="main">
                    <div className="container">
                        <div className="mayankimg"></div>
                    </div>

                    <div className="texts">
                        <p>Mayank Verma</p>
                        <p id="para">I am Mayank Verma, an Indian Independent artist hailing from Delhi, and I wear multiple hats as a music producer, composer, and singer-songwriter. Rooted in Saharanpur, Uttar Pradesh, my musical style blends acoustic hues, keys, and guitar, crafting a captivating narrative that resonates with heartfelt emotions.</p>
                    </div>

                    <div className="icons">
                        <a href="https://insta.openinapp.co/8q5ex">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="mailto:officialmayankmusic@gmail.com">
                            <i className="ri-mail-send-line"></i>
                        </a>
                        <a href="https://yt.openinapp.co/b5z79">
                            <i className="ri-youtube-line"></i>
                        </a>
                        <a href="https://spotify.openinapp.co/rcm28">
                            <i className="ri-spotify-line"></i>
                        </a>
                    </div>

                    <div className="container2">
                        <p>My recent releases</p>
                        <hr />
                        <a href="https://yt.openinapp.co/mh8nk">
                            {" "}
                            <img src={diary} alt="your image" />
                        </a>
                        <div className="textdairy">
                            <p>Diary ~ Mayank Verma</p>
                        </div>
                    </div>

                    <div className="texts3">
                        <p>My Originals</p>
                        <hr />
                    </div>

                    <div className="container3">
                        <div className="box-container">
                            <div className="box">
                                <a href=" https://yt.openinapp.co/980g0 ">
                                    <img src={aakhri} alt="" />
                                </a>
                            </div>
                            <div className="title">
                                <p>Aakhri Sawal (original)~ Mayank Verma</p>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <a href="https://yt.openinapp.co/7yid8">
                                    {" "}
                                    <img src={udaan} alt="" />
                                </a>
                            </div>
                            <div className="title">
                                <p>Ek Ummeed (Original) ~ Mayank Verma</p>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <a href="https://yt.openinapp.co/tsy08 ">
                                    <img src={valientine} alt="" />
                                </a>
                            </div>
                            <div className="title">
                                <p>Deewana tera (Original)~ Manyank Verma</p>
                            </div>
                        </div>
                        <div className="box-container">
                            <div className="box">
                                <a href="https://yt.openinapp.co/tsrjh">
                                    {" "}
                                    <img src={aise} alt="" />
                                </a>
                            </div>
                            <div className="title">
                                <p>Kaise Aazmaate (Original)~Mayank Verma</p>
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <a href="https://spotify.openinapp.co/rcm28">
                            <div className="button1">
                                <i className="ri-spotify-line"></i> Spotify
                            </div>
                        </a>

                        {/* <div className="supportbox">
                            <div className="supportbtn">
                                <div className="supportji">Support </div>
                                <span className="arrow">
                                    <i className="fa-solid fa-caret-down"></i>
                                </span>
                            </div>
                            <div className="dropdown-content hide">
                                <div className="contents">
                                    The time and effort I put into my art are fueled by your passion and engagement. To continue creating new pieces like this, consider showing your support through a financial contribution. Together, we can bring even more creativity to life! <br />
                                    <br />
                                    <b> UPI- vermamayank321-1@oksbi</b>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {popup === true && (
                        <>

                            <div className="popup">
                                {/* <button className="popupclose" onClick={() => setPopup(false)}>
                                            <i className="ri-close-line"></i>
                                        </button> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
