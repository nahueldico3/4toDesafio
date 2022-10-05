
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const lista = document.querySelector("#lista");
const email = document.querySelector("#email")

btn.addEventListener("click", () => {

    fetch("./data.json")
        .then( (res) => res.json())
        .then( (data) => {
    
            data.forEach ((producto) => {
                const li = document.createElement ("li")
                li.innerHTML = `
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    <p>Codigo: ${producto.id}</p>
                    <hr/>
                `
    
                lista.append(li)
            })
        })
        .catch(mistake => console.log(mistake))
});


fetch("https://mail.google.com/posts",
    {
        method: "POST",
        body: JSON.stringify({
            title: "Coderhouse",
            body: "post de prueba",
            userid: 1,
        }),
        headers: {
            "Content-type": "application/json; carset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
