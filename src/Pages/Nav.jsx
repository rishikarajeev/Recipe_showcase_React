import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


function Nav(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchMeal=()=>{
    props.sendData(searchTerm)
  }


 
  const editChange=(e)=>{
    
 setSearchTerm(e.target.value);
 console.log(e.target.value);

  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Flavour Fusion
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/category">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/mealofday">
                  Meal Of Day
                </a>
              </li>
   
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={editChange}
              />
              <button class="btn btn-outline-success" type="submit" onClick={()=>searchMeal()}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
