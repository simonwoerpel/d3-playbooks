#!/usr/bin/env bash

npm run build
cp ./dist/d3-playbooks.base.min.js /tmp/
git checkout gh-pages
rm -rf ./dist
mv /tmp/d3-playbooks.base.min.js ./lib/
rm -rf /tmp/d3-playbooks.base.min.js
git status
python3 -m http.server
