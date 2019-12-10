import React from 'react'
import { Link } from 'react-router-dom';

export default function Pagination({ recipePerPage, totalRecipes, paginate }) {

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalRecipes / recipePerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <Link to="#-" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
