import {NextPage} from "next";
import {GetAllPosts} from "../src/redditGetter";
import React from "react";

import {PostData} from "../src/redditInterface";
import SubredditSetter from "../components/subredditSetter";

interface RedditPostProps{
    allUrls: Array<PostData>
}

export async function getStaticProps(context: any){
    const subredditName = "aww"
    const allUrls = await GetAllPosts(subredditName)
    const filteredUrls = allUrls.filter((value) => {
        const invalidThumbnail = (value.thumbnail === null) || (value.thumbnail === "self")
        return !invalidThumbnail
    })

    return {
        props: {allUrls: filteredUrls}
    }
}


const RedditPage: NextPage<RedditPostProps> = (props: RedditPostProps ) => {
    return(
        <div>
            Reddit thumbnail browser
            <SubredditSetter />
        </div>
    )
}


export default RedditPage
