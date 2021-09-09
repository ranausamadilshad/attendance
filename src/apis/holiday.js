import { api, config } from "./api";

export function addHoliday(data) {
  return api.post("/holliday-allortment", { ...data }, config);
}
export function updateHoliday(data) {
  return api.patch(`/holliday-allortment/${data.id}`, { ...data }, config);
}
export function getHolidays() {
  return api.get("/holliday-allortment", config);
}
export function getSingleHoliday(data) {
  console.log("ok", data);
  return api.get(`/holliday-allortment/${data}`, config);
}
export function deleteHoliday(data) {
  return api.delete(`/holliday-allortment/${data}`, config);
}
