import axios from 'axios';
import { Post } from '../types/Post'
import { useQuery } from 'react-query';


const getPosts = async(): Promise<Array<Post>> => {

    const { data } = await axios.get("'https://jsonplaceholder.typicode.com/posts'",)

    return data;
}

export const usePosts = () => {
    return useQuery('posts', getPosts);
}