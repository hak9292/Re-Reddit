import HomePage from "./HomePage";
import CommentPage from "./CommentPage";
import CommentModal from "./CommentModal";
import {useState} from 'react';
import {
    Route,
    Switch,
    useLocation
} from "react-router-dom";

function RoutingSwitch() {
    let location = useLocation();
    let commentId = null;

    if (location.state && location.state.commentId) {
        location.pathname = '/';
        commentId = location.state.commentId;
        console.log(location);
    }
    return (
        <div>
            {commentId && (
                <div>
                    <CommentModal
                        id={commentId}
                    />
                </div>
            )}
            <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/comments/:id" component={CommentPage} />
            </Switch>
        </div>

    )
}

export default RoutingSwitch;