import '../../assets/styles/log.css'

import Github from '../../assets/images/other/logos/github.png'
import Apple from '../../assets/images/other/logos/apple.png'
import Google from '../../assets/images/other/logos/google.png'

export default function SignUp() {
    return (
        <>
        <div className="sign-box">
            <h2>Join our family right Now!</h2>

            <div className="via-box">
                <div className="via">
                    <img src={Google} alt="googleIcon" />
                    <p>Continue With Google</p>
                </div>
                <div className="via">
                    <img src={Github} alt="githubIcon" />
                    <p>Continue With Github</p>
                </div>
                <div className="via">
                    <img src={Apple} alt="appleIcon" />
                    <p>Continue With Apple</p>
                </div>
            </div>

            <input type="text" />
            <button></button>
            <p> <a href="">Log In</a> </p>
        </div>
        </>
    )
}