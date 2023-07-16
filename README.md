
# Mapup Assignment

This is a node api which using POST request protected with a header based auth check
* The API takes a really long linestring with (5k points) in GeoJSON in the body.
* There are a set of 50 randomly spread lines (just start and end) on the plane.
* The API finds which of the 50 lines with ids (L01 - L50) intersect with the linestring


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
one can test the api using postman or other alternatives by using the link "Locahost:8800/api/chk"
and putting a geojson in the json area of body which has the type "linestring"

NOTE: the api uses header authorization please enter any data in header auth section 



## Running Tests

To test the api , run the following command

api home

```api home
  https://mapupassignment-production.up.railway.app/api
```

api test
```api test
  https://mapupassignment-production.up.railway.app/api/chk
```


