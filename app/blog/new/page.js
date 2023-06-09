import Editor from "@/components/Blogeditor";
import Layout from "@/components/layout";
import styles from "../../../styles/editor.module.css"
import React from "react";
var text

async function updateText(newtext) {
    textContent = newtext
}


export default async function Page() {
    return(
        <Layout>
            <Editor/>
        </Layout>
    );
}