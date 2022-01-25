import {Link} from "react-router-dom";
import navStyles from './Navbar.module.css'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<h1>Sulje Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" className={navStyles.createButton}>New Blog</Link>
			</div>
		</nav>
	)
}