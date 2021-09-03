import { api, config } from "./api";

export function addHoliday(data) {
  return api.post("/holiday-allotment", { ...data });
}
export function updateHoliday(data) {
  return api.patch(`/holiday-allotment/${data.id}`, { ...data });
}
export function getHolidays() {
  return api.get("/holiday-allotment");
}
export function getSingleHoliday(data) {
  console.log("ok", data);
  return api.get(`/holiday-allotment/${data}`);
}
export function deleteHoliday(data) {
  return api.delete(`/holiday-allotment/${data}`, config);
}
