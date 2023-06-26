async function postData() {
    const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    };
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    let serverResponse = fetch("/api", options);
    const resJson = await serverResponse.json();
    console.log(resJson);
}

// const submitButton = document.querySelector("#submit");
// submitButton.addEventListener("click", () => {
//     postData();
// })