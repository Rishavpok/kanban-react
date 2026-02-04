import api from "../../../api/api";

export const login = (data:any) => api.post("/auth/login", data)