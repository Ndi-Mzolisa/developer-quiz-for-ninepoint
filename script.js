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
