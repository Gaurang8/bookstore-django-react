import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import HeroImg from "../img/hero-png.png"
import Feature2 from "../img/feature2.png"
import Feature5 from "../img/feature5.png"
import Feature6 from "../img/feature6.png"
import Book1 from "../img/book1.jpg"
import Book3 from "../img/book3.jpg"
import Book4 from "../img/book4.jpg"

import Books from "../img/books.jpg"
import Book3_1 from "../img/book3-1.jpg"
import Bunch2 from "../img/bunch2.jpg"
import Bunch1 from "../img/bunch1.avif"
import My_photo from "../img/myphoto.jpg"

const Home = () => {
    return (
        <>
            <NavBar />

            <section className="hero-section flex">
                <div className="container hero-content flex">
                    <div className="hero-img">
                        <img src={HeroImg} alt="image" width="100%" />
                    </div>
                    <div className="hero-text flex">
                        <p className="p2-text hero-text-head">BOOKstore</p>
                        <h1>So many Books, so little Time </h1>
                        <p className="p2-text hero-text-dis"><span>READ...</span> so you never feel alone <br /><br /> Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Consectetur beatae totam nemo.</p>
                        <button href="#">
                            Get Started
                        </button>
                    </div>
                </div>
        </section >


            <section className="feature-section container">
                <div className="feature-content flex padding-1">
                    <div className="feature-item flex">
                        <div className="feature-item-text">
                            <h4> <strong>Free Delivery</strong></h4>
                            <p className="p3-text">over 300rs cart value <br/>all over india </p>
                        </div>
                        <div className="feature-img">
                            <img src={Feature2} alt="png"/>
                        </div>
                    </div>
                    <div className="feature-item flex">
                        <div className="feature-item-text">
                            <h4> <strong>Secured Payment</strong></h4>
                            <p className="p3-text">your money is secured prefer card payment </p>
                        </div>
                        <div className="feature-img">
                            <img src={Feature5} alt="png"/>
                        </div>
                    </div>
                    <div className="feature-item flex">
                        <div className="feature-item-text">
                            <h4> <strong>24 haur Support</strong></h4>
                            <p className="p3-text">Our team is always with you to support 24 haur </p>
                        </div>
                        <div className="feature-img">
                            <img src={Feature6} alt="png"/>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container padding-2 best-selling">
                    <div className="book-div-heading ">
                        <h1>Best Selling book</h1>
                    </div>
                    <div className="book-card-container flex">
                        <div className="book-card">
                            <div className="book-img flex">
                                <img src={Book1} alt="book"/>
                            </div>
                            <div className="book-disc flex">
                                <div className="book-name">
                                    <h3>The Alchemist</h3>
                                </div>
                                <div className="book-author">
                                    <p className="p2-text">paulo coelho</p>
                                </div>
                                <div className="book-price"> 299</div>
                                <div><a href="#" className="secondary-btn"
                                    onclick="addtocart('book1.jpg', 'The Alchemist', 'paulo coelho', 299)">Buy</a></div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-img flex">
                                <img src={Book3} alt="book"/>
                            </div>
                            <div className="book-disc flex">
                                <div className="book-name">
                                    <h3>Aeklo Jane Re</h3>
                                </div>
                                <div className="book-author">
                                    <p className="p2-text">Dr. Sarad Thakar</p>
                                </div>
                                <div className="book-price"> 299</div>
                                <div><a href="#" className="secondary-btn"
                                    onclick="addtocart('book3.jpg', 'Aeklo Jane Re', 'Dr. Sarad Thakar', 299)">Buy</a></div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-img flex">
                                <img src={Book3_1} alt="book"/>
                            </div>
                            <div className="book-disc flex">
                                <div className="book-name">
                                    <h3>Agartha Ni safare</h3>
                                </div>
                                <div className="book-author">
                                    <p className="p2-text">Dr. I K vijaliwala</p>
                                </div>
                                <div className="book-price"> 299</div>
                                <div><a href="#" className="secondary-btn"
                                    onclick="addtocart('book3-1.jpg', 'Agartha Ni safare', 'Dr. I K vijaliwala', 299)">Buy</a></div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-img flex">
                                <img src={Book4} alt="book"/>
                            </div>
                            <div className="book-disc flex">
                                <div className="book-name">
                                    <h3>Khovayela Ni Khojama</h3>
                                </div>
                                <div className="book-author">
                                    <p className="p2-text">Jules Vern</p>
                                </div>
                                <div className="book-price"> 299</div>
                                <div><a href="#" className="secondary-btn"
                                    onclick="addtocart('book4.jpg', 'Khovayela Ni Khojama', 'Jules Vern', 299)">Buy</a></div>
                            </div>
                        </div>
                        <div className="book-card">
                            <div className="book-img flex">
                                <img src={Book1} alt="book"/>
                            </div>
                            <div className="book-disc flex">
                                <div className="book-name">
                                    <h3>The Alchemist</h3>
                                </div>
                                <div className="book-author">
                                    <p className="p2-text">paulo coelho</p>
                                </div>
                                <div className="book-price"> 299</div>
                                <div><a href="#" className="secondary-btn"
                                    onclick="addtocart('book1.jpg', 'The Alchemist', 'paulo coelho', 299)">Buy</a></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section>
                <div className="offer-section container padding-1  flex ">
                    <div className="offer-section-img">
                        <img src={Bunch2} alt="book-img" className="offer-s-i-1"/>
                            <img src={Bunch1} alt="book-img" className="offer-s-i-2"/>
                                <img src={Books} alt="book-img" className="offer-s-i-3"/>
                                </div>
                                <div className="offer-dis flex">
                                    <p className="p2-text">Best Deal</p>
                                    <h2> <strong> Get </strong> </h2>
                                    <h2><strong> Dozen of Book </strong></h2>
                                    <p className="p-text">At just 1499 rs.</p>
                                    <a href="#" className="primary-btn">claim</a>
                                </div>
                            </div>

                        </section>





                        <section className="all-time-book-section">
                            <div className="container padding-2 all-time-best">
                                <div className="book-div-heading ">
                                    <h1>All time best </h1>
                                </div>
                                <div className="b-c-container flex">
                                    <div className="book-card-c-text flex">
                                        <h1>most popular at one place</h1>
                                        <p className="p2-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequuntur veritatis et
                                            adipisci beatae dolore id?</p>
                                        <button className="secondary-btn">Explore</button>
                                    </div>
                                    <div className="book-card-c-items book-card-container flex">
                                        <div className="book-card">
                                            <div className="book-img flex">
                                                <img src={Book1} alt="book"/>
                                            </div>
                                            <div className="book-disc flex">
                                                <div className="book-name">
                                                    <h3>The Alchemist</h3>
                                                </div>
                                                <div className="book-author">
                                                    <p className="p2-text">paulo coelho</p>
                                                </div>
                                                <div className="book-price"> 299</div>
                                                <div><a href="#" className="secondary-btn"
                                                    onclick="addtocart('book1.jpg', 'The Alchemist', 'paulo coelho', 299)">Buy</a></div>
                                            </div>
                                        </div>
                                        <div className="book-card">
                                            <div className={Book3} alt="book"/>
                                            </div>
                                            <div className="book-disc flex">
                                                <div className="book-name">
                                                    <h3>Aeklo Jane Re</h3>
                                                </div>
                                                <div className="book-author">
                                                    <p className="p2-text">Dr. Sarad Thakar</p>
                                                </div>
                                                <div className="book-price"> 299</div>
                                                <div><a href="#" className="secondary-btn"
                                                    onclick="addtocart('book3.jpg', 'Aeklo Jane Re', 'Dr. Sarad Thakar', 299)">Buy</a></div>
                                            </div>
                                        </div>
                                        <div className="book-card">
                                            <div className="book-img flex">
                                                <img src={Book3_1} alt="book"/>
                                            </div>
                                            <div className="book-disc flex">
                                                <div className="book-name">
                                                    <h3>Agartha Ni safare</h3>
                                                </div>
                                                <div className="book-author">
                                                    <p className="p2-text">Dr. I K vijaliwala</p>
                                                </div>
                                                <div className="book-price "> 299</div>
                                                <div><a href="#" className="secondary-btn"
                                                    onclick="addtocart('book3-1.jpg', 'Agartha Ni safare', 'Dr. I K vijaliwala', 299)">Buy</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>




                        <div className="container">
                            <div className="book-div-heading ">
                                <h1>What our customer said</h1>
                            </div>
                        </div>
                        <div className="reviews-container">
                            <div className="review-row flex">
                                <div className="review-column">
                                    <div className="review-img">
                                        <img src={My_photo} alt="image"/>
                                    </div>
                                    <div>
                                        <div className="review-text">
                                            <p className="p2-text">
                                                dolor sit amet consectetur adipisicing elit. Architecto itaque debitis minima porro assumenda atque
                                                dolor distinctio perspiciatis omnis sequi ipsa unde fugit, ipsum, tenetur quidem molestias autem in
                                                vero, earum dolores dolorem? Ipsum, officiis.
                                            </p>
                                            <div>
                                                <p className="p2-text cust-name"><span>Gaurang</span> lorem lorem </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="review-column">
                                    <div className="review-img">
                                        <img src={My_photo} alt="image"/>
                                    </div>
                                    <div>
                                        <div className="review-text">
                                            <p className="p2-text">
                                                ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque debitis minima porro assumenda
                                                atque dolor distinctio perspiciatis omnis sequi ipsa unde fugit, ipsum, tenetur quidem molestias autem
                                                in vero, earum dolores dolorem? Ipsum, officiis.
                                            </p>
                                            <div>
                                                <p className="p2-text cust-name"><span>Gaurang</span> lorem lorem </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="review-column">
                                    <div className="review-img">
                                        <img src={My_photo} alt="image"/>
                                    </div>
                                    <div>
                                        <div className="review-text">
                                            <p className="p2-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque debitis minima porro
                                                assumenda atque dolor distinctio perspiciatis omnis sequi ipsa unde fugit, ipsum, tenetur quidem
                                                molestias autem in vero, earum dolores dolorem? Ipsum, officiis.
                                            </p>
                                            <div>
                                                <p className="p2-text cust-name"><span>Gaurang</span> lorem lorem </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>


                        <section className="offer">
                            <div className="offer-container container padding-1 flex">
                                <div className="row-1 flex">
                                    <div className="offer-banner-1">
                                        <h3>carzy deal</h3>
                                        <h2>Buy 1 Get 1 free </h2>
                                        <p className="p3-text"> on any educational book</p>
                                        <button className="secondary-btn">Learn More</button>
                                    </div>
                                    <div className="offer-banner-2">
                                        <h3>carzy deal</h3>
                                        <h2>Get Full pack </h2>
                                        <p className="p3-text"> purchase any series of book at 40% off</p>
                                        <button className="secondary-btn">Get the deal</button>
                                    </div>
                                </div>
                                <div className="row-2 flex">
                                    <div className="offer-banner-3">
                                        <h3>carzy deal</h3>
                                        <h2>seasonal offer </h2>
                                        <p className="p3-text"> upto 50% off</p>
                                    </div>
                                    <div className="offer-banner-4">
                                        <h3>carzy deal</h3>
                                        <h2>New arrivals</h2>
                                        <p className="p3-text"> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                        <button className="secondary-btn">Explore</button>
                                    </div>
                                    <div className="offer-banner-5">
                                        <h3>Wait end</h3>
                                        <h2>upcoming Book </h2>
                                        <p className="p3-text"> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Footer />
                    </>
                    )
}

                    export default Home
