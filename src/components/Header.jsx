import {Link} from "react-scroll"
import "./Header.css";
function Header(){
    return(
        <>
        <header>
            
            <nav>
                <div className="git-prof-link"><Link to="Home"
                 spy="true"
                smooth="true">
                Ben</Link></div>
                <ul>
                    
                    <li>
                        <Link
                        to="Home"
                        smooth="true"
                        spy="true"
                        activeClass="active-link" 
                        className="nav-link"
                        >
                        Home
                        </Link>    
                    </li>
                    <li>
                        <Link
                        to="About"
                        smooth="true"
                        spy="true"
                        activeClass="active-link" 
                        className="nav-link"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="Portfolio"
                        smooth="true"
                        spy="true"
                        activeClass="active-link" 
                        className="nav-link"
                        >
                            Portfolio
                        </Link>    
                        
                    </li>
                    <li>
                        <Link
                        to="Contact"
                        smooth="true"
                        spy="true"
                        activeClass="active-link" 
                        className="nav-link"
                        >
                          Contact  
                        </Link>    
                    </li>
                    
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header