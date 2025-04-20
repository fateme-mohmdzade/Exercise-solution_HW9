document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".movieForm");
    const inputMovieName = document.getElementById("movieName");
    const inputMovieRate = document.getElementById("movieRate");
    const movieListBody = document.querySelector(".movieList");
    const [nameHeader, rateHeader] = document.querySelectorAll("th");

    let movies = [];
    let sortColumn = null;
    let sortDirection = "asc";

    function clearTableBody(tbody) {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function renderMovies() {
        clearTableBody(movieListBody);
        movies.forEach((m, i) => {
            const newRow = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = m.name;

            const rateCell = document.createElement("td");
            rateCell.textContent = m.rate;

            const actionCell = document.createElement("td");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.padding = "10px";
            deleteBtn.style.borderRadius = "5px";
            deleteBtn.style.backgroundColor = "#D500F9";
            deleteBtn.style.color = "white";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.width = "80%";
            deleteBtn.style.fontSize = "16px";

            deleteBtn.onclick = () => {
                movies.splice(i, 1);
                renderMovies();
            };

            actionCell.appendChild(deleteBtn);
            newRow.appendChild(nameCell);
            newRow.appendChild(rateCell);
            newRow.appendChild(actionCell);
            movieListBody.appendChild(newRow);
        });
    }

// Complete the section on defining elements, data, and primitive functions.

// Start of the section on interacting with forms, tables, and sorting
});
