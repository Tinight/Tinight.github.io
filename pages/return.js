// Retorno progressivo: preserva o link HTML e evita duplicar a página principal.
const backLink = document.querySelector('.back');

backLink?.addEventListener('click', (event) => {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  event.preventDefault();
  const destination = new URL(backLink.href);
  let cameFromHome = false;

  try {
    const previous = new URL(document.referrer);
    const normalizePath = (path) => path.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    cameFromHome = previous.origin === destination.origin &&
      normalizePath(previous.pathname) === normalizePath(destination.pathname);
  } catch {
    // Visita direta ou referência ausente: mantém um retorno seguro para a principal.
  }

  if (cameFromHome && window.history.length > 1) {
    window.history.back();
  } else {
    window.location.replace(destination.href);
  }
});
