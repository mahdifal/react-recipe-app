import React, { Component } from 'react'
import Recipe from './index';

export default class RecipeList extends Component {
    render() {
        const { recipesData } = this.props;
        return (
            <>
                <div className="container py-5">
                    {/* title  */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center mb-3">
                            <h1>لیست دستورها</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className="row">
                        {recipesData.map(recipe => (<Recipe key={recipe.recipe_id} recipe={recipe} />))}
                    </div>
                </div>
            </>
        )
    }
}
