document.addEventListener("DOMContentLoaded", () => {
    const mesasContainer = document.getElementById("mesasContainer");

    let miGente = ["Cata J", "Sofi", "Mari", "Jose", "Mati", "Facu", "Amandita", "Lino", "Varo", "Joaco", "Rolf", "Juli E", "Ange", "Ema", "Ele", "Vicky", "Lau", "Juli R", "Javi", "Clara", "Ame", "Nico", "Fer", "Juli B", "Chuma"];
    const totalRows = 5;
    const mesaPattern = [2, 'spacer', 3, 'spacer', 2]; // patrón por fila

    for (let row = 0; row < totalRows; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let section of mesaPattern) {
            if (section === 'spacer') {
                const spacer = document.createElement("div");
                spacer.classList.add("spacer");
                rowDiv.appendChild(spacer);
            } else {
                for (let i = 0; i < section; i++) {
                    if (miGente.length === 0) break; // evitar overflow

                    const randomIndex = Math.floor(Math.random() * miGente.length);
                    const randomPerson = miGente.splice(randomIndex, 1)[0];

                    const mesa = document.createElement("div");
                    mesa.classList.add("mesa");
                    mesa.textContent = randomPerson;
                    rowDiv.appendChild(mesa);
                }
            }
        }

        mesasContainer.appendChild(rowDiv);
    }
});
