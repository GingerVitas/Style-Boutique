"use strict";
const {
  dressProduct,
  dressColorData,
  dressSKUData,
  topsProduct,
  topsColorData,
  topsSKUData,
  leggingsProduct,
  leggingsColorData,
  leggingsSKUData,
  jeansProduct,
  jeansColorData,
  jeansSKUData,
  pantsProduct,
  pantsColorData,
  pantsSKUData,
  sweatersProduct,
  sweatersColorData,
  sweatersSKUData,
  skirtProduct,
  skirtColorData,
  skirtSKUData,
  shoeProduct,
  shoeColorData,
  shoeSKUData,
  beltProduct,
  beltColorData,
  beltSKUData,
  accessoriesProduct,
  accessorySKUData,
  accessoryColorData,
} = require("./seed-data");
const {
  db,
  models: { User, Product, ProductSKU, Category, ProductColor, Address },
} = require("../server/db");
// const { faker } = require("@faker-js/faker");

const categories = [{ categoryName: "top" }, { categoryName: "skirt" }, { categoryName: "dress" }, { categoryName: "jeans" }, { categoryName: "leggings" }, { categoryName: "pants" }, { categoryName: "sweater" }, { categoryName: "shoes" }, { categoryName: "belts" }, { categoryName: "accessories" }];

const productFinder = async (productName) => {
  const product = await db.models.product.findOne({
    where: { name: productName },
  });
  return product;
};
const productColorFinder = async (seedId) => {
  const productColor = await db.models.productColor.findOne({
    where: { seedId },
  });
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
  // await Promise.all(
  //   Array(5)
  //     .fill()
  //     .map((user) => {
  //       const firstName = faker.name.firstName();
  //       const lastName = faker.name.lastName();
  //       return User.create({
  //         username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
  //         password: "123",
  //         firstName,
  //         lastName,
  //         email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`,
  //       });
  //     })
  // );

  const cody = await User.create({
    username: "cody",
    password: "123",
    firstName: "Cody",
    lastName: "Harris",
    email: "cody_harris@gmail.com",
  });
  const murphy = await User.create({
    username: "murphy",
    password: "123",
    firstName: "Murphy",
    lastName: "Kim",
    email: "dummy_email@gmail.com",
  });

  const scott = await User.create({
    username: "Scott",
    password: "123",
    firstName: "Scott",
    lastName: "Johnson",
    email: "dummyEmail@comcast.net",
    isAdmin: true,
  });

  await Address.create({
    firstName: "Scott",
    lastName: "Johnson",
    addressLine1: "123 FullStack Way",
    city: "New York",
    state: "NY",
    zipCode: 10001,
    userId: scott.id,
  });

  await Address.create({
    addressLine1: "12345 FullStack Way",
    city: "New York",
    state: "NY",
    zipCode: 10001,
    userId: murphy.id,
  });

  // console.log(`seeded ${users.length} users`);

  // Creating Products ****************************************************************

  await Category.bulkCreate(categories).then(console.log(`**** ${categories.length} Categories Seeded****`));
  const dresses = await Promise.all(
    dressProduct.map(async (dress) => {
      const foundCategory = await categoryFinder("dress");
      return { ...dress, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(dresses).then(console.log(`**** ${dresses.length} Dresses Seeded****`));

  const dressColors = await Promise.all(
    dressColorData.map(async (dress) => {
      const product = await productFinder(dress.productName);
      return { ...dress, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(dressColors).then(console.log(`**** ${dressColors.length} Dress Colors Seeded ****`));

  const dressSKUs = (
    await Promise.all(
      dressSKUData.flatMap(async (dress) => {
        const productColor = await productColorFinder(dress.seedId);
        return [
          { ...dress, availableStock: randomStock(), size: "XS", productColorId: productColor.id },
          { ...dress, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...dress, availableStock: randomStock(), size: "Medium", productColorId: productColor.id },
          { ...dress, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
          { ...dress, availableStock: randomStock(), size: "XL", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(dressSKUs).then(console.log(`**** ${dressSKUs.length} Dress SKUs Seeded****`));

  const tops = await Promise.all(
    topsProduct.map(async (top) => {
      const foundCategory = await categoryFinder("top");
      return { ...top, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(tops).then(console.log(`**** ${tops.length} Tops Seeded****`));

  const topsColors = await Promise.all(
    topsColorData.map(async (top) => {
      const product = await productFinder(top.productName);
      return { ...top, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(topsColors).then(console.log(`**** ${topsColors.length} Top Colors Seeded ****`));

  const topsSKUs = (
    await Promise.all(
      topsSKUData.flatMap(async (top) => {
        const productColor = await productColorFinder(top.seedId);
        return [
          { ...top, availableStock: randomStock(), size: "XS", productColorId: productColor.id },
          { ...top, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...top, availableStock: randomStock(), size: "Medium", productColorId: productColor.id },
          { ...top, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
          { ...top, availableStock: randomStock(), size: "XL", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(topsSKUs).then(console.log(`**** ${topsSKUs.length} Top SKUs Seeded****`));

  const leggings = await Promise.all(
    leggingsProduct.map(async (legging) => {
      const foundCategory = await categoryFinder("leggings");
      return { ...legging, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(leggings).then(console.log(`**** ${leggings.length} Leggings Seeded`));

  const leggingsColors = await Promise.all(
    leggingsColorData.map(async (legging) => {
      const product = await productFinder(legging.productName);
      return { ...legging, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(leggingsColors).then(console.log(`**** ${leggingsColors.length} Legging Colors Seeded`));

  const leggingsSKUs = (
    await Promise.all(
      leggingsSKUData.flatMap(async (legging) => {
        const productColor = await productColorFinder(legging.seedId);
        return [
          { ...legging, availableStock: randomStock(), size: "XS", productColorId: productColor.id },
          { ...legging, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...legging, availableStock: randomStock(), size: "Medium", productColorId: productColor.id },
          { ...legging, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
          { ...legging, availableStock: randomStock(), size: "XL", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(leggingsSKUs).then(console.log(`**** ${leggingsSKUs.length} Legging SKUs Seeded****`));

  const jeans = await Promise.all(
    jeansProduct.map(async (jean) => {
      const foundCategory = await categoryFinder("jeans");
      return { ...jean, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(jeans).then(console.log(`**** ${jeans.length} Jeans Seeded****`));

  const jeansColors = await Promise.all(
    jeansColorData.map(async (jeans) => {
      const product = await productFinder(jeans.productName);
      return { ...jeans, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(jeansColors).then(console.log(`**** ${jeansColors.length} Jeans Colors Seeded ****`));

  const jeansSKUs = (
    await Promise.all(
      jeansSKUData.flatMap(async (jeans) => {
        const productColor = await productColorFinder(jeans.seedId);
        return [
          { ...jeans, availableStock: randomStock(), size: "23", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "24", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "25", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "26", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "27", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "28", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "29", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "30", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "31", productColorId: productColor.id },
          { ...jeans, availableStock: randomStock(), size: "32", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(jeansSKUs).then(console.log(`**** ${jeansSKUs.length} Jeans SKUs Seeded****`));

  const pants = await Promise.all(
    pantsProduct.map(async (pants) => {
      const foundCategory = await categoryFinder("pants");
      return { ...pants, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(pants).then(console.log(`**** ${pants.length} Pants Seeded ****`));

  const pantsColors = await Promise.all(
    pantsColorData.map(async (pants) => {
      const product = await productFinder(pants.productName);
      return { ...pants, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(pantsColors).then(console.log(`**** ${pantsColors.length} pants colors seeded ****`));

  const pantsSKUs = (
    await Promise.all(
      pantsSKUData.flatMap(async (pants) => {
        const productColor = await productColorFinder(pants.seedId);
        return [
          { ...pants, availableStock: randomStock(), size: "23", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "24", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "25", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "26", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "27", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "28", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "29", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "30", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "31", productColorId: productColor.id },
          { ...pants, availableStock: randomStock(), size: "32", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(pantsSKUs).then(console.log(`**** ${pantsSKUs.length} Pants SKUs Seeded****`));

  const sweaters = await Promise.all(
    sweatersProduct.map(async (sweater) => {
      const foundCategory = await categoryFinder("sweater");
      return { ...sweater, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(sweaters).then(console.log(`**** ${sweaters.length} Sweaters Seeded****`));

  const sweaterColors = await Promise.all(
    sweatersColorData.map(async (sweater) => {
      const product = await productFinder(sweater.productName);
      return { ...sweater, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(sweaterColors).then(console.log(`**** ${sweaterColors.length} Sweater Colors Seeded ****`));

  const sweatersSKUs = (
    await Promise.all(
      sweatersSKUData.flatMap(async (sweater) => {
        const productColor = await productColorFinder(sweater.seedId);
        return [
          { ...sweater, availableStock: randomStock(), size: "XS", productColorId: productColor.id },
          { ...sweater, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...sweater, availableStock: randomStock(), size: "Medium", productColorId: productColor.id },
          { ...sweater, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
          { ...sweater, availableStock: randomStock(), size: "XL", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(sweatersSKUs).then(console.log(`**** ${sweatersSKUs.length} Sweater SKUs Seeded`));

  const skirts = await Promise.all(
    skirtProduct.map(async (skirt) => {
      const foundCategory = await categoryFinder("skirt");
      return { ...skirt, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(skirts).then(console.log(`**** ${skirts.length} Skirts Seeded****`));

  const skirtColors = await Promise.all(
    skirtColorData.map(async (skirt) => {
      const product = await productFinder(skirt.productName);
      return { ...skirt, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(skirtColors).then(console.log(`**** ${skirtColors.length} Skirt Colors Seeded ****`));

  const skirtSKUs = (
    await Promise.all(
      skirtSKUData.flatMap(async (skirt) => {
        const productColor = await productColorFinder(skirt.seedId);
        return [
          { ...skirt, availableStock: randomStock(), size: "XS", productColorId: productColor.id },
          { ...skirt, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...skirt, availableStock: randomStock(), size: "Medium", productColorId: productColor.id },
          { ...skirt, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
          { ...skirt, availableStock: randomStock(), size: "XL", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(skirtSKUs).then(console.log(`**** ${skirtSKUs.length} Skirt SKUs seeded`));

  const shoes = await Promise.all(
    shoeProduct.map(async (shoe) => {
      const foundCategory = await categoryFinder("shoes");
      return { ...shoe, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(shoes).then(console.log(`**** ${shoes.length} Shoes Seeded****`));

  const shoeColors = await Promise.all(
    shoeColorData.map(async (shoe) => {
      const product = await productFinder(shoe.productName);
      return { ...shoe, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(shoeColors).then(console.log(`**** ${shoeColors.length} Shoe Colors Seeded ****`));

  const shoeSKUs = (
    await Promise.all(
      shoeSKUData.flatMap(async (shoe) => {
        const productColor = await productColorFinder(shoe.seedId);
        return [
          { ...shoe, availableStock: randomStock(), size: "5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "5.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "6", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "6.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "7", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "7.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "8", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "8.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "9", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "9.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "10", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "10.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "11", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "11.5", productColorId: productColor.id },
          { ...shoe, availableStock: randomStock(), size: "12", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(shoeSKUs).then(console.log(`**** ${shoeSKUs.length} Shoe SKUs Seeded`));

  const belts = await Promise.all(
    beltProduct.map(async (belt) => {
      const foundCategory = await categoryFinder("belts");
      return { ...belt, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(belts).then(console.log(`**** ${belts.length} Belts Seeded****`));

  const beltColors = await Promise.all(
    beltColorData.map(async (belt) => {
      const product = await productFinder(belt.productName);
      return { ...belt, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(beltColors).then(console.log(`**** ${beltColors.length} Belt Colors Seeded ****`));

  const beltSKUs = (
    await Promise.all(
      beltSKUData.flatMap(async (belt) => {
        const productColor = await productColorFinder(belt.seedId);
        return [
          { ...belt, availableStock: randomStock(), size: "Small", productColorId: productColor.id },
          { ...belt, availableStock: randomStock(), size: "Large", productColorId: productColor.id },
        ];
      })
    )
  ).flat();
  await ProductSKU.bulkCreate(beltSKUs).then(console.log(`**** ${beltSKUs.length} Belt SKUs Seeded****`));

  const accessories = await Promise.all(
    accessoriesProduct.map(async (accessory) => {
      const foundCategory = await categoryFinder("accessories");
      return { ...accessory, categoryId: foundCategory.id };
    })
  );
  await Product.bulkCreate(accessories).then(console.log(`**** ${accessories.length} Accessories Seeded****`));
  const accessoriesColors = await Promise.all(
    accessoryColorData.map(async (accessory) => {
      const product = await productFinder(accessory.productName);
      return { ...accessory, productId: product.id };
    })
  );
  await ProductColor.bulkCreate(accessoriesColors).then(console.log(`**** ${accessoriesColors.length} Accessory Colors Seeded ****`));

  const accessoriesSKUs = await Promise.all(
    accessorySKUData.map(async (accessory) => {
      const productColor = await productColorFinder(accessory.seedId);
      return { ...accessory, availableStock: randomStock(), size: "One-Size-Fits-All", productColorId: productColor.id };
    })
  );
  await ProductSKU.bulkCreate(accessoriesSKUs).then(console.log(`**** ${accessoriesSKUs.length} Accessory SKUs Seeded****`));

  console.log(`seeded successfully`);
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
