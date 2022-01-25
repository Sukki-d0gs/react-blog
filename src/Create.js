import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Create() {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('sulje')
	const [isPending, setIsPending] = useState(false)
	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()
		const blog = {title, body, author}

		setIsPending(true)

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('Blog Added')
			setIsPending(false)
			navigate('/')
		})
	}

	return (
		<div className='create'>
			<h2>Create a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				>

				</textarea>
				<label>Blog author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="sulje">Sulje</option>
					<option value="not_sulje">Someone else...</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Loading...</button>}
			</form>
		</div>
	)
}