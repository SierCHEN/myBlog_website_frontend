import React from "react";
import ArticleLayout from "../../layout/articleLayout";
import Article from "../../components/Article";
// import SpeedDialComponent from "../../components/SpeedDial";

const ArticlePage = () => {

    return (
        <ArticleLayout>
            <Article />
            {/* <SpeedDialComponent posts={posts} /> */}
        </ArticleLayout>
    )
};

export default ArticlePage;