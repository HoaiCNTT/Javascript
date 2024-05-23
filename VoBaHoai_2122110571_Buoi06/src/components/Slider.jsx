import React from 'react'
import Slider1 from "../assets/images/coca banner.jpg"
import Slider2 from "../assets/images/pepsi banner.jpg"
import Slider3 from "../assets/images/seven banner.jpg"
import Slider4 from "../assets/images/aqua banner.jpg"
const Slider = () => {
    return(
    <div
        id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active ">
                <img src={Slider1} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item ">
                <img src={Slider2} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item ">
                <img src={Slider3} class="d-block w-100 " alt="..." />
            </div>
            <div class="carousel-item ">
                <img src={Slider4} class="d-block w-100 " alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}
export default Slider