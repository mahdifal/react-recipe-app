import React, { Component } from 'react'
import { recipeData } from '../data/recipesData';
import { Link } from 'react-router-dom';
import Lang from '../Utility/Lang';
import Loading from '../components/Loading'
import ThemeContext from '../Context/ThemeContext';

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        this.lang = new Lang;

        const id = this.props.match.params.id;
        this.state = {
            recipe: recipeData,
            id,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1200)
    }

    render() {
        const { loading } = this.state;
        { window.scroll(0, 0) }
        const { recipe, id } = this.state;
        const recipeFilter = recipe.filter(item => item.id === Number(id));
        const { image_url, publisher, source_url, title, ingredients, how_to_make } = recipeFilter[0];
        return (
            <ThemeContext.Consumer>
                {value =>
                    <>
                        {loading &&
                            <div className="d-flex justify-content-center" style={{ marginTop: '20rem' }}>
                                <Loading />
                            </div>

                        }
                        {!loading &&
                            <div className={`container theme-${value}`} style={{ marginTop: '4rem', backgroundColor: 'white' }}>
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
                                                return (<li key={item} className="list-group-item list-group-item-primary">{this.lang.toPersian(item)}</li>)
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-5">
                                        <div className="col-mx-10 my-auto text-center">
                                            <ul className="list-group list-group-flush">
                                                <h3 className="mt-3 mb-4">روش پخت</h3>
                                                {how_to_make.map(item => {
                                                    return (<li key={item} className="list-group-item list-group-item-warning">{this.lang.toPersian(item)}</li>)
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }
                    </>
                }
            </ThemeContext.Consumer>
        )
    }
}
