import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Handle fetch product API
  const fetchAllProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    if (response.status === 200) {
      setIsLoading(false);
      setAllProducts(response.data);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="main-container">
      {isLoading ? (
        <Spinner width="40px" />
      ) : (
        <div className="inner-container">
          {allProducts &&
            allProducts.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={() => navigate(`/product-details/:${e.id}`)}
                  className="product-card"
                >
                  <div className="product-img">
                    <img src={e.image} alt="" />
                    <div className="card-title">
                      <h4>
                        {e.title.length > 50 ? e.title.slice(0, 50) : e.title}
                      </h4>
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-des">
                      {e.description.length > 100
                        ? e.description.slice(0, 100) + `...`
                        : e.description}
                    </div>
                    <div className="card-list-wrap">
                      <div className="card-category">
                        Category : <span>{e.category}</span>
                      </div>
                      <div className="card-price">
                        Price : <span>₹ {e.price}</span>
                      </div>
                      <div className="card-rate">
                        Rating : <span>{e.rating.rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
