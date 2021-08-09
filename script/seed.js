"use strict";

const {
  db,
  models: { User, Casting },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const castings = await Promise.all([
    Casting.create({
      name: "castingI",
      title: "Casting I",
      inventory: "JS6",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingII",
      title: "Casting II",
      inventory: "JS7",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingIII",
      title: "Casting III",
      inventory: "JS8",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingIV",
      title: "Casting IV",
      inventory: "JS9",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingV",
      title: "Casting V",
      inventory: "JS11",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingVI",
      title: "Casting VI",
      inventory: "JS12",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingVII",
      title: "Casting VII",
      inventory: "JS13",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingVIII",
      title: "Casting VIII",
      inventory: "JS14",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingIX",
      title: "Casting IX",
      inventory: "JS15",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
    Casting.create({
      name: "castingX",
      title: "Casting X",
      inventory: "JS16",
      size: "5.5 x 7 in",
      medium: "Graphite on board",
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${castings.length} castings`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    castings: {
      castingI: castings[0],
      castingII: castings[1],
      castingIII: castings[2],
      castingIV: castings[3],
      castingV: castings[4],
      castingVI: castings[5],
      castingVII: castings[6],
      castingVIII: castings[7],
      castingIX: castings[8],
      castingX: castings[9],
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
