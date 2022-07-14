import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner/Spinner";

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // fetch specifice data from product id
  const fetchDataAPI = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params.id.slice(1)}`
    );
    if (response.status === 200) {
      setIsLoading(false);
      setProductDetails(response.data);
    }
  };

  useEffect(() => {
    fetchDataAPI();
  }, []);

  return (
    <div className="details-main-container">
      {isLoading ? (
        <Spinner width="40px" />
      ) : (
        <>
          {productDetails && (
            <div className="details-card">
              <div className="details-card-img">
                <FontAwesomeIcon
                  onClick={() => navigate(-1)}
                  className="navbar-chat-icon font-3x back-arrow yellow"
                  icon={faArrowLeft}
                />
                <img src={productDetails.image} alt="" />
              </div>
              <div className="details-card-info">
                <div className="details-card-title">
                  <h2>{productDetails.title}</h2>
                </div>
                <div className="details-card-des">
                  {productDetails.description}
                </div>
                <div className="details-card-about">
                  <div className="detils-card-sub-info">
                    Price : <span>₹ {productDetails.price}</span>
                  </div>
                  <div className="detils-card-sub-info">
                    Category : <span>{productDetails.category}</span>
                  </div>
                  {/* <div className='detils-card-sub-info'>Rating : <span>{productDetails.rating.rate}</span></div> */}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductDetail;
