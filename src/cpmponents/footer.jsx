import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className="Footermain_Firstdiv">
                <p><b>LET`S STAY IN TOUCH</b></p>
                <p>Get the latest beauty tips straight to your inbox. Can`t wait to connect!</p>
                <input type="email" style={{ width: "100%", maxWidth: "600px", padding: "15px", color: "black" }} />
                <button style={{ width: "200px", fontSize: "15px", padding: "15px", background: "black", color: "white" }}>SUBSCRIBE</button>
            </div>
            <div className="footerSecond_div">
                <div className="icon_div">
                    <p className="icon"><MdFacebook /></p>
                    <p className="icon"><FaYoutube /></p>
                    <p className="icon">< FaInstagram /></p>
                    <p className="icon"><FaXTwitter /></p>
                </div>
                <hr />
                <div className="text_store">
                    <div className="store_div">
                        <p className="store">Store</p>
                        <p className="store">Elite</p>
                        <p className="store">Terms & Condition</p>
                        <p className="store">Return</p>
                        <p className="store">FAQs</p>
                        <p className="store">About Us</p>
                    </div>
                </div>
                <hr />
                <div className="mid_footer">
                    <div className="content">
                        <p><b>Get In Touch</b><br /><p>Call us At</p><p>18800-400-900</p></p>
                        <p><b>Support</b><br /><p>hello@sugarcosmetics.com</p> </p>
                        <p><b>Carrers</b><br /><p>We`re hiring!</p> </p>
                        <p><b>Press & Media</b><br /><p>pr@sugarcosmetics.com</p> </p>
                    </div>
                </div>
                <hr />
                <div className="last_div">
                    <div className="div_content">
                        <p><b>GET THE NEW SUGAR APP TODAY!</b><br /><p>Tap into a better shopping experience.</p></p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>


        </>
    );
};
