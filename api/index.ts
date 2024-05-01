import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = { runtime: "edge" };

const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res)
    .then((res) => res.json())
    .catch((error) => console.error(error));

  c.header("Cache-Control", "public,max-age=86400");

  return c.json(response);
});

app.get("/:id", async (c) => {
  const id = c.req.param("id");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
    .then((res) => res)
    .then((res) => res.json())
    .catch((error) => console.error(error));

  c.header("Cache-Control", "public,max-age=86400");

  return c.json(response);
});

export default handle(app);
