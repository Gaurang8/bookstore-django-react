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
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");

  const categories = [
    { id: 1, name: "biography" },
    { id: 2, name: "horror" },
    { id: 3, name: "Science & Fiction" },
    { id: 4, name: "Adventures" },
    { id: 5, name: "Romance" },
    { id: 6, name: "Entertainments" },
    { id: 7, name: "Comics" },
  ];


  useEffect(() => {
    const categoryFilterString = categoryFilter.join(",");

    fetch(
      `http://localhost:8000/books/?category=${categoryFilter}&rating=${ratingFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, [categoryFilter, ratingFilter]);

  const handleCategoryChange = (categoryName) => {
    if (categoryFilter.includes(categoryName)) {
      setCategoryFilter(
        categoryFilter.filter((category) => category !== categoryName)
      );
    } else {
      // If the category is not selected, add it
      setCategoryFilter([...categoryFilter, categoryName]);
    }
  };

  useEffect(() => {
    try {
      fetch("http://localhost:8000/books/")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          console.log(data);
          console.log(__dirname);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleAddtoCart = async (id) => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      try {
        const response = await fetch(
          `http://localhost:8000/cart/cartdetails/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              book: id,
              quantity: 1,
            }),
          }
        );
        console.log(response);
        if (response.ok) {
          alert("Added to cart");
        } else {
          alert("Something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please login to add to cart");
    }
  };

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
                  {books ?
                    (books.map((ele, index) => (
                      <div className="s-book-card" key={ele?.id}>
                        <div className="s-book-card-img flex">
                          <img
                            src={
                              "http://127.0.0.1:8000/".slice(0, -1) + ele?.cover
                            }
                            alt="book-img"
                          />
                        </div>
                        <div className="s-book-card-disc flex">
                          <p className="p3-text book-c">
                            {ele?.category?.name}
                          </p>
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
                            <div onClick="addtofav('adv1.jpg','The Black Thunder','Riley Peyton',399)">
                              <a href="#">
                                <img src={fav_64} alt="like" />
                              </a>
                            </div>
                            <div>
                              <a
                                href="#"
                                onClick={() => {
                                  console.log(ele?.id);
                                  handleAddtoCart(ele?.id);
                                }}
                              >
                                <img src={cart} alt="add to cart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )))
                    : (<h1 style={{ textAlign: "center" }}>No Books</h1>)}
                </div>
              </div>
              <div className="flex s-shop-filter">
                <div className="s-sidebar-title">Filter</div>
          

                <div className="summary-box">
                  <div className="s-summary">
                    <input type="checkbox" name="" id="cat" />
                    <label htmlFor="cat">
                      <span>category</span>
                      <i>+</i>
                    </label>
                    <div className="s-summary-items">
                      <ul>
                        {categories.map((category) => (
                          <li key={category.id}>
                            <input
                              type="checkbox"
                              id={`cat-${category.id}`}
                              onChange={() =>
                                handleCategoryChange(category.name)
                              }
                              checked={categoryFilter.includes(category.name)}
                            />
                            <label htmlFor={`cat-${category.id}`}>
                              <a href="">{category.name}</a>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="summary-box">
                  <div className="s-summary">
                    <input type="checkbox" name="" id="rat" />
                    <label htmlFor="rat">
                      <span>rating</span>
                      <i>+</i>
                    </label>
                    <div className="s-summary-items">
                      <ul>
                        <li>
                          <input type="radio" id="s1" name="rating" onClick={()=>{setRatingFilter(5)}} />
                          <label htmlFor="s1">
                            <a href="">5 star</a>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="s1" name="rating" onClick={()=>{setRatingFilter(4)}}/>
                          <label htmlFor="s2">4 star</label>
                        </li>
                        <li>
                          <input type="radio" id="s1" name="rating" onClick={()=>{setRatingFilter(3)}} />
                          <label htmlFor="s3">3 star</label>
                        </li>
                        <li>
                          <input type="radio" id="s1" name="rating" onClick={()=>{setRatingFilter(2)}}/>

                          <label htmlFor="s4">2 star</label>
                        </li>
                        <li>
                          <input type="radio" id="s1" name="rating" onClick={()=>{setRatingFilter(1)}}/>

                          <label htmlFor="s5">1 star</label>
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
