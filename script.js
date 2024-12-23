// ...existing code...

function filterList() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('#list li');
    
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// ...existing code...
