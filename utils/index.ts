import moment from "moment";

import { EMPTY_DEFAULT_TEXT, FORMAT_DATE_PICKER } from "@/constants/common";

export const formatDateForm = (date: moment.MomentInput | any, type = FORMAT_DATE_PICKER) => {
    return date ? moment(date).format(type) : EMPTY_DEFAULT_TEXT;
  };