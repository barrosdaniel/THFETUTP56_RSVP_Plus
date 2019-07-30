const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user input and add new list item
  const text = input.value;
  const li = document.createElement('li');
  li.textContent = text;

  // Add 'Confirmed' checkbox to guest tile
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);

  // Add 'Remove' button to guest tile
  const button = document.createElement('button');
  button.textContent = 'Remove';
  li.appendChild(button);

  // Reset input field
  input.value = '';
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