import Header from "./Header";
import LocationRouter from "./LocationRouter"
import {
    BrowserRouter as Router
} from "react-router-dom";
function RouterShell() {
    return (
        <Router>
            <Header />
            <LocationRouter />
        </Router>
    );
}
export default RouterShell;