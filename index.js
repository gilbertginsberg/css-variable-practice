function initialize() {
  const controls = document.querySelectorAll('.controls input');

  // Defines handler to update input value
  function updateInputValue(event) {
    const val = event.target.value;
    const name = event.target.name;
    const sizingUnit = event.target.dataset.sizing;

    if (sizingUnit) {
      document.documentElement.style.setProperty(`--${name}`, `${val}${sizingUnit}`);
    } else {
      document.documentElement.style.setProperty(`--${name}`, `${val}`);
    }
  }

  controls.forEach((input) => {
    input.addEventListener('change', updateInputValue, false);
  });

  controls.forEach((input) => {
    input.addEventListener('mousemove', updateInputValue, false);
  });
}

window.onload = initialize;
