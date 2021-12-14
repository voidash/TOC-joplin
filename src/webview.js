document.addEventListener('click',
    event => {
        const element = event.target;
        if (element.className === 'toc-item-link') {

            const slug = element.dataset.slug;
            webviewApi.postMessage({
                name: 'scrollToHash',
                hash: slug,
            });
            console.info('Clicked header slug: ' + slug);
        }
    })