#!/bin/bash

echo "export {"
find ./src -type f -name "*.js" -print0 | xargs -0 cat | grep -v d3\.playbooks | grep -o "d3\.\w*" | sort -u | cut -d. -f 2 | sed s/^/"  "/ | sed s/$/,/
echo "} from 'd3'"
