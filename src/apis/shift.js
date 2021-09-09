import { api, config } from "./api";

export function addShift(data) {
  return api.post("shift", { ...data }, config);
}
export function getAllShifts() {
  return api.get("shift", config);
}
export function getSingleShift(data) {
  return api.get(`shift/${data}`, config);
}
export function updateShift(data) {
  return api.patch(`shift/${data.id}`, { ...data }, config);
}
export function deleteShift(data) {
  return api.delete(`/shift/${data}`, config);
}
