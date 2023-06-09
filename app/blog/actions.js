'use server'
import clientPromise from "/lib/mongodb";
export async function savePost(data) {
    const client = await clientPromise;
    const db = client.db("TheForcesDen");
    const allPosts = await db.collection("Posts").find({}).toArray();
    //console.log(allPosts);
    var id = 0;
    if(Array.isArray(allPosts) && allPosts.length) {
        console.log("Checking ids");
        allPosts.forEach(element => {
            if (element.id >= id) {
                id = element.id;
            }
        });
        id++;
    };
    //console.log(req);
    //console.log(reqData.title);
    //console.log(reqData.text);
    const title = data.title;
    const content = data.text;
    const date = new Date();
    let bodyObject = {title: title, content: content, date: date, id : id};
    let myPost = await db.collection("Posts").insertOne(bodyObject);
    //console.log(myPost)
    const sucsess = await myPost.acknowledged;
    const res = { success : sucsess, id : id};
    return (res);
}