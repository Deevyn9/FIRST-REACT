import React from "react"
import logo from "./react-logo.png"

export default function Header() {
  return (
<header>
          <nav>
              <div className="facts-header">
                  <img src={logo} alt="React logo" />
                  <h2>ReactFacts</h2>
              </div>
            <h3>React Course - Project 1</h3>
    </nav>
      </header>
  )
}