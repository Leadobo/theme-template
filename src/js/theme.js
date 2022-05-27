import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import QuizPage from "./pages/Quiz";

Leadobo.booting((app) => {
    // Leadobo.component('HeaderComponent', Header) // Globally Updates
    Leadobo.component('FooterComponent', Footer)
    Leadobo.page('QuizPage', QuizPage)
})

// https://nova.laravel.com/docs/4.0/customization/tools.html#javascript-bootstrap-components
