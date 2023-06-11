import clientPromise from '@/lib/mongodb';
export default async function sitemap() {
    const data = await generate()
    console.log(data)
    return data
  }
async function getPosts() {
  'use server'
  const client = await clientPromise;
  const db = client.db("TheForcesDen");
  const res = await db.collection("Posts").find({}).toArray();
  const data = res.map(({id,lastEdited}) => ( {url : `https://theforcesden.net/blog/post/${id}`, lastModified: lastEdited}))
//console.log(data)
  return data;
}

async function generate() {
    const posts = await getPosts()
    var array = [      {
        url: 'https://theforcesden.net',
        lastModified: new Date(),
      },
      {
        url: 'https://theforcesden.net/blog',
        lastModified: new Date(),
      },]
      posts.forEach((key) => {
        array.push({url : key.url, lastModified: key.lastEdited})
      })
    return array
}