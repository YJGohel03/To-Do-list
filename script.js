const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class Item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        // Create item box
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        // Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('taskCheckbox');

        // Create input element
        let inputElement = document.createElement('input');
        inputElement.value = itemName;
        inputElement.disabled = true;
        inputElement.classList.add('item_input');
        inputElement.type = "text";

        // Create edit button
        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        // Create remove button
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        // Append elements to the item box
        itemBox.appendChild(checkbox);
        itemBox.appendChild(inputElement);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        // Append the item box to the container
        container.appendChild(itemBox);

        // Event listeners
        editButton.addEventListener('click', () => this.edit(inputElement));
        removeButton.addEventListener('click', () => this.remove(itemBox));

        // Checkbox functionality
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                inputElement.style.textDecoration = "line-through";
                inputElement.style.color = "#bbb";
            } else {
                inputElement.style.textDecoration = "none";
                inputElement.style.color = "#fff";
            }
        });
    }

    edit(inputElement) {
        inputElement.disabled = !inputElement.disabled;
    }

    remove(itemBox) {
        container.removeChild(itemBox);
    }
}

function check() {
    if (input.value !== "") {
        new Item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        check();
    }
});
