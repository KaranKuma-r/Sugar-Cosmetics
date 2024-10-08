import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setotp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])
    const navigate = useNavigate();

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])
    const handleChange = (index, e) => {

        const value = e.target.value;
        if (isNaN(value)) return;

        //Allow only one input
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1)
        setotp(newOtp);

        //Submit Trigger
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length)
            onOtpSubmit(combinedOtp)



        // Move to next input if current field is filled.
        if (value && index < length - 1 && inputRefs.current[index + 1])
            inputRefs.current[index + 1].focus()

    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1)

        //optional

        if(index > 0 && !otp[index -1]){
            inputRefs.current[otp.indexOf("")].focus()
        }

    }

   

return (
    <div style={{display:"block"}}>
        {
            otp.map((value, index) => {
                return (
                    <input key={index}
                        type="text"
                        value={value}
                        ref={(input) => (inputRefs.current[index] = input)}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        className="otpInput"
                    />
                )
            })
        }
        <button onClick={()=>navigate('/cartpage')} style={{textAlign:"center",width:"100%",maxWidth:"40%",backgroundColor:"black",color:"white",padding:"10px"}}>Verify Otp</button>
    </div>
)
}