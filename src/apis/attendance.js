import { api, config } from "./api";

export function applyForLeave(data) {
  return api.post("/attendance", { ...data });
}
export function updateLeaveCategory(data) {
  return api.patch(`/attendance`, { ...data });
}
export function getAllLeaves() {
  return api.get("/attendance");
}
export function getSingleLeave(data) {
  return api.get(`/attendance`);
}
export function deleteLeaveCategory(data) {
  return api.delete(`/attendance`, config);
}
export function updateLeaveStatus(data) {
  return api.patch(`/attendance`, { ...data });
}
