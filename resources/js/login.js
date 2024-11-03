const btn = document.getElementById('btn');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span style="background-color: lime">Button clicked</span>';
  } else {
    btn.textContent = initialText;
  }
});