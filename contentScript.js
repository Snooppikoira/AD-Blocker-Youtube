window.addEventListener('load', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            let adElements = document.querySelectorAll('.ad-container, .ytp-ad-module');
            adElements.forEach(function(adElement) {
                adElement.style.display = 'none';
            });

            let skipButton = document.querySelector('.ytp-ad-skip-button');
            if (skipButton) {
                skipButton.click();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
