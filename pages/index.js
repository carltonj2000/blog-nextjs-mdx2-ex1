import Link from "next/link";

import styles from "../styles/Home.module.css";

import getPosts from "../scripts/fileSystem";
import MeetMe from "../components/MeetMe";
import Meta from "../components/Meta";
import PostItem from "../components/PostItem";

const index = ({ posts }) => {
  return (
    <>
      <Meta />
      <MeetMe />
      <Link href="/about">More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(10);

  return {
    props: {
      posts,
    },
  };
};
