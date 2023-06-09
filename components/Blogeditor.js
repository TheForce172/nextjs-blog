'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from 'next/image'
import styles from '../styles/editor.module.css'
import React from 'react'
import { useRouter } from 'next/navigation'
import { savePost } from '@/app/blog/actions.js'
const EditorMenu = ({ editor }) => {
    if (!editor) {
        return null
      }

      return (
        <>
            <button 
                type="button" 
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()}
                className={editor.isActive('bold') ? styles.isactive : ''}
            >
                <Image src="/images/icons/editor/bold.svg"
                    height={16}
                    width={16}
                    alt="Bold"
                />
            </button>
        </>
      )
}

const Editor = () => {
    const [titleContent, settitle] = React.useState();
    const [showError, setShowError] = React.useState(false);
    const [errorText, setErrorText] = React.useState();
    const router = useRouter()
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World! 🌎️</p>',
    })
    async function save() {
        const body = {title : titleContent, text : editor.getJSON()};
        let res= await savePost(body);
        console.log(res);
        console.log(res.success);
        if (res.success == true) {
            console.log("redirecting");
            router.push(`/blog/post/${res.id}`);
        }
    }
    function validate(){
        save()
    }
    function updatetitle(e) {
        settitle(e.target.value)
    }
    return (
        <div>
            <h3>Title</h3>
            <div>
                <input type="text" onChange={updatetitle} className={styles.titleEdit}/>
            </div>
            <h3>Content</h3>
            <EditorMenu editor={editor} />
            <EditorContent editor={editor} className={styles.editor}/>
            {showError && <p>errorText</p>}
            <button onClick={validate} className={styles.save}>Save</button>
        </div>
    )
  }
  
  export default Editor