import React, { useState, useEffect } from 'react'
import RecipeList from '../components/Recipe/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/recipesData';
import Pagination from '../components/Pagination/Pagination';

export default function Recipes() {

    const [recipes] = useState(recipeData)
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);

    // Get current post
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const handleChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const results = recipes.filter(item =>
            item.title.trim().includes(search)
        );
        setSearchResults(results);
    }, [search.length]);


    return (
        <>
            <Search
                search={search}
                handleChange={handleChange}
            />
            <RecipeList
                recipesData={currentRecipes}
            />
            {/* <RecipeList
                recipesData={currentRecipes}
            /> */}

            <div className="container">
                {
                    console.log(searchResults)
                    // console.log(recipes)
                }
                <div className="row d-flex justify-content-center">
                    {searchResults.length >= recipesPerPage &&
                        <Pagination
                            recipePerPage={recipesPerPage}
                            totalRecipes={searchResults.length}
                            paginate={paginate}
                        />
                    }
                </div>
            </div>
        </>
    )

}
