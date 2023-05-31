import { useQuery } from "react-query"

const Todos = () => {


    const fetchTodoList = () => {

        return new Promise((res) => {
            console.log(res);
        });
    }

    const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
        refetchOnWindowFocus: false, // 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행하는데, 
                                     // 그 여부를 결정하는 변수
        retry: 0, // 실패시 재호출 몇 번 할지                    
        onSuccess: data => {
            // 성공시 호출
            console.log(data);
        },
        onError: e => {
            // 실패시 호출(401, 404 말고 api호출이 실패한 경우만 호출)
            // 강제로 에러 발생시킬시 api 단에서 throw Error 
            console.log(e.message);
        }

    });

    if(isLoading) return <span>Loading...</span>

    if(isError) return <span>Error: { error.message}</span>

    return (

        <div>
            <span>{ console.log("isLoading : " + isLoading) }</span>
            <span>{ console.log("isError : " + isError) }</span>
            <span>{ console.log("data : " + data) }</span>
            <span>{ console.log("error : " + error) }</span>
        </div>
        // <ul>
        //     {data.map(todo => {
        //         return <li key={todo.id}>{todo.title}</li>
        //     })}
        // </ul>

    );
};

export default Todos;