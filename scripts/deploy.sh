#!/bin/bash

if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
  echo "Storing distribution files in home..."
  cp dist/ ~/dist -R
  rm dist/ -Rf

  echo "Cloning with private access token"
  git clone https://DevVersion-Bot:$GH_TOKEN@github.com/Werdenfels-Gymnasium/WG-Hilfe ~/WG-Hilfe-deploy/
  cd ~/WG-Hilfe-deploy

  echo "Fetching all"
  git fetch origin

  echo "Switching to gh-pages"
  git checkout gh-pages

  echo "Copying distribution files to repository"
  cp ~/dist/* -R .

  echo "Adding all files to SCM"
  git add -f .

  echo "Creating a commit with the new changes"
  git commit -m "Update $(date)"

  echo "Pushing to remote... publishing to gh-pages"
  git push origin gh-pages

  echo "Clearing temporary stored files"
  rm ~/dist -Rf

  echo "Successfully deployed the application"
fi