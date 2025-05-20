

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker-compose -f Docker-compose.yml build
docker-compose -f Docker-compose.yml up
