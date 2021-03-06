import { api, config } from "./api";

export function addStaff(data) {
  return api.post("/staff", { ...data });
}
export function updateStaff(data) {
  return api.patch(`/staff/${data.id}`, { ...data }, config);
}
export function getStaff() {
  return api.get("/staff", config);
}
export function getSingleStaff(data) {
  return api.get(`/staff/${data}`, config);
}
export function uploadAvatar(data) {
  return api.patch(`/staff/${data}/avatar`, config);
}
export function deleteStaff(data) {
  return api.delete(`/staff/${data}`, config);
}
export function getStaffOfDepartment(data) {
  return api.get(`/staff/attendence/${data}`, config);
}
export function getEmployeeLeaveDetails(data) {
  console.log("id", data);
  return api.get(`/staff/view-leave-status/${data}`, config);
}
export function getAllLeaves() {
  const id = sessionStorage.getItem("staffId");
  return api.get(`/apply-leave/${id}/all`, config);
}
