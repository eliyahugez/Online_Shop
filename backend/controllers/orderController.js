const Order = require("../models/orderModel");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require("../utils/errorHandler");
const updateStock = require("../utils/updateStock");

//Create new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    if (!paymentInfo) {
        return next(new ErrorHandler("Please make payment first.", 400));
    }

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user.id,
    });

    res.status(201).json({
        success: true,
        order
    })
})

//Get single order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
        return next(new ErrorHandler("Order not found.", 404));
    }

    res.status(200).json({
        success: true,
        order
    })
})

//Get loggedin user orders
exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id });

    res.status(200).json({
        success: true,
        orders
    })
})

//Get all orders -- admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();

    let totalPrice = 0;

    orders.forEach(order => {
        totalPrice += order.totalPrice;
    })

    res.status(200).json({
        success: true,
        orders,
        totalPrice
    })
})

//update order status -- admin
exports.updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found.", 404));
    }

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler("You have already delivered this order.", 400))
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (item) => {
            await updateStock(item.product, item.quantity)
        })
    }
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }
    
    await order.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        message: "Order delivered successfully."
    })
})

//delete order -- admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found.", 404));
    }

    await order.remove()

    res.status(200).json({
        success: true,
        message: "Order deleted successfully."
    })

})