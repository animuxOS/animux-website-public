/* Animux Guide: offline search, copy buttons, theme switch. No network access. */
(function () {
  "use strict";
  var root = document.body.getAttribute("data-root") || "./";
  var index = window.ANIMUX_SEARCH || [];
  var q = document.getElementById("q");
  var box = document.getElementById("results");

  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  var docs = index.map(function (d) { return { d: d, t: norm(d.t), s: norm(d.s), x: norm(d.x) }; });

  function search(text) {
    var words = norm(text).split(/\s+/).filter(function (w) { return w.length > 1; });
    if (!words.length) return [];
    var out = [];
    docs.forEach(function (e) {
      var score = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], hit = 0;
        if (e.t.indexOf(w) >= 0) hit += 10;
        if (e.s.indexOf(w) >= 0) hit += 4;
        var n = e.x.split(w).length - 1;
        hit += Math.min(n, 8);
        if (!hit) return;          // every word must match somewhere
        score += hit;
      }
      out.push({ e: e, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 12);
  }

  function snippet(e, text) {
    var w = norm(text).split(/\s+/)[0] || "";
    var i = e.x.indexOf(w);
    if (i < 0) return e.d.s;
    var start = Math.max(0, i - 60);
    return (start ? "…" : "") + e.d.x.substr(start, 160) + "…";
  }

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var sel = -1;
  function show() {
    var res = search(q.value);
    sel = -1;
    if (!q.value.trim()) { box.classList.remove("open"); box.innerHTML = ""; return; }
    box.innerHTML = res.length ? res.map(function (r) {
      return '<a href="' + root + r.e.d.u + '"><span class="sec">' + esc(r.e.d.sec || "Home") + "</span><br><strong>" +
        esc(r.e.d.t) + "</strong><small>" + esc(snippet(r.e, q.value)) + "</small></a>";
    }).join("") : '<a href="#" onclick="return false"><small>No pages found. Try other words.</small></a>';
    box.classList.add("open");
  }
  if (q && box) {
    q.addEventListener("input", show);
    q.addEventListener("keydown", function (ev) {
      var links = box.querySelectorAll("a");
      if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
        ev.preventDefault();
        sel = (sel + (ev.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (a, i) { a.classList.toggle("sel", i === sel); });
      } else if (ev.key === "Enter") {
        var a = links[sel >= 0 ? sel : 0];
        if (a && a.getAttribute("href") !== "#") location.href = a.href;
      } else if (ev.key === "Escape") { q.value = ""; show(); q.blur(); }
    });
    document.addEventListener("click", function (ev) { if (!ev.target.closest(".search")) box.classList.remove("open"); });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement !== q) { ev.preventDefault(); q.focus(); }
    });
  }

  // copy buttons on code blocks
  document.querySelectorAll("pre").forEach(function (pre) {
    var b = document.createElement("button");
    b.className = "copy"; b.type = "button"; b.textContent = "Copy";
    b.addEventListener("click", function () {
      var text = pre.querySelector("code") ? pre.querySelector("code").innerText : pre.innerText;
      function done() { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1500); }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done);
      else {
        var t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); done(); } catch (e) {} document.body.removeChild(t);
      }
    });
    pre.appendChild(b);
  });

  // light / dark switch (remembered in this browser only)
  window.animuxTheme = function () {
    var dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var t = dark ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("animux-theme", t); } catch (e) {}
  };
})();
