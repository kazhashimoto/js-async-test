#!/bin/bash

src=async1.js
targets="async2.js defer1.js defer2.js normal1.js normal2.js ready.js"

for f in $targets; do
  echo $f
  cp $src $f
done
