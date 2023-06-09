
import clientPromise from '@/lib/mongodb';
import Layout, { siteTitle } from '../../components/layout';
import PostList from './postList';
import Link from 'next/link';

export const metadata = {
    title: siteTitle + " - Blog",
}

async function getPosts() {
    'use server'
    const client = await clientPromise;
    const db = client.db("TheForcesDen");
    const res = await db.collection("Posts").find({}).toArray();
    return res;
  }

export default async function Page() {
    const allPosts = JSON.stringify(await getPosts())
    return(
        <Layout blog>
            <PostList allPosts={allPosts}></PostList>
            <Link href="/blog/new">New</Link>
        </Layout>
    );
}