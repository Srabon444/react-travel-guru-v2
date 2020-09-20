import React, { useState } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';


const { id, name, details, image } = fakeData;

const Home = (props) => {


    // const [place, setPlace] = useState([information]);
    const [click, setClick] = useState([]);

    const handleClick = (event) => {
        setClick(event);
    }

    return (
        <header>
            <div class="container ">
            <div class="locationInfo row">

                {/* Location details */}
                <div className="col-md-5">

                    <h1 style={{ fontSize: '70px' }}> {click.name}</h1>
                    <p style={{ fontSize: '20px', marginTop: '4px' }}>{click.details}</p>
                    <Link to={"/booking/" + click.id}>
                        <button className="btn btn-warning">Booking ></button>
                    </Link>

                </div>


                {/* Location image */}
                <div className="col-md-7  locationImg d-flex" >
                    {
                            fakeData.map(info => <img className=" locationImgName" onClick={() => handleClick(info)} src={info.image} key={info.id} alt="" />)
                    }

                </div>
            </div>


        </div>
        </header>
    );
};

export default Home;