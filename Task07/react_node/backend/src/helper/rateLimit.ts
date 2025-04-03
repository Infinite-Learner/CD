import rateLimit from "express-rate-limit";

export const rateLimiter =rateLimit({
  windowMs: 2*60*1000,
  max:100,
  message:{message:'You have exceeded the 5 requests in 2 Minutes limit! try after 2 minutes'}, 
  standardHeaders: true,
  legacyHeaders: false,
}
);