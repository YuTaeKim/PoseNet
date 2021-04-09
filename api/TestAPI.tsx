import Axios from './_public';

export const getProtectorList = async (
  status: number,
  centerId: number,
  page: number,
) => {
  return Axios.get(
    `/api/v1/protector/?status=${status}&centers=${centerId}&page=${page}`,
  );
};
