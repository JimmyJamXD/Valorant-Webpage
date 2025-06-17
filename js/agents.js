fetch('data/agents.json')
  .then(response => response.json())
  .then(agents => {
    const container = document.getElementById('agent-list');

    agents.forEach(agent => {
      const card = document.createElement('div');
      card.classList.add('agent-card');
      card.innerHTML = `
        <img src="${agent.image}" alt="${agent.name}" class="agent-image" />
        <div class="agent-info">
          <h3>${agent.name}</h3>
          <p class="role">${agent.role}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading agent data:', error));
