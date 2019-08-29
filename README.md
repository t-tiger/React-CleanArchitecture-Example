# Frontend Clean Architecture Example

Introducing Clean Architecture will make application sustainable and improve testability.

We can receive the benefits of Clean Architecture not only for backend app but also for the frontend app.

This project introduces Clean Architecture in frontend and executes unit test using mock in each layer.

# How to run

Here's how to actually run this project.

## Mock Server

There is a flow to fetch some data in frontend, for that preparing a mock server to send temporary data.

```bash
$ cd mock_server 
$ yarn add
$ yarn start
```

## Frontend

This project relies on [parcel](https://github.com/parcel-bundler/parcel) to get started with minimal configuration. First install parcel globally.

install with yarn
```bash
yarn global add parcel-bundler
```
or install with npm
```bash
npm install -g parcel-bundler
```

Then install the libraries project requires.

```bash
$ yarn install
```

Finally, run the parcel command to start the web server and build files.

```bash
$ parcel index.html
```

Then open `http://localhost:1234` in your browser.



