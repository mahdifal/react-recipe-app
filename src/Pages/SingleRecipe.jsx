import React, { Component } from 'react'
import { recipeData } from '../data/recipesData';
import NavBar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipe: recipeData,
            id,
            loading: false
        }
    }

    async componentDidMount() {
        console.log(this.state.id)
        const { recipe, id } = this.state;
        const recipeMap = recipe.filter(item => item.id === Number(id));
        console.log(recipeMap)
        // recipe.filter(recipeItem => recipeItem);
        // const url = ? call api
        // https://someting.com/recipe_id=? this.state.id

        // try{
        //     const response = await fetch(url);
        //     const responseData = await response.json(response);
        //     this.setState({
        //         recipe: responseData.recipe,
        //         loading: 
        //     })
        // } catch(error) {
        //     console.log(error)
        // }
    }

    render() {
        const { recipe, id } = this.state;
        const recipeFilter = recipe.filter(item => item.id === Number(id));
        const { image_url, publisher, source_url, title, ingredients, how_to_make } = recipeFilter[0];
        return (
            <>
                <NavBar />
                {this.state.loading ?
                    (< div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <h2 className="text-orange text-center">
                                    در حال لود شدن ...
                            </h2>
                            </div>
                        </div>
                    </div>) : (
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <Link
                                        to="/recipes"
                                        className="btn btn-warning mb-5"
                                    >
                                        برگشت به صفحه غذاها
                                    </Link>
                                    <img
                                        src={image_url}
                                        className="img-fluid d-block -100"
                                        style={{ maxHeight: '30rem' }}
                                        alt="recipe"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>{title}</h2>
                                    <h6 className="text-warning">تهیه شده توسط: {publisher}</h6>
                                    <a
                                        href={source_url}
                                        target="_blank"
                                        className="btn btn-success mx-2 mt-2"
                                        rel="noopener noreferrer"
                                    >
                                        صفحه صاحب دستور غذا
                                    </a>
                                    <ul className="list-group mt-4">
                                        <h4 className="mt-3 mb-4">مواد لازم</h4>
                                        {ingredients.map(item => {
                                            return (<li key={item.id} className="list-group-item list-group-item-primary">{item}</li>)
                                        })}
                                    </ul>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-5">
                                    <div className="col-mx-10 my-auto text-center">
                                        <ul className="list-group list-group-flush">
                                            <h3 className="mt-3 mb-4">روش پخت</h3>
                                            {how_to_make.map(item => {
                                                return (<li className="list-group-item list-group-item-warning">{item}</li>)
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </>
        )
    }
}
