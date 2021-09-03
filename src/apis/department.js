import { api, config } from "./api";

export function addDepartment(data) {
  return api.post("/department", { ...data });
}
export function updateDepartment(data) {
  return api.patch(`/department/${data.id}`, { ...data });
}
export function getDepartments() {
  return api.get("/department");
}
export function getSingleDepartment(data) {
  return api.get(`/department/${data}`);
}
export function deleteDepartment(data) {
  return api.delete(`/department/${data}`, config);
}
