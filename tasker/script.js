document.addEventListener("DOMContentLoaded", () => {  
    const itemInput = document.getElementById("itemInput");  
    const addButton = document.getElementById("addButton");  
    const itemList = document.getElementById("itemList");  
    const deleteButton = document.getElementById("deleteButton");  

    // Load saved items from LocalStorage  
    loadItems();  

    // Function to load items from Local Storage  
    function loadItems() {  
        const items = JSON.parse(localStorage.getItem("items")) || [];  
        items.forEach(itemText => addItemToList(itemText));  
    }  

    // Function to add items to the list  
    addButton.addEventListener("click", () => {  
        const itemText = itemInput.value.trim();  
        if (itemText) {  
            addItemToList(itemText);  
            saveItems();  
            itemInput.value = ''; // Clear input  
        }  
    });  

    // Function to add an item to the list and setup selection  
    function addItemToList(itemText) {  
        const li = document.createElement("li");  
        li.textContent = itemText;  

        // Add click event to select item  
        li.addEventListener("click", () => {  
            li.classList.toggle("selected");  
        });  

        itemList.appendChild(li);  
    }  

    // Function to delete selected items  
    deleteButton.addEventListener("click", () => {  
        const selectedItems = document.querySelectorAll("li.selected");  
        selectedItems.forEach(item => {  
            item.remove();  
        });  
        saveItems();  
    });  

    // Function to save items to Local Storage  
    function saveItems() {  
        const items = Array.from(itemList.children).map(li => li.textContent);  
        localStorage.setItem("items", JSON.stringify(items));  
    }  
});
