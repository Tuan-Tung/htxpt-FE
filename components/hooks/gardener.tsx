import { useSnackbar } from "notistack";
import { useState } from "react";
import { useQuery,UseQueryResult } from "react-query";

import { checkSuccessRequest } from "@/services/api";
import gardenServices from "@/services/garden";

export const useGardener = (params: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchGarden = async () => {

    try {
      const response = await gardenServices.handleFetchGarden(params);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetGarden: UseQueryResult = useQuery(['getGarden', params], handleFetchGarden, {
    refetchOnWindowFocus: false,
    enabled: !!params,
    onSuccess: (res: any) => {

      if (checkSuccessRequest(res)) {
        setData(res?.data?.items.map((value: any) => (
          {
            ...value,
            full_name: value?.first_name + " " + value?.last_name
          }
        )))
      }
      else {
        enqueueSnackbar("Error", {
          variant: 'error',
          autoHideDuration: 2000,
        });
      }
    },
  });

  return {
    data: data,
    onGetGarden: useQueryGetGarden,
    refetchGarden: useQueryGetGarden.refetch,
  };
};

export const useGardenerDetail = (id: string | string[]) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchGardenById = async () => {

    try {
      const response = await gardenServices.handleFetchGardenById(id);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetGardenById: UseQueryResult = useQuery(['getGardenDetail', id], handleFetchGardenById, {
    refetchOnWindowFocus: false,
    enabled: !!id,
    onSuccess: (res: any) => {

      if (checkSuccessRequest(res)) {
        console.log(res?.data);
        
        setData(res?.data?.gardener)
      }
      else {
        enqueueSnackbar("Error", {
          variant: 'error',
          autoHideDuration: 2000,
        });
      }
    },
  });

  return {
    data: data,
    onGetGardenById: useQueryGetGardenById,
    refetchGardenById: useQueryGetGardenById.refetch,
  };
};