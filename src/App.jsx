import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FeedbackListItem from "./components/FeedbackListItem";
import FeedbackList from "./components/FeedbackList";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackProvider from "./context/FeedbackProvider";

const App = () => {
  return (

    <div className="bg-jacaranda-700 h-[100vh]">
              <Header/>


      <FeedbackProvider>
        <Feedbackstats/>

        <FeedbackList/>
      </FeedbackProvider>

    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
