import { Request, Response } from 'express';
import { createOrder, getOrders } from './orders.service';

const addOrder = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req.body);
    res.status(200).json(order);
  } catch (error) {
    console.error(error?.message, 'unknown error')
    res.status(500).json({ error: error.message });
  }
};

const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders(req.params.user);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error?.message, 'unknown error')
    res.status(500).json({ error: error.message });
  }
};

export {
  addOrder,
  getOrdersByUser,
}