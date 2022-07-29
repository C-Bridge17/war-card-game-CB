# War 
### What is it good for well hopefully to land me a job


# Setup (for Mac)
- First Clone Git repo 
- Next lets set up the database
  - type psql into your terminal 
  - create a user you can just copy and paste this `create user wargamer with password 'asdlkfjh1j23123'`
  - next create database `create database wargame_db with owner wargamer`
- next in your terminal cd into `curtis-bridge-war` then npm install
- now to migrate use `npx sequelize-cli db:migrate`
- and to seed the database use 'npx sequelize-cli db:seed:all'
- now we cd into the frontend folder and npm install once again
- open up a secound terminal and cd into the backend folder and npm start
- in the other terminal that should be cd into frontend you can npm start to see the app.
