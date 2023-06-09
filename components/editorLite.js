'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import styles from '../styles/editor.module.css'
const Editor = () => {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World! 🌎️</p>',
    })
  
    return (
        <div>
            <EditorContent editor={editor} className={styles.editor}/>
        </div>
    )
  }
  
  export default Editor