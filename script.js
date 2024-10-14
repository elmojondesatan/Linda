bigHeart.addEventListener('click', () => {
    // Mostrar el mensaje "Te quiero mucho"
    message.style.display = 'block';
  
    // Generar más corazones pequeños (20 en total)
    for (let i = 0; i < 20; i++) {
      const smallHeart = document.createElement('div');
      smallHeart.classList.add('small-heart');
  
      // Posición aleatoria en toda la pantalla alrededor del corazón grande
      const randomX = Math.random() * window.innerWidth;  // Posición horizontal
      const randomY = Math.random() * window.innerHeight; // Posición vertical
  
      smallHeart.style.left = `${randomX}px`;
      smallHeart.style.top = `${randomY}px`;
  
      document.body.appendChild(smallHeart);
  
      // Remover los corazones después de la animación (2 segundos)
      setTimeout(() => {
        smallHeart.remove();
      }, 2000);
    }
  });
  