import React, { useState } from 'react';
import './Home.css';
import sajek from '../../images/sajek.png';
import sreemongol from '../../images/sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import { Link } from 'react-router-dom';



export const information = [
    {
        id: 0,
        name: "Cox's Bazar",
        details: "Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. ... The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the 'longest natural unbroken sea beach' in the world.",
        img: sajek,
        background: "https://i.pinimg.com/originals/1c/8a/a8/1c8aa8f0201a754b5a7dfd82ec7b6371.jpg"
    },
    {
        id: 1,
        name: "Sreemangal",
        details: "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes.",
        img: sreemongol,
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRROv09xumg6YLiCDrJ7K6B60rWU9GzxMog2Q&usqp=CAU"
    },
    {
        id: 2,
        name: "Sundarban",
        details: "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
        img: sundorbon,
        background: "http://downloadwallpapers-net.s3.amazonaws.com/sundarban-largest-mangrove-forest.jpg"
    }
]



const Home = () => {


    const [place, setPlace] = useState([information]);
    const [click, setClick] = useState([]);

    const handleClick = (e) => {
        setClick(e);
    }

    return (
        <div class="container">
            <div class="locationInfo row">

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
                        information.map(info => <img className=" locationImgName" onClick={() => handleClick(info)} src={info.img} key={info.id} alt="" />)
                    }

                </div>
            </div>


        </div>
    );
};

export default Home;