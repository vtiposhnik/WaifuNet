import '../../assets/styles/Navbar.css';
import '../../assets/styles/style.css';
import Logo from '../../assets/images/other/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    // function handleScroll() {
    //     const section = document.getElementById('about');
    //     section?.scrollIntoView({ behavior: 'smooth' });
    // }
    
    return (
        <header>
            <div className="container fx">
                <div className="nav-start fx">

                    <a href="#">
                        <img src={Logo} alt="logo" width="40" height="40" />
                    </a>

                    <nav>
                        <ul className={`menu ${ showMenu ? 'show' : '' }`}>

                            <li className='nav-link'> <Link to="/"> Home </Link> </li>

                            <li>
                                <button className='nav-btn' onClick={() => handleClick('div1')}>
                                    News
                                    <i className='bx bx-chevron-down'></i>
                                </button>
                                <div id='dropdown1' className={`dropdown ${showDiv1 ? 'active' : ''} `}>
                                    <ul role='menu'>
                                        <li className='drop-link'><a href="#">All News</a></li>
                                        <li className='drop-link'><a href="#">Title Awards</a></li>
                                        <li className='drop-link'><a href="#">Events</a></li>
                                        <li className='drop-link'><a href="#">WaifuNet Expo</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <button className='nav-btn' onClick={() => handleClick('div2')}>
                                    Categories
                                    <i className='bx bx-chevron-down'></i>
                                </button>
                                <div id='dropdown2' className={`dropdown ${showDiv2 ? 'active' : ''} `}>
                                    <ul role='menu'>
                                        <li className='drop-link'><Link to="#">Newest</Link></li>
                                        <li className='drop-link'><Link to="#">Trending</Link></li>
                                        <li className='drop-link'><Link to="#">Top Tier</Link></li>
                                        <li className='drop-link'><Link to="#">Award Winning</Link></li>
                                    </ul>
                                    <ul role='menu'>
                                        <li className='drop-link'><Link to="#">Isekai</Link></li>
                                        <li className='drop-link'><Link to="#">School Life</Link></li>
                                        <li className='drop-link'><Link to="#">Romance</Link></li>
                                        <li className='drop-link'><Link to="/genres"> More... </Link></li>
                                    </ul>
                                </div>
                                
                            </li>

                            <li className='nav-link'> <Link to="/sponsors"> Sponsors </Link> </li>
                            <li className='nav-link'> <a href="#"> Contact </a> </li>

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