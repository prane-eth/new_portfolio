#!/bin/bash

# This file pushes latest code from laptop to GitHub

message=${1:-'Updated code'}    

git add .
git commit -m "$message"
# git push with all args after $2
git push ${@:2}  # so you can do git_push.sh "message" -f origin newBranch
