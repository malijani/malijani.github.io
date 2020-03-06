#!/usr/bin/env bash

# script to auto update master branch of my website hosted on github

# check if local webserver is already up to download local version
if [[ $(lsof -Pi :8000 -sTCP:LISTEN) ]]; then
    echo "Local site is up! start to deploy."
else
    echo "localhost:8000 is down! Aborting"
    exit 1
fi

# remove all files except these:
shopt -s extglob
rm -rv !(".gitignore"|"CNAME"|".git"|".nojekyll"|".venv"|".vscode"|"deploy.sh"|"src"|"requirements.txt"| "README.md")
shopt -u extglob

# download website from localhost:8000
wget -mkEpnp localhost:8000

# move files from site directory
mv localhost:8000/* .

# remove unneeded directory
rm -rfv localhost:8000

# add files to git
git add .

# commit site update
COMMIT=$(git rev-parse --short HEAD)
git commit -m "Deployed ${COMMIT}; Updated website"

# push changes
git push -u origin master




