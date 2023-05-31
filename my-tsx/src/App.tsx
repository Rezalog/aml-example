import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../css/App.css';
import Post from './components/Post';
import Posts from './components/Posts'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    },
  },
}); 


const App => () => {

  const [postId, setPostId] = useState(-1);

  return (

      <QueryClientProvider client={queryClient}>
        <div className='App'>
          { postId > -1 ? (
            <Post postId={postId} setPostId={setPostId}/>
          ) : (
            <Posts setPostId={setPostId}/>
          )}
        </div>
      </QueryClientProvider>
  );
};

export default App;
