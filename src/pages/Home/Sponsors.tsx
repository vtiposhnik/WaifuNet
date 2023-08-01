import '../../assets/styles/sponsors.css'
import '../../assets/styles/style.css'
import SpeedWagon from '../../assets/images/waifus/speedwagon.jpg';
import Batman from '../../assets/images/waifus/batman.jpg'

export default function Sponsors() {
    return (
        <>
        <section id="sponsors">
            <h1> Meet Our Sponsors </h1>

            <div className='sponsor'>
                <div className="sponsor-box">
                    <div className='sponsor-img'> <img src={SpeedWagon} alt="speedwagon" /> </div>
                    <h2> SpeedWagon </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae est minus harum cum! Qui pariatur, harum debitis omnis place at aperiam, aut ab repudiandae, eveniet dolor totam fugit quo quasi?</p>
                    <div className="social-box">
                        <a href=""><i className="bx bxl-instagram"></i></a>
                        <a href=""><i className="bx bxl-twitter"></i></a>
                        <a href=""><i className="bx bxl-facebook"></i></a>
                    </div>
                </div>

                <div className="sponsor-box">
                    <div className='sponsor-img'> <img src={Batman} alt="batman" /> </div>
                    <h2> Batman </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae est minus harum cum! Qui pariatur, harum debitis omnis place at aperiam, aut ab repudiandae, eveniet dolor totam fugit quo quasi?</p>
                    <div className="social-box">
                        <a href=""><i className="bx bxl-instagram"></i></a>
                        <a href=""><i className="bx bxl-twitter"></i></a>
                        <a href=""><i className="bx bxl-facebook"></i></a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}