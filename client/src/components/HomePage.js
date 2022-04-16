import SubHeader from "./SubHeader";
import CreatePost from "./CreatePost";
import PostsListing from "./PostsListing";

function HomePage() {
  return (
  <div>
    <SubHeader />
    <CreatePost />
    <PostsListing />
  </div>
  );
}

export default HomePage;