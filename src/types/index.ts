// File: /my-express-app/src/types/index.ts

import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

export interface Request extends ExpressRequest {
  // Add any custom properties to the Request interface if needed
}

export interface Response extends ExpressResponse {
  // Add any custom properties to the Response interface if needed
}

// This file is intentionally left blank.