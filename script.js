const filterTable = (theme) => {
  const rows = document.querySelectorAll('#tableAffaires tbody tr');
  rows.forEach(row => {
    const rowTheme = row.getAttribute('data-theme');
    row.style.display = (theme === 'all' || rowTheme === theme) ? '' : 'none';
  });
};

const buttons = document.querySelectorAll('.tags .tag');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (isActive) {
      filterTable('all');
    } else {
      button.classList.add('active');
      const theme = button.getAttribute('data-theme');
      filterTable(theme);
    }
  });
});

filterTable('all');
