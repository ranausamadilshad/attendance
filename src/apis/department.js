import { api, config } from "./api";

export function addDepartment(data) {
  return api.post("/department", { ...data }, config);
}
export function updateDepartment(data) {
  return api.patch(`/department/${data.id}`, { ...data }, config);
}
export function getDepartments() {
  return api.get("/department", config);
}
export function getSingleDepartment(data) {
  return api.get(`/department/${data}`, config);
}
export function deleteDepartment(data) {
  return api.delete(`/department/${data}`, config);
}
export function getDepartmentEmployees(data) {
  return api.get(`/department/${data}`, config);
}
