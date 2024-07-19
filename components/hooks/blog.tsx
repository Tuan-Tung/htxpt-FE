import { useSnackbar } from "notistack";
import { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";

import { checkSuccessRequest } from "@/services/api";
import blogServices from "@/services/blog";

export const useBlog = (params: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const handleFetchBlog = async () => {

    try {
      const response = await blogServices.handleFetchBlog(params);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetBlog: UseQueryResult = useQuery(['getBlog', params], handleFetchBlog, {
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
    onGetBlog: useQueryGetBlog,
    refetchBlog: useQueryGetBlog.refetch,
  };
};

export const useBlogDetail = (id: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<any>([]);
  const handleFetchBlogById = async () => {

    try {
      const response = await blogServices.handleFetchBlogById(id);

      return response?.data
    } catch (error) {
      throw error;
    }
  }
  const useQueryGetBlogById: UseQueryResult = useQuery(['getBlogDetail', id], handleFetchBlogById, {
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
    onGetBlogById: useQueryGetBlogById,
    refetchBlogById: useQueryGetBlogById.refetch,
  };
};
