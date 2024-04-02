import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackProvider from "./context/FeedbackProvider";
import FeedbackForm from "./components/FeedbackForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({

  defaultOptions: {
    queries: {
      gcTime: "Infinity",
      staleTime: "Infinity"
    }



  }

});

const App = () => {
  return (

    <div className="bg-jacaranda-600 ">
      <Header />

      <QueryClientProvider client={queryClient}>

        <FeedbackProvider>
          <FeedbackForm />

          <Feedbackstats />

          <FeedbackList />
        </FeedbackProvider>
      </QueryClientProvider>


    </div >
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
