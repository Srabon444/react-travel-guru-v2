import React from 'react';
import './Home.css';
import sajek from '../../images/sajek.png';
import sreemongol from '../../images/sreemongol.png';
import sundorbon from '../../images/sundorbon.png';

const Home = () => {
    return (
        <div class="container">
            <div class="locationInfo row">
                <div class="col-md-5">
                    <h1>
                        Cox's bazar
                </h1>
                    <p>
                        Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
                        It is famous mostly for its long natural sandy beach, and it ...
                    </p>
                    <button className="btn btn-warning">Booking</button>
                </div>

                <div className="locationImg col-md-7 d-flex">
                    <div>
                        <a href="">
                            <img src={sajek} alt="" />
                            <h3 class="locationImgName">Sajek</h3>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={sreemongol} alt="" />
                            <h3 class="locationImgName">Sreemongol</h3>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={sundorbon} alt="" />
                            <h3 class="locationImgName">Sundorbon</h3>
                        </a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Home;