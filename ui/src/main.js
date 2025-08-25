import { mount } from 'svelte';
import App from './App.svelte';

// Svelte 5: components are functions, use mount instead of `new App(...)`
const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
