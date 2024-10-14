bigHeart.addEventListener('click', () => {
    // Mostrar el mensaje "Te quiero mucho"
    message.style.display = 'block';
  
    // Generar más corazones pequeños (20 en lugar de 10)
    for (let i = 0; i < 20; i++) {
      const smallHeart = document.createElement('div');
      smallHeart.classList.add('small-heart');
  
      // Coloca los corazones pequeños en posiciones aleatorias alrededor del corazón grande
      smallHeart.style.left = `${Math.random() * 100 - 50}%`;
      smallHeart.style.top = `${Math.random() * 100 - 50}%`;
  
      document.body.appendChild(smallHeart);
  
      // Remueve los corazones después de 2 segundos
      setTimeout(() => {
        smallHeart.remove();
      }, 4000);
    }
  });