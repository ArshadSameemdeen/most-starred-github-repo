import './List.css'
import React, {useEffect, useState} from 'react'
//import axios from 'axios'
//import Pagination from './Pagination'

const List = ({repos, loading}) => {
    if (loading){
        return (
            <h1>Loading...</h1>
        )
    }
    
    return (
        <body>
            <div className='flex-container'>
                <h1>Github Most Starred Repos</h1>
                {repos.map(repos => (
                        <ul>
                            <li className='list'>
                                <img className='image' src={repos.owner.avatar_url} />
                                <h2 className='header'>{repos.full_name}</h2>
                                <p className='item3'>{repos.description}</p>
                                <div className='clips'>
                                    <p className="item4">Stars: {repos.stargazers_count}</p>
                                    <p className="item5">Issues: {repos.open_issues_count}</p>
                                    <p id="minContainer3">Submitted by {repos.owner.login}</p>
                                </div>
                            </li>
                        </ul>
                ))}
            </div>
            
        </body>
    )
}

export default List


