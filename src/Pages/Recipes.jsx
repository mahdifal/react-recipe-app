import React, { Component } from 'react'
import RecipeList from '../components/Recipe/RecipeList';
import Search from '../components/Search';
import NavBar from '../components/Navbar';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {

    state = {
        recipes: recipeData,
        search: ''
    }


    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

    }

    render() {
        console.log(this.state.recipes)

        return (
            <>
                <NavBar />
                <Search
                    search={this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <RecipeList recipesData={this.state.recipes} />
            </>
        )
    }
}
