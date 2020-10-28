import React, { useContext } from 'react';
import { UserContext } from '../../App';

import logo from '../../images/logo-white.png';
import './Header.css';


const Header = () => {

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [user, setUser] = useState({
    //     isSignIn: false,
    //     name: "",
    //     email: "",
    //     image: "",
    // });

    const handlePopup = () => {
        alert('This feature is temporarily unavailable\nSelect Destination & Go Booking');
    }



    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent container">
                <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search your Destination" id="searchBox" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handlePopup}>Search</button>
                    </form>


                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={handlePopup}>News <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={handlePopup}>Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={handlePopup}>Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={handlePopup}>Contact</a>
                        </li>
                        <li class="nav-item">
                            {/* <button class="btn btn-warning"> Login</button> */}
                            <a href="/login" class="btn btn-warning" role="button">Login</a>

                        </li>
                    </ul>

                </div>
            </nav >
        </header >
    );
};

export default Header;