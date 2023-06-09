import '../../assets/styles/Navbar.css';
import '../../assets/styles/style.css';
import Logo from '../../assets/images/other/logo.png';
import { useEffect, useState } from 'react';
// import User from '../../assets/images/index.png'

function Navbar() {

    // const dropdownRef = useRef<HTMLDivElement>(null);

    const [showMenu, setShowMenu] = useState(false);

    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);

    const handleOutsideClick = (event: MouseEvent) => {
        // const targetElement = event.target as Element;
        console.log(event.target)
        if (!(event.target as Element).closest(".nav-btn")) {
            if ((event.target as Element).closest(".dropdown")) {
                console.log("inside")
                return;
            } else if (showDiv1) {
                console.log("div1")
                setShowDiv1(current => !current);
            } else if (showDiv2) {
                console.log("div2")
                setShowDiv2(current => !current)
            }
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener('click', handleOutsideClick);
          }
        })
        
    const handleClick = (id: string) => {

        if (id === 'div1') {
            setShowDiv1(current => !current);
            setShowDiv2(false)
        } else {
            setShowDiv2(current => !current)
            setShowDiv1(false)
        }
        
    }
    
    return (
        <header>
            <div className="container fx">
                <div className="nav-start fx">

                    <a href="#">
                        <img src={Logo} alt="logo" width="40" height="40" />
                    </a>

                    <nav>
                        <ul className={`menu ${ showMenu ? 'show' : '' }`}>

                            <li>
                                <a href="#"> Home </a>
                            </li>

                            <li>
                                <button className='nav-btn' onClick={() => handleClick('div1')}>
                                    News
                                    <i className='bx bx-chevron-down'></i>
                                </button>
                                <div id='dropdown1' className={`dropdown ${showDiv1 ? 'active' : ''} `}>
                                    <ul role='menu'className='drop-link'>
                                        <li><a href="#">All News</a></li>
                                        <li><a href="#">Title Awards</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">WaifuNet Expo</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <button className='nav-btn' onClick={() => handleClick('div2')}>
                                    Categories
                                    <i className='bx bx-chevron-down'></i>
                                </button>
                                <div id='dropdown2' className={`dropdown ${showDiv2 ? 'active' : ''} `}>
                                    <ul role='menu' className='drop-link'>
                                        <li><a href="#">Newest</a></li>
                                        <li><a href="#">Trending</a></li>
                                        <li><a href="#">Top Tier</a></li>
                                        <li><a href="#">Award Winning</a></li>
                                    </ul>
                                    <ul className='drop-link'>
                                        <li> <span className='drop-subtitle'> Genres </span> </li>
                                        <li><a href="#">Isekai</a></li>
                                        <li><a href="#">School Life</a></li>
                                        <li><a href="#">Romance</a></li>
                                        <li><a href="#"> More... </a></li>
                                    </ul>
                                </div>
                                
                            </li>

                            <li> <a href="#"> About </a> </li>
                            <li> <a href="#"> Contact </a> </li>

                        </ul>
                    </nav>
                </div>

                <div className="nav-end fx">
                    <div className='right-box fx'>

                        <form role='search' className='search'>
                            <i className='bx bx-search'></i>
                            <input type="search" role='search' placeholder='Search'/>
                        </form>


                        <button className='sign-btn'> Sign Up </button>
                        <button className='sign-btn'> Sign In </button>
{/* 
                        <a href="#">
                            <img src={User} alt="user-pfp" width='60' height='60' />
                        </a> */}

                    </div>

                    <button id="hamburger" className="bx bx-menu" 
                    onClick={ () => {
                        setShowMenu(current => !current)
                    }}></button>
                </div>
            </div>
        </header>
    )
}
export default Navbar;