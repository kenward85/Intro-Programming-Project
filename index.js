document.addEventListener('DOMContentLoaded', function() {
    const GITHUB_USERNAME = 'kenward85';
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
});






    

