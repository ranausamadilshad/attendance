import { api, config } from "./api";

export function markAttendance(data) {
  return api.post("/attendence", { ...data }, config);
}
export function updateAttendance(data) {
  return api.patch(`/attendence`, { ...data }, config);
}
export function markAbsent(data) {
  return api.post(`/attendence/absent`, { ...data }, config);
}
export function markLeave(data) {
  return api.post(`/attendence/leave`, { ...data }, config);
}
export function getAttendance() {
  return api.get("/attendence", config);
}
export function getStaffAttendance(data) {
  return api.get(`/attendence/stats/${data}`, config);
}
