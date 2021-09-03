import { api, config } from "./api";

export function addShift(data) {
  return api.post("shift", { ...data });
}
export function getAllShifts() {
  return api.get("shift");
}
export function getSingleShift(data) {
  return api.get(`shift/${data}`);
}
export function updateShift(data) {
  return api.patch(`shift/${data.id}`, { ...data });
}
export function deleteShift(data) {
  return api.delete(`/shift/${data}`, config);
}
