import { Router } from 'https://deno.land/x/oak/mod.ts';

import {doctorALL,doctorSingle} from './controllers/doctors/get.ts';

const router = new Router();

router.get('/', ({ response }:any) => {
  response.body = 'DOCTOR rest api using deno runtime!';
});

router
  .get('/doctors/all', doctorALL)
  .get('/doctors/:id',doctorSingle)
export default router;
