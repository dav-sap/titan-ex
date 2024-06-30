import axios from 'axios';
import redisClient from '../cache/redis-client';
import config from 'config';

const unsplashToken = config.get('unsplash_token');
const UNSPLASH_ACCESS_KEY = unsplashToken;
const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/random';

export const fetchPhotos = async (number: number): Promise<string[]> => {
  const cacheKey = `photos`;

  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        count: number,
        client_id: UNSPLASH_ACCESS_KEY
      }
    });

    const photoUrls = response.data.map((photo: any) => photo.urls.full);
    await redisClient.set(cacheKey, JSON.stringify(photoUrls), {
      EX: 3600 // 1 hour, unsplash limit is 50 for 1 hour.
    });

    return photoUrls;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      return [];
    }
    throw error;
  }
};
