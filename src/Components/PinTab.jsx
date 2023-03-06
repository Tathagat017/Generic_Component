import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./PinTab.css";
export default function PinTab({ length, maxChar, setOtp }) {
  //useRef help in accessing real DOM
  const inputRef = useRef([]);

  const [pinTabLength, setPinTabLength] = useState(() => {
    let array = new Array(length).fill("a");
    return array;
  });

  const [pinTabValue] = useState(new Array(length).fill(""));

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  const handleChange = (event, index) => {
    pinTabValue[index] = event.target.value;
    //change focus only when the maxChar inputs have been filled

    // if (index < length - 1 && inputRef.current[index].value.length === maxChar)

    // both above and below work
    if (index < length - 1 && event.target.value.length === maxChar)
      inputRef.current[index + 1].focus();

    setOtp(pinTabValue.join(""));
  };
  // just to focus on first input box on loading of the page
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div className="pintab">
      {pinTabLength?.map((el, index) => {
        return (
          <input
            maxLength={maxChar}
            key={index}
            className="pinInput"
            ref={(node) => {
              //array[i] = element(input)
              inputRef.current[index] = node;
              //this callback function has access to every node(i.e)to every input tag
            }}
            onChange={(event) => handleChange(event, index)}
          />
        );
      })}
    </div>
  );
}

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
};

PinTab.defaultProp = {
  length: 4,
  maxChar: 1,
};
