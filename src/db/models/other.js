const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');
class Other{
    constructor({ id,comment,rating,user_id }) {
        this.id = id;
        this.comment = comment;
        this.rating = rating;
        this.user_id = user_id;
        
      }
      static async create(id,comment,rating,user_id) {
        try {
          const query = `INSERT INTO Other (id,comment,rating,user_id)
            VALUES (?, ?, ?, ?) RETURNING *`;
          const { rows: [otherItems] } = await knex.raw(query, [id,comment,rating,user_id]);
          return new Other(otherItems);
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      static async list() {
        try {
          const query = 'SELECT * FROM Other';
          const { rows } = await knex.raw(query);
          return rows.map((otherItems) => new Other(otherItems));
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      update = async (otherItems) => { // dynamic queries are easier if you add more properties
        try {
          const [updatedOtherItems] = await knex('bakedGoods')
            .where({ id: this.id })
            .update({ otherItems })
            .returning('*');
          return updatedOtherItems ? new Other(updatedOtherItems) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      };
      static async deleteAll() {
        try {
          return knex.raw('TRUNCATE Other;');
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      static async find(id) {
        try {
          const query = 'SELECT * FROM bakedGoods WHERE id = ?';
          const { rows: [otherItems] } = await knex.raw(query, [id]);
          return otherItems ? new Other(otherItems) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }
}
module.exports = Other;