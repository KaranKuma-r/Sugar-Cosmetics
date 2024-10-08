import { useState, useEffect } from "react";
import { imageList, productData  } from './data'; // Ensure correct imports
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import C_images from '/Image_Folder/C_images.jpg';
import { FaRegHeart } from "react-icons/fa";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0); // For product slider
  
  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };
  
  // Product slider functions
  const nextImages = () => {
    setProductIndex((prevIndex) => (prevIndex + 4) % productData.length);
  };

  const prevImages = () => {
    setProductIndex((prevIndex) => (prevIndex - 4 + productData.length) % productData.length);
  };

  // useEffect for automatic slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="homediv">
      {/* Main Image Slider */}
      <div className="images_div_list">
        <img src={imageList[currentIndex].image1} alt="Slider" className="image_main_div" />
        <button className="right_button" onClick={nextSlide}><ArrowForwardIcon /></button>
        <button className="left_button" onClick={prevSlide}><ArrowBackIcon /></button>
      </div>

      {/* Bestsellers Section */}
      <div className="center_div">
        <img src={C_images} alt="Bestsellers" />
        <p className="bestsellers"><b>BESTSELLERS</b></p>

        {/* Product List Slider */}
        <div className="mid_div">
          {productData.slice(productIndex, productIndex + 4).map((product, index) => (
            <div key={index} className="product_slider">
              <div>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p><b>{product.price}</b></p>
                <button className="map_button"><FaRegHeart /></button>
                <button className="map_items">Choose Items</button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls for Products */}
        <div className="mid_div_left_button">
          <button onClick={prevImages}><ArrowBackIcon /></button>
        </div>
        <div className="mid_div_right_button">
          <button onClick={nextImages}><ArrowForwardIcon /></button>
        </div>
      </div>
    </div>
  );
};
