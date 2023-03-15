import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Register from "routes/Register";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Register />
    </QueryClientProvider>
  )
}

export default App;