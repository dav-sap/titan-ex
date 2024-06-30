import { Request, Response, NextFunction } from 'express';

const validateNumberInput = (req: Request, res: Response, next: NextFunction) => {
  const number = parseInt(req.params.number, 10);

  if (isNaN(number) || number <= 0) {
    return res.status(400).json({ error: 'Invalid number parameter. It must be a positive integer.' });
  }

  next();
};

export {
  validateNumberInput
}