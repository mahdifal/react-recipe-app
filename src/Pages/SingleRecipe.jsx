import React, { Component } from 'react'
import { recipeData } from '../data/tempDetails';
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
    render() {
        console.log(this.state.id)
        console.log(this.state.recipe)
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
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
                                        برگشت به صفحه دستورها
                                    </Link>
                                    <img
                                        src={image_url}
                                        className="d-block -100"
                                        style={{ maxHeight: '30rem' }}
                                        alt="recipe"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h6>{title}</h6>
                                    <h6 className="text-warning">تهیه شده توسط: {publisher}</h6>
                                    <a
                                        href={publisher_url}
                                        target="_blank"
                                        className="btn btn-primary mt-2"
                                        rel="noopener noreferrer"
                                    >
                                        صفحه انتشار دهنده
                                    </a>
                                    <a
                                        href={source_url}
                                        target="_blank"
                                        className="btn btn-success mx-2 mt-2"
                                        rel="noopener noreferrer"
                                    >
                                        صفحه صاحب دستور غذا
                                    </a>
                                    <ul className="list-group mt-4">
                                        <h2 className="mt-3 mb-4">شرح دستور</h2>
                                        {ingredients.map((item, index) => {
                                            return (<li key={index} className="list-group-item">{item}</li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }

            </>
        )
    }
}
