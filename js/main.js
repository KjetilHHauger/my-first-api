async function getData() {
    const res = await fetch("http://localhost:3000/json")
    const data = await res.json();
    console.log(data);
    document.querySelector(".container").innerText = data;
    console.log(res.headers);
  }

  async function postData() {
    const res = await fetch("http://localhost:3000", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json", 
      },
      body: JSON.stringify({ test: "hei" })
    }); 
    const data = await res.json();
    console.log(data)
  }

  async function putData() {
    const res = await fetch("http://localhost:3000", {
      method: "PUT",
    }); 
    const data = await res.text();
  }

  getData()
  postData()
  putData()

  console.log("YO!")


  