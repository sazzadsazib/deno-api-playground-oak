import {doctor} from './../../database.ts';

export const doctorALL = async ({ response }:any) => {
  try {
    const doctorList = await doctor.find();
    response.status = 200;
    response.body = { status: 'success', doctors: doctorList };
  } catch (error) {
    console.log(error);
    response.status = 500;
    response.body = { status: 'failed', data: [] };
  }
};

export const doctorSingle = async ({ response, params }:any) => {
  try {
    let doctorResult = {};
    if(!!params?.id){
      doctorResult = await doctor.findOne({doc_id: params.id});
    }
    response.status = 200;
    response.body = { status: 'success', doctors: doctorResult };
  } catch (error) {
    console.log(error);
    response.status = 500;
    response.body = { status: 'failed', data: {} };
  }
};
