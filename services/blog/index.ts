import { api } from "../api";

class BlogServices {
    handleFetchBlog = (param: any) => {
        return api.get('/blog', param);
    };
    handleFetchBlogById = (id: string) => {
        return api.get(`/blog/${id}`);
    };
}

const blogServices = new BlogServices();

export default blogServices;
