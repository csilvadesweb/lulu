document.getElementById('filter').addEventListener('change', function() {
    const filterValue = this.value;
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
        if (filterValue === 'all' || project.classList.contains(filterValue)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});