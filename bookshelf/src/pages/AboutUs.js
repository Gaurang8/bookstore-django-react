import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Jules from "../cover/julesvern.jpeg"
import agatha from "../cover/AgathaChristie.jpeg"
import Chetanb from "../cover/chetanbhagat.jpeg"
import Drsarad from "../cover/drsaradthakar.jpeg"
import Paulo from "../cover/PauloCoelho.jpeg"
import Amit from "../cover/amishtripathi.jpeg"

import heros from "../cover/a-heros.jpg"
import bookicon from "../cover/bookicon.png"
import delivery from "../cover/delivery.png"
import Support_exp from "../cover/supportexp.png"




const AboutUs = () => {
    return (<>
        <NavBar />


        <section className="about-section">

            <div className="about-page-heading flex">
                <h1>About BookShelf</h1>
                <p className="p2-text">Home {">"} About Us</p>
            </div>
            <div className="about-motive container flex">
                <div className="a-motive-dis">
                    <h1 className="about-in-heading">Our Vision</h1>
                    <p className="p-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cupiditate praesentium accusamus
                        atque tempora laudantium aspernatur ut iste maxime sequi corporis quod, reiciendis minima eaque
                        possimus officia porro omnis! Quia quisquam reiciendis odit corporis corrupti!
                    </p>
                </div>
                <div className="a-motive-img">
                    <img src={heros} alt="image" />
                </div>
            </div>
            <div className="about-feature ">
                <div className="container about-feature-in">
                    <h1 className="about-in-heading">Best ever Bookstore</h1>
                    <p className="p-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsum, quos velit odio
                        tempora, deleniti, iusto magnam voluptatem incidunt accusamus inventore commodi sequi molestias.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi consectetur blanditiis iusto
                        totam est voluptate nam?
                    </p>
                </div>
                <div className="a-feature-items container">
                    <div className="a-f-item flex">
                        <div className="a-f-item-img">
                            <img src={bookicon} alt="" />
                        </div>
                        <div className="a-f-item-text">
                            <h4><strong>Popular & New Book</strong></h4>
                            <p className="p2-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, inventore cumque! Saepe,
                                porro!
                            </p>
                        </div>
                    </div>
                    <div className="a-f-item flex">
                        <div className="a-f-item-img">
                            <img src={delivery} alt="" />
                        </div>
                        <div className="a-f-item-text">
                            <h4><strong>Free & Fast Delivery</strong></h4>
                            <p className="p2-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, inventore cumque! Saepe,
                                porro!
                            </p>
                        </div>
                    </div>
                    <div className="a-f-item flex">
                        <div className="a-f-item-img">
                            <img src={Support_exp} alt="" />
                        </div>
                        <div className="a-f-item-text">
                            <h4><strong>9 year old & good contact support</strong></h4>
                            <p className="p2-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, inventore cumque! Saepe,
                                porro!
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="about-app">
                <div className="a-app-info container flex">
                    <h3><strong>Download Our App for better experience</strong></h3>
                    <p className="p2-text">
                        over 70000+ Download
                        and 2500+ daily active user
                    </p>
                    <p className="p2-text">
                        We sell around 40000 on last year
                    </p>
                    <div><button className="secondary-btn">Play Store</button>
                        <button className="secondary-btn">App Store</button></div>
                </div>
            </div>


            <div className="about-author ">
                <div className=" container">
                    <h1 className="about-in-heading">Authors we are connected with</h1>
                </div>
                <div className="a-author-photos container flex">
                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={Chetanb} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Chetan Bhagat
                                <p className="p3-text">14 Books</p>
                            </div>
                        </div>
                    </div>
                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={Drsarad} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Dr. Sarad Thakar
                                <p className="p3-text">24 Books</p>
                            </div>
                        </div>
                    </div>
                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={Jules} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Jules Verne
                                <p className="p3-text">54 Books</p>
                            </div>
                        </div>
                    </div>
                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={Paulo} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Paulo Coelho
                                <p className="p3-text">8 Books</p>
                            </div>
                        </div>
                    </div>

                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={Amit} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Amish Tripathi
                                <p className="p3-text">12 Books</p>
                            </div>
                        </div>
                    </div>
                    <div className="a-authors">
                        <div className="a-author-in">
                            <div className="a-author-in-img">
                                <img src={agatha} alt="photo" />
                            </div>
                            <div className="a-author-in-name">
                                Agatha Christie
                                <p className="p3-text">19 Books</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default AboutUs
