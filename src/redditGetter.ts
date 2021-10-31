import axios from "axios";
import {Kind, Post, PostData, Reddit} from "./redditInterface";

function parseRedditPostForUrls(redditPost: Reddit): Array<PostData> {
    let allPosts: Array<PostData> = []

    if (redditPost.data.children !== null) {
        redditPost.data.children.forEach((post?: Post) => {
                if (post?.kind == Kind.T3) {
                    allPosts.push(post.data)
                }
            }
        )
    }
    return allPosts
}

export async function GetAllPosts(subredditName: string): Promise<Array<PostData>>{
    const res= await axios.get(`https://www.reddit.com/r/${subredditName}.json?limit=500`);
    const actualResult: Reddit = res.data
    const allPosts: Array<PostData> = parseRedditPostForUrls(actualResult)
    return allPosts
}
