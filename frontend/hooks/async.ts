import { useState } from "react";

const useAsync = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return [isLoading, setIsLoading];
};

export default useAsync;
