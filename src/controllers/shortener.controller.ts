import { Request, Response } from 'express';
import * as urlService from '../services/url.service';

export const shortenUrl = async (req: Request, res: Response) => {
  const { originalUrl, customAlias } = req.body;

  const shortUrl = await urlService.createShortUrl(originalUrl, customAlias);
  res.status(201).json({ shortUrl });
};

export const redirectToOriginalUrl = async (req: Request, res: Response) => {
  const { alias } = req.params;

  const originalUrl = await urlService.getOriginalUrl(alias);
  if (typeof originalUrl === 'string') {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Referrer-policy', 'no-referrer')
    res.redirect(301, originalUrl);
  } else {
    res.status(404).json({ error: 'URL not found' });
  }
};
