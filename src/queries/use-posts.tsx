import api from "../utils/api";

/**
 * @param limit the limit that will be used for pagination
 * @param offset the offset that will be used for pagination
 */
export const getBlogs = async (limit:number, offset:number) => {
    let res = await api.get('posts', { params: {limit: limit, offset: offset} });

    return res;
} 

export const getBlogById = async (id:string) => {
    let res = await api.get(`posts/${id}`);

    return res;
} 

export const getLatestBlogs = async () => {
    let res = await api.get(`posts/latests`);

    return res;
}

export const getRelatedBlogs = async () => {
    let res = await api.get(`posts/latests`);

    return res;
}