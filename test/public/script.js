const typeBox = document.querySelector("#type-box");

// const submitButton = document.quer
// document.addEventListener("click", (e) => {
//     console.log("Submitted");
//     fetch("http://localhost:3000/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({message: "Hellooo"})
//     })
// })

async function postJSON(route, data) {
    try {
      const response = await fetch("https://auth.delta.nitt.edu" + route, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}
  
// const data = { username: "example" };
let data = {
  "client_id": "ajaNYGBqSLCeAcvm",
  "client_secret": "pp181oQ444EOTGAMeJpc8UmfWWKti1Wx",	
  "grant_type": "authorization_code",	
  "code": "ef89c69f3c260dad44f506813e60e8ad64806a0b",
  "redirect_uri": "http%3A%2F%2Flocalhost%3A3000%2Fauthenticated%2F"
}

document.addEventListener("click", (e) => {
    // console.log("Posted to /");
    // postJSON("/api/", data);
})
// postJSON(data);