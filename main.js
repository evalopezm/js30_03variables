'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(ev) {
  if (ev.target.id === 'sepia') {
    document.documentElement.style.setProperty(`--${this.name}`, this.value / 100);
  } else {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
