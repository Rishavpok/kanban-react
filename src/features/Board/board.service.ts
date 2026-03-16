import api from "../../api/api";
import type { Task } from "../../types/types";

export const getTasks = (status:string) => api.get(`tasks?status=${status}`)

export const addTasks = (data : any) => api.post('tasks', data)

export const taskUpdate = (id : number , data : Task) => api.patch(`tasks/${id}` , data )

export const deleteTask = (id : number) => api.delete(`tasks/${id}`)