import logo from './logo.svg';
import './App.css';
import { filterData, apiUrl } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Container from './components/Container';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';// To use it we have to install npm i react-toastify and will import first in index js then in this
function App() {

  const [courses, setCourses] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      console.log(output.data);

    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();//Because the data will require and we doesn't need any on click function to call it
  }, []);
  return (
    <div className='wrapper'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='filter'>
        <Filter filterData={filterData} category={category} setCategory={setCategory} >

        </Filter>
      </div>
      <div className='content'>
        {
          loading ? <Spinner></Spinner> : <Container courses={courses} category={category}></Container>
        }
      </div>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
