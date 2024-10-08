import { useState } from "react";
import { OtpInput } from "./otp";


export const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        const { value } = event.target;
        // Allow only numeric values
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // Phone number validation
        if (phoneNumber.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Simulate sending OTP (replace this with actual API call)
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        // Simulate OTP submission
        console.log("OTP Submitted:", otp);
        alert(`Login Successful with OTP: ${otp}`);
    };

    return (
        <div style={{ display: "flex" }}> 
            <div style={{width:"1000px",heigth:"100%"}}>
                <img src="data:image/jpeg;base64,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" alt="" 
                 style={{width:"1000px",heigth:"100%"}} />
            </div>
            <div style={{textAlign:"center"}}>
                <h1>Login or Sign Up</h1>
                {!showOtpInput ? (
                    <form onSubmit={handlePhoneSubmit}>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumber}
                            maxLength="10"
                            placeholder="Enter Phone Number"
                            aria-label="Phone Number Input"
                            style={{ padding: "10px",marginTop:"200px" ,marginLeft:"200px"}}
                        />
                        
                        <button type="submit" style={{ padding: "10px 20px", backgroundColor:"black",color:"white"}}>
                            Submit
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>Enter the OTP sent to phone number :</p>
                        <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                    </div>
                )}
            </div>
        </div>
    );
};
