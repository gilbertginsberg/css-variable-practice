function initialize() {
  const spacingCtrl = document.getElementById('spacing');
  const blurCtrl = document.getElementById('blur');
  const baseCtrl = document.getElementById('base');
/*  const styles = getComputedStyle(document.documentElement);
  let spacing = String(styles.getPropertyValue('--spacing')).trim();
  const blur = String(styles.getPropertyValue('--blur')).trim();
  const base = String(styles.getPropertyValue('--base')).trim(); */

  spacingCtrl.addEventListener('change', (event) => {
    const rangeVal = event.target.value;
    document.documentElement.style.setProperty('--spacing', `${rangeVal}px`);
  }, false);

  blurCtrl.addEventListener('change', (event) => {
    const rangeVal = event.target.value;
    document.documentElement.style.setProperty('--blur', `blur(${rangeVal}px)`);
  }, false);

  baseCtrl.addEventListener('change', (event) => {
    const color = event.target.value;
    document.documentElement.style.setProperty('--base', `${color}`);
  }, false);
}

window.onload = initialize;