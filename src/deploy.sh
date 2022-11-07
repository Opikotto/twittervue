#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A

git commit -m 'deploy new'
git push -f git@github.com:Opikotto/twittervue.git master:gh

cd -