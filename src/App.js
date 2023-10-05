// App.js
import React, { useState,useEffect } from 'react';
import RecipeList from './Pages/RecipeListt';

import axios from 'axios';
import {Route,Routes} from'react-router-dom'
import MealCategory from './Pages/MealCategory';
import MealOfDay from './Pages/MealOfDay';


function App() {
  return (
  <Routes>
    <Route path="/" element={<RecipeList/>}></Route>

    <Route path="/category" element={<MealCategory/>}></Route>
    <Route path="/mealofday" element={<MealOfDay/>}></Route>

   </Routes>
  )
}

export default App


