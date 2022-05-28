import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/pages/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header text='Feedback App' />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element= {
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;