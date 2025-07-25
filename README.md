# Pokemon Battle 

## Stack

This project is built using the MERN stack. Express and Node for backend, React for frontend, and MongoDB for the database. I've containerized it using Docker.

---

## Features

- API endpoint to simulate a battle between pokemon.
- Simple React frontend to pick teams and run battle
- MongoDB to store pokemon data
- Basic type validation and error handling

---

## Run the project

1. Clone the repo
2. cd into the repo
3. Run `docker compose up` to pull the images and run the containers.
4. When the containers are running, enter `localhost:8080` in your browser, and you should see the web app.

---

## Structure of projet

I think the structure of the project is pretty self-explanatory. You can find the backend-related code in the 'backend/src' directory. There you'll find index, model, db files, controller, router, battleLogic and so on. The frontend was generated using Vite, so it has a pretty standard structure as well. The code for the frontend I gathered in just one file to keep it simple - App.tsx.

## What I would add given more time

- Obviously the frontend isn't looking very shiny at the moment, and it's not great UX having the user putting in the IDs of the Pokemon into a textbox. This was done because I didn't have much time and wanted to keep it as minimal as possible. Given more time, i'd have a list of all the pokemon with little buttons on the items, which would add them to the different teams. 
- Possibility to remove pokemons from teams
- Nicer layout on everything in the frontend (since the client is just a "nice-to-have" I didn't put hours upon hours of energy on it)
- Implement much more exciting battle logic. For now, the heaviest pokemon wins, which is pretty boring of course.
- Some more exact error handling probably, and more validating the input data.
- Testing.

---

## Estimated time

I spent around 9 hours writing this code. Around 5-6 hours on the hard requirements + DB functionality, and the rest on validation, implementing the client, and dockerizing the app. 