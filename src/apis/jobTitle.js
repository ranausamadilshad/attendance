import { api, config } from "./api";

export function addJobTitle(data) {
  return api.post("job-title", { ...data });
}
export function getJobTitle() {
  return api.get("job-title");
}
export function getSingleJobTitle(data) {
  return api.get(`job-title/${data}`);
}
export function updateJobTitle(data) {
  return api.patch(`job-title/${data.id}`, { ...data });
}
export function deleteJobTitle(data) {
  return api.delete(`/job-title/${data}`, config);
}
