'use server'
import clientPromise from "/lib/mongodb";
import sanitizeHtml from 'sanitize-html';
export async function savePost(data) {
    const content = validate(data.text)
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
    const date = new Date();
    let bodyObject = {title: title, content: content, date: date, id : id, lastEdited : date, edited : false};
    let myPost = await db.collection("Posts").insertOne(bodyObject);
    //console.log(myPost)
    const sucsess = await myPost.acknowledged;
    const res = { success : sucsess, id : id};
    return (res);
}

function validate(html) {
    const clean = sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
    });
    return clean
}

export async function getPosts() {
    const client = await clientPromise;
    const db = client.db("TheForcesDen");
    const res = await db.collection("Posts").find({}).toArray();
    return res;
}

export async function getPost(id) {
    const client = await clientPromise;
    const db = client.db("TheForcesDen");
    const query = {"id": id}
    //console.log(query)
    const curser = await db.collection("Posts").find(query);
    var done = false
    var res
    for await (const doc of curser) {
        if (!done) {
        res = doc;
        done = true
        } else {
            console.error(`Multiple posts with same id ${id}`);
        }
    }
    
    //console.log(res)
    return res;
  }