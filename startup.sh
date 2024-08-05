while true; do
node --max-old-space-size=1000 --expose-gc src/index.js
sleep 1
done
