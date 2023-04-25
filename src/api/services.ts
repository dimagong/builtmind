
import axios from "axios";
import { IPosts } from "../interfaces";



const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
});




const responseRejectInterceptor = (err: any) => {
    //todo handling error 
    if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        const message = err.response.message ?? err.message ??  'Wrong status code'
        return Promise.reject(new Error(message))
    } else {
        return Promise.reject(new Error('Something was wrong'))
    }

};



instance.interceptors.response.use(response => response, responseRejectInterceptor);

export const serviceApi = {
    get: (endpoint: any) => instance.get(endpoint).then(response => response),
    delete: (endpoint: any) => instance.delete(endpoint).then(response => response),
    head: (args: any) => instance.head(args).then(response => response),
    post: (endpoint: any, data: any) => instance.post(endpoint, data).then(response => response),
    put: (endpoint: any, data: any) => instance.put(endpoint, data).then(response => response),
    patch: (args: any) => instance.patch(args).then(response => response),
  };
  
export const  getPostsApi = () => {
    return serviceApi.get("/posts")
}
export const  getImagesPostsApi = () => {
    return serviceApi.get("/albums/1/photos")
}

export const createPostApi = (data: Partial<IPosts>)  => {
    return serviceApi.post("/posts", data)
}

export const  getTaskByIDApi = (postId: string | number) => {
    return serviceApi.get(`/posts/${postId}`)
}

export const updatePostApi = (id: string | number, data: IPosts) => {
    return serviceApi.put(`/posts/${id}`, data)
}

export const deleteTaskApi = (id: string | number) => {
    return serviceApi.delete(`/posts/${id}`)
}
