import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  // dynamic data from api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      
        
          
       

        {
          users.map(user => <Users name={user.name} email={user.email} key={user.id}></Users>)
        }

      </header>
    </div>
  );
}




function Users(props) {
  const { name, email } = props
  return (
    <div className="card text-dark p-5 m-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
}

export default App;
