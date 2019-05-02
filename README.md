# SEARCH ITEMS

## Prerequisites
- Docker

Everything else will be pulled from Docker/Npm repositories !

Getting Started
---------------
```
# clone repository
# using SSH
$ git clone git@github.com:mateosilguero/meli-test.git
# or using HTTPS
$ https://github.com/mateosilguero/meli-test.git
# then
$ cd meli-test
```

Install dependencies

```
# this command will run 'npm install' inside server folder
$ docker-compose run --rm --no-deps node bash -ci 'npm install'
```

Run your app

```
# run your app (you can stop it with CTRL+C)
$ docker-compose up

# go to:
* localhost:3000 (client)
* localhost:4567/api (api)
* localhost:4567/api/items?search=:query get items
* localhost:4567/api/items/:id get item by id

# kill containers
$ docker-compose down
```
