import { useSnackbar } from "notistack";
import { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";

import { checkSuccessRequest } from "@/services/api";
import fruitServices from "@/services/fruit";

export const useFruitCategory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchFruitCategory = async () => {

    try {
      const response = await fruitServices.handleFetchFruitCategory();

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetFruitCategory: UseQueryResult = useQuery(['getFruitCategory'], handleFetchFruitCategory, {
    refetchOnWindowFocus: false,
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
    onGetFruitCategory: useQueryGetFruitCategory,
    refetchFruitCategory: useQueryGetFruitCategory.refetch,
  };
};

export const useFruit = (params: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchFruit = async () => {

    try {
      const response = await fruitServices.handleFetchFruit(params);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetFruit: UseQueryResult = useQuery(['getFruit', params], handleFetchFruit, {
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
    onGetFruit: useQueryGetFruit,
    refetchFruit: useQueryGetFruit.refetch,
  };
};

export const useFruitDetail = (id: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<any>([]);
  const handleFetchFruitById = async () => {

    try {
      const response = await fruitServices.handleFetchFruitById(id);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetFruitById: UseQueryResult = useQuery(['getFruitDetail', id], handleFetchFruitById, {
    refetchOnWindowFocus: false,
    enabled: !!id,
    onSuccess: (res: any) => {
      console.log(res);
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
    onGetFruitById: useQueryGetFruitById,
    refetchFruitById: useQueryGetFruitById.refetch,
  };
};

export const useFruitByCategory = (id: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);

  const handleFetchFruitByCategory = async () => {
    
    try {
      const response = await fruitServices.handleFetchFruitByCategory(id);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetFruitByCategory: UseQueryResult = useQuery(['getFruitByCategory', id], handleFetchFruitByCategory, {
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
    onGetFruitByCategory: useQueryGetFruitByCategory,
    refetchFruitByCategory: useQueryGetFruitByCategory.refetch,
  };
};