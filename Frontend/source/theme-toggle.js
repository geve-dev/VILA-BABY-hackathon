(function() {
    'use strict';

    const STORAGE_KEY = 'vila-baby-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';

    function getSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return THEME_DARK;
        }
        return THEME_LIGHT;
    }

    function getSavedTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        return getSystemPreference();
    }

    function applyTheme(theme) {
        if (theme === THEME_DARK) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        const icon = themeToggle.querySelector('i');
        if (!icon) return;

        if (theme === THEME_DARK) {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }

    function toggleTheme() {
        const currentTheme = getSavedTheme();
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
    }

    applyTheme(getSavedTheme());

    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
            }
        });
    }
})();
