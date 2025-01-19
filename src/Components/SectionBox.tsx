import React,{ useState } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle  } from "react-icons/io";

import data from "../Products.json";

function SectionBox() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
  
    const handlePrevClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentIndex < data.products.length - itemsPerPage) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  return (
    <div>
      <svg className="small--hide icon-wave" viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2063.32 4.47852L1977.08 -1.37418C1890.85 -7.22688 1718.37 -18.9323 1545.35 0.203321C1372.33 19.3389 1198.76 69.315 1026.06 70.563C853.359 71.811 681.524 24.3301 509.051 12.6247C336.579 0.919319 163.482 24.3726 76.9387 35.7909L-9.6154 47.826L-11.9848 181.059L74.328 182.594C160.641 184.129 333.267 187.199 505.892 190.269C678.518 193.339 851.144 196.409 1023.77 199.479C1196.4 202.549 1369.02 205.619 1541.65 208.689C1714.27 211.758 1886.9 214.828 1973.21 216.363L2059.52 217.898L2063.32 4.47852Z"
          fill="#facad1"
        ></path>
      </svg>
      <div className='section-head-box'>
        <section className="section-heading">
            <h4>You may also like</h4>
        </section>
        <div className="slider">
        <button
          className="slider-arrow left-arrow"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {data.products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <h5>{product.name}</h5>
                <p className="product-price">₹ {product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
        <button
          className="slider-arrow right-arrow"
          onClick={handleNextClick}
          disabled={currentIndex >= data.products.length - itemsPerPage}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>

      </div>
      <div className='last-wave'>
      <svg className="small--hide icon-wave" viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2063.32 4.47852L1977.08 -1.37418C1890.85 -7.22688 1718.37 -18.9323 1545.35 0.203321C1372.33 19.3389 1198.76 69.315 1026.06 70.563C853.359 71.811 681.524 24.3301 509.051 12.6247C336.579 0.919319 163.482 24.3726 76.9387 35.7909L-9.6154 47.826L-11.9848 181.059L74.328 182.594C160.641 184.129 333.267 187.199 505.892 190.269C678.518 193.339 851.144 196.409 1023.77 199.479C1196.4 202.549 1369.02 205.619 1541.65 208.689C1714.27 211.758 1886.9 214.828 1973.21 216.363L2059.52 217.898L2063.32 4.47852Z" fill="white"></path>
      </svg>
      </div>
    </div>
  );
}

export default SectionBox;
