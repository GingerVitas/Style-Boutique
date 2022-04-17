'use strict'
const {  dresses, tops, jeans, leggings, pants, sweaters, skirts} = require('./seed-data')
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

  await Product.bulkCreate(dresses).then(console.log('****Dresses Seeded****'));
  await Product.bulkCreate(tops).then(console.log('****Tops Seeded****'))
  await Product.bulkCreate(jeans).then(console.log('****Jeans Seeded****'));
  await Product.bulkCreate(pants).then(console.log('****Pants Seeded****'));
  await Product.bulkCreate(sweaters).then(console.log('****Sweaters Seeded****'));
  await Product.bulkCreate(skirts).then(console.log('****Skirts Seeded****'));
  await Product.bulkCreate(leggings).then(console.log('****Leggings Seeded****'));



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
