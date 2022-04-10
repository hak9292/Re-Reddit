import Header from "./Header";
import RoutingSwitch from "./RoutingSwitch"
import {
    BrowserRouter as Router
} from "react-router-dom";
function Routing() {
    return (
        <Router>
            <Header />
            <RoutingSwitch />
        </Router>
    );
}

export default Routing;