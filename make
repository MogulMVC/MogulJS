#!/bin/bash

rm bin/script.js

cat src/config/* >> bin/script.js
cat src/manager/* >> bin/script.js
cat src/ui/* >> bin/script.js
cat src/util/* >> bin/script.js