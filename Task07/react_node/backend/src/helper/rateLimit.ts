import rateLimit from "express-rate-limit";

export const rateLimiter =rateLimit({
  windowMs: 2*60*1000,
  max:10,
  message:{message:'You have exceeded request limit! try after few minutes'}, 
  standardHeaders: true,
  legacyHeaders: false,
}
);