import clientPromise from '@/lib/mongodb';
import styles from '@/styles/layout.module.css';
import utilStyles from '@/styles/utils.module.css';
import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { getPost } from '../../actions'
export async function generateMetadata({ params }) {
    const client = await clientPromise;
    const db = client.db("TheForcesDen");
    const id = params.id;
    const query = {"id": id}
    const res = await db.collection("Posts").find(query);

    return {
        title: res.title
    }
}
export default async function Page({params}) {
    const id = parseInt(params.id);
    const post = await getPost(id);
    //console.log(post)
    console.log(post.content)
    //console.log(generateHTML(post.content, [StarterKit]))
    return(
        <div className={styles.container}>        
            <header className={styles.header}>
                <h2 className={utilStyles.headingLg}>{post.title}</h2>
            </header>
            <main className={utilStyles.headingMd}>
                <div dangerouslySetInnerHTML=
                {{__html: generateHTML(post.content, [StarterKit])}}>                   
                </div>
            </main>
        </div>

    );
}