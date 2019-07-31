const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
const mainDiv = document.querySelector('.main');

// Add filter checkbox
const div = document.createElement('div');
const filterLabel = document.createElement('label');
filterLabel.textContent = "Hide those who haven't responded";
const filterCheckbox = document.createElement('input');
filterCheckbox.type = 'checkbox';
div.appendChild(filterCheckbox);
div.appendChild(filterLabel);
mainDiv.insertBefore(div, ul);

// Filter checkbox event listener
filterCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  if (isChecked) {
    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      if (li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      };
    };
  } else {
    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      li.style.display = '';
    };
  }
});

function createLi(text) {
  // Get user input and add new list item
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);

  // Add 'Confirmed' checkbox to guest tile
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  // Add 'Edit' button to guest tile
  const EditButton = document.createElement('button');
  EditButton.textContent = 'Edit';
  li.appendChild(EditButton);

  // Add 'Remove' button to guest tile
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  li.appendChild(removeButton);

  return li;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const li = createLi(text);
  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.classList.add('responded');
  } else {
    listItem.classList.remove('responded');
  }

});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'Remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'Edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'Save';
    } else if (button.textContent === 'Save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'Edit';
    }
  };
});