const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    const cantidad = document.getElementById("cantidad").value;
    const color = document.getElementById("color").value;

    const precioTot = document.getElementById("precioTotal");
    precioTot.innerHTML = (cantidad * 750000).toLocaleString();
    const cantidadTotal = document.getElementById("cantidadTotal");
    cantidadTotal.innerHTML = cantidad;

    const colorCirculo = document.getElementById("colorCircle");
    colorCirculo.style.backgroundColor = color;
});

const color = document.getElementById("color");
color.addEventListener("change", function () {
    const colorValue = document.getElementById("color").value;
    const colorCirculo = document.getElementById("colorCircle");
    colorCirculo.style.backgroundColor = colorValue;
});