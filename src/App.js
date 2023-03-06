import React, { useState } from "react";
import PinTab from "./Components/PinTab";
export default function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <PinTab length={4} maxChar={1} setOtp={setOtp} />
      <h1>OTP is {otp}</h1>
    </div>
  );
}
