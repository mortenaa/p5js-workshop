
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-btn').forEach((button) => {
    button.textContent = 'Kopier'; // Ensure initial text is Norwegian
    button.addEventListener('click', async () => {
      const codeToCopy = button.dataset.code;
      if (codeToCopy) {
        try {
          await navigator.clipboard.writeText(codeToCopy);
          const originalText = button.textContent;
          button.textContent = 'Kopiert!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    });
  });
});
