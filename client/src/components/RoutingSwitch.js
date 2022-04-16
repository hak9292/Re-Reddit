import Board from "./Board";
import CommentPage from "./CommentPage";
import CommentModal from "./CommentModal";
import {
    Route,
    Switch,
    useLocation
} from "react-router-dom";
// import {useState, useEffect} from 'react';

function RoutingSwitch() {
    let location = useLocation();
    let commentId = null;
    // const [postOpen, setPostOpen] = useState(false);

    if (location.state && location.state.commentId) {
        location.pathname = '/';
        commentId = location.state.commentId;

    }
    // console.log(location);
    return (
        <div>
            {commentId && (
                <div>
                    <CommentModal
                    id={commentId}
                        // open={postOpen}
                        // onClickout={() => setPostOpen(false)}
                    />
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