import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(true);
  const [background, setBackground] = useState("#0D929A");

  const handleClickButton1 = () => {
    navigate("/create");
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
  };

  const handleClickButton2 = () => {
    navigate("/");
    setIsButton1Clicked(false);
    setIsButton2Clicked(true);
  };

  useEffect(() => {
    if (window.location.pathname === "/create") {
      setBackground("#0facb4");
    } else {
      setBackground("#0D929A");
    }
  }, []);

  return (
    <div
      style={{
        background: background,
        paddingTop: "5px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        paddingRight: 100,
        height: 50,
      }}>
      <p
        style={{
          color: isButton1Clicked ? "yellow" : "white",
          cursor: "pointer",
        }}
        onClick={handleClickButton1}>
        افزودن کار
      </p>
      <p
        style={{
          color: isButton2Clicked ? "yellow" : "white",
          cursor: "pointer",
        }}
        onClick={handleClickButton2}>
        لیست کار ها
      </p>
    </div>
  );
}
