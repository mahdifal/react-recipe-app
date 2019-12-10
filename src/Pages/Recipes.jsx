import React, { useState } from 'react'
import RecipeList from '../components/Recipe/RecipeList';
import Search from '../components/Search';
import NavBar from '../components/Navbar';
import { recipeData } from '../data/recipesData';
import Pagination from '../components/Pagination/Pagination';

export default function Recipes() {

    const [recipes] = useState(recipeData)
    const [search] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);

    // Get current post
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <>
            <NavBar />
            <Search
                search={search}
                handleChange={() => handleChange}
                handleSubmit={() => handleSubmit}
            />

            <RecipeList
                recipesData={currentRecipes}
            />

            <div className="container">
                <div className="row d-flex justify-content-center">

                    <Pagination
                        recipePerPage={recipesPerPage}
                        totalRecipes={recipes.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </>
    )

}
