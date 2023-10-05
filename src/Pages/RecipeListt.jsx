// RecipeList.js
import React, { useState, useEffect } from "react";

import "./RecipeCard.css";
import "./banner.css";

import axios from "axios";
import Nav from "./Nav";

function RecipeListt() {
  const [recipes, setRecipes] = useState([
    { name: "", description: "", image: "", ingredients: "", steps: "" },
  ]);
  const [msg, setMsg] = useState({});
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const url = "https://recipesapi.kutaybekleric.com/recipes";
    axios.get(url).then(({ data }) => {
      console.log(data);
      setRecipes(data);
    });
  }, []);
  const filterData = (searchTerm) => {
    const filteredData = recipes.filter((item) => {
      if (item.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        return item;
      }
      //item.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    // setFilteredData(filteredData);
    setRecipes(filteredData);
    console.log(filteredData);
  };

  const sendData = (data) => {
    console.log("data...", data);
    setMsg(data);
    filterData(data);
  };


  return (
    <div >
      <Nav sendData={sendData} />
      <div className=" banner">
        <img
          src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg"
          alt="..."
        ></img>
        <div>
          <p class="banner-text">
            At FlavourFusion, we're passionate about the art of cooking and the
            joy of sharing delicious meals. Whether you're a seasoned chef or a
            kitchen beginner, you've come to the right place to explore a world
            of mouthwatering recipes, culinary tips, and food adventures.
          </p>
        </div>
      </div>
      <div className="recipe-list container-fluid">
        <>
          <div class="row m-5">
            {/* <div class="row"> */}
            {recipes.map((recipe) => (
              <div className="col-md-4 col-md-4 col-md-4 p-2" >
                {/* <ul class="list-group">
              <li class="list-group-item"> */}
                <div
                key={recipe.id}
                  class="card"
                  className=" card h-100"
                  style={{ height: "50" }}
                >
                  <img src={recipe.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{recipe.name}</h5>
                    <p class="card-text">
                      <p>Ingredients: {recipe.ingredients}</p>
                    </p>
                    <p>Ingredients: {recipe.steps}</p>
                    <a href="#" class="btn btn-primary">
                      View Detail
                    </a>
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

export default RecipeListt;
