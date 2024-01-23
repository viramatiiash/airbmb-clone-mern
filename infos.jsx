// ! 1. React app - client
// 1. npm create vite client
// 2. npm i
// 3. npm i react-router-dom
// 4. npm i axios
// 5. npm i date-fns

// ! Tailwind
// 3. npm install tailwindcss postcss autoprefixer

// ? generate tailwind.config.cjs and postcss.config.cjs
// 4. npx tailwindcss init -p

// ? in tailwind.config.js
/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// ? src/index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;


// ! 2. Server
// npm i express
// nodemon index.js - відслідковуємо
// npm i cors - якщо у клієнта буде порт 5173, а у сервера 4000, то не буде видавати помилку

// ! Mongo DB - create a new project and a new user
// Here:
// user: firstUser
// Password: XDf9glT4RZuaqFmp

// npm i mongoose - to connect with a data base
// connection string we can find in Connect in Database
// npm install mongodb - native driver
// mongoose.connect('<connection string from connect>') // here we need our cluster password

// npm i dotenv - to use environment variables
// create a variable with mongo url in .env file

// npm i bcryptjs
// npm i jsonwebtoken
// npm i cookie-parser
// npm i image-downloader
// npm i multer


// ! To connect everything we need:
// 1. Route (App.jsx)
// 2. Endpoint (api/index.js)
// 3. axios request (from the file)

// ! To connect S3-bucket
// npm i @aws-sdk/client-s3
// npm i mime-types
