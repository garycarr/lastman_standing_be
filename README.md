# lastman_standing_be

## Get started
Mongodb needs to be running on the machine
```
npm install
npm run dev
```

This is a work in progress, mainly a quick backend for https://github.com/garycarr/lastman_standing_fe.
One day it will have tests and proper structuring.

To run in docker
```
docker build -t lastman-standing-be-app . && docker run -p 3000:3000 --rm  --name lastman-standing-be lastman-standing-be-app
```
Or to run with docker-compose to get mongo up
```
docker-compose -f docker-compose.dev.yml  up
```
