import Navbar from "../../components/Navbar/Navbar";
import '../../assets/styles/style.css'
import '../../assets/styles/home.css'
import BgImg from '../../assets/images/sample-bg/background.jpg'
import Home3 from '../../assets/images/home2.png'
// import Clipart from '../../assets/images/hero-img.png'


export default function Home() {

    return (
        <>
        <Navbar />
        <section id="home">

            <div className="bg-box">
                    <div className="home-text">
                        <h1 className="title-large">
                            Welcome to the Holy Land!
                        </h1>
                        <p className="intro-text">
                        Are you having some sad hours? Or do you want to win someone's heart?
                        <br/>Looks like you've lost yourself, come here, We can fix it, In <span>The Holy Land</span>, to The Sacred place of all souls eager to give a bloody fight for their favourite waifus!
                        </p>
                        <button className="join-btn"> Join Us</button>
                    </div>
                    <div className="home-img"> <img src={Home3} alt="home-girl" /> </div>
            </div>

        </section>
        </>
    )
}