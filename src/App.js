import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import ConfessionList from './components/ConfessionList';
import AddConfession from './components/AddConfession';
import Loading from './components/Loading'

import './App.css';

function App() {


  const [confessions, setConfessions] = useState([]);
  const [route, setRoute] = useState("home");
  const [n, setN] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    setRoute("loading")
    fetch("https://confusbackend.herokuapp.com/getConfessions", requestOptions)
      .then(response => response.json())
      .then(result => {
        setConfessions(result);
        setRoute("home")
      })
      .catch(error => console.log('error', error));
  }, [n])


  if (route == "home") {
    return (
      <div className="App">
        <Nav />
        <ConfessionList confessions={confessions} />
        <div>
          <div className="floating-container" onClick={() => setRoute("form")}>
            <div className="floating-button">+</div>

          </div>

        </div>
      </div>
    );
  }
  else if (route == "loading") {
    return (
      <div>
        <Nav />
        <div className='confession-list-container'>
          <Loading />
          <Loading />
        </div>
      </div>
    )
  }
  else if (route == "form") {
    return (
      <div className="App">
        <Nav setRoute={setRoute} />
        <AddConfession setRoute={setRoute} setN={setN} />
      </div>
    )
  }

}

export default App;
