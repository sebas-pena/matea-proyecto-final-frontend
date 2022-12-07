import React from "react"
import { Link } from "react-router-dom"
import "./SimpleButton.css"
const SimpleButton = ({
  fontSize = 14,
  background = "primary",
  children,
  height = 30,
  onClick,
  asLink,
  to,
  paddingX = 10,
}) => {
  const buttonStyle = {
    height,
    fontSize,
    padding: `0 ${paddingX}px`,
  }
  const linkStyle = {
    display: "flex",
    alignItems: "center",
  }
  return asLink ? (
    <Link
      to={to}
      className={`simple-button ${background}`}
      style={{ ...buttonStyle, ...linkStyle }}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`simple-button ${background}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SimpleButton
