// Lightweight router utilities to replace svelte-spa-router usage during runes migration
// Exports: push, replace, link (action), querystring (store), active (action)
// Matching rules supported for active():
//   exact path match ("/settings")
//   prefix match pattern ending with `/?.*` ("/settings/storage/?.*")

function parseLocation() {
    const href = window.location.href;
    const hashPos = href.indexOf('#/');
    let loc = hashPos > -1 ? href.substring(hashPos + 1) : '/';
    let qs = '';
    const qsPos = loc.indexOf('?');
    if (qsPos > -1) { qs = loc.substring(qsPos + 1); loc = loc.substring(0, qsPos); }
    return { location: loc || '/', querystring: qs };
}

export function push(path) {
    const dest = path.startsWith('/') ? '#' + path : path;
    window.location.hash = dest;
}

export function replace(path) {
    const dest = path.startsWith('/') ? '#' + path : path;
    history.replaceState(history.state, '', dest);
    // manually dispatch hashchange so listeners update immediately
    window.dispatchEvent(new HashChangeEvent('hashchange'));
}

export function link(node) {
    function onClick(e) {
        // allow modifiers / new tab
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const href = node.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
        e.preventDefault();
        push(href);
    }
    node.addEventListener('click', onClick);
    return { destroy() { node.removeEventListener('click', onClick); } };
}

// querystring readable store (legacy compatible signature)
export const querystring = {
    subscribe(run) {
        const update = () => run(parseLocation().querystring);
        update();
        window.addEventListener('hashchange', update);
        return () => window.removeEventListener('hashchange', update);
    }
};

// active action: adds 'active' class (or custom) when current location matches pattern
export function active(node, opts) {
    let currentOpts = opts || {};
    function match(pathPattern) {
        if (!pathPattern) return false;
        const { location } = parseLocation();
        if (pathPattern.endsWith('/?.*')) {
            const base = pathPattern.replace('/?.*', '');
            return location.startsWith(base);
        }
        return location === pathPattern;
    }
    function updateClass() {
        const className = currentOpts.className || 'active';
        if (match(currentOpts.path)) node.classList.add(className); else node.classList.remove(className);
    }
    function onHash() { updateClass(); }
    window.addEventListener('hashchange', onHash);
    // initial
    updateClass();
    return {
        update(o) { currentOpts = o || {}; updateClass(); },
        destroy() { window.removeEventListener('hashchange', onHash); }
    };
}
