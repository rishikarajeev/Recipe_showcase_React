import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import "./MealCategory.css"

function MealCategory() {
  const [category, setCategory] = useState([
    { strCategory: "", strCategoryThumb: "", strCategoryDescription: "" },
  ]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios.get(url).then(({ data }) => {
      console.log(data.categories);
      setCategory(data.categories);
    });
  }, []);
  useEffect(() => {
    category.map((key) => {
      console.log(key.strCategory);
    });
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add a scroll event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const sendData=()=>{
  }

  return (
    <div>
      <Nav sendData={sendData} />

      <div className="recipe-list container-fluid ">
        <>
          <div class="row m-5">
            {/* <div class="row"> */}
            {category.map((key) => (
              <div className="col-md-4 col-md-4 col-md-4 p-2 parallax-container" key={key.id}>
                {/* <ul class="list-group">
            <li class="list-group-item"> */}
                <div
                  class="card"
                  className="  thumbnail card h-100 w-100 "
                  style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                  <img
                    src={key.strCategoryThumb}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{key.strCategory}</h5>
                  </div>
                </div>
                {/* </li>
          </ul> */}
              </div>
            ))}
          </div>
          {/* </div> */}
        </>
      </div>
    </div>
  );
}

export default MealCategory;
