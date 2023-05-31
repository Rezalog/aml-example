import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';
import Todos from './component/Todos';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClinent}>
//       {/*devtools */}
//       <ReactQueryDevtools initialIsOpen={true}/>
//       <App/>
//       <Todos/>
//     </QueryClientProvider>
//   </React.StrictMode>,
//   document.getElementById("root")

// );

setInterval(() => {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true}/>
        {/* <App/> */}
        {/* <Todos/> */}
      </QueryClientProvider>  
    </React.StrictMode>
  )
})



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
