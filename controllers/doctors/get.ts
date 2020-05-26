import { doctor } from "./../../database.ts";

interface doctorItem {
  id: any;
  name: string;
  doc_id: string;
  created_at: Date;
  hospitalName: string;
}

export const doctorALL = async ({ response }: any) => {
  try {
    const doctorList: (null | doctorItem[] | undefined) = await doctor.find();
    response.status = 200;
    response.body = { status: "success", doctors: doctorList };
  } catch (error) {
    console.log(error);
    response.status = 500;
    response.body = { status: "failed", data: [] };
  }
};

export const doctorSingle = async ({ response, params }: any) => {
  try {
    let doctorResult:(null | doctorItem | undefined|object) = {};
    
    if (!!params?.id) {
      doctorResult = await doctor.findOne({ doc_id: params.id });
    }
    response.status = 200;
    response.body = { status: "success", doctors: doctorResult };
  } catch (error) {
    console.log(error);
    response.status = 500;
    response.body = { status: "failed", data: {} };
  }
};
