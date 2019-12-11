import React, { Component } from 'react'
import Recipe from './index';
import ThemeContext from '../../Context/ThemeContext';

export default class RecipeList extends Component {
    render() {
        const { recipesData } = this.props;
        return (
            <ThemeContext.Consumer>
                {value =>
                    <>
                        <main className={`theme-${value}`} >
                            <div className={`container py-5`}>
                                {/* title  */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 text-center mb-3">
                                        <h1>لیست دستورها</h1>
                                    </div>
                                </div>
                                {/* end of title */}
                                <div className="row">
                                    {recipesData.map(recipe => (<Recipe key={recipe.id} recipe={recipe} />))}
                                </div>
                            </div>
                        </main>
                    </>
                }
            </ThemeContext.Consumer>
        )
    }
}
