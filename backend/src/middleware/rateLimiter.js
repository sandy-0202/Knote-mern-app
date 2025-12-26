import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    
    //rate limit individual user
    try {
        const {success} = await ratelimit.limit("my-rate-limit") // use ip address to rate limit individual users or user ids

        if(!success) {
            return res.status(429).json({
                message: "too many requests, please try again later",
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;