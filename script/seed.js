'use strict'

const {db, models: {User, Product} } = require('../server/db');
const { faker } = require("@faker-js/faker");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users ****************************************************************
  await Promise.all(
    Array(5).fill().map(user => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      return User.create({
        username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
        password: '123',
        firstName,
        lastName,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`
      })
    })
  )

  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', firstName: 'Cody', lastName:'Harris', email: 'cody_harris@gmail.com'}),
    User.create({ username: 'murphy', password: '123', firstName: 'Murphy', lastName: 'Kim', email: 'dummy_email@gmail.com' }),
  ]);
  
  console.log(`seeded ${users.length} users`);

  // Creating Products ****************************************************************

  const colors = ["white", "black", "red", "blue", "gray", "orange", "green"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  let usedColors = [];

  const generateColor = ()=>{
    for (let i = 0; i < colors.length; i++){
      if(!usedColors.includes(colors[i])){
        usedColors.push(colors[i]);
        return colors[i]
      }
    }
  }

  const dresses = await Promise.all(
    Array(colors.length).fill().map(product => {
      return Product.create({
        category: 'dresses',
        name: `${faker.word.adjective(1)} dress`,
        imageUrl: faker.image.fashion(),
        color: generateColor(),
        size: 'S',
        availableStock: 5,
        price: 20.50
      })
    })
  );

  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
