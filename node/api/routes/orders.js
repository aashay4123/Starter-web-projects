const express = require('express');
const router = express.Router();
const morgan = require('morgan');

const checkAuth = require('../middleware/check-auth');


const OrdersController = require('../controller/orders');

router.get('/',checkAuth,OrdersController.orders_get_all);

router.post('/',checkAuth,OrdersController.order_post);

router.get('/:orderId',checkAuth,OrdersController.order_getId);

router.delete('/:orderId',checkAuth, OrdersController.order_delete);

module.exports = router;