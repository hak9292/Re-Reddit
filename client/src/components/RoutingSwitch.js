import Board from "./Board";
import CommentPage from "./CommentPage";
import PostModal from "./CommentModal";
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

    }
    console.log(location);
    return (
        <div>
            {commentId && (
                <div>
                    <PostModal id={commentId}/>
                </div>
            )}
            <Switch location={location}>
                <Route exact path="/" component={Board} />
                <Route exact path="/comments/:id" component={CommentPage} />
            </Switch>
        </div>

    )
}

export default RoutingSwitch;