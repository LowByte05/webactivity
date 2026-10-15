try {
      document.documentElement.dataset.theme = localStorage.getItem('profile-theme') === 'light' ? 'light' : 'dark';
    } catch (_) {}
