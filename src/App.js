import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Ecomm Project</h1>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/add" Component={AddProduct} />
          <Route path="/update" Component={UpdateProduct} />
        </Routes>

      </BrowserRouter>


      {/*<button>Normal Button</button>
      <Button>Bootstrap Button</Button>*/}
    </div>
  );
}

export default App;
