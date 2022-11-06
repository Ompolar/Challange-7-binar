import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout(e) {
        localStorage.removeItem("token");
        navigate('/login')
    }

    const location = useLocation()
    const [showButton, setShowButton] = useState()

    useEffect(() => {
        if (location.pathname === "/cars") {
            setShowButton(false);
        } 
        else if (location.key === "logout" && location.pathname === "/login") {
            setShowButton(false);
        } 
        else {
            setShowButton(true);
        }
    }, [location.pathname]);

    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand bg-primary-darkblue" href="#" style={{"color": "#0d28a6;"}}>Navbar</a>
                    <button className="btn btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-lg offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold" id="offcanvasResponsiveLabel">BCR</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#ourservices">Our Services</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#whyus">Why Us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#testimonial">Testimonial</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                <a className="btn btn-success text-light" aria-current="page" href="#">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar