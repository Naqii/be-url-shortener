import express from 'express';
import dummyController from '../controllers/dummy.controllers';
import {
  shortenUrl,
  redirectToOriginalUrl,
} from '../controllers/shortener.controller';

const router = express.Router();

router.get('/dummy', dummyController.dummy);

router.post('/shorten', shortenUrl);
router.get('/:alias', redirectToOriginalUrl);

export default router;
