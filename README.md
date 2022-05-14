# STYLE BOUTIQUE

## Shopping experience web application
Style Boutique is a shopping web app that clones Nordstrom database. User can add items to cart and a guest or a user. Guest cart is saved even when you close the window and re-opens our website. Your cart will be saved when you logout. You can modify quantities of items, explore our diverse categories of female fashion and finally checkout to place an order.

### Stacks used for Style Boutique
* JavaScript
* React
* Redux
* Node
* Express
* Webpack
* PSQL
* Sequelize
* MUI
* CSS
* HTML
* Heroku

### Versions
Node v17.01

### Setup
To run this App locally:
1. Git clone this repo.
2. Open up the app and run 'npm install'
3. Seed database 'npm run seed'
4. Start app dev env 'npm run dev:start'
5. Open browser 'localhost:8080'

### Other commands
Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!
- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)
