import React, {useEffect, useState} from 'react'
import List from './components/List'
import axios from 'axios'
import Pagination from './components/Pagination'

function App() {
  var pageNumber = 1
  var [url, setUrl] = useState('https://api.github.com/search/repositories?q=created:>'+getCurrentDate()+'&sort=stars&order=desc'+pageNumber);
  const [repos, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCurrentDate(){
    var date = new Date();
    date.setDate(date.getDate() -30);
    return date.toISOString().split('T')[0];
  }

  useEffect(() => {
    const fetchdata = async () => {
        setLoading(true);
        var newURL = url
        const responce = await axios.get(newURL);
        setRepo(responce.data.items);
        setLoading(false);
    }

    console.log(repos);
    fetchdata();
  }, [url])

  //change page
  const paginate = (number) =>{
    pageNumber = number;
    setUrl('https://api.github.com/search/repositories?q=created:>'+getCurrentDate()+'&sort=stars&order=desc&page='+pageNumber);
    console.log(url);
  }
  

  return (
      <div className="container">
        <List repos={repos} loading={loading}/>
        <Pagination paginate={paginate} loading={loading}/>
      </div>
  );
}

export default App;
