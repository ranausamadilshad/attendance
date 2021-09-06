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
export function getSingleLeaveCategory(data) {
  console.log("ok", data);
  return api.get(`/apply-leave/${data}`);
}
export function deleteLeaveCategory(data) {
  return api.delete(`/apply-leave/${data}`, config);
}
