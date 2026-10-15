const toggle = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');

    function updateThemeButton() {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      label.textContent = next === 'light' ? 'Light' : 'Dark';
      toggle.setAttribute('aria-label', `Switch to ${next} mode`);
    }
    toggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem('profile-theme', next);
      } catch (_) {}
      updateThemeButton();
    });
    const filters = document.querySelectorAll('[data-filter]');
    filters.forEach(button => button.addEventListener('click', () => {
      filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('[data-category]').forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      });
    }));
    const goals = [...document.querySelectorAll('[data-goal]')];
    let savedGoals = {};
    try {
      const stored = JSON.parse(localStorage.getItem('profile-goals-v1') || '{}');
      if (stored && typeof stored === 'object' && !Array.isArray(stored)) savedGoals = stored;
    } catch (_) {}

    function updateProgress(save = false) {
      const completed = goals.filter(goal => goal.checked).length;
      document.getElementById('goal-progress').value = completed;
      document.getElementById('goal-summary').textContent = `${completed} of ${goals.length} complete${completed === goals.length ? ' — nicely done!' : ''}`;
      goals.forEach(goal => {
        goal.closest('label').querySelector('.tag').textContent = goal.checked ? 'Done' : 'To do';
      });
      if (save) {
        try {
          localStorage.setItem('profile-goals-v1', JSON.stringify(Object.fromEntries(goals.map(goal => [goal.dataset.goal, goal.checked]))));
        } catch (_) {
          document.getElementById('save-note').textContent = 'Browser storage is unavailable. Progress lasts for this visit only.';
        }
      }
    }
    goals.forEach(goal => {
      goal.checked = savedGoals[goal.dataset.goal] === true;
      goal.addEventListener('change', () => updateProgress(true));
    });
    document.getElementById('reset-goals').addEventListener('click', () => {
      goals.forEach(goal => {
        goal.checked = false;
      });
      updateProgress(true);
    });
    updateProgress();
    document.getElementById('copy-email').addEventListener('click', async () => {
      const email = document.querySelector('.email').getAttribute('href').slice(7);
      const status = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText(email);
        status.textContent = 'Email copied. Say hello anytime!';
      } catch (_) {
        status.textContent = `Copy isn't available here. Select and copy: ${email}`;
      }
    });
    updateThemeButton();
    document.getElementById('year').textContent = new Date().getFullYear();
