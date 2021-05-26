import React from 'react'
import './Pagination.css'

const Pagination = ({paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= 30; i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className="pagination">
        <ul className="list">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Pagination
