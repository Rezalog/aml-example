import axios from 'axios';
import { useQuery } from 'react-query';
import { Post } from '../types/Post';


const getPostById = async (id: number): Promise<Post> => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`,);
    
    return data;
}

export const usePost = (postId: number) => {
    return useQuery(['post', postId], () => getPostById, {
        enabled: !!postId,
    })
}