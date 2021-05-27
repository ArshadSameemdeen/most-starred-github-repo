import React from 'react'
import './Pagination.css'

const Pagination = ({paginate, loading}) => {
    const pageNumbers = [];

    for (let i = 1; i <= 34; i++) {
        pageNumbers.push(i);
    }

    if (loading){
        return (
            <></>
        )
    }
    
    return (
        <div className="pagination">
            <ul className="pages">
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
