import './List.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const List = () => {
    const url = 'https://api.github.com/search/repositories?q=created:>'+getCurrentDate()+'&sort=stars&order=desc'
    const [persons, setPersons] = useState([]);

    function getCurrentDate(){
        var date = new Date();
        date.setDate(date.getDate() -30);
        return date.toISOString().split('T')[0];
    }

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPersons(res.data.items);
        })
    }, [url])

        return (
            <body>
                <div className='flex-container'>
                    <h1>Github Most Starred Repos</h1>
                    {persons.map(person => (
                            <ul>
                                <li className='list'>
                                    <img className='image' src={person.owner.avatar_url} />
                                    <h2 className='header'>{person.full_name}</h2>
                                    <p className='item3'>{person.description}</p>
                                    <div className='clips'>
                                        <p className="item4">Stars: {person.stargazers_count}</p>
                                        <p className="item5">Issues: {person.open_issues_count}</p>
                                        <p id="minContainer3">Submitted by {person.owner.login}</p>
                                    </div>
                                </li>
                            </ul>
                    ))}
                </div>
                
            </body>
        )
    }

export default List


