#!/bin/sh
# copied from https://vitejs.dev/guide/static-deploy.html

set -e
npm run build
cd dist
echo > .nojekyll

# git init
# git checkout -B main
git add -A
git commit -m 'deploy'

cd -