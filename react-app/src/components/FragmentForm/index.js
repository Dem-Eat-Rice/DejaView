import React from "react";

const createFragment = async (title, emotions, setting, description) => {
    const response = await fetch("/api/fragments/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            emotions,
            setting,
            description
        }),
    });
    return await response.json();

}

function FragmentForm () {
    return (
        <h1>hello</h1>
    )
}

export default FragmentForm;