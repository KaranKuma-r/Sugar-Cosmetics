import { useNavigate } from "react-router-dom";


export const CartPage = ({ cart }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <div className="mid-div" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px 20px",margin:"0 20px 0 20px"}}>
                        {cart.map((item, index) => (
                            <li key={index} style={{ margin: '10px 0' }}> {/* Using li for valid HTML structure */}
                                <div className="product_slider" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                                    <img src={item.eye1} style={{ width: "400px", height: "300px" }} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <p><b>${item.price}</b></p>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            )}
            {cart.length > 0 && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            // Handle the checkout logic here
                            navigate('/login')
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );

}