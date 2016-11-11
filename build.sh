#!/usr/bin/env bash

npm run build
cp -r ./dist /tmp/
cp -r ./data /tmp/
cp ./index.html /tmp/
rm -rf ./dist
git checkout gh-pages
rm -rf ./dist
rm -rf ./data
mv /tmp/dist .
mv /tmp/data .
mv /tmp/index.html .
git status
