<script>
    // Minimal router for runes migration phase (kept legacy style to avoid compile issues)
    export let routes = {};
    export let restoreScrollState = false;

    let current = { location: '/', querystring: '' };
    let component = null;
    let componentParams = null;
    let userData = null;

    function parseLocation() {
        const href = window.location.href;
        const hashPos = href.indexOf('#/');
        let loc = hashPos > -1 ? href.substring(hashPos + 1) : '/';
        let qs = '';
        const qsPos = loc.indexOf('?');
        if (qsPos > -1) { qs = loc.substring(qsPos + 1); loc = loc.substring(0, qsPos); }
        return { location: loc || '/', querystring: qs };
    }

    function matchRoute(path) {
        for (const key of Object.keys(routes)) {
            if (key === '*') continue;
            if (key.endsWith('/?.*')) { // existing pattern usage
                const base = key.replace('/?.*','');
                if (current.location.startsWith(base)) {
                    return { component: routes[key], params: null, userData: routes[key].userData };
                }
            } else if (key === current.location) {
                return { component: routes[key], params: null, userData: routes[key].userData };
            }
        }
        if (routes[current.location]) {
            return { component: routes[current.location], params: null };
        }
        if (routes['*']) return { component: routes['*'], params: null };
        return { component: null, params: null };
    }

    function resolve() { return matchRoute(current.location); }

    function onHashChange() {
        current = parseLocation();
        const { component: c, params, userData: u } = resolve();
        component = c; componentParams = params; userData = u;
        if (restoreScrollState) window.scrollTo(0,0);
    }

    if (typeof window !== 'undefined') {
        current = parseLocation();
        const r = resolve();
        component = r.component; componentParams = r.params; userData = r.userData;
        window.addEventListener('hashchange', onHashChange);
    }

    export function push(path) { window.location.hash = path.startsWith('/') ? '#' + path : path; }
    export function replace(path) {
        const dest = path.startsWith('/') ? '#' + path : path;
        history.replaceState(history.state, '', dest);
        onHashChange();
    }
    export function link(node) {
        node.addEventListener('click', (e)=>{ e.preventDefault(); push(node.getAttribute('href')); });
    }
</script>

{#if component}
    <svelte:component this={component} params={componentParams} userData={userData} />
{/if}
