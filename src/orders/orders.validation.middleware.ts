import { Request, Response, NextFunction } from 'express';

const validateOrderInput = (req: Request, res: Response, next: NextFunction) => {
  const { email, fullName, fullAddress, imageUrls, user } = req.body;

  if (!email || !fullName || !fullAddress || !imageUrls || !user) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  next();
};

const validateOrderGet = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.params;

  if (!user) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  next();
};

export {
  validateOrderInput,
  validateOrderGet
}