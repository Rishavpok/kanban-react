import api from "../../../api/api";

export const login = (data:any) => api.post("/auth/login", data)

export const signUp = (data : any) => api.post("/auth/register" , data )

