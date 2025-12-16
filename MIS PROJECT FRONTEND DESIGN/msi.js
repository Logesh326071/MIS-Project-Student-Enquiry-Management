// Enquiry Toggle script

let menu=document.querySelector('.menu_content')
let hide = document.querySelector('.menu_hide')

hide.addEventListener('click',()=>{
    menu.classList.toggle('menu_content');
    
})

// Enquiryviewlist

document.addEventListener("DOMContentLoaded", () => {
  const originalTable = document.querySelector("#enquiryTable");
  const headers = Array.from(originalTable.querySelector("thead tr").children);
  const dataRows = Array.from(originalTable.querySelectorAll("tbody tr")).map(row =>
      Array.from(row.children).map(cell => cell.textContent)
  );

  document.getElementById("rowCount").textContent = dataRows.length;

  const draggableHeadersContainer = document.getElementById("draggableHeaders");
  const placeholderHeaderRow = document.getElementById("placeholderHeader").querySelector("tr");
  const filterRow = document.getElementById("filterRow");
  const placeholderBody = document.getElementById("placeholderBody");
  const addedIndexes = new Set();

  function createSuggestionButton(headerText, index) {
      const btn = document.createElement("div");
      btn.className = "btn btn-outline-primary btn-sm";
      btn.textContent = headerText;
      btn.setAttribute("draggable", true);
      btn.dataset.index = index;
      btn.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", index);
      });
      draggableHeadersContainer.appendChild(btn);
  }

  // Initially add all suggestion buttons
  headers.forEach((header, index) => createSuggestionButton(header.textContent, index));

  // Allow drop on placeholder header row
  placeholderHeaderRow.addEventListener("dragover", (e) => e.preventDefault());
  placeholderHeaderRow.parentElement.addEventListener("drop", (e) => {
      e.preventDefault();
      const index = parseInt(e.dataTransfer.getData("text/plain"));
      if (addedIndexes.has(index)) return;
      addedIndexes.add(index);

      // Remove default placeholder
      if (placeholderHeaderRow.querySelector("th")?.textContent.includes("Drag a heading")) {
          placeholderHeaderRow.innerHTML = "";
          filterRow.innerHTML = "";
      }

      // Add draggable header to placeholder
      const th = document.createElement("th");
      th.textContent = headers[index].textContent;
      th.setAttribute("draggable", true);
      th.dataset.index = index;

      th.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("remove-index", index);
      });

      placeholderHeaderRow.appendChild(th);

      // Add corresponding filter input
      const filterTh = document.createElement("th");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control form-control-sm";
      input.placeholder = "Filter...";
      input.dataset.index = index;
      filterTh.appendChild(input);
      filterRow.appendChild(filterTh);

      // Add column to body
      if (placeholderBody.children.length === 0) {
          dataRows.forEach(rowData => {
              const row = document.createElement("tr");
              const td = document.createElement("td");
              td.textContent = rowData[index];
              row.appendChild(td);
              placeholderBody.appendChild(row);
          });
      } else {
          Array.from(placeholderBody.children).forEach((row, rowIndex) => {
              const td = document.createElement("td");
              td.textContent = dataRows[rowIndex][index];
              row.appendChild(td);
          });
      }

      // Remove from suggestion list
      draggableHeadersContainer.querySelector(`[data-index="${index}"]`)?.remove();

      // Filtering
      input.addEventListener("input", () => {
          const search = input.value.toLowerCase();
          Array.from(placeholderBody.children).forEach((row, i) => {
              const colIndex = Array.from(filterRow.children).indexOf(filterTh);
              const cell = row.children[colIndex];
              row.style.display = cell && cell.textContent.toLowerCase().includes(search) ? "" : "none";
          });
      });
  });

  // Allow dragging header back to suggestion list
  draggableHeadersContainer.addEventListener("dragover", (e) => e.preventDefault());
  draggableHeadersContainer.addEventListener("drop", (e) => {
      e.preventDefault();
      const index = parseInt(e.dataTransfer.getData("remove-index"));
      if (!addedIndexes.has(index)) return;

      addedIndexes.delete(index);

      // Remove column from placeholder header and filter
      const headerCells = Array.from(placeholderHeaderRow.children);
      const filterCells = Array.from(filterRow.children);

      const removeIndex = headerCells.findIndex(th => parseInt(th.dataset.index) === index);

      if (removeIndex > -1) {
          placeholderHeaderRow.removeChild(headerCells[removeIndex]);
          filterRow.removeChild(filterCells[removeIndex]);
          Array.from(placeholderBody.children).forEach(row => {
              row.removeChild(row.children[removeIndex]);
          });

          // Recreate suggestion button
          createSuggestionButton(headers[index].textContent, index);
      }

      // If no headers left, show placeholder
      if (placeholderHeaderRow.children.length === 0) {
          const placeholderTh = document.createElement("th");
          placeholderTh.textContent = "Drag a heading here";
          const filterTh = document.createElement("th");
          placeholderHeaderRow.appendChild(placeholderTh);
          filterRow.appendChild(filterTh);
      }
  });

  // Clear filters button
  document.querySelector(".clearFiltersBtn").addEventListener("click", () => {
      Array.from(placeholderBody.children).forEach(row => row.style.display = "");
      Array.from(filterRow.querySelectorAll("input")).forEach(input => input.value = "");
  });
});



                  // Student Registration//

let payment=document.querySelector('.payment');                  
let inputData=document.querySelector('.inputData');

payment.addEventListener('change',function(){
    if (this.value) {
        inputData.style.display='inline';
    }
    else{
        inputData.style.display='none';
        inputData.value=" ";
    }
})