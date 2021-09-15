import { api, config } from "./api";

export function applyForLeave(data) {
  console.log("data", data);
  return api.post("/apply-leave", { ...data }, config);
}
export function updateLeaveCategory(data) {
  return api.patch(`/apply-leave/${data.id}`, { ...data }, config);
}
export function getAllLeaves() {
  return api.get("/apply-leave", config);
}
export function getSingleLeave(data) {
  return api.get(`/apply-leave/${data}`, config);
}
// export function deleteLeaveCategory(data) {
//   return api.delete(`/apply-leave/${data}`, config);
// }
export function updateLeaveStatus(data) {
  return api.patch(`/apply-leave/${data.id}/status`, { ...data }, config);
}
