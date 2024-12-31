document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.getElementById('stars-container');
  const gradientBox = document.getElementById('gradient-box');
  const circle = document.getElementById('circle');

  const boxWidth = gradientBox.offsetWidth;
  const boxHeight = gradientBox.offsetHeight;

  const circleRect = circle.getBoundingClientRect();
  const circleX = circleRect.left;
  const circleY = circleRect.top;
  const circleRadius = circleRect.width / 2;

  const stars = [];
  const starSizes = [
    { size: 8, quantity: 1 },
    { size: 7, quantity: 2 },
    { size: 6, quantity: 2 },
    { size: 5, quantity: 8 },
    { size: 4, quantity: 20 },
    { size: 3, quantity: 40 },
    { size: 2, quantity: 80 },
    { size: 1, quantity: 180 }
  ];

  function doesOverlap(x, y, starSize) {
    // Check against the circle
    const distanceFromCircle = Math.sqrt(
      Math.pow(x - (circleX + circleRadius), 2) +
      Math.pow(y - (circleY + circleRadius), 2)
    );
    if (distanceFromCircle < circleRadius + starSize) {
      return true; // Overlaps with the circle
    }

    // Check against other stars
    for (const star of stars) {
      const distanceFromStar = Math.sqrt(
        Math.pow(x - star.x, 2) +
        Math.pow(y - star.y, 2)
      );
      if (distanceFromStar < starSize * 2) {
        return true; // Overlaps with another star
      }
    }

    return false; // No overlap
  }

  starSizes.forEach(({ size, quantity }) => {
    for (let i = 0; i < quantity; i++) {
      let x, y;

      let attempts = 0;
      const maxAttempts = 1000; // Avoid infinite loops

      do {
        x = Math.random() * boxWidth;
        y = Math.random() * boxHeight;
        attempts++;
      } while (doesOverlap(x, y, size) && attempts < maxAttempts);

      if (attempts === maxAttempts) {
        console.warn(`Could only place ${stars.length} stars out of ${quantity}`);
        break; // Stop placing stars if max attempts are reached
      }

      stars.push({ x, y, size });

      // Create and style the star
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      starsContainer.appendChild(star);
    }
  });
});