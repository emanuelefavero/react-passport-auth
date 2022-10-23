# React Passport JS Authentication App

This is a bare-bones passport JS / Express **Authentication** example app with hashed passwords thanks to bcryptjs using React as the frontend and NodeJS as the backend.

_NOTE: This app is meant to only show how to use Passport JS with React. I would suggest to implement this feature with production ready design patterns such as [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) and [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) as the router for the frontend._

## Test the app locally on your machine

- Clone the repo and `cd` into the project directory
- Add a _.env_ file in the root directory with the following variables:

```dotenv
MONGODB_URI='YOUR_MONGODB_URI'
SESSION_SECRET_KEY='YOUR_SECRET_KEY'
PORT=4000
```

- Run:

```bash
cd backend
yarn install
yarn start
```

- Open a new terminal and run:

```bash
cd client
yarn install
yarn start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

TIP: - Learn more about the session secret key [here](https://stackoverflow.com/questions/5343131/what-is-the-sessions-secret-option)