import Eyes from '/Image_Folder/Eyes.jpg';
import { eyeslist } from './data.json';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
export const EyesPage = ({addToCart}) => {

    const [sortedEyesList, setSortedEyesList] = useState(eyeslist);

    const sortByPrice = (order) => {
        const sortedList = [...sortedEyesList].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setSortedEyesList(sortedList);
    };


    
    return (
        <>
            <div style={{ width: "100%" }}>
                <img src={Eyes} alt="" style={{ width: "100%", height: "350px" }} />
            </div>
            <div className="parent">
                <div className="child1" style={
                    {
                        marginTop:"50px",
                        paddingLeft:"10px"
                    }
                }>
                    {/* Sort Dropdown */}
                    <select onChange={(e) => sortByPrice(e.target.value)} style={{ padding: '10px', marginBottom: '20px' }}>
                        <option value="asc">Sort by Price: Low to High</option>
                        <option value="desc">Sort by Price: High to Low</option>
                    </select>
                </div>
                <div className="mid-div" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px 20px", paddingTop: "20px" }}>
                    {
                       sortedEyesList.map((product, index) => (
                            <div key={index} className="product_slider" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                                <img src={product.eye1} style={{ width: "400px", height: "300px" }} />
                                <h4>{product.name}</h4>
                                <p><b>{product.price}</b></p>
                                <button className="map_button"><FaRegHeart /></button>
                                <button className="map_items" onClick={()=>addToCart(product)}>Add To Bag</button>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )
}