import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";


const getStaticProps = async ( {params} ) => {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    }
}

const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

const Post = ( {postData }) => {

    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}


export { getStaticPaths, getStaticProps }
export default Post