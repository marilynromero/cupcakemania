const buttom = document.getElementById("buy-now")

buttom.addEventListener("click", () => {
    if (buttom.innerHTML === "¡Haga su pedido ahora!"){
    buttom.innerHTML = "¡Gracias por hacer tu pedido!"
    } else {
        buttom.innerHTML = "¡Haga su pedido ahora!"
    }
})

console.log(buttom);




























