/* This seed file uses the existing `User` model to 
create new users with hashed passwords. To seed your 
database with other User data, update your model's `create` 
function to accept other input fields first before updating
this file.
*/
const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', 'password1', 'Arly', 'Raymundo');
  await User.create('l33t-guy', 'password1', 'Ben', 'Spector');
}; ``
const Other = require('../models/other')
exports.seed = async (knex) => {
  await Other.deleteAll();
  await Other.create('1', 'smells and tastes amazing!', 'Ten!', '2');
};
