import brandLogo from "../assets/brand_logo.png";
import "../App.css";
export default function Nav(){
    return <div>
        <nav className="container">
        <div className="logo">
            <img src={brandLogo}/>
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>Login</button>
        </nav>
    </div>
}