document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('langSwitch');
    if (!select) return;

    const currentPath = window.location.pathname;

    // 現在の言語をURLから判定して選択状態に反映
    if (currentPath.includes('/ja/')) {
        select.value = 'ja';
    } else {
        select.value = 'en';
    }

    select.addEventListener('change', (e) => {
        const targetLang = e.target.value;
        const currentLang = select.value === 'ja' ? 'en' : 'ja'; // 切り替え前

        // パス内の言語コードを置換して遷移（例: /ja/index.html -> /en/index.html）
        if (targetLang == 'en' && currentPath.includes(`/${currentLang}/`)) {
            window.location.href = `../index.html`;
        } else if (currentPath.includes(`/${currentLang}/`)) {
            window.location.href = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
        } else {
            // ルート直下にいる場合は対象言語ディレクトリへ移動
            window.location.href = `./${targetLang}/index.html`;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('langSwitch_privacy');
    if (!select) return;

    const currentPath = window.location.pathname;

    // 現在の言語をURLから判定して選択状態に反映
    if (currentPath.includes('/ja/')) {
        select.value = 'ja';
    } else {
        select.value = 'en';
    }

    select.addEventListener('change', (e) => {
        const targetLang = e.target.value;
        const currentLang = select.value === 'ja' ? 'en' : 'ja'; // 切り替え前

        // パス内の言語コードを置換して遷移（例: /ja/index.html -> /en/index.html）
        if (targetLang == 'en' && currentPath.includes(`/${currentLang}/`)) {
            window.location.href = `../privacy.html`;
        } else if (currentPath.includes(`/${currentLang}/`)) {
            window.location.href = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
        } else {
            // ルート直下にいる場合は対象言語ディレクトリへ移動
            window.location.href = `./${targetLang}/privacy.html`;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('langSwitch_terms');
    if (!select) return;

    const currentPath = window.location.pathname;

    // 現在の言語をURLから判定して選択状態に反映
    if (currentPath.includes('/ja/')) {
        select.value = 'ja';
    } else {
        select.value = 'en';
    }

    select.addEventListener('change', (e) => {
        const targetLang = e.target.value;
        const currentLang = select.value === 'ja' ? 'en' : 'ja'; // 切り替え前

        // パス内の言語コードを置換して遷移（例: /ja/index.html -> /en/index.html）
        if (targetLang == 'en' && currentPath.includes(`/${currentLang}/`)) {
            window.location.href = `../terms.html`;
        } else if (currentPath.includes(`/${currentLang}/`)) {
            window.location.href = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
        } else {
            // ルート直下にいる場合は対象言語ディレクトリへ移動
            window.location.href = `./${targetLang}/terms.html`;
        }
    });
});