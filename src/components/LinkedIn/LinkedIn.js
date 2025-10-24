import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaExternalLinkAlt, FaCalendarAlt, FaEye } from 'react-icons/fa';
import { BiLike, BiComment } from 'react-icons/bi';
import './linkedin.css';

export const LinkedIn = () => {
  const LINKEDIN_USERNAME = 'prasanna-naik-682956107'; // Update with your LinkedIn username
  const LINKEDIN_PROFILE_URL = 'https://in.linkedin.com/in/prasanna-naik-682956107';

  // Manual article data - Update this with your actual LinkedIn articles
  const articles = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Node.js',
      description: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes...',
      url: 'https://www.linkedin.com/pulse/your-article-url-1',
      date: '2024-10-15',
      image: 'https://via.placeholder.com/400x200?text=Microservices',
      likes: 125,
      comments: 23,
      views: 1500
    },
    {
      id: 2,
      title: 'React Performance Optimization Tips',
      description: 'Discover advanced techniques to optimize your React applications for better performance and user experience...',
      url: 'https://www.linkedin.com/pulse/your-article-url-2',
      date: '2024-09-28',
      image: 'https://via.placeholder.com/400x200?text=React+Tips',
      likes: 98,
      comments: 15,
      views: 1200
    },
    {
      id: 3,
      title: 'AWS Serverless: Best Practices',
      description: 'A comprehensive guide to building serverless applications on AWS using Lambda, API Gateway, and DynamoDB...',
      url: 'https://www.linkedin.com/pulse/your-article-url-3',
      date: '2024-09-10',
      image: 'https://via.placeholder.com/400x200?text=AWS+Serverless',
      likes: 156,
      comments: 31,
      views: 2100
    }
  ];

  // LinkedIn stats - Update these with your actual stats
  const linkedInStats = {
    connections: '500+',
    followers: '1.2K',
    posts: 45,
    articlesPublished: 12
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="linkedin">
      <h5>My Professional Content</h5>
      <h2>LinkedIn Articles & Insights</h2>

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
              <p>Articles</p>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="linkedin__articles">
          <h3 className="linkedin__section-title">Featured Articles</h3>
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
                      Read Article <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                
                <div className="linkedin__article-content">
                  <div className="linkedin__article-date">
                    <FaCalendarAlt /> {formatDate(article.date)}
                  </div>
                  
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>
                  
                  <div className="linkedin__article-stats">
                    <span className="linkedin__stat-item">
                      <BiLike /> {article.likes}
                    </span>
                    <span className="linkedin__stat-item">
                      <BiComment /> {article.comments}
                    </span>
                    <span className="linkedin__stat-item">
                      <FaEye /> {article.views}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="linkedin__cta">
          <p>Want to read more of my insights?</p>
          <a 
            href={`${LINKEDIN_PROFILE_URL}/recent-activity/shares/`} 
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
