import { RootState } from "@/app/redux-store";

export const getFeedbackOpen = (state: RootState) => state?.feedback.open;
export const getFeedbackType = (state: RootState) => state?.feedback.type;
export const getFeedbackMessage = (state: RootState) => state?.feedback.message;
