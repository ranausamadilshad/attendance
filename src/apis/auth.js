import { api } from "./api";

export function login(data) {
  return api.post("/auth/login", { ...data });
}
