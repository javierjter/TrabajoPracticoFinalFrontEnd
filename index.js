// Captura los elementos del formulario
const cantidadInput = document.getElementById("cantidad");
const categoriaSelect = document.getElementById("categoria");
const totalDisplay = document.getElementById("total");

// Agrega un event listener al botón "Borrar" para borrar los campos
document.getElementById("calcular").addEventListener("click", function () {
    cantidadInput.value = "";
    categoriaSelect.value = "1";
    totalDisplay.textContent = "0";
});

// // Agrega un event listener al botón "Resumen" para calcular y mostrar el total
// document.getElementById("resumen").addEventListener("click", function () {
//     const cantidad = parseFloat(cantidadInput.value) || 0;
//     const categoria = parseFloat(categoriaSelect.value) || 1;
//     const valorTicket = 200;
//     const total = cantidad * categoria * valorTicket;
//     totalDisplay.textContent = total;
// });

// Agrega un event listener al botón "Resumen" para calcular y mostrar el total
document.getElementById("resumen").addEventListener("click", function () {
    const cantidad = parseFloat(cantidadInput.value) || 0;
    const categoria = parseFloat(categoriaSelect.value) || 1; // Valor por defecto es 1 (Estudiante)
    const valorTicket = 200;

    // Definir los porcentajes de descuento según la categoría
    let descuento = 0;
    if (categoria === 1) { // Estudiante
        descuento = 0.8; // 80% de descuento
    } else if (categoria === 2) { // Trainee
        descuento = 0.5; // 50% de descuento
    } else if (categoria === 3) { // Junior
        descuento = 0.15; // 15% de descuento
    }

    const total = cantidad * valorTicket * (1 - descuento); // Aplicar descuento
    totalDisplay.textContent = total;
});
