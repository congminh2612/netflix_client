import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
const useCurrentUser = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return { currentUser, isLoggedIn };
};

export default useCurrentUser;
