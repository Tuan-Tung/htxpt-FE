import { useSnackbar } from "notistack";
import { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";

import { checkSuccessRequest } from "@/services/api";
import bonsaiServices from "@/services/bonsai";

export const useBonsai = (params: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchBonsai = async () => {

    try {
      const response = await bonsaiServices.handleFetchBonsai(params);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetBonsai: UseQueryResult = useQuery(['getBonsai', params], handleFetchBonsai, {
    refetchOnWindowFocus: false,
    enabled: !!params,
    onSuccess: (res: any) => {

      if (checkSuccessRequest(res)) {
        setData(res?.data?.items)
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
    onGetBonsai: useQueryGetBonsai,
    refetchBonsai: useQueryGetBonsai.refetch,
  };
};

export const useBonsaiDetail = (id: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchBonsaiById = async () => {

    try {
      const response = await bonsaiServices.handleFetchBonsaiById(id);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetBonsaiById: UseQueryResult = useQuery(['getBonsaiDetail', id], handleFetchBonsaiById, {
    refetchOnWindowFocus: false,
    enabled: !!id,
    onSuccess: (res: any) => {
      if (checkSuccessRequest(res)) {

        setData(res?.data)
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
    onGetBonsaiById: useQueryGetBonsaiById,
    refetchBonsaiById: useQueryGetBonsaiById.refetch,
  };
};
