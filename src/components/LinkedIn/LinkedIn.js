import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaExternalLinkAlt, FaCalendarAlt, FaEye } from 'react-icons/fa';
import { BiLike, BiComment } from 'react-icons/bi';
import './linkedin.css';

export const LinkedIn = () => {
  const LINKEDIN_USERNAME = 'prasanna-naik-682956107';
  const LINKEDIN_PROFILE_URL = 'https://in.linkedin.com/in/prasanna-naik-682956107';

// Updated articles with Unsplash images
const articles = [
  {
    id: 1,
    title: 'Web Development Journey: Node.js & React.js',
    description: 'Sharing my experience and insights on building modern web applications using Node.js and React.js. Exploring best practices and real-world implementation strategies.',
    url: 'https://www.linkedin.com/posts/prasanna-naik-682956107_webdevelopment-nodejs-reactjs-activity-7385745798443012096-4FLk?utm_source=share&utm_medium=member_desktop',
    date: '2024-10-20',
    image: 'https://placehold.co/400x200/2563eb/ffffff?text=Node.js+%26+React',
  },
  {
    id: 2,
    title: 'React.js & Cloudflare: Frontend Development',
    description: 'Deep dive into modern frontend development practices with React.js and Cloudflare deployment strategies. Building scalable and performant web applications.',
    url: 'https://www.linkedin.com/posts/prasanna-naik-682956107_reactjs-cloudflare-frontenddevelopment-activity-7380673419693981696-KovA?utm_source=share&utm_medium=member_desktop',
    date: '2024-10-08',
    image: 'https://placehold.co/400x200/0ea5e9/ffffff?text=React+%26+Cloudflare',
  },
  {
    id: 3,
    title: 'React & Redux: State Management',
    description: 'Exploring advanced state management patterns in React applications using Redux. Learn how to build maintainable and scalable React applications.',
    url: 'https://www.linkedin.com/posts/prasanna-naik-682956107_react-redux-webdevelopment-activity-7329198775476854785-HwyD?utm_source=share&utm_medium=member_desktop',
    date: '2024-05-10',
    image: 'https://placehold.co/400x200/7c3aed/ffffff?text=React+Redux',
  },
  {
    id: 4,
    title: 'React & Vite: Modern Frontend Tooling',
    description: 'Leveraging Vite for lightning-fast React development. Understanding modern build tools and their impact on developer experience and application performance.',
    url: 'https://www.linkedin.com/posts/prasanna-naik-682956107_react-vite-frontend-activity-7331223654489358339--cNu?utm_source=share&utm_medium=member_desktop',
    date: '2024-05-15',
    image: 'https://placehold.co/400x200/f59e0b/ffffff?text=Vite+%26+React',
  }
];



  // LinkedIn stats - Update these with your actual stats
  const linkedInStats = {
    connections: '500+',
    followers: '1K+',
    posts: 25,
    articlesPublished: 4
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="linkedin">
      <h5>My Professional Content</h5>
      <h2>LinkedIn Posts & Insights</h2>

      <div className="container linkedin__container">
        {/* LinkedIn Stats Overview */}
        <div className="linkedin__stats-overview">
          <div className="linkedin__profile-header">
            <FaLinkedin className="linkedin__logo" />
            <div className="linkedin__profile-info">
              <h3>Professional Network</h3>
              <a 
                href={LINKEDIN_PROFILE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin__profile-link"
              >
                Visit My LinkedIn Profile <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="linkedin__stats-grid">
            <div className="linkedin__stat-card">
              <h4>{linkedInStats.connections}</h4>
              <p>Connections</p>
            </div>
            <div className="linkedin__stat-card">
              <h4>{linkedInStats.followers}</h4>
              <p>Followers</p>
            </div>
            <div className="linkedin__stat-card">
              <h4>{linkedInStats.posts}</h4>
              <p>Posts</p>
            </div>
            <div className="linkedin__stat-card">
              <h4>{linkedInStats.articlesPublished}</h4>
              <p>Featured</p>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="linkedin__articles">
          <h3 className="linkedin__section-title">Featured Posts</h3>
          <div className="linkedin__articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="linkedin__article-card">
                <div className="linkedin__article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="linkedin__article-overlay">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin__read-more"
                    >
                      View Post <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                
                <div className="linkedin__article-content">
                  <div className="linkedin__article-date">
                    <FaCalendarAlt /> {formatDate(article.date)}
                  </div>
                  
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  
                  <div className="linkedin__article-footer">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin__view-post-btn"
                    >
                      View on LinkedIn
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="linkedin__cta">
          <p>Want to connect and see more of my professional content?</p>
          <a 
            href={`${LINKEDIN_PROFILE_URL}/recent-activity/all/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Posts on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
