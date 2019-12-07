import React, { Component } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass='default-food'>
                <h2 className="text-light">
                    متأسفانه این صفحه پیدا نشد!
                </h2>
                <Link to='/recipes' className="btn btn-secondary btn-lg mt-3">
                    جستجوی دستور غذا
                </Link>
            </Header>
        )
    }
}
