document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.getElementById('navigation');
    const hamburger = document.querySelector('#navigation i.fa-bars');
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa fa-times';

    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.innerHTML = `
      <ul>
        <li> <a href="#section-1">Section 1</a> </li>
        <li> <a href="#section-2">Section 2</a> </li>
        <li> <a href="#section-3">Section 3</a> </li>
        <li> <a href="#section-4">Section 4</a> </li>
        <li> <a href="#section-5">Section 5</a> </li>
        <li> <a href="#section-6">Section 6</a> </li>
      </ul>
    `;
    document.body.appendChild(sidebar);

    function openSidebar() {
        sidebar.classList.add('active');
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
        navigation.appendChild(closeIcon);

        // Remove hover style temporarily by adding a class
        navigation.classList.add('no-hover');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        closeIcon.style.display = 'none';
        hamburger.style.display = 'block';

        // Re-enable hover effect by removing the class
        navigation.classList.remove('no-hover');
    }

    // Trigger the openSidebar function when clicking on the navigation bar, but ignore the close icon
    navigation.addEventListener('click', function(event) {
        if (event.target !== closeIcon) {
            openSidebar();
        }
    });

    // Trigger the closeSidebar function when clicking on the close icon
    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering the openSidebar function
        closeSidebar();
    });
});


// --------------- JS for the dropdown selector element --------------
// Toggle dropdown visibility on button click
document.querySelector('.dropdown-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown if clicking outside of it
window.addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});

// Update button text with the selected option
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const value = this.getAttribute('data-value');
        const button = document.querySelector('.dropdown-button');
        button.textContent = this.textContent;
        document.querySelector('.dropdown-content').style.display = 'none'; // Hide the dropdown after selection
    });
});


