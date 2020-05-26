import { Application } from 'https://deno.land/x/oak/mod.ts';

import { PORT } from './config.js';
import router from './router.ts';

const app:any = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(({ response }:any) => {
  response.status = 404;
  response.body = { status: 'Not Found' };
});

console.log(`Server is running in ${PORT} \nOpen: http://localhost:${PORT}`);

await app.listen({ port: PORT });
