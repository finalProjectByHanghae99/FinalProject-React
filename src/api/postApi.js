import instance from "./api";
import { formDataApi } from "./api";

export const postApi = {
  postWrite: (formData) => formDataApi.post("/api/post", formData),
  getPost: () => instance.get("/api/category"),
  getDetail: (postId) => instance.get(`/api/post/${postId}`),
};
