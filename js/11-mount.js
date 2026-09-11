// ═══ APP ROOT ─────────────────────────────────────────────────────────────────
(function() {
  const rootEl = document.getElementById('root');
  if (!rootEl) return;
  try {
    if (ReactDOM.createRoot) {
      const root = ReactDOM.createRoot(rootEl);
      root.render(React.createElement(AppErrorBoundary, null, React.createElement(App)));
    } else {
      ReactDOM.render(React.createElement(AppErrorBoundary, null, React.createElement(App)), rootEl);
    }
  } catch(e) {
    rootEl.innerHTML = '<div style="color:#fff;padding:30px;font-family:sans-serif;"><h2>App Error</h2><pre style="color:#ff6b6b;font-size:12px;white-space:pre-wrap;">' + e.message + '</pre></div>';
    console.error('App mount error:', e);
  }
})();