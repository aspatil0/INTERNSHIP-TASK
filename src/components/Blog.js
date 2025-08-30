import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Design",
      excerpt: "Discover how artificial intelligence is revolutionizing the design industry and what it means for designers.",
      image: "/b1.jpg",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "10 Design Trends for 2024",
      excerpt: "Stay ahead of the curve with these emerging design trends that will dominate the creative landscape.",
      image: "/b2.jpg",
      date: "March 10, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Mastering Color Theory in Digital Design",
      excerpt: "Learn the fundamentals of color theory and how to apply them effectively in your digital designs.",
      image: "/b3.jpg",
      date: "March 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="blog section" style={{backgroundColor: '#000000'}}>
      <div className="container">
        <h2 className="section-title">
          Stay Inspired with Our <span className="highlight">Latest Insights</span>
        </h2>
        <p className="section-description">
          Dive into our blog for the latest trends, tips, and insights in the world of design and AI technology. Whether you're looking for inspiration, tutorials, or industry news, our articles are crafted to keep you informed and inspired.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              
              <div className="blog-content-container">
              <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <br/>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
               
              </div>
            </article>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="#blog" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
