import React , {useState}from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Shop from './components/Shop';

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }

  const [user , setUser] = useState({name:"" , email:""});
  const [error , setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");
      setUser({
        name: details.name,
        email:details.email
      });
    }
      
    else {
      console.log("");
      setError("Error");
    }
  }   
    
  
  const Logout = () => {
    setUser({name:"", email:""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='wellcome'>
          <h2>Welcome , <span>{user.name}</span></h2>
          <button onClick={Logout} >Logout</button>
          <Shop/>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
