document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        document.querySelector('.main-content').style.marginLeft = '0';
    } else {
        document.querySelector('.main-content').style.marginLeft = '250px';
    }
});

// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const sectionTitle = document.getElementById('sectionTitle');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        sections.forEach(section => section.classList.remove('active-section'));
        document.getElementById(this.dataset.section).classList.add('active-section');

        sectionTitle.textContent = this.textContent;
    });
});

// Example functionality for Edit and Delete buttons in Users section
document.querySelectorAll('.editBtn').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const userId = row.querySelector('td:first-child').textContent;
        alert('Edit user with ID: ' + userId);
        // Add your edit functionality here
    });
});

document.querySelectorAll('.deleteBtn').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const userId = row.querySelector('td:first-child').textContent;
        if (confirm('Are you sure you want to delete user with ID: ' + userId + '?')) {
            row.remove();
            // Add your delete functionality here
        }
    });
});

// Example functionality for Logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = '/login'; // Redirect to login page or perform logout action
    }
});
