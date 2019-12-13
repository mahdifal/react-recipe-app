import React, { Component } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Header title="ببین و بپز">
                <h1>

                    <i className="fas fa-utensils fa-lg" style={{ color: 'red' }}></i>
                </h1>
                <Link to='/recipes' className="btn btn-secondary btn-lg mt-3">
                    جستجوی دستور غذا
                </Link>
            </Header>
        )
    }
}
