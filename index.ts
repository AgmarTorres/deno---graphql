import { Application } from "https://deno.land/x/oak/mod.ts";
import { GraphQLService } from "./server.ts";

const app = new Application();

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

/*app.use((ctx) => {
  ctx.response.body = "Hello World!";
});
*/

await app.listen({ port: 8000 });
