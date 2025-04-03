import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Book added!');
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                <input type="url" placeholder="Cover Image URL" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default AddBook;
