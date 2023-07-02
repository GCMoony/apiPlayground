async function postData(fname, lname, email, pass) {
    const data = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        password: pass.value,
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

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", checkValidForm);


function checkValidForm() {
    const fname = document.querySelector("#firstname");
    const lname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    // console.log(password.validity.valid);
    if( fname.validity.valid && 
        lname.validity.valid &&
        email.validity.valid &&
        password.validity.valid ) {
        postData(fname, lname, email, password);
    }
}

// const submitButton = document.querySelector("#submit");
// submitButton.addEventListener("click", () => {
//     postData();
// })