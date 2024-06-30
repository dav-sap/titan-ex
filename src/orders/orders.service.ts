import Order from '../models/Order';

const createOrder = async (orderData) => {
  return Order.create(orderData);
};

const getOrders = async (userId: string) => {
    const orders = await Order.findAll({
      where: {
        user: userId,
      },
    });
    return orders
}

export {
  createOrder,
  getOrders
}