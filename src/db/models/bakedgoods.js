const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');
class bakedGoods{
    constructor({ id,caption, url, price,user_id }) {
        this.id = id;
        this.caption = caption;
        this.url = url;
        this.price = price;
        this.user_id;
        
      }
      static async create(caption, url, price,user_id) {
        try {
          const query = `INSERT INTO bakedGoods (caption, url, price, user_id)
            VALUES ( ?, ?, ?, ?) RETURNING *`;
          const { rows: [bakedItems] } = await knex.raw(query, [caption, url, price, user_id]);
          return new bakedGoods(bakedItems);
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      static async list() {
        try {
          const query = 'SELECT * FROM bakedGoods';
          const { rows } = await knex.raw(query);
          return rows.map((bakedItems) => new bakedGoods(bakedItems));
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      update = async (bakedItems) => { // dynamic queries are easier if you add more properties
        try {
          const [updatedBakedGoods] = await knex('bakedGoods')
            .where({ id: this.id })
            .update({ bakedItems })
            .returning('*');
          return updatedBakedGoods ? new bakedGoods(updatedBakedGoods) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      };
      static async deleteAll() {
        try {
          return knex.raw('TRUNCATE bakedGoods;');
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      static async find(id) {
        try {
          const query = 'SELECT * FROM bakedGoods WHERE id = ?';
          const { rows: [bakedItems] } = await knex.raw(query, [id]);
          return bakedItems ? new bakedGoods(bakedItems) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }
}
module.exports = bakedGoods;