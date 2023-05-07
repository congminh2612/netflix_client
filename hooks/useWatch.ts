import { useRouter } from "next/router";

const useWatch = () => {
  const router = useRouter();

  const navigateToWatch = (id?: string) => {
    router.push(`watch/${id}`);
  };

  return { navigateToWatch };
};

export default useWatch;
