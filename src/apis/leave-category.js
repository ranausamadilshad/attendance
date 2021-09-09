import { api, config } from "./api";

export function addLeaveCategory(data) {
  return api.post("/leave-category", { ...data }, config);
}
export function updateLeaveCategory(data) {
  return api.patch(`/leave-category/${data.id}`, { ...data }, config);
}
export function getLeaveCategory() {
  return api.get("/leave-category", config);
}
export function getSingleLeaveCategory(data) {
  console.log("ok", data);
  return api.get(`/leave-category/${data}`, config);
}
export function deleteLeaveCategory(data) {
  return api.delete(`/leave-category/${data}`, config);
}
