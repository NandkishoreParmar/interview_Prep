// src/pages/Home.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center mt-5">Loading posts...</div>;
  }

  return (
    <div>
      <h1 className="mb-4">Blog Posts</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts by title..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="alert alert-info">No posts found matching your search.</div>
      ) : (
        <div className="row">
          {filteredPosts.map(post => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    {post.body.length > 100 
                      ? `${post.body.substring(0, 100)}...` 
                      : post.body}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {post.tags.map(tag => (
                        <span key={tag} className="badge bg-secondary me-1">{tag}</span>
                      ))}
                    </div>
                    <Link to={`/post/${post.id}`} className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;