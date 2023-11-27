import Editor from "@/components/Blog/Blogeditor";
import React from "react";

export const metadata ={
    title: "The Snake Den - Write Post",
    charset: "utf-8"
}

export default async function Page() {
    //TODO user validation
    return(
            <Editor/>
    );
}