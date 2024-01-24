import * as redis from "redis";

const redisConnection = redis.createClient({ url: "redis://localhost:6380" });

export { redisConnection };
