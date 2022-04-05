import useSWR from "swr";
import axios from "axios";

const userAPI = async () => {
  const result = await axios.post("http://localhost:8080/api/user");
  return result.data;
};

export default function useUser() {
  const { data, mutate, error } = useSWR("api_user", userAPI);
  console.dir(error);

  const loading = !data && !error;
  const loggedOut = error;
  // const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
