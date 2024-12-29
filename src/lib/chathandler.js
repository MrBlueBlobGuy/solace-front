export async function getchat(prompt) {
    r = await fetch("localhost:8000", {
        headers: {
            'Content-Type': 'applaction/json'
        },
        method: "POST",
        body: JSON.stringify({
            USERKEY : "NULL",
            REQ: prompt
        })
    })
    
    console.log(r)

    return r
}