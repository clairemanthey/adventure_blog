import React from "react"
import HeaderImage from "../../content/assets/header_image.png"
import "../App.css"

function Header() {
	return(
	 <section>
       <img src={HeaderImage} alt="header" className="header_image" />
     </section>
	)
}

export default Header