while true; do
node --max-old-space-size=1000 src/index.js
sleep 1
done