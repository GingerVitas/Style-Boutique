'use strict'
const {  dressesProduct, dressData /*tops, jeans, leggings, pants, sweaters, skirts, shoes, belts, accessories */} = require('./seed-data')
const {db, models: {User, Product, ProductSKU, Category} } = require('../server/db');
const { faker } = require("@faker-js/faker");

const categories = [
  {categoryName: 'Top'},
  {categoryName: 'Skirt'},
  {categoryName: 'Dress'},
  {categoryName: 'Jeans'},
  {categoryName: 'Leggings'},
  {categoryName: 'Pants'},
  {categoryName: 'Sweater'},
  {categoryName: 'Shoes'},
  {categoryName: 'Belts'},
  {categoryName: 'Accessories'}
];

const productFinder = async (productName) => {
  const product =  await db.models.product.findOne({where: {name:productName}})
  return product
}
const categoryFinder = async (category) => {
  const foundCategory =  await db.models.category.findOne({where: {categoryName:category}})
  return foundCategory
}

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

  await Category.bulkCreate(categories).then(console.log(`****${categories.length} Categories Seeded****`))
  let dresses = await Promise.all(dressesProduct.flatMap(async(dress)=> {
    const foundCategory = await categoryFinder('Dress');
    return [
      {...dress, categoryId: foundCategory.id}
    ]
  }));
  dresses = dresses.flat();
  await Product.bulkCreate(dresses).then(console.log(`**** ${dresses.length} Dresses Seeded****`));
  let dressSKUs = await Promise.all(dressData.flatMap(async(dress)=>{
    const product = await productFinder(dress.productName);
    const foundCategory = await categoryFinder('Dress');
    return [
     {...dress, availableStock: Math.floor(Math.random()*15), size: "XS", productId: product.id, categoryId: foundCategory.id},
     {...dress, availableStock: Math.floor(Math.random()*15), size: "Small", productId: product.id, categoryId: foundCategory.id},
     {...dress, availableStock: Math.floor(Math.random()*15), size: "Medium", productId: product.id, categoryId: foundCategory.id},
     {...dress, availableStock: Math.floor(Math.random()*15), size: "Large", productId: product.id, categoryId: foundCategory.id},
     {...dress, availableStock: Math.floor(Math.random()*15), size: "XL", productId: product.id, categoryId: foundCategory.id},
    ]
  }));
  dressSKUs = dressSKUs.flat();
  await ProductSKU.bulkCreate(dressSKUs).then(console.log(`**** ${dressSKUs.length} Dress SKUs Seeded****`));
  // await Product.bulkCreate(tops).then(console.log(`**** ${tops.length} Tops Seeded****`))
  // await Product.bulkCreate(jeans).then(console.log(`**** ${jeans.length} Jeans Seeded****`));
  // await Product.bulkCreate(pants).then(console.log(`**** ${pants.length} Pants Seeded****`));
  // await Product.bulkCreate(sweaters).then(console.log(`**** ${sweaters.length} Sweaters Seeded****`));
  // await Product.bulkCreate(skirts).then(console.log(`**** ${skirts.length} Skirts Seeded****`));
  // await Product.bulkCreate(leggings).then(console.log(`****${leggings.length} Leggings Seeded****`));
  // await Product.bulkCreate(shoes).then(console.log(`**** ${shoes.length} Shoes Seeded****`));
  // await Product.bulkCreate(belts).then(console.log(`**** ${belts.length} Belts Seeded****`));
  // await Product.bulkCreate(accessories).then(console.log(`**** ${accessories.length} Accessories Seeded****`));



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
