import axios from "axios";
import { API_PATH } from "./constants";
import { toast } from "react-toastify";

export const fetchData = async (path) => {
  const config = {
    method: "get",
    url: `${API_PATH}${path}`,
  };
  let { data } = await axios(config);
  if (data) return data;
};

export const postData = async (data) => {
  var headers = {};
  var requestOptions = {
    method: "POST",
    headers: headers,
    body: data,
  };

  let result = await (
    await fetch(`${API_PATH}/pipeline-partner`, requestOptions)
  ).json();
  if (result) return result;
};

export function showToast(message,type){
  const settings={
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  }
  if(type=='success'){
      return toast.success(message, settings);
  }else if(type=="error"){
      return toast.error(message, settings);
  }
}