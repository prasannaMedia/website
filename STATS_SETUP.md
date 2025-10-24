# GitHub & LeetCode Stats Setup Guide

## 🎯 Quick Setup

### Step 1: Update Your Usernames

Open `src/components/Stats/Stats.js` and update these lines (around line 6-7):

```javascript
const GITHUB_USERNAME = 'prasannaMedia'; // ✅ Already set
const LEETCODE_USERNAME = 'your-leetcode-username'; // ⚠️ UPDATE THIS
```

Replace `'your-leetcode-username'` with your actual LeetCode username.

---

## 📊 What You Get

### GitHub Stats (Automatic)
- ✅ **GitHub Stats Card**: Shows commits, PRs, issues, stars
- ✅ **Streak Stats**: Contribution streak tracking
- ✅ **Top Languages**: Most used programming languages
- ✅ **GitHub Trophies**: Achievement badges
- ✅ **Followers Badge**: Real-time follower count
- ✅ **Repositories Badge**: Total public repos

### LeetCode Stats (After username update)
- ✅ **LeetCode Card**: Problems solved, ranking, acceptance rate
- ✅ **Heatmap**: Daily problem-solving activity
- ✅ **Badge**: LeetCode profile link

---

## 🎨 Customization Options

### Change Theme Colors

In `src/components/Stats/Stats.js`, you can modify the theme parameter:

**Available Themes:**
- `radical` (current)
- `dark`
- `tokyonight`
- `onedark`
- `cobalt`
- `synthwave`
- `highcontrast`
- `dracula`

Example:
```javascript
// Change from:
theme=radical
// To:
theme=tokyonight
```

### Hide Specific Stats

You can hide certain stats by modifying the URL parameters:

```javascript
// Hide specific stats in GitHub card
&hide=issues,contribs

// Example:
src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=radical&hide_border=true&hide=issues`}
```

---

## 🔧 API Services Used

1. **GitHub Stats**: [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
2. **GitHub Streak**: [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)
3. **GitHub Trophy**: [github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy)
4. **LeetCode Card**: [leetcode-stats-api](https://github.com/JacobLinCool/LeetCode-Stats-Card)
5. **Shields.io**: For custom badges

---

## 📱 Responsive Design

The stats component is fully responsive:
- **Desktop**: Grid layout with multiple cards
- **Tablet**: Adjusted grid
- **Mobile**: Single column layout

---

## 🚀 Testing

1. Start your development server:
   ```bash
   npm start
   ```

2. Navigate to the Stats section on your website

3. Check that all images load correctly

---

## ⚠️ Troubleshooting

### Stats not loading?
- Check your internet connection
- Verify usernames are correct
- The APIs might be temporarily down (they're free services)
- Try a different browser or clear cache

### LeetCode stats showing error?
- Make sure you've updated `LEETCODE_USERNAME`
- Your LeetCode profile must be public
- Try visiting `https://leetcode.com/your-username` to verify

### Want more detailed stats?
You can implement the GitHub API or LeetCode GraphQL API for real-time data:

**GitHub API Example:**
```javascript
fetch('https://api.github.com/users/prasannaMedia')
  .then(response => response.json())
  .then(data => {
    console.log('Followers:', data.followers);
    console.log('Public Repos:', data.public_repos);
    console.log('Total Stars:', /* calculate from repos */);
  });
```

**LeetCode GraphQL Example:**
```javascript
const query = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
  }
`;
```

---

## 📝 Additional Features You Can Add

1. **Activity Graph**: Add contribution graph
2. **WakaTime Stats**: Coding time tracker
3. **CodersRank**: Another stats visualization
4. **HackerRank/CodeChef**: Other competitive programming platforms

---

## 🎉 You're All Set!

Your stats section is now integrated. Just update your LeetCode username and you're good to go!

For more customization, check the documentation of each API service linked above.
