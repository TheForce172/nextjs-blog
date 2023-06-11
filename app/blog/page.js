import PostList from '../../components/Blog/postList';
import Link from 'next/link';
import {getPosts} from './actions'
export const metadata = {
    title: "The Force\'s Den - Blog",
}

export default async function Page() {
    const allPosts = JSON.stringify(await getPosts())
    //TODO user validation
    return(
        <>
            <PostList allPosts={allPosts}></PostList>
            <Link href="/blog/new">New</Link>
        </>
    );
}