import {GetAllPosts} from "../src/redditGetter";
import RedditGallery, {RedditPostProps} from "./redditGallery";
import {PostData} from "../src/redditInterface";
import {useState} from "react";


export async function getUrlsForSubreddit(subredditName: string): Promise<Array<PostData>> {
    const allUrls = await GetAllPosts(subredditName)

    const filteredUrls = allUrls.filter((value) => {
        if (value.thumbnail === null || value.thumbnail === "self") {
            return false
        }
        return true
    })

    return filteredUrls
}

const SubredditSetter = () => {
    const [getUrls, setUrls] = useState<RedditPostProps>(
        {
            allUrls: []
        })

    const [getTextArea, setTextArea] = useState<string>("aww")

    const clickHandler = async () =>{
        console.log("running click")
        const response = await getUrlsForSubreddit(getTextArea)
        setUrls({
            allUrls: response
        })
    }

    const setTextAreaCallback = (event: any) => {
        setTextArea(event.target.value);
    }

    return <div>
        <div>
            <label>subreddit:</label>
            <input type="text" value={getTextArea} onChange={setTextAreaCallback} onInput={setTextAreaCallback}/>
            <button onClick={clickHandler}>Load me</button>
        </div>

        <RedditGallery allUrls={getUrls.allUrls}/>
    </div>
}

export default SubredditSetter