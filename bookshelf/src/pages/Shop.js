import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Filter from "../cover/filter.png";
import Adv1 from "../cover/adv1.jpg";
import rating from "../cover/rating.png";
import share from "../cover/share.png";
import fav_64 from "../cover/favorite-64.png";
import cart from "../cover/cart.svg";


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/books/")
        .then((res) => res.json()
        )
        .then((data) =>{setBooks(data)
         console.log(data)   
         console.log(__dirname)
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <NavBar />
      <section className="s-shop-section">
        <div className="container s-shop-container">
          <div className="s-shop-content">
            <div className="s-shop-heading flex ">
              <h1>Books</h1>
            </div>
            <div className="s-shop-area">
              <div className="s-shop-items">
                <div className="s-shop-items-head flex">
                  <div className="left">
                    <p className="p2-text">12 books are listed</p>
                  </div>
                  <div className="right flex">
                    <div className="s-sort">
                      <div className="sort-btn">
                        default sort &nbsp; <span>+</span>
                      </div>
                      <div className="sort-content flex">
                        <a href="#">Price</a>
                        <a href="#">Most viewd</a>
                        <a href="#">Best selling</a>
                        <a href="#">Trending</a>
                        <a href="#">New arrival</a>
                      </div>
                    </div>
                    <div id="filter-icon">
                      <img src={Filter} alt="filter" />
                    </div>
                  </div>
                </div>
                <div className="s-book-container flex">
                  {books &&

                    books.map((ele, index) => (
                      <div className="s-book-card" key={ele?.id}>
                        <div className="s-book-card-img flex">
                          <img src={"http://127.0.0.1:8000/".slice(0,-1)+ele?.cover} alt="book-img" />
                          
                        </div>
                        <div className="s-book-card-disc flex">
                          <p className="p3-text book-c">{ele?.category?.name}</p>
                          <div className="book-n">{ele?.title}</div>
                          <p className="p3-text book-w">{ele?.author?.name}</p>
                          <div className="rating-img">
                            <img src={rating} alt="rating" />
                            <span>{ele?.rating}</span>
                          </div>
                          <div className="book-p">Rs. {ele?.price}</div>
                          <div className="s-book-card-btn">
                            <div>
                              <a href="#">
                                <img src={share} alt="" />
                              </a>
                            </div>
                            <div onclick="addtofav('adv1.jpg','The Black Thunder','Riley Peyton',399)">
                              <a href="#">
                                <img src={fav_64} alt="like" />
                              </a>
                            </div>
                            <div onclick="addtocart('adv1.jpg','The Black Thunder','Riley Peyton',399)">
                              <a href="#">
                                <img src={cart} alt="add to cart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex s-shop-filter">
                <div className="s-sidebar-title">Filter</div>
                <div className="summary-box">
                  <div className="s-summary">
                    <input type="checkbox" name="" id="featured" />
                    <label for="featured">
                      <span>Authors</span>
                      <i>+</i>
                    </label>
                    <div className="s-summary-items">
                      <ul>
                        <li>
                          <input type="checkbox" id="m1" />
                          <label for="m1">
                            <a href=""> Chetan bhagat</a>
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="m2" />
                          <label for="m2">Agatha Christie</label>
                        </li>
                        <li>
                          <input type="checkbox" id="m3" />
                          <label for="m3">Dr.Sarad Thakar</label>
                        </li>
                        <li>
                          <input type="checkbox" id="m4" />
                          <label for="m4">Amish Tripathi</label>
                        </li>
                        <li>
                          <input type="checkbox" id="m5" />
                          <label for="m5">Jules Verne</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="summary-box">
                  <div className="s-summary">
                    <input type="checkbox" name="" id="cat" />
                    <label for="cat">
                      <span>category</span>
                      <i>+</i>
                    </label>
                    <div className="s-summary-items">
                      <ul>
                        <li>
                          <input type="checkbox" id="n1" />
                          <label for="n1">
                            <a href=""> adventures</a>
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="n2" />
                          <label for="n2">science & fiction</label>
                        </li>
                        <li>
                          <input type="checkbox" id="n3" />
                          <label for="n3">Romantic</label>
                        </li>
                        <li>
                          <input type="checkbox" id="n4" />
                          <label for="n4">horrer</label>
                        </li>
                        <li>
                          <input type="checkbox" id="n5" />
                          <label for="n5">biography</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="summary-box">
                  <div className="s-summary">
                    <input type="checkbox" name="" id="rat" />
                    <label for="rat">
                      <span>rating</span>
                      <i>+</i>
                    </label>
                    <div className="s-summary-items">
                      <ul>
                        <li>
                          <input type="checkbox" id="s1" />
                          <label for="s1">
                            <a href="">5 star</a>
                          </label>
                        </li>
                        <li>
                          <input type="checkbox" id="s2" />
                          <label for="s2">4 star</label>
                        </li>
                        <li>
                          <input type="checkbox" id="s3" />
                          <label for="s3">3 star</label>
                        </li>
                        <li>
                          <input type="checkbox" id="s4" />
                          <label for="s4">2 star</label>
                        </li>
                        <li>
                          <input type="checkbox" id="s5" />
                          <label for="s5">1 star</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
