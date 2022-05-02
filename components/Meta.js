import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="react native, blog, John Doe, tutorial, react navigation"
      />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "PressBlog - Your one stop blog for everything React Native",
};
