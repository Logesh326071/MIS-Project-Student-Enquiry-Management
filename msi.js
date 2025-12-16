// Enquiry Toggle script

let menu=document.querySelector('.menu_content')
let hide = document.querySelector('.menu_hide')

hide.addEventListener('click',()=>{
    menu.classList.toggle('menu_content');
    
})

// Enquiryviewlist

const table = document.getElementById("enquiryTable");
const headers = table.querySelectorAll("thead th");
const dateColumns = [1, 8, 19, 20]; // Date columns indexes
const genderColumn = 9; // Gender column index

headers.forEach((th, index) => {
  const label = th.textContent;
  th.textContent = ''; // Clear original header text

  const labelDiv = document.createElement("div");
  labelDiv.textContent = label;
  labelDiv.style.cursor = "pointer"; // Make header clickable

  // Create filter input
  const input = document.createElement("input");
  input.classList.add("filter-box");
  input.dataset.index = index;
  input.style.display = "none"; // Initially hidden

  if (dateColumns.includes(index)) {
    input.type = "date";
  } else {
    input.type = "text";
    input.placeholder = "Filter...";
  }

  // Add label and input to the th
  th.appendChild(labelDiv);
  th.appendChild(input);

  // Toggle input visibility on header click
  labelDiv.addEventListener("click", () => {
    // If filter is already visible and has no value, hide it
    if (input.style.display === "block" && !input.value) {
      input.style.display = "none";
    } else {
      input.style.display = "block";
      input.focus();
    }
  });

  // Handle filtering input
  input.addEventListener("input", () => {
    input.style.display = input.value ? "block" : "none"; // Keep visible if value is present
    filterTable();
  });

  // Keep input visible if it has a value
  if (input.value) {
    input.style.display = "block";
  }
});

function filterTable() {
  const rows = table.tBodies[0].rows;

  for (let row of rows) {
    let show = true;

    for (let i = 0; i < headers.length; i++) {
      const th = headers[i];
      const input = th.querySelector("input");

      if (!input || !input.value) continue;

      const cellText = row.cells[i].textContent.trim().toLowerCase();

      if (dateColumns.includes(i)) {
        const filterDate = new Date(input.value).toISOString().slice(0, 10);
        const cellDate = new Date(row.cells[i].textContent.trim()).toISOString().slice(0, 10);
        if (cellDate !== filterDate) {
          show = false;
          break;
        }
      } else if (i === genderColumn) {
        // Special handling for Gender column with case-insensitive comparison
        const genderValue = input.value.trim().toLowerCase(); // Get filter value
        if (cellText.toLowerCase() !== genderValue) { // Compare lowercase
          show = false;
          break;
        }
      } else {
        if (!cellText.includes(input.value.trim().toLowerCase())) { // Case-insensitive filter for other columns
          show = false;
          break;
        }
      }
    }

    row.style.display = show ? "" : "none";
  }
}

// Clear all filters button
document.getElementById("clearFiltersBtn").addEventListener("click", () => {
  const inputs = document.querySelectorAll(".filter-box");
  inputs.forEach(input => {
    input.value = "";
    input.style.display = "none"; // Hide all inputs
  });

  // Show all rows
  const rows = table.tBodies[0].rows;
  for (let row of rows) {
    row.style.display = "";
  }
});

function updateRowCount() {
const tbody = table.tBodies[0];
const rows = Array.from(tbody.rows);
const visibleRows = rows.filter(row => row.style.display !== "none");
document.getElementById("rowCount").textContent = visibleRows.length;
}
function filterTable() {
const rows = table.tBodies[0].rows;

for (let row of rows) {
  let show = true;

  for (let i = 0; i < headers.length; i++) {
    const th = headers[i];
    const input = th.querySelector("input");

    if (!input || !input.value) continue;

    const cellText = row.cells[i].textContent.trim().toLowerCase();

    if (dateColumns.includes(i)) {
      const filterDate = new Date(input.value).toISOString().slice(0, 10);
      const cellDate = new Date(row.cells[i].textContent.trim()).toISOString().slice(0, 10);
      if (cellDate !== filterDate) {
        show = false;
        break;
      }
    } else if (i === genderColumn) {
      const genderValue = input.value.trim().toLowerCase();
      if (cellText !== genderValue) {
        show = false;
        break;
      }
    } else {
      if (!cellText.includes(input.value.trim().toLowerCase())) {
        show = false;
        break;
      }
    }
  }

  row.style.display = show ? "" : "none";
}

updateRowCount(); // 🔁 Update row count after filtering
}
document.getElementById("clearFiltersBtn").addEventListener("click", () => {
const inputs = document.querySelectorAll(".filter-box");
inputs.forEach(input => {
  input.value = "";
  input.style.display = "none";
});

const rows = table.tBodies[0].rows;
for (let row of rows) {
  row.style.display = "";
}

updateRowCount(); // 🔁 Update count after clearing
});
  