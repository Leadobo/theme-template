import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

Inertia.booting((app) => {
    app.component('HeaderComponent', Header)
    app.component('FooterComponent', Footer)
})
