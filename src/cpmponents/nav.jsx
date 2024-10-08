// import { Link } from "react-router-dom"
import logo from '/Image_Folder/Logo.png';
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6"
import { MdFavoriteBorder } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";

import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <div className="NavBar" style={{}}>

                {/* LOGO  BOX */}
                <div className="Nav_Up" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", background: "#000000", padding: "10px 5%" }}>
                    <div style={{ margin: "10px" }}>
                        <Link to="/">
                            <img src={logo} alt="Logo" style={{ maxWidth: "150px", height: "auto" }} />
                        </Link>
                    </div>

                    {/*  SEARCH BOX */}
                    <div className='search_box' style={{ flex: 1, display: "flex", justifyContent: "center", margin: "10px" }}>
                        <input type="text" style={{ width: "100%", maxWidth: "600px", padding: "15px", border: "none", borderRadius: "8px 0 0 8px", background: "rgb(33, 33, 33)", color: "red", outline: "none" }} />
                        <button style={{ border: "none", borderRadius: "0 8px 8px 0", width: "100px", fontSize: "15px" }}><IoIosSearch style={{ fontSize: "15px" }} />Search</button>
                    </div>

                    {/* LOGIN/REGISTER and ICONS */}
                    <div className='Login_Register' style={{ display: "flex", alignItems: "center", gap: "60px" }}>
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <p style={{ color: "white", fontSize: "20px" }}> <FaCircleUser /> Login/Register</p>
                        </Link>

                        {/* Icons */}
                        <div style={{ display: "flex", gap: "20px" }}>
                            <Link to="/whitlist"><MdFavoriteBorder style={{ color: "white", fontSize: "22px" }} /></Link>
                            <Link to="/cartpage"><BsBagFill style={{ color: "white", fontSize: "20px" }} /></Link>
                            <Link to="/dashboard"><BiSolidOffer style={{ color: "white", fontSize: "22px" }} /></Link>
                        </div>
                    </div>
                </div>

                <div className="Nav_Down" style={{ background: "rgb(20, 20, 20)", padding: "10px 5%" }}>
                    <nav>
                        <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between", listStyleType: "none" }}>
                            <li><Link to="/" className="nav-link">SUGAR PLAY</Link></li>


                            {/* EYES NAVBAR DROPDOWN */}

                            <li><Link to="/eyes" className="nav-link">EYES</Link>
                                <ul>
                                    <li><Link to="/" className="nav-link"><b>Eyeliner</b></Link></li>
                                    <li><Link to="/" className="nav-link">Liquid Eyeliner</Link></li>
                                    <li><Link to="/" className="nav-link">Eye Gel</Link></li>
                                    <li><Link to="/" className="nav-link">Pen Eyeliner</Link></li>
                                </ul>
                            </li>

                            {/* LIPS DROPDOWN */}
                            <li><Link to="/" className="nav-link">LIPS</Link>
                                <ul>
                                    <li><Link to="/" className="nav-link"><b>Lipstick</b></Link></li>
                                    <li><Link to="/" className="nav-link">Transfer Proff</Link></li>
                                    <li><Link to="/" className="nav-link">Matte Lipstick</Link></li>
                                    <li><Link to="/" className="nav-link">Caryon Lipstick</Link></li>
                                </ul>
                            </li>

                            {/* FACE DROPDOWN */}
                            <li><Link to="/" className="nav-link">FACE</Link>
                                <ul>
                                    <li><Link to="/" className="nav-link"><b>Foundation && BB Cream</b></Link></li>
                                    <li><Link to="/" className="nav-link">Stick Foundation</Link></li>
                                    <li><Link to="/" className="nav-link">Liquid  Foundation</Link></li>
                                    <li><Link to="/" className="nav-link">BB Cream</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/" className="nav-link">NAILS</Link></li>

                            {/* SKIN DROPDOWN  */}


                            <li><Link to="/" className="nav-link">SKINCARE</Link>
                            <ul>
                                    <li><Link to="/" className="nav-link"><b>Skin Care</b></Link></li>
                                    <li><Link to="/" className="nav-link">Moisture</Link></li>
                                    <li><Link to="/" className="nav-link">Sunscreen</Link></li>
                                    <li><Link to="/" className="nav-link">Day Cream</Link></li>
                                </ul>
                                </li>

                                {/* ACCEROIES DROPDOWN  */}


                            <li><Link to="/" className="nav-link">ACCESORIES</Link>
                            <ul>
                                    <li><Link to="/" className="nav-link"><b>KIT</b></Link></li>
                                    <li><Link to="/" className="nav-link">Eye Brushes</Link></li>
                                    <li><Link to="/" className="nav-link">Face Brushes</Link></li>
                                    
                                </ul></li>


                                {/* GIFTING BRUSHES  */}

                            <li><Link to="/" className="nav-link">GIFTING</Link>
                            <ul>
                                    <li><Link to="/" className="nav-link"><b>Lipstick Sets</b></Link></li>
                                    <li><Link to="/" className="nav-link">Sugar Merch</Link></li>
                                    <li><Link to="/" className="nav-link">Value Sets</Link></li>
                                    
                                </ul>
                                </li>
                            <li><Link to="/" className="nav-link">BESTSELLERS</Link></li>
                            <li><Link to="/" className="nav-link">NEW LAUNCHES</Link></li>
                            <li><Link to="/" className="nav-link">OFFERS</Link></li>


                                {/* BLOG DROPDOWN  */}



                            <li><Link to="/" className="nav-link">BLOG</Link>
                            <ul>
                                    <li><Link to="/" className="nav-link"><b>Makeup</b></Link></li>
                                    <li><Link to="/" className="nav-link">Face</Link></li>
                                    <li><Link to="/" className="nav-link">Eyes</Link></li>
                                    <li><Link to="/" className="nav-link">Brides</Link></li>
                                </ul></li>
                            <li><Link to="/" className="nav-link">KURTI`S CHOICE</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>

            {/* MEDIA QUERIES FOR RESPONSIVENESS */}


        </>
    )
}
