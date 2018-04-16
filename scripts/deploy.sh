#!/bin/bash

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  echo "Storing distribution files in home..."
  cp dist/ ~/help-dist -R
  rm dist/ -Rf

  echo "Cloning repository"
  git clone https://DevVersion:$GH_TOKEN@github.com/Werdenfels-Gymnasium/help ~/tmp/deploy-help/
  cd ~/tmp/deploy-help

  echo "Fetching all"
  git fetch origin

  echo "Switching to gh-pages"
  git checkout gh-pages

  echo "Copying distribution files to repository"
  cp ~/help-dist/* -R .

  echo "Adding all files to Git"
  git add -A

  echo "Creating a commit with the new changes"
  git commit --allow-empty -m "Upstream Sync: $(date)"

  echo "Pushing to remote... publishing to gh-pages"
  git push origin gh-pages

  echo "Successfully deployed the application"
fi
