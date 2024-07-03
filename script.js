
document.addEventListener('DOMContentLoaded', async () => {
    const userCardsContainer = document.getElementById('user-cards-container');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <div class="section">
                    <i class="fas fa-user"></i>
                    <h2>${user.name} (${user.username})</h2>
                </div>
                <div class="section">
                    <i class="fas fa-location-dot"></i>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                </div>
                <div class="section">
                    <i class="fas fa-building"></i>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                </div>
                <div class="section">
                    <i class="fas fa-envelope"></i>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>
                <div class="section">
                    <i class="fas fa-phone"></i>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                </div>
                <div class="section">
                    <i class="fas fa-globe"></i>
                    <p><strong>Website:</strong> ${user.website}</p>
                </div>
            `;

            userCardsContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Veriler alınırken hata oluştu:', error);
    }
});
