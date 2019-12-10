import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class index extends Component {
    render() {
        const { image_url, title, source_url, id, publisher } = this.props.recipe;
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{ height: '100%' }}>
                    <img
                        src={image_url}
                        alt="recipe"
                        style={{ height: '14rem' }}
                        className="img-card-top"
                    />
                    <div className="card-body">
                        <h6>{title}</h6>
                        <h6 className="text-warning">
                            تهیه شده توسط {publisher}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <Link
                            to={`/recipes/${id}`}
                            className="btn btn-primary"
                        >
                            جزئیات
                            </Link>
                        <a
                            href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mx-2"
                        >
                            لینک دستور
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
