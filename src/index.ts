import { Hono } from "hono";
import { compress } from "hono/compress";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { OpenAPIHono } from "@hono/zod-openapi";
import { handle } from "hono/aws-lambda";

const app = new Hono();
const api = new OpenAPIHono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono",
];

api.use(compress());
api.use("*", etag());
api.use(logger());
api.use(prettyJSON());
api.use(secureHeaders());

api.get("/", (c) => {
  return c.json({ message: welcomeStrings.join("\n\n") });
});

app.route("/", api);

export const handler = handle(app);

export default app;
