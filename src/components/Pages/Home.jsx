import React, { Component } from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Header title="ببین و بپز">
                <Link to='/recipes' className="btn btn-secondary btn-lg mt-3">
                    جستجوی دستور غذا
                </Link>
            </Header>
        )
    }
}
