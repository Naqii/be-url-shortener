import urlSchema from '../models/ShortUrl.model';
import { BASE_URL } from '../utils/env';
import { isValidUrl } from '../utils/validator';

export const createShortUrl = async (originalUrl: string, alias: string) => {
  if (!isValidUrl(originalUrl)) {
    throw new Error('Invalid URL');
  }

  const exists = await urlSchema.findOne({ alias });
  if (exists) {
    throw new Error('Alias alredy taken');
  }

  const newUrl = await urlSchema.create({
    alias,
    originalUrl,
  });

  return `${BASE_URL}/${alias}`;
};

export const getOriginalUrl = async (alias: string) => {
  const entry = await urlSchema.findOne({ alias });
  if (!entry) throw new Error('Alias not found');

  return entry.originalUrl;
};
