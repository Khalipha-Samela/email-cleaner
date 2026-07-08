import api from "./api";

export const fetchEmails = async () => {
  const response = await api.get("/api/gmail/emails", {
    withCredentials: true,
  });

  return response.data;
};