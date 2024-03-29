export function normalizeUrl(url: string): string {

    const urlParts    = url.split('?');
    let normalizedUrl = urlParts[0]?.toLowerCase();

    if (urlParts.length > 1) {
        normalizedUrl += `?${urlParts[1]}`;
    }

    if (url.includes('#')) {
        const fragmentParts = normalizedUrl.split('#');
        const fragment      = fragmentParts[1]?.toLowerCase();
        normalizedUrl       = fragmentParts[0] + '#' + fragment;
    }

    if (normalizedUrl.endsWith('.')) {
        normalizedUrl = normalizedUrl.slice(0,
                                            -1);
    }

    if (
        normalizedUrl.endsWith('index.php') ||
        normalizedUrl.endsWith('home.php') ||
        normalizedUrl.endsWith('index.html') ||
        normalizedUrl.endsWith('home.html') ||
        normalizedUrl.endsWith('index.htm') ||
        normalizedUrl.endsWith('home.htm')
    ) {
        normalizedUrl = normalizedUrl.replace(/\/(index|home)\.(php|html|htm)$/,
                                              '/');
    }

    if (normalizedUrl.endsWith('/') && normalizedUrl.length !== 1) {
        normalizedUrl = normalizedUrl.slice(0,
                                            normalizedUrl.length - 1);
    }
    return normalizedUrl;
}
