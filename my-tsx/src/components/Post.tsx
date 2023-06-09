import { Dispatch, SetStateAction, useCallback } from "react";
import { usePost } from "../hooks/usePost";


interface Props {
    postId: number,
    setPostId: Dispatch<SetStateAction<number>>;
}

const Post = ( { postId, setPostId }: Props ) => {
    
    const { status, data, error, isFetching } = usePost(postId);

    const renderByStatus = useCallback(() => {

        switch(status) {
            case 'loading': return <div>Loading...</div>;
            case 'error': 
                if(error instanceof Error) return <span>`Error: ${error.message}`</span>;
                break;
            default: 
                return (
                    <>
                        {/* <h1>{ data?.title }</h1>
                        <div>
                            <p>{ data?.body }</p>
                        </div> */}
                        {isFetching && <div>Background updating...</div>}
                    </>
                )
        }


    }, [ status, data, error, isFetching ]); //-- renderByStatus


    return (
        <div>
            <a 
                onClick={() => setPostId(-1)}
                href="#"
            >    
            Back
            </a>
            { renderByStatus() }
        </div>
    );
};

export default Post;