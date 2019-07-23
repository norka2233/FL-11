let rootNode = document.getElementById('root');

let header = document.createElement('h1');
header.innerHTML = 'TODO Cat List';
rootNode.appendChild(header);

let addNewAction = document.createElement('input');
addNewAction.setAttribute('id', 'add-new-action');
addNewAction.setAttribute('type', 'text');
addNewAction.setAttribute('placeholder', 'Add new action');
rootNode.appendChild(addNewAction);

let addButton = document.createElement('i');
addButton.setAttribute('id', 'add-box');
addButton.setAttribute('class', 'material-icons');
addButton.innerHTML = 'add_box';
rootNode.appendChild(addButton);

let toDoList = document.createElement('div');
toDoList.setAttribute('id', 'to-do-list');
rootNode.appendChild(toDoList);

const addItem = itemContent => {
    
    let start = () => console.log('start');
    let end = () => console.log('end');
    
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'to-do-list-item');
    listItem.addEventListener('dragstart', start);
    listItem.addEventListener('dragend', end);
    toDoList.appendChild(listItem);

   

    let box = document.createElement('div');
    listItem.appendChild(box);

    let checkBox = document.createElement('i');
    checkBox.setAttribute('class', 'material-icons item-checkbox-off');
    checkBox.innerHTML = 'check_box_outline_blank';
    checkBox.onclick = () => {
        checkBox.setAttribute('class', 'material-icons item-checkbox-on');
        checkBox.innerHTML = 'done';
    };
    box.appendChild(checkBox);

    let itemText = document.createElement('span');
    itemText.setAttribute('class', 'item-text');
    itemText.innerHTML = itemContent;
    box.appendChild(itemText);

    let editButton = document.createElement('i');
    editButton.setAttribute('class', 'material-icons edit-button');
    editButton.innerHTML = 'edit';
    editButton.onclick = () => {
        box.setAttribute('style', 'display: none');
        let editInput = document.createElement('input');
        editInput.setAttribute('type', 'text');
        editInput.setAttribute('class', 'edit-input');
        listItem.appendChild(editInput);
        let saveButton = document.createElement('i');
        saveButton.setAttribute('class', 'material-icons save-button');
        saveButton.innerHTML = 'save';
        saveButton.onclick = () => {
            box.removeAttribute('style');
            itemText.innerHTML = editInput.value;
            editInput.remove();
            saveButton.remove();
        };
        listItem.appendChild(saveButton);
    };
    box.appendChild(editButton);

    let deleteButton = document.createElement('i');
    deleteButton.setAttribute('class', 'material-icons delete-button');
    deleteButton.innerHTML = 'delete';
    deleteButton.onclick = () => {
        listItem.remove();
        if (document.getElementById('warning-message')) {
            document.getElementById('warning-message').remove();
            addNewAction.removeAttribute('disabled');
            addButton.removeAttribute('style');
            addButton.onclick = () => fullListValidator();
        }
    }
    box.appendChild(deleteButton);
}

const fullListValidator = () => {
    const ten = 10;
    if (document.getElementsByClassName('to-do-list-item').length < ten) {
        addItem(addNewAction.value);
        addNewAction.value = '';
    } else {
        let warningMessage = document.createElement('h4');
        warningMessage.setAttribute('id', 'warning-message');
        warningMessage.innerHTML = 'Maximum item per list are created';
        rootNode.insertBefore(warningMessage, addNewAction);
        addNewAction.setAttribute('disabled', 'disabled');
        addButton.setAttribute('style', 'cursor: default');
        addButton.onclick = '';
    }
};

addButton.onclick = () => fullListValidator();

addItem('Feed the cat');
addItem(`Buy a box for cat`);
addItem('Close cat into the box');