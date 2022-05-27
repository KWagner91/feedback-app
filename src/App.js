import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/pages/AboutIconLink";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Do you want to delete this item?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([...feedback, newFeedback]);
    }

    return (
        <Router>
            <Header text='Feedback App' />
            <div className="container">
                <Routes>
                    <Route exact path="/" element= {
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App;