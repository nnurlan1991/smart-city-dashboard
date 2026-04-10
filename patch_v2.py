import re, os

file = 'v2.html'
with open(file, 'r', encoding='utf-8') as f:
    c = f.read()

orig_len = len(c)

def sub(old, new, s):
    if old in s:
        return s.replace(old, new)
    print(f"WARNING: pattern not found:\n{old[:80]}")
    return s

# 1. Remove version badge
c = re.sub(r'<span class="header-version">[^<]*</span>', '', c)

# 2. Grid height 56px -> 72px
c = c.replace('grid-template-rows:56px', 'grid-template-rows:72px')

# 3. Montserrat font
c = c.replace(
    'JetBrains+Mono:wght@400;500&display=swap',
    'JetBrains+Mono:wght@400;500&family=Montserrat:wght@900&display=swap'
)

# 4. Color palette upgrades
c = c.replace('--bg: #0d1117; --bg2: #161b22; --bg3: #1c2128; --bg4: #21262d;',
               '--bg: #07090f; --bg2: #0e1117; --bg3: #141920; --bg4: #1a2130;')
c = c.replace('--border: #30363d; --border2: #444c56;',
               '--border: #1e2d45; --border2: #2a3f5c;')
c = c.replace('--txt: #e6edf3; --txt2: #8b949e; --txt3: #6e7681;',
               '--txt: #e8f0ff; --txt2: #7b9cc9; --txt3: #4a6385;')
c = c.replace('--blue: #1f6feb; --blue2: #388bfd; --blue-bg: rgba(31,111,235,0.12);',
               '--blue: #0d6bff; --blue2: #4d9fff; --blue-bg: rgba(13,107,255,0.15);')
c = c.replace('--green: #2ea043; --green2: #3fb950; --green-bg: rgba(46,160,67,0.12);',
               '--green: #00c853; --green2: #69f0ae; --green-bg: rgba(0,200,83,0.15);')
c = c.replace('--yellow: #9e6a03; --yellow2: #d29922; --yellow-bg: rgba(210,153,34,0.12);',
               '--yellow: #c98000; --yellow2: #ffd740; --yellow-bg: rgba(255,215,64,0.12);')
c = c.replace('--red: #da3633; --red2: #f85149; --red-bg: rgba(218,54,51,0.12);',
               '--red: #f52d04; --red2: #ff5722; --red-bg: rgba(245,45,4,0.15);')
c = c.replace('--purple: #8957e5; --purple2: #bc8cff; --purple-bg: rgba(137,87,229,0.12);',
               '--purple: #6c3aff; --purple2: #b388ff; --purple-bg: rgba(108,58,255,0.15);')
c = c.replace('--shadow: 0 8px 24px rgba(0,0,0,0.4);',
               '--shadow: 0 8px 32px rgba(0,0,0,0.6); --cyan: #00e5ff; --magenta: #ff00c8;')

# 5. Header CSS upgrade
c = c.replace(
    '.header{background:var(--bg2);border-bottom:1px solid var(--border);box-shadow:0 4px 20px rgba(0,0,0,0.15);backdrop-filter:blur(10px);display:flex;align-items:center;padding:0 20px;gap:16px;box-shadow:0 4px 20px rgba(0,0,0,0.15);backdrop-filter:blur(10px);position:sticky;top:0;z-index:100}',
    '.header{background:linear-gradient(135deg,#060b18 0%,#0a1428 50%,#08101e 100%);border-bottom:1px solid rgba(77,159,255,0.3);box-shadow:0 4px 32px rgba(0,0,0,0.7),0 1px 0 rgba(77,159,255,0.2);display:flex;align-items:center;padding:0 20px;gap:16px;position:sticky;top:0;z-index:100;backdrop-filter:blur(20px)}'
)

# 6. Insert new CSS classes after .header-logo-icon svg line
old_icon_svg = '.header-logo-icon svg{width:18px;height:18px;color:#fff}'
new_icon_svg = old_icon_svg + """
.header-logos{display:flex;align-items:center;gap:12px;flex-shrink:0}
.header-logo-img{height:34px;width:auto;object-fit:contain;opacity:.85;filter:brightness(0) invert(1)}
.header-logo-img.color{filter:none;height:28px}
.header-logo-divider{width:1px;height:26px;background:rgba(77,159,255,0.25)}
.header-brand{flex:1;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-weight:900;font-size:22px;letter-spacing:-0.02em;user-select:none}
.brand-smart{color:#fff;text-shadow:0 0 20px rgba(255,255,255,0.3)}
.brand-word-wrap{position:relative;display:inline-block;width:128px;height:28px;overflow:visible;margin-left:10px}
.brand-city,.brand-region{position:absolute;left:0;top:50%;transform:translateY(-50%);white-space:nowrap}
.brand-city{color:#00e5ff;text-shadow:0 0 18px #00e5ff,0 0 36px rgba(0,229,255,0.4);animation:brandCity 6s ease-in-out infinite}
.brand-region{color:#ff00c8;text-shadow:0 0 18px #ff00c8,0 0 36px rgba(255,0,200,0.4);animation:brandRegion 6s ease-in-out infinite}
@keyframes brandCity{0%,38%{opacity:1;transform:translateY(-50%) scale(1);filter:blur(0)}48%{opacity:0;transform:translateY(-50%) scale(1.1);filter:blur(5px)}82%{opacity:0;transform:translateY(-50%) scale(0.9);filter:blur(3px)}92%,100%{opacity:1;transform:translateY(-50%) scale(1);filter:blur(0)}}
@keyframes brandRegion{0%,38%{opacity:0;transform:translateY(-50%) scale(1.1);filter:blur(5px)}48%,82%{opacity:1;transform:translateY(-50%) scale(1);filter:blur(0)}92%,100%{opacity:0;transform:translateY(-50%) scale(0.9);filter:blur(3px)}}
.city-dot{cursor:pointer;stroke:#fff;stroke-width:2;transition:all 0.2s;filter:drop-shadow(0 0 6px rgba(0,0,0,0.8))}
.city-dot:hover{stroke-width:3;filter:drop-shadow(0 0 14px rgba(77,159,255,0.8))}"""
c = c.replace(old_icon_svg, new_icon_svg)

# 7. Button styles
c = c.replace('.header-right{margin-left:auto;display:flex;gap:8px;align-items:center}',
               '.header-right{margin-left:0;display:flex;gap:8px;align-items:center;flex-shrink:0}')
c = c.replace('.btn-icon{width:32px;height:32px;border:1px solid var(--border);background:transparent;border-radius:var(--radius);cursor:pointer;color:var(--txt2);display:flex;align-items:center;justify-content:center;transition:all .15s}',
               '.btn-icon{width:32px;height:32px;border:1px solid rgba(77,159,255,0.25);background:rgba(13,107,255,0.08);border-radius:var(--radius);cursor:pointer;color:var(--txt2);display:flex;align-items:center;justify-content:center;transition:all .15s}')
c = c.replace('.btn-icon:hover{background:var(--bg3);color:var(--txt);border-color:var(--border2)}',
               '.btn-icon:hover{background:rgba(77,159,255,0.18);color:var(--blue2);border-color:var(--blue2);box-shadow:0 0 16px rgba(77,159,255,0.3)}')

# 8. Nav active style
c = c.replace('.nav-item.active{background:var(--blue-bg);color:var(--blue2);border-left-color:var(--blue2);font-weight:500}',
               '.nav-item.active{background:linear-gradient(90deg,rgba(13,107,255,0.22),rgba(13,107,255,0.04));color:#4d9fff;border-left-color:#00e5ff;font-weight:600}')

# 9. Sidebar background
c = c.replace('.sidebar{background:var(--bg2);border-right:1px solid var(--border);overflow-y:auto;padding:12px 0}',
               '.sidebar{background:linear-gradient(180deg,#0a0f1e,#07090f);border-right:1px solid rgba(30,45,69,0.8);overflow-y:auto;padding:12px 0}')

# 10. Header HTML — replace old header block
old_header = '''<header class="header">
  <div class="header-logo">
    <div class="header-logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    <span class="header-title">SmartCity-KZ</span>
    
  </div>
  <div class="header-right">
    <button class="btn-icon" onclick="toggleTheme()" id="theme-btn" title="Сменить тему">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    </button>
    <button class="btn-icon" title="Экспорт"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>
  </div>
</header>'''

new_header = '''<header class="header">
  <div class="header-logos">
    <img src="\u041b\u041e\u0413\u041e/\u043c\u0438\u0438\u0446\u0440/ai_digital_1.png" alt="MIDI" class="header-logo-img">
    <div class="header-logo-divider"></div>
    <img src="\u041b\u041e\u0413\u041e/\u044b\u044b\u044b.png" alt="DGSC" class="header-logo-img color">
  </div>
  <div class="header-brand">
    <span class="brand-smart">SMART</span>
    <div class="brand-word-wrap">
      <span class="brand-city">CITY</span>
      <span class="brand-region">REGION</span>
    </div>
  </div>
  <div class="header-right">
    <button class="btn-icon" onclick="toggleTheme()" id="theme-btn" title="Theme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    </button>
    <button class="btn-icon" title="Export"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>
  </div>
</header>'''
c = c.replace(old_header, new_header)

# 11. Map region path default style
c = c.replace('stroke:#30363d;stroke-width:1.5;stroke-linejoin:round;cursor:pointer;fill:var(--bg4);transition:fill 0.3s ease,stroke 0.2s ease,filter 0.2s ease}',
               'stroke:#1e3a5f;stroke-width:1.2;stroke-linejoin:round;cursor:pointer;fill:rgba(13,107,255,0.08);transition:fill 0.3s ease,stroke 0.2s ease,filter 0.2s ease}')

# 12. Brighter map fill colors
c = c.replace("lvl==='excellent' ? 'rgba(46,160,67,0.35)'",  "lvl==='excellent' ? 'rgba(105,240,174,0.55)'")
c = c.replace(": lvl==='good' ? 'rgba(56,139,253,0.35)'",    ": lvl==='good' ? 'rgba(77,159,255,0.5)'")
c = c.replace(": lvl==='mid' ? 'rgba(210,153,34,0.35)'",     ": lvl==='mid' ? 'rgba(255,215,64,0.42)'")
c = c.replace(": 'rgba(248,81,73,0.25)';",                   ": 'rgba(255,87,34,0.48)';")
c = c.replace("s.aiScore>=80 ? 'rgba(137,87,229,0.6)'",      "s.aiScore>=80 ? 'rgba(179,136,255,0.72)'")
c = c.replace(": s.aiScore>=60 ? 'rgba(137,87,229,0.4)'",    ": s.aiScore>=60 ? 'rgba(179,136,255,0.48)'")
c = c.replace(": s.aiScore>=40 ? 'rgba(137,87,229,0.2)'",    ": s.aiScore>=40 ? 'rgba(179,136,255,0.28)'")
c = c.replace(": 'var(--bg4)';",                              ": 'rgba(30,45,69,0.5)';")

# 13. Fix initMap to use svg reference and add city circles
c = c.replace(
    "  const paths = document.querySelectorAll('#kaz-map path');\n  if (!paths.length) return;\n  const tooltip = document.getElementById('map-tooltip');",
    "  const mapSVG = document.querySelector('#kaz-map');\n  if (!mapSVG) return;\n  const paths = mapSVG.querySelectorAll('path');\n  const tooltip = document.getElementById('map-tooltip');"
)

# Insert city dots before renderMap() call in initMap
old_rm = "  renderMap();\n}\n\nfunction switchMapMode"
new_rm = """  // Republic cities as markers
  const _repCities = [
    {id:'astana',cx:1035,cy:375},
    {id:'almaty',cx:1415,cy:865},
    {id:'shymkent',cx:1010,cy:945}
  ];
  _repCities.forEach(city => {
    if (mapSVG.querySelector('[data-region="'+city.id+'"]')) return;
    const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('cx',city.cx); dot.setAttribute('cy',city.cy);
    dot.setAttribute('r','9'); dot.setAttribute('class','city-dot');
    dot.dataset.region = city.id;
    mapSVG.appendChild(dot);
    dot.addEventListener('mousemove',e => {
      const s=REGION_SCORES[city.id];const l=LEADERS_DATA.find(x=>x.id===city.id);
      if(!l||!s||!tooltip)return;
      const val=currentMapMode==='totalScore'?s.totalScore:s.aiScore;
      const color=currentMapMode==='totalScore'?LEVEL_LABELS[scoreLevel(val)].c:'var(--purple2)';
      const lbl=currentMapMode==='totalScore'?'TotalScore':'AI Score';
      tooltip.innerHTML='<div class="map-tt-title">'+l.mio+'</div><div style="display:flex;justify-content:space-between;gap:20px"><span style="color:var(--txt2)">'+lbl+'</span><span style="font-weight:700;color:'+color+'">'+val+'</span></div><div style="font-size:11px;color:var(--txt3);margin-top:4px">'+(val>=80?'Excellent':val>=60?'Good':val>=40?'Fair':'Basic')+'</div>';
      tooltip.style.display='block';
      const x=Math.min(window.innerWidth-200,e.clientX+14);
      const y=e.clientY-tooltip.offsetHeight-8;
      tooltip.style.left=x+'px';tooltip.style.top=(y<0?e.clientY+14:y)+'px';
    });
    dot.addEventListener('mouseleave',()=>{if(tooltip)tooltip.style.display='none';});
    dot.addEventListener('click',()=>{if(window.openCity)openCity(city.id);});
  });

  renderMap();
}

function switchMapMode"""
c = c.replace(old_rm, new_rm)

# 14. Update renderMap to include circles
c = c.replace(
    "  document.querySelectorAll('#kaz-map path').forEach(path => {\n    const s = REGION_SCORES[path.dataset.region];",
    "  document.querySelectorAll('#kaz-map path, #kaz-map circle.city-dot').forEach(el => {\n    const s = REGION_SCORES[el.dataset.region];"
)
c = c.replace(
    "    if (!s) return;\n    if (currentMapMode === 'totalScore') {\n      const lvl = scoreLevel(s.totalScore);\n      path.style.fill",
    "    if (!s) return;\n    const isCircle = el.tagName.toLowerCase()==='circle';\n    if (currentMapMode === 'totalScore') {\n      const lvl = scoreLevel(s.totalScore);\n      const pathFill"
)
c = c.replace(
    ": 'rgba(255,87,34,0.48)';\n    } else {\n      path.style.fill = s.aiScore>=80",
    ": 'rgba(255,87,34,0.48)';\n      el.style.fill = isCircle ? pathFill.replace('0.55','1').replace('0.5','1').replace('0.42','1').replace('0.48','1') : pathFill;\n    } else {\n      const aiFill = s.aiScore>=80"
)
c = c.replace(
    ": 'rgba(179,136,255,0.28)';\n      el.style.fill = isCircle",
    ": 'rgba(179,136,255,0.28)';\n      const _dummy = 'x';\n      el.style.fill = isCircle ? aiFill.replace('0.72','1').replace('0.48','1').replace('0.28','1') : aiFill;\n      void _dummy;\n      el.style.fill = isCircle"
)

# 15. Add footer before </body>
old_end = '<div id="map-tooltip" class="map-tooltip"></div>\n</body>\n</html>'
new_end = '''<div id="map-tooltip" class="map-tooltip"></div>
<footer style="background:linear-gradient(135deg,#060b18,#0a1428);border-top:1px solid rgba(77,159,255,0.18);padding:16px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;flex-shrink:0">
  <div style="display:flex;align-items:center;gap:14px">
    <img src="\u041b\u041e\u0413\u041e/\u043c\u0438\u0438\u0446\u0440/ai_digital_1.png" alt="MIDI" style="height:26px;filter:brightness(0) invert(1);opacity:0.65">
    <div style="width:1px;height:20px;background:rgba(77,159,255,0.2)"></div>
    <img src="\u041b\u041e\u0413\u041e/\u044b\u044b\u044b.png" alt="DGSC" style="height:24px;opacity:0.65">
  </div>
  <div style="font-size:11px;color:#4a6385;text-align:center">SmartCity / SmartRegion KZ &middot; 2026</div>
  <div style="display:flex;align-items:center;gap:14px">
    <img src="\u041b\u041e\u0413\u041e/\u043c\u0438\u0438\u0446\u0440/ai_digital_1.png" alt="MIDI" style="height:26px;filter:brightness(0) invert(1);opacity:0.65">
    <div style="width:1px;height:20px;background:rgba(77,159,255,0.2)"></div>
    <img src="\u041b\u041e\u0413\u041e/\u044b\u044b\u044b.png" alt="DGSC" style="height:24px;opacity:0.65">
  </div>
</footer>
</body>
</html>'''
c = c.replace(old_end, new_end)

# Save
with open(file, 'w', encoding='utf-8') as f:
    f.write(c)

print(f"Done. {orig_len} -> {len(c)} bytes")
checks = {
    'Animation CSS': 'brandCity',
    'Header brand HTML': 'header-brand',
    'Logos in header': 'header-logos',
    'Footer': '<footer',
    'City dots JS': '_repCities',
    'New color palette': '#07090f',
    'v2.4 removed': 'v2.4',
}
for name, pat in checks.items():
    found = pat in c
    if name == 'v2.4 removed':
        print(f"{'OK' if not found else 'WARN'}: {name}")
    else:
        print(f"{'OK' if found else 'MISSING'}: {name}")
