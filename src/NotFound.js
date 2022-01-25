import {Link, useLocation} from "react-router-dom";

export default function NotFound() {
	const location = useLocation();

	return (
		<div className='not-found'>
			<h2>Sorry</h2>
			<p><code>{location.pathname}</code> cannot be found!</p>
			<Link to='/'>Back to Home page</Link>
		</div>
	)
}