"use strict";
const {
  dressesProduct,
  dressData,
  dressColorData,
  topsProduct,
  topsData,
  leggingsProduct,
  leggingsData,
  jeansProduct,
  jeansData,
  pantsProduct,
  pantsData,
  sweatersProduct,
  sweatersData,
  skirtProduct,
  skirtData,
  shoeProduct,
  shoeData,
  beltProduct,
  beltData,
  accessoriesProduct,
  accessoryData,
  accessoryColorData
} = require("./seed-data");
const {
  db,
  models: { User, Product, ProductSKU, Category, ProductColor },
} = require("../server/db");
const { faker } = require("@faker-js/faker");

const categories = [
  { categoryName: "Top" },
  { categoryName: "Skirt" },
  { categoryName: "Dress" },
  { categoryName: "Jeans" },
  { categoryName: "Leggings" },
  { categoryName: "Pants" },
  { categoryName: "Sweater" },
  { categoryName: "Shoes" },
  { categoryName: "Belts" },
  { categoryName: "Accessories" },
];

const productFinder = async (productName) => {
  const product = await db.models.product.findOne({
    where: { name: productName },
  });
  return product;
};
const productColorFinder = async (color) => {
  const productColor = await db.models.productColor.findOne({
    where: {color}
  })
  return productColor;
 };
const categoryFinder = async (category) => {
  const foundCategory = await db.models.category.findOne({
    where: { categoryName: category },
  });
  return foundCategory;
};

const randomStock = () => Math.floor(Math.random() * 15);

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users ****************************************************************
  await Promise.all(
    Array(5)
      .fill()
      .map((user) => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return User.create({
          username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
          password: "123",
          firstName,
          lastName,
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`,
        });
      })
  );

  const users = await Promise.all([
    User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Harris",
      email: "cody_harris@gmail.com",
    }),
    User.create({
      username: "murphy",
      password: "123",
      firstName: "Murphy",
      lastName: "Kim",
      email: "dummy_email@gmail.com",
    }),
  ]);

  console.log(`seeded ${users.length} users`);

  // Creating Products ****************************************************************

  await Category.bulkCreate(categories).then(console.log(`**** ${categories.length} Categories Seeded****`))
  // const dresses = (await Promise.all(dressesProduct.map(async(dress)=> {
  //   const foundCategory = await categoryFinder('Dress');
  //   return {...dress, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(dresses).then(console.log(`**** ${dresses.length} Dresses Seeded****`));
  
  // const dressColors = (await Promise.all(dressColorData.map(async(dress) => {
  //   const product = await productFinder(dress.productName);
  //   return {...dress, productId: product.id}
  // })))
  // await ProductColor.bulkCreate(dresscolors).then(console.log(`**** ${dressColors.length} Dress Colors Seeded ****`))
  // const dressSKUs = (await Promise.all(dressData.flatMap(async(dress)=>{
  //   const productColor = await productColorFinder(dress.color);
  //   return [
  //    {...dress, availableStock: randomStock(), size: "XS", productColorId: productColor.id},
  //    {...dress, availableStock: randomStock(), size: "Small", productColorId: productColor.id},
  //    {...dress, availableStock: randomStock(), size: "Medium", productColorId: productColor.id},
  //    {...dress, availableStock: randomStock(), size: "Large", productColorId: productColor.id},
  //    {...dress, availableStock: randomStock(), size: "XL", productColorId: productColor.id}
  //   ]
  // }))).flat
  // await ProductSKU.bulkCreate(dressSKUs).then(console.log(`**** ${dressSKUs.length} Dress SKUs Seeded****`));

  // const tops = (await Promise.all(topsProduct.map(async(top)=>{
  //   const foundCategory = await categoryFinder('Top');
  //   return {...top, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(tops).then(console.log(`**** ${tops.length} Tops Seeded****`));
  // const topsSKUs = (await Promise.all(topsData.flatMap(async(top)=> {
  //   const product = await productFinder(top.productName);
  //   const foundCategory = await categoryFinder('Top');
  //   return [
  //     {...top, availableStock: randomStock(), size: 'XS', productId: product.id, categoryId: foundCategory.id},
  //     {...top, availableStock: randomStock(), size: 'Small', productId: product.id, categoryId: foundCategory.id},
  //     {...top, availableStock: randomStock(), size: 'Medium', productId: product.id, categoryId: foundCategory.id},
  //     {...top, availableStock: randomStock(), size: 'Large', productId: product.id, categoryId: foundCategory.id},
  //     {...top, availableStock: randomStock(), size: 'XL', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(topsSKUs).then(console.log(`**** ${topsSKUs.length} Top SKUs Seeded****`));

  // const leggings = (await Promise.all(leggingsProduct.map(async(legging) => {
  //   const foundCategory = await categoryFinder('Leggings');
  //   return {...legging, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(leggings).then(console.log(`**** ${leggings.length} Leggings Seeded`));
  // const leggingsSKUs = (await Promise.all(leggingsData.flatMap(async(legging)=>{
  //   const product = await productFinder(legging.productName);
  //   const foundCategory = await categoryFinder('Leggings');
  //   return [
  //     {...legging, availableStock: randomStock(), size: 'XS', productId: product.id, categoryId: foundCategory.id},
  //     {...legging, availableStock: randomStock(), size: 'Small', productId: product.id, categoryId: foundCategory.id},
  //     {...legging, availableStock: randomStock(), size: 'Medium', productId: product.id, categoryId: foundCategory.id},
  //     {...legging, availableStock: randomStock(), size: 'Large', productId: product.id, categoryId: foundCategory.id},
  //     {...legging, availableStock: randomStock(), size: 'XL', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(leggingsSKUs).then(console.log(`**** ${leggingsSKUs.length} Legging SKUs Seeded****`));

  // const jeans = (await Promise.all(jeansProduct.map(async(jean)=>{
  //   const foundCategory = await categoryFinder('Jeans');
  //   return {...jean, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(jeans).then(console.log(`**** ${jeans.length} Jeans Seeded****`));
  // const jeansSKUs = (await Promise.all(jeansData.flatMap(async(jeans)=> {
  //   const product = await productFinder(jeans.productName);
  //   const foundCategory = await categoryFinder('Jeans');
  //   return [
  //     {...jeans, availableStock: randomStock(), size: '23', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '24', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '25', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '26', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '27', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '28', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '29', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '30', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '31', productId: product.id, categoryId: foundCategory.id},
  //     {...jeans, availableStock: randomStock(), size: '32', productId: product.id, categoryId: foundCategory.id}
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(jeansSKUs).then(console.log(`**** ${jeansSKUs.length} Jeans SKUs Seeded****`));
  
  // const pants = (await Promise.all(pantsProduct.map(async(pants)=>{
  //   const foundCategory = await categoryFinder('Pants');
  //   return {...pants, categoryId: foundCategory.id};
  // })));
  // await Product.bulkCreate(pants).then(console.log(`**** ${pants.length} Pants Seeded`));
  // const pantsSKUs = (await Promise.all(pantsData.flatMap(async(pants)=>{
  //   const product = await productFinder(pants.productName);
  //   const foundCategory = await categoryFinder('Pants');
  //   return [
  //     {...pants, availableStock: randomStock(), size: '23', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '24', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '25', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '26', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '27', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '28', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '29', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '30', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '31', productId: product.id, categoryId: foundCategory.id},
  //     {...pants, availableStock: randomStock(), size: '32', productId: product.id, categoryId: foundCategory.id}
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(pantsSKUs).then(console.log(`**** ${pantsSKUs.length} Pants SKUs Seeded****`));

  // const sweaters = (await Promise.all(sweatersProduct.map(async(sweater)=>{
  //   const foundCategory = await categoryFinder('Sweater');
  //   return {...sweater, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(sweaters).then(console.log(`**** ${sweaters.length} Sweaters Seeded****`));
  // const sweatersSKUs = (await Promise.all(sweatersData.flatMap(async(sweater)=>{
  //   const product = await productFinder(sweater.productName);
  //   const foundCategory = await categoryFinder('Sweater');
  //   return [
  //     {...sweater, availableStock: randomStock(), size: 'XS', productId: product.id, categoryId: foundCategory.id},
  //     {...sweater, availableStock: randomStock(), size: 'Small', productId: product.id, categoryId: foundCategory.id},
  //     {...sweater, availableStock: randomStock(), size: 'Medium', productId: product.id, categoryId: foundCategory.id},
  //     {...sweater, availableStock: randomStock(), size: 'Large', productId: product.id, categoryId: foundCategory.id},
  //     {...sweater, availableStock: randomStock(), size: 'XL', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(sweatersSKUs).then(console.log(`**** ${sweatersSKUs.length} Sweater SKUs Seeded`));

  // const skirts = (await Promise.all(skirtProduct.map(async(skirt)=>{
  //   const foundCategory = await categoryFinder('Skirt');
  //   return {...skirt, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(skirts).then(console.log(`**** ${skirts.length} Skirts Seeded****`));
  // const skirtSKUs = (await Promise.all(skirtData.flatMap(async(skirt)=>{
  //   const product = await productFinder(skirt.productName);
  //   const foundCategory = await categoryFinder('Skirt');
  //   return [
  //     {...skirt, availableStock: randomStock(), size: 'XS', productId: product.id, categoryId: foundCategory.id},
  //     {...skirt, availableStock: randomStock(), size: 'Small', productId: product.id, categoryId: foundCategory.id},
  //     {...skirt, availableStock: randomStock(), size: 'Medium', productId: product.id, categoryId: foundCategory.id},
  //     {...skirt, availableStock: randomStock(), size: 'Large', productId: product.id, categoryId: foundCategory.id},
  //     {...skirt, availableStock: randomStock(), size: 'XL', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(skirtSKUs).then(console.log(`**** ${skirtSKUs.length} Skirt SKUs seeded`));

  // const shoes = (await Promise.all(shoeProduct.map(async(shoe)=>{
  //   const foundCategory = await categoryFinder('Shoes');
  //   return {...shoe, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(shoes).then(console.log(`**** ${shoes.length} Shoes Seeded****`));
  // const shoeSKUs = (await Promise.all(shoeData.flatMap(async(shoe)=>{
  //   const product = await productFinder(shoe.productName);
  //   const foundCategory = await categoryFinder('Shoes');
  //   return [
  //     {...shoe, availableStock: randomStock(), size: '5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '5.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '6', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '6.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '7', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '7.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '8', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '8.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '9', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '9.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '10', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '10.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '11', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '11.5', productId: product.id, categoryId: foundCategory.id},
  //     {...shoe, availableStock: randomStock(), size: '12', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(shoeSKUs).then(console.log(`**** ${shoeSKUs.length} Shoe SKUs Seeded`));

  // const belts = (await Promise.all(beltProduct.map(async(belt)=>{
  //   const foundCategory = await categoryFinder('Belts');
  //   return {...belt, categoryId: foundCategory.id}
  // })));
  // await Product.bulkCreate(belts).then(console.log(`**** ${belts.length} Belts Seeded****`));
  // const beltSKUs = (await Promise.all(beltData.flatMap(async(belt)=>{
  //   const product = await productFinder(belt.productName);
  //   const foundCategory = await categoryFinder('Belts');
  //   return [
  //     {...belt, availableStock: randomStock(), size: 'XS', productId: product.id, categoryId: foundCategory.id},
  //     {...belt, availableStock: randomStock(), size: 'Small', productId: product.id, categoryId: foundCategory.id},
  //     {...belt, availableStock: randomStock(), size: 'Medium', productId: product.id, categoryId: foundCategory.id},
  //     {...belt, availableStock: randomStock(), size: 'Large', productId: product.id, categoryId: foundCategory.id},
  //     {...belt, availableStock: randomStock(), size: 'XL', productId: product.id, categoryId: foundCategory.id},
  //   ]
  // }))).flat();
  // await ProductSKU.bulkCreate(beltSKUs).then(console.log(`**** ${beltSKUs.length} Belt SKUs Seeded****`));

  const accessories = (await Promise.all(accessoriesProduct.map(async(accessory)=>{
    const foundCategory = await categoryFinder('Accessories');
    return {...accessory, categoryId: foundCategory.id};
  })));
  await Product.bulkCreate(accessories).then(console.log(`**** ${accessories.length} Accessories Seeded****`));
  const accessoriesColors = (await Promise.all(accessoryColorData.map(async(accessory)=> {
    const product = await productFinder(accessory.productName);
    return {...accessory, productId: product.id}
  })))
  await ProductColor.bulkCreate(accessoriesColors).then(console.log(`**** ${accessoriesColors.length} Accessory Colors Seeded ****`))
  const accessoriesSKUs = (await Promise.all(accessoryData.flatMap(async(accessory)=>{
    const productColor = await productColorFinder(accessory.color);
    return [
      {...accessory, availableStock: randomStock(), size: 'XS', productColorId: productColor.id},
      {...accessory, availableStock: randomStock(), size: 'Small', productColorId: productColor.id},
      {...accessory, availableStock: randomStock(), size: 'Medium', productColorId: productColor.id},
      {...accessory, availableStock: randomStock(), size: 'Large', productColorId: productColor.id},
      {...accessory, availableStock: randomStock(), size: 'XL', productColorId: productColor.id},
    ]    
  }))).flat();
  await ProductSKU.bulkCreate(accessoriesSKUs).then(console.log(`**** ${accessoriesSKUs.length} Accessory SKUs Seeded****`));

  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
