# War 

# Tech 
- React.js
- Express
- Sequelize
- postgreSQL

# Setup (for Mac)
- First Clone Git repo 
- Next lets set up the database
  - type psql into your terminal 
  - create a user you can just copy and paste this `create user wargamer with password 'asdlkfjh1j23123';`
  - next create database `create database wargame_db with owner wargamer;`
  - \q to leave psql
- next in your terminal cd into `curtis-bridge-war` then npm install
- now cd into backend
- To migrate use `npx sequelize-cli db:migrate`
- And to seed the database use 'npx sequelize-cli db:seed:all'
- now we cd into the frontend folder and npm install once again
- open up a secound terminal and cd into the backend folder and npm start
- in the other terminal that should be cd into frontend you can npm start to see the app.


# How to sim 
- Click the play button
- Click the Deal button
- Then you can click the start round button and hold enter to sim the round of war. 

# Features I would like to add 
- I would have loved to have added viewable cards. 
- A more detailed way to view what is being played and when
- more testing I tried to crash course my way through some Jest videos for a little base
- a loser counter to show how many times a player has lost 
