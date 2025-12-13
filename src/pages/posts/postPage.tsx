import { Post } from "../../components/post/Post";
import styles from "./postPages.css";

export function PostPage = () => {
    return(
        <div className={styles.postPage}>
            <h1>Post Page</h1>
            <Post />
        </div>
    )
}