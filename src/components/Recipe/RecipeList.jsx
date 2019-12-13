import React, { Component } from 'react'
import Recipe from './index';
import ThemeContext from '../../Context/ThemeContext';
import Loading from '../Loading'

export default class RecipeList extends Component {

    state = {
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }

    render() {
        const { recipesData } = this.props;
        const { loading } = this.state;
        return (
            <ThemeContext.Consumer>
                {value =>
                    <>
                        <main className={`theme-${value}`} >
                            <div className={`container py-5`}>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 text-center mb-3">
                                        <h1>لیست غذاها</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    {loading && <Loading />}
                                    {!loading &&
                                        recipesData.map(recipe => (<Recipe key={recipe.id} recipe={recipe} />))
                                    }
                                </div>
                            </div>
                        </main>
                    </>
                }
            </ThemeContext.Consumer>
        )
    }
}
