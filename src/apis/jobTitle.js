import { api, config } from "./api";

export function addJobTitle(data) {
  return api.post("job-title", { ...data }, config);
}
export function getJobTitle() {
  return api.get("job-title", config);
}
export function getSingleJobTitle(data) {
  return api.get(`job-title/${data}`, config);
}
export function updateJobTitle(data) {
  return api.patch(`job-title/${data.id}`, { ...data }, config);
}
export function deleteJobTitle(data) {
  return api.delete(`/job-title/${data}`, config);
}
