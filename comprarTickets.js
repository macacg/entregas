//Calculadora para tickets

function total(categoria, cantidad) {

    cantidad = document.getElementById("cantidad").value;
    categoria = document.getElementById("categoria").value;

    if (categoria === "Estudiante") document.getElementById('montoTotal').innerHTML = `$${(cantidad * 40)}`;
    else if (categoria === "Trainee") document.getElementById('montoTotal').innerHTML = `$${(cantidad * 100)}`;
    else document.getElementById('montoTotal').innerHTML = `$${(cantidad * 170)}`;
}