import { selectors } from "@/app/redux-store";
import { useSelector } from "react-redux";

export const useAdminRoutesProtector = () => {
  const isAdmin = useSelector(selectors.getIsAdmin)

  return {
    isAdmin,
  };
};
