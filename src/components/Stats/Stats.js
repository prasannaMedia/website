import React from 'react';
import './stats.css';

export const Stats = () => {
  // Replace these with your actual usernames
  const GITHUB_USERNAME = 'prasannaMedia';
  const LEETCODE_USERNAME = 'prasannanaik141';

  // Simplified parameters for faster loading
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&cache_seconds=1800`;
  const githubLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&layout=compact&cache_seconds=1800`;
  const githubStreakUrl = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true`;
  const leetcodeUrl = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Karma&ext=heatmap`;


  return (
    <section id="stats">
      <h5>My Coding Journey</h5>
      <h2>GitHub & LeetCode Stats</h2>
      
      <div className="container stats__container">
        {/* GitHub Stats Section */}
        <div className="stats__section">
          <h3 className="stats__section-title">
            <i className="fab fa-github"></i> GitHub Statistics
          </h3>
          
          <div className="github__stats">
            {/* GitHub Stats Card - Left */}
            <div className="stat__card">
              <img 
                src={githubStatsUrl}
                alt="GitHub Stats"
                loading="lazy"
                onError={(e) => {
                  console.error('GitHub stats failed to load');
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<p style="color: var(--color-light); text-align: center;">Stats temporarily unavailable</p>';
                }}
              />
            </div>

            {/* Top Languages - Right */}
            <div className="stat__card">
              <img 
                src={githubLangsUrl}
                alt="Top Languages"
                loading="lazy"
                onError={(e) => {
                  console.error('GitHub languages failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* GitHub Streak Stats - Full Width */}
            <div className="stat__card stat__card--wide">
              <img 
                src={githubStreakUrl}
                alt="GitHub Streak"
                loading="lazy"
                onError={(e) => {
                  console.error('GitHub streak failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* LeetCode Stats Section */}
        <div className="stats__section">
          <h3 className="stats__section-title">
            <i className="fas fa-code"></i> LeetCode Statistics
          </h3>
          
          <div className="leetcode__stats">
            {/* LeetCode Stats Card - Wide */}
            <div className="stat__card stat__card--wide">
              <img 
                src={leetcodeUrl}
                alt="LeetCode Stats"
                loading="lazy"
                onError={(e) => {
                  console.error('LeetCode stats failed to load');
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                      <h4 style="color: #FFA116; margin-bottom: 1rem;">LeetCode Profile</h4>
                      <p style="color: var(--color-light);">Username: ${LEETCODE_USERNAME}</p>
                      <a href="https://leetcode.com/${LEETCODE_USERNAME}" target="_blank" rel="noopener noreferrer" style="color: #FFA116; font-weight: 600;">
                        View Profile →
                      </a>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>

        {/* Additional Badges/Links */}
        <div className="stats__badges">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="badge__link"
          >
            <img 
              src={`https://img.shields.io/github/followers/${GITHUB_USERNAME}?label=GitHub%20Followers&style=for-the-badge&logo=github`}
              alt="GitHub Followers"
            />
          </a>
          
          <a 
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="badge__link"
          >
            <img 
              src={`https://img.shields.io/badge/dynamic/json?logo=github&label=Public%20Repos&query=$.public_repos&url=https://api.github.com/users/${GITHUB_USERNAME}&style=for-the-badge`}
              alt="Public Repos"
            />
          </a>

          <a 
            href={`https://leetcode.com/${LEETCODE_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="badge__link"
          >
            <img 
              src="https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=white"
              alt="LeetCode Profile"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
