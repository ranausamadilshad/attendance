import { api, config } from "./api";

export function addStaff(data) {
  console.log("staff data", data);
  return api.post("/staff", { ...data });
}
export function updateStaff(data) {
  return api.patch(`/staff/${data.id}`, { ...data });
}
export function getStaff() {
  return api.get("/staff");
}
export function getSingleStaff(data) {
  console.log("ok", data);
  return api.get(`/staff/${data}`);
}
export function deleteStaff(data) {
  return api.delete(`/staff/${data}`, config);
}
