// src/api.js
import axios from "axios";
import Cookies from "js-cookie";

// Base URL from environment variables
const API_URL = import.meta.env.VITE_API_URL;

// Axios instance with centralized config
const api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "/api" : `${API_URL}/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // cookies handling
});

// ====== Auth / User APIs ======

export const registerUser = async (formData) => {
  
    const {data} = await api.post(
      "/users/register", 
      formData,
      {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
    );
    console.log("signup  ke resp mai kiya aaya hai : ",data);
    return data;
};


export const loginUser = async ({ email, password, role }) => {
    const {data} = await api.post(
      "/users/login",
      { email, password, role }
    );
    console.log("login ke resp mai kiya aaya hai : ",data);
    return data; 
};

export const logoutUser = async () => {
    const { data } = await api.get(
      "/users/logout" ,
        { withCredentials: true }
    );
    return data;
};

export const getProfile = async () => {
    const { data } = await api.get(
        "/users/my-profile",
        {
            withCredentials: true,
            headers: {
            "Content-Type": "application/json",
            },
        }
    );
    return data;
};

export const getAllBlogs = async () => {
    const { data } = await api.get(
      "/blogs/all-blogs" 
    );
    return data;
};

export const getSingleBlog = async (id) => {
    const {data} = await api.get(
      `/blogs/single-blog/${id}`,
      {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
      }
    );
    return data;
};


export const getAdmins = async () => {
    const {data} = await api.get(
      "/users/admins" ,
      {
         withCredentials: true,
      }
    );
    return data;
};

export const getMyBlogs = async () => {
    const {data} = await api.get(
      "/blogs/my-blog",
      { withCredentials: true } 
    );
    return data;
};

export const createBlog = async (formData) => {
    const {data} = await api.post(
      "/blogs/create", 
      formData,
      {
        withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
};

export const deleteBlog = async (id) => {
    const response = await api.delete(
      `/blogs/delete/${id}`,
      {withCredentials: true},
    );
    return response;
};

export const updateBlog = async (id, formData) => {
    const {data} = await api.put(
      `/blogs/update/${id}`, 
      formData
    );
    return data;
};

// Export axios instance if needed elsewhere
export default api;