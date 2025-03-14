#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up GitHub repository for the Adli Vue.js template${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install git first."
    exit 1
fi

# Ask for GitHub username
read -p "Enter your GitHub username: " github_username

# Ask for repository name (default: adli-vuejs-ads-ppc-agency-template)
read -p "Enter repository name [adli-vuejs-ads-ppc-agency-template]: " repo_name
repo_name=${repo_name:-adli-vuejs-ads-ppc-agency-template}

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo -e "${GREEN}Initializing git repository...${NC}"
    git init
else
    echo -e "${YELLOW}Git repository already initialized.${NC}"
fi

# Add all files
echo -e "${GREEN}Adding files to git...${NC}"
git add .

# Commit changes
echo -e "${GREEN}Committing files...${NC}"
git commit -m "Initial commit of Adli Vue.js template"

# Add GitHub remote
echo -e "${GREEN}Adding GitHub remote...${NC}"
git remote add origin "https://github.com/$github_username/$repo_name.git"

echo -e "${YELLOW}Repository setup complete!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. Create a new repository named '$repo_name' on GitHub"
echo -e "2. Push your code to GitHub with: ${GREEN}git push -u origin main${NC}"
echo -e "3. GitHub Actions will automatically deploy your site to GitHub Pages"
echo -e "4. Enable GitHub Pages in your repository settings to serve from the gh-pages branch"
echo -e "5. Your site will be available at: ${GREEN}https://$github_username.github.io/$repo_name/${NC}"
