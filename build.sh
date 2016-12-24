#!/usr/bin/env bash

npm run build
cp -r ./dist /tmp/
cp -r ./example_data /tmp/
cp ./src/index.html /tmp/
rm -rf ./dist
git checkout gh-pages
rm -rf ./dist
rm -rf ./example_data
mv /tmp/dist .
mv /tmp/example_data .
mv /tmp/index.html ./src/
git status
python3 -m http.server
