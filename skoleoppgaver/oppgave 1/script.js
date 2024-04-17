document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById('itemList');
    const addBtn = document.getElementById('addBtn');
    const itemInput = document.getElementById('item');
  
    // Load items from local storage
    if (localStorage.getItem('items')) {
      itemList.innerHTML = localStorage.getItem('items');
    }
  
    // Add item to the list
    addBtn.addEventListener('click', () => {
      const newItem = itemInput.value;
      if (newItem !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox">
          <span>${newItem}</span>
          <button class="removeBtn">Fjern</button>
        `;
        itemList.appendChild(li);
        itemInput.value = '';
  
        // Save items to local storage
        localStorage.setItem('items', itemList.innerHTML);
      }
    });
  
    // Remove item from the list
    itemList.addEventListener('click', (e) => {
      if (e.target.classList.contains('removeBtn')) {
        e.target.parentElement.remove();
  
        // Save items to local storage
        localStorage.setItem('items', itemList.innerHTML);
      }
    });
  
    // Mark item as completed
    itemList.addEventListener('change', (e) => {
      if (e.target.type === 'checkbox') {
        e.target.nextElementSibling.classList.toggle('completed');
      }
    });
  });
  