import { Request, Response } from 'express';
import { fetchPhotos } from './photo-urls.service';

export const getPhotos = async (req: Request, res: Response): Promise<void> => {
  try {
    const number = parseInt(req.params.number, 10);
    const photos: string[] = await fetchPhotos(number);
    res.json(photos);
  } catch (error) {
    console.error(error?.message || 'unknown error')
    res.status(500).json({ error: error.message });
  }
};
