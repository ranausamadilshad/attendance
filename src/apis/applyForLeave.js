import { api, config } from "./api";

export function applyForLeave(data) {
  return api.post("/apply-leave", { ...data });
}
export function updateLeaveCategory(data) {
  return api.patch(`/apply-leave/${data.id}`, { ...data });
}
export function getAllLeaves() {
  return api.get("/apply-leave");
}
export function getSingleLeave(data) {
  return api.get(`/apply-leave/${data}`);
}
export function deleteLeaveCategory(data) {
  return api.delete(`/apply-leave/${data}`, config);
}
export function updateLeaveStatus(data) {
  return api.patch(`/apply-leave/${data.id}/status`, { ...data });
}
