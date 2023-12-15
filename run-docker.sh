docker build --no-cache -t testjs .

docker run --rm -p 80:3000 \
  --pid=host \
  -it apis.solarad.ai
