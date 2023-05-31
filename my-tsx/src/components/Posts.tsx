
import { Dispatch, SetStateAction, useCallback } from "react"
import { useQueryClient } from "react-query";
import { usePosts } from "../hooks/usePosts";


interface Props {
    // setPostId 의 타입을 받아와햐므로, React.Dispatch와 React.SetStateAction 을 이용한다.
    setPostId: Dispatch<SetStateAction<number>>,
    
}

const Posts = ( { setPostId }: Props ) => {

    const queryClient = useQueryClient();
    const { status, data, error } = usePosts();

    /* renderByStatus */

    const renderByStatus = useCallback(() => { // useCallback 을 사용하여 함수를 재사용하며 콜백/렌더링
        
        switch(status) {  // useQuery의 사용결과(usePosts)의 status 프로퍼티에 따라(string) 분기
            case 'loading': return <div>Loading...</div>
            case 'error': 
                if(error instanceof Error) {
                    return <span>Error: {error.message}</span>
                }
                break;

            default: 
            
                return (
                    <div>
                        {/* default 일때 data.map 으로 렌더링해준다. */}
                        { data?.map((post) => (

                            <p key={post.id}>
                                <a
                                    onClick={() => setPostId(post.id)}
                                    href="#"
                                    style={
                                        queryClient.getQueryData(['post', post.id])
                                        ? {
                                            fontWeight: "bold",
                                            color: "green",
                                        } : {}
                                    }
                                >
                                    {post.title}
                                </a>
                            </p>
                        ))}
                    </div>        
                );

        } //-- switch

    }, [status]); //-- end renderByStatus

    return (

        <div className="posts">
            <h1>Posts</h1>
            {renderByStatus()}
        </div>

    )
}

export default Posts;