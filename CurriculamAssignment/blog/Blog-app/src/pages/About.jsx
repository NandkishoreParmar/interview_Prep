// src/pages/About.js
const About = () => {
  return (
    <div>
      <h1 className="mb-4">About This Blog</h1>
      <div className="card">
        <div className="card-body">
          <p>
            Welcome to our blog application! This is a simple React-based blog that fetches posts from 
            the DummyJSON API and displays them in an easy-to-read format.
          </p>
          <p>
            You can browse through posts, search for specific topics, and click on any post to read 
            more details about it.
          </p>
          <p>
            This project was created as a demonstration of React routing, API fetching, and state 
            management.
          </p>
          <h5 className="mt-4">Features:</h5>
          <ul>
            <li>Browse all blog posts</li>
            <li>Search posts by title</li>
            <li>View detailed post content</li>
            <li>See post tags and reactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;