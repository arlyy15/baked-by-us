const express = require('express');
const userController = require('./controllers/user');
const bakedGoodsController = require('./controllers/bakedGoods');
const otherController = require('./controllers/other');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);
Router.post('/bakedGoods', bakedGoodsController.create);
Router.post('/other', otherController.create);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);
Router.get('/bakedGoods', bakedGoodsController.list);
Router.get('/bakedGoods/:id', bakedGoodsController.show);
Router.get('/other', otherController.list);
Router.get('/other/:id', otherController.show);

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/bakedGoods/:id', checkAuthentication, bakedGoodsController.update);
Router.patch('/other/:id', checkAuthentication, otherController.update);
// Delete
Router.delete('/users/logout', userController.logout);
Router.delete('/bakedGoodss/DeletebakedItem', bakedGoodsController.deleted);
Router.delete('/Other/DeleteOtherItem', otherController.deleted);
module.exports = Router;
