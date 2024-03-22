import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BrowserRouter as Link} from 'react-dom'
import Scheme from './Scheme'
import 'swiper/css';

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#333333] text-white">
            <header className="">
                <div class="flex items-center justify-between h-[5rem] p-9">
                    <h1 className="font-bold text-2xl">Government Schemes for Rural Areas</h1>
                    <nav>
                        <ul className="flex justify-center items-center gap-8">
                            <li><Link to="Scheme">Schemes</Link></li>
                            <li><a href="About.html">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="login.html">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="w-full h-5/6 bg-[url('./assets/hero.png')]">
                {/* <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="hero.png" alt="" /></div>
                        <div class="swiper-slide"><img src="01.jpg" alt="" /></div>
                        <div class="swiper-slide"><img src="02.jpg" alt="" /></div>
                        <div class="swiper-slide"><img src="03.jpg" alt="" /></div>
                        <div class="swiper-slide"><img src="" alt="" /></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                        <div class="swiper-slide"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div> */}

            </div>
            <footer className="w-full h-3/6 flex justify-center items-center bg-[#333333]">
                <div className="">
                    <div className="flex gap-40">
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-xl font-bold">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mauris nec ex blandit feugiat.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-xl font-bold">Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-xl font-bold">Contact Us</h3>
                            <ul>
                                <li>Email: example@example.com</li>
                                <li>Phone: +1234567890</li>
                                <li>Address: 123 Street, City, Country</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-xl font-bold">Government Schemes for Rural Areas</h3>
                            <ul>
                                <li><a href="#">Scheme 1</a></li>
                                <li><a href="#">Scheme 2</a></li>
                                <li><a href="#">Scheme 3</a></li>
                                <li><a href="#">Scheme 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;