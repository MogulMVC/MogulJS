#!/bin/bash

rm bin/MScript.js

cat src/config/* >> bin/MScript.js
cat src/manager/* >> bin/MScript.js
cat src/ui/* >> bin/MScript.js
cat src/util/* >> bin/MScript.js

java -jar compiler.jar bin/MScript.js > bin/MScript.min.js

echo 'MScript Complete'