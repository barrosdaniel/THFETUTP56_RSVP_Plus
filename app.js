const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLi(text) {
  // Get user input and add new list item
  const li = document.createElement('li');
  li.textContent = text;

  // Add 'Confirmed' checkbox to guest tile
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  // Add 'Remove' button to guest tile
  const button = document.createElement('button');
  button.textContent = 'Remove';
  li.appendChild(button);

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
    const listItem = e.target.parentNode;
    listItem.remove();
  };
});