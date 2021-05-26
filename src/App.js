import React, {useEffect, useState} from 'react'
import List from './components/List'
import axios from 'axios'
//import Pagination from './components/Pagination'

function App() {
  const url = 'https://api.github.com/search/repositories?q=created:>'+getCurrentDate()+'&sort=stars&order=desc'
  const [repos, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(10);

  function getCurrentDate(){
    var date = new Date();
    date.setDate(date.getDate() -30);
    return date.toISOString().split('T')[0];
  }

  useEffect(() => {
    const fetchdata = async () => {
        setLoading(true);
        const responce = await axios.get(url);
        setRepo(responce.data.items);
        setLoading(false);
    }

    console.log(repos);
    fetchdata();
  }, [url])

  return (
      <div className="container">
        <List repos={repos} loading={loading}/>
      </div>
  );
}

export default App;
