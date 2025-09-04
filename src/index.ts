import { Hono } from "hono";
import { compress } from "hono/compress";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono",
];

app.use(compress());
app.use("*", etag());
app.use(logger());
app.use(prettyJSON());
app.use(secureHeaders());

app.get("/", (c) => {
  return c.json({ message: welcomeStrings.join("\n\n") });
});

export default app;
