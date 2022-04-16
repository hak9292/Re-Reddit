import SubHeader from "./SubHeader";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

function HomePage() {
  return (
  <div>
    <SubHeader />
    <PostForm />
    <PostsListing />
  </div>
  );
}

export default HomePage;