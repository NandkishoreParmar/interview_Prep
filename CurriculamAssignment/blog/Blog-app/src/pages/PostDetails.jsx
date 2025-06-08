// src/pages/PostDetails.js
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post. Please try again later.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading post details...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  if (!post) {
    return <div className="alert alert-info mt-5">Post not found.</div>;
  }

  return (
    <div>
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back to Posts</Link>
      
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.body}</p>
          <div className="mt-3">
            <h5>Tags:</h5>
            <div>
              {post.tags.map(tag => (
                <span key={tag} className="badge bg-primary me-1">{tag}</span>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <span className="text-muted">Reactions: {post.reactions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;