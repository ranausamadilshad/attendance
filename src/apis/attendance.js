import { api, config } from "./api";

export function markAttendance(data) {
  return api.post("/attendence", { ...data }, config);
}
export function updateAttendance(data) {
  return api.patch(`/attendence`, { ...data }, config);
}
export function getAttendance() {
  return api.get("/attendence", config);
}
export function getSingleLeave(data) {
  return api.get(`/attendence`);
}
export function deleteLeaveCategory(data) {
  return api.delete(`/attendence`, config);
}
export function updateLeaveStatus(data) {
  return api.patch(`/attendence`, { ...data });
}
