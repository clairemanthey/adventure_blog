import React from "react"
import "../app.css"

function Footer() {
	return(
	 <section className="footer__section">
	   <article className="footer__article">
	   	<h3 className="footer__header">See My Work</h3>
	   	<ul className="footer__list">
	   	  <li><a>Website</a></li>
	   	  <li><a>Codepen</a></li>
	   	  <li><a>Github</a></li>
	   	</ul>
	   </article>
	   <article className="footer__article">
	   	<h3 className="footer__header">Contact</h3>
	   	<ul className="footer__list">
	   	  <li>email</li>
	   	  <li><a>LinkedIn</a></li>
	   	  <li><a>Twitter</a></li>
	   	</ul>
	   </article>
     </section>
	)
}

export default Footer