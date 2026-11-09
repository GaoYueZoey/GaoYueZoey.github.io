document.getElementById('year').textContent = new Date().getFullYear();

// Opening a profile folder leaves the others folded. Details/summary also
// remain usable with keyboards and without JavaScript.
const folders = [...document.querySelectorAll('.profile-card')];
folders.forEach(folder => {
  folder.addEventListener('toggle', () => {
    if (folder.open) {
      folders.forEach(other => {
        if (other !== folder) other.open = false;
      });
    }
  });
});

function revealHash(hash, shouldScroll) {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const ancestors = [];
  for (let node = target; node; node = node.parentElement) {
    if (node instanceof HTMLDetailsElement) ancestors.unshift(node);
  }
  ancestors.forEach(node => { node.open = true; });
  if (shouldScroll) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start', behavior: 'auto' });
    }));
  }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (!document.getElementById(hash.slice(1))) return;
    event.preventDefault();
    if (location.hash !== hash) history.pushState(null, '', hash);
    revealHash(hash, true);
  });
});
window.addEventListener('hashchange', () => revealHash(location.hash, true));
window.addEventListener('popstate', () => revealHash(location.hash, true));
revealHash(location.hash, true);
