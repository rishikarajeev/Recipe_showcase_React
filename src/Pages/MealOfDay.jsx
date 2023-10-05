import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import "./MealCategory.css"

function MealOfDay() {
    const [recipes, setRecipes] = useState([{name:"",description:"",image:"",ingredients:"",steps:""}]);

    useEffect(() => {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      axios.get(url).then(({ data }) => {
        console.log(data);
        setRecipes(data.meals);
      });
    },[]);
    return (
      <div>
        <Nav/>
      
        <div className="recipe-list container">
       
            <>
            <div class="row m-5">
             {/* <div class="row"> */}
             {recipes.map((recipe) => (
              <div className="col p-2" key={recipe.id}   >
              {/* <ul class="list-group">
                <li class="list-group-item"> */}
                  <div class="card" className=" card h-100" style={{height:"30"}}>
                    <img src={recipe.strMealThumb} class="card-img-top"  alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{recipe.strMeal}</h5>
                      <p class="card-text">
                      <p>Ingredients: {recipe.strArea}</p>
                      </p>
                      <p>Ingredients: {recipe.strInstructions}</p>
                      <p>Ingredients: {recipe.strYoutube}</p>
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

export default MealOfDay