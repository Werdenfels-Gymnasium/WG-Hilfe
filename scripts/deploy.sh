#!/bin/bash

# Checkout gh-pages branch
git checkout gh-pages

# Add all new files
git add .

# Create a commit for the changes
git commit -m "Update $(date)"

# Push to the remote
git push origin gh-pages

echo "Successfully deployed the application"