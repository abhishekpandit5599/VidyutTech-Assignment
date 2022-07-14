import './App.css';
import AllProducts from './components/Screen1/AllProducts';
import { Routes, Route } from "react-router-dom";
import SideNavBar from './components/SideBar/SideNavBar';
import TopNavBar from './components/SideBar/TopNavBar';
import ProductDetail from './components/Screen2/ProductDetail';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <div className="app-container">

          <div>
            <SideNavBar />
          </div>

          <div className="dynamic-content">
            <Routes>
              <Route exact path="/" element={<AllProducts />} />
              <Route exact path="/product-details/:id" element={<ProductDetail />} />
            </Routes>
          </div>
    </div>
    </div>
  );
}

export default App;
