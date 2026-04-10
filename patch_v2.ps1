$ErrorActionPreference = 'Stop'
$file = Join-Path $PSScriptRoot 'v2.html'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

# 1. Remove version badge span entirely
$content = $content -replace '<span class="header-version">[^<]*</span>', ''

# 2. Update grid height 56px -> 72px
$content = $content -replace 'grid-template-rows:56px', 'grid-template-rows:72px'

# 3. Add Montserrat font
$content = $content -replace 'JetBrains\+Mono:wght@400;500&display=swap', 'JetBrains+Mono:wght@400;500&family=Montserrat:wght@900&display=swap'

# 4. Replace CSS :root color variables
$oldRoot = '--bg: #0d1117; --bg2: #161b22; --bg3: #1c2128; --bg4: #21262d;'
$newRoot = '--bg: #07090f; --bg2: #0e1117; --bg3: #141920; --bg4: #1a2130;'
$content = $content.Replace($oldRoot, $newRoot)

$oldBorder = '--border: #30363d; --border2: #444c56;'
$newBorder = '--border: #1e2d45; --border2: #2a3f5c;'
$content = $content.Replace($oldBorder, $newBorder)

$oldTxt = '--txt: #e6edf3; --txt2: #8b949e; --txt3: #6e7681;'
$newTxt = '--txt: #e8f0ff; --txt2: #7b9cc9; --txt3: #4a6385;'
$content = $content.Replace($oldTxt, $newTxt)

$oldBlue = '--blue: #1f6feb; --blue2: #388bfd; --blue-bg: rgba(31,111,235,0.12);'
$newBlue = '--blue: #0d6bff; --blue2: #4d9fff; --blue-bg: rgba(13,107,255,0.15);'
$content = $content.Replace($oldBlue, $newBlue)

$oldGreen = '--green: #2ea043; --green2: #3fb950; --green-bg: rgba(46,160,67,0.12);'
$newGreen = '--green: #00c853; --green2: #69f0ae; --green-bg: rgba(0,200,83,0.15);'
$content = $content.Replace($oldGreen, $newGreen)

$oldYellow = '--yellow: #9e6a03; --yellow2: #d29922; --yellow-bg: rgba(210,153,34,0.12);'
$newYellow = '--yellow: #c98000; --yellow2: #ffd740; --yellow-bg: rgba(255,215,64,0.12);'
$content = $content.Replace($oldYellow, $newYellow)

$oldRed = '--red: #da3633; --red2: #f85149; --red-bg: rgba(218,54,51,0.12);'
$newRed = '--red: #f52d04; --red2: #ff5722; --red-bg: rgba(245,45,4,0.15);'
$content = $content.Replace($oldRed, $newRed)

$oldPurple = '--purple: #8957e5; --purple2: #bc8cff; --purple-bg: rgba(137,87,229,0.12);'
$newPurple = '--purple: #6c3aff; --purple2: #b388ff; --purple-bg: rgba(108,58,255,0.15);'
$content = $content.Replace($oldPurple, $newPurple)

$oldShadow = '--shadow: 0 8px 24px rgba(0,0,0,0.4);'
$newShadow = '--shadow: 0 8px 32px rgba(0,0,0,0.6); --cyan: #00e5ff; --magenta: #ff00c8; --glow-blue: 0 0 20px rgba(77,159,255,0.4);'
$content = $content.Replace($oldShadow, $newShadow)

# 5. Upgrade header CSS  
$oldHdrCSS = '.header{background:var(--bg2);border-bottom:1px solid var(--border);box-shadow:0 4px 20px rgba(0,0,0,0.15);backdrop-filter:blur(10px);display:flex;align-items:center;padding:0 20px;gap:16px;box-shadow:0 4px 20px rgba(0,0,0,0.15);backdrop-filter:blur(10px);position:sticky;top:0;z-index:100}'
$newHdrCSS = '.header{background:linear-gradient(135deg,#060b18 0%,#0a1428 50%,#08101e 100%);border-bottom:1px solid rgba(77,159,255,0.3);box-shadow:0 4px 32px rgba(0,0,0,0.7),0 1px 0 rgba(77,159,255,0.2);display:flex;align-items:center;padding:0 20px;gap:16px;position:sticky;top:0;z-index:100;backdrop-filter:blur(20px)}'
$content = $content.Replace($oldHdrCSS, $newHdrCSS)

# 6. Add new header CSS classes (insert after .header-logo-icon svg line)
$insertAfter = '.header-logo-icon svg{width:18px;height:18px;color:#fff}'
$newClasses = @'
.header-logo-icon svg{width:18px;height:18px;color:#fff}
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
.city-dot:hover{stroke-width:3;filter:drop-shadow(0 0 14px rgba(77,159,255,0.8))}
'@
$content = $content.Replace($insertAfter, $newClasses)

# 7. Update button styles
$oldBtn = '.header-right{margin-left:auto;display:flex;gap:8px;align-items:center}'
$newBtn = '.header-right{margin-left:0;display:flex;gap:8px;align-items:center;flex-shrink:0}'
$content = $content.Replace($oldBtn, $newBtn)

$oldBtnIcon = '.btn-icon{width:32px;height:32px;border:1px solid var(--border);background:transparent;border-radius:var(--radius);cursor:pointer;color:var(--txt2);display:flex;align-items:center;justify-content:center;transition:all .15s}'
$newBtnIcon = '.btn-icon{width:32px;height:32px;border:1px solid rgba(77,159,255,0.25);background:rgba(13,107,255,0.08);border-radius:var(--radius);cursor:pointer;color:var(--txt2);display:flex;align-items:center;justify-content:center;transition:all .15s}'
$content = $content.Replace($oldBtnIcon, $newBtnIcon)

$oldBtnHover = '.btn-icon:hover{background:var(--bg3);color:var(--txt);border-color:var(--border2)}'
$newBtnHover = '.btn-icon:hover{background:rgba(77,159,255,0.18);color:var(--blue2);border-color:var(--blue2);box-shadow:0 0 16px rgba(77,159,255,0.3)}'
$content = $content.Replace($oldBtnHover, $newBtnHover)

# 8. Replace old header sidebar CSS
$oldNavActive = '.nav-item.active{background:var(--blue-bg);color:var(--blue2);border-left-color:var(--blue2);font-weight:500}'
$newNavActive = '.nav-item.active{background:linear-gradient(90deg,rgba(13,107,255,0.22),rgba(13,107,255,0.04));color:#4d9fff;border-left-color:#00e5ff;font-weight:600}'
$content = $content.Replace($oldNavActive, $newNavActive)

# 9. Replace old header HTML block
$oldHdr = '<header class="header">
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
</header>'

$newHdr = '<header class="header">
  <div class="header-logos">
    <img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" class="header-logo-img">
    <div class="header-logo-divider"></div>
    <img src="ЛОГО/ыыы.png" alt="DGSC" class="header-logo-img color">
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
</header>'
$content = $content.Replace($oldHdr, $newHdr)

# 10. Brighten map region fills in renderMap
$content = $content.Replace("lvl==='excellent' ? 'rgba(46,160,67,0.35)'", "lvl==='excellent' ? 'rgba(105,240,174,0.55)'")
$content = $content.Replace(": lvl==='good' ? 'rgba(56,139,253,0.35)'", ": lvl==='good' ? 'rgba(77,159,255,0.45)'")
$content = $content.Replace(": lvl==='mid' ? 'rgba(210,153,34,0.35)'", ": lvl==='mid' ? 'rgba(255,215,64,0.4)'")
$content = $content.Replace(": 'rgba(248,81,73,0.25)';", ": 'rgba(255,87,34,0.45)';")
$content = $content.Replace("s.aiScore>=80 ? 'rgba(137,87,229,0.6)'", "s.aiScore>=80 ? 'rgba(179,136,255,0.7)'")
$content = $content.Replace(": s.aiScore>=60 ? 'rgba(137,87,229,0.4)'", ": s.aiScore>=60 ? 'rgba(179,136,255,0.45)'")
$content = $content.Replace(": s.aiScore>=40 ? 'rgba(137,87,229,0.2)'", ": s.aiScore>=40 ? 'rgba(179,136,255,0.25)'")
$content = $content.Replace(": 'var(--bg4)';", ": 'rgba(30,45,69,0.5)';")

# 11. Brighten region path default fill
$content = $content.Replace('fill:var(--bg4);transition:fill 0.3s ease,stroke 0.2s ease,filter 0.2s ease}', 'fill:rgba(13,107,255,0.08);transition:fill 0.3s ease,stroke 0.2s ease,filter 0.2s ease}')
$content = $content.Replace('stroke:#30363d;stroke-width:1.5;stroke-linejoin:round;cursor:pointer;', 'stroke:#1e3a5f;stroke-width:1.2;stroke-linejoin:round;cursor:pointer;')

# 12. Add city dots to initMap - replace the paths.forEach block to also add circles
$oldInitCheck = '  const paths = document.querySelectorAll(''#kaz-map path'');
  if (!paths.length) return;'
$newInitCheck = '  const svg = document.querySelector(''#kaz-map'');
  if (!svg) return;
  const paths = svg.querySelectorAll(''path'');'
$content = $content.Replace($oldInitCheck, $newInitCheck)

$oldForEach = '  paths.forEach((path, i) => {
    // Присваиваем ID региона на основе точного порядка контуров
    const regionId = MAP_REGION_ORDER[i] || "unknown";
    path.dataset.region = regionId;'

$newForEach = '  // Bind regions
  paths.forEach((path, i) => {
    const regionId = MAP_REGION_ORDER[i] || "unknown";
    path.dataset.region = regionId;'
$content = $content.Replace($oldForEach, $newForEach)

# 13. Before renderMap() call in initMap, inject city circles
$oldRenderMapCall = '  renderMap();
}

function switchMapMode'
$newRenderMapCall = '  // Add republic cities as dots
  const repCities = [
    {id:''astana'',cx:1035,cy:375},
    {id:''almaty'',cx:1415,cy:865},
    {id:''shymkent'',cx:1010,cy:945}
  ];
  repCities.forEach(city => {
    if (svg.querySelector(''[data-region="''+city.id+''"]'')) return;
    const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",city.cx); c.setAttribute("cy",city.cy);
    c.setAttribute("r","9"); c.setAttribute("class","city-dot");
    c.dataset.region = city.id;
    svg.appendChild(c);
    c.addEventListener(''mousemove'',e => {
      const s=REGION_SCORES[city.id];const l=LEADERS_DATA.find(x=>x.id===city.id);
      if(!l||!s||!tooltip)return;
      const val=currentMapMode===''totalScore''?s.totalScore:s.aiScore;
      const color=currentMapMode===''totalScore''?LEVEL_LABELS[scoreLevel(val)].c:''var(--purple2)'';
      const label=currentMapMode===''totalScore''?''TotalScore'':''AI Score'';
      tooltip.innerHTML=`<div class="map-tt-title">${l.mio}</div><div style="display:flex;justify-content:space-between;gap:20px"><span style="color:var(--txt2)">${label}</span><span style="font-family:''JetBrains Mono'',monospace;font-weight:700;color:${color}">${val}</span></div><div style="font-size:11px;color:var(--txt3);margin-top:4px">${val>=80?''Excellent'':val>=60?''Good'':val>=40?''Fair'':''Basic''}</div>`;
      tooltip.style.display=''block'';
      const x=Math.min(window.innerWidth-200,e.clientX+14);
      const y=e.clientY-tooltip.offsetHeight-8;
      tooltip.style.left=x+''px'';tooltip.style.top=(y<0?e.clientY+14:y)+''px'';
    });
    c.addEventListener(''mouseleave'',()=>{if(tooltip)tooltip.style.display=''none'';});
    c.addEventListener(''click'',()=>{if(window.openCity)openCity(city.id);});
  });

  renderMap();
}

function switchMapMode'
$content = $content.Replace($oldRenderMapCall, $newRenderMapCall)

# 14. Update renderMap to also color circles
$oldRenderMap = 'function renderMap() {
  document.querySelectorAll(''#kaz-map path'').forEach(path => {
    const s = REGION_SCORES[path.dataset.region];
    if (!s) return;
    if (currentMapMode === ''totalScore'') {
      const lvl = scoreLevel(s.totalScore);'
$newRenderMap = 'function renderMap() {
  document.querySelectorAll(''#kaz-map path, #kaz-map circle'').forEach(el => {
    const s = REGION_SCORES[el.dataset.region];
    if (!s) return;
    const isCircle = el.tagName.toLowerCase() === ''circle'';
    if (currentMapMode === ''totalScore'') {
      const lvl = scoreLevel(s.totalScore);'
$content = $content.Replace($oldRenderMap, $newRenderMap)

$oldFillLogic = "      path.style.fill = lvl==='excellent' ? 'rgba(105,240,174,0.55)'"
$newFillLogic = "      const fillColor = lvl==='excellent' ? 'rgba(105,240,174,0.55)'"
$content = $content.Replace($oldFillLogic, $newFillLogic)

$oldFillLogic2 = ": lvl==='good' ? 'rgba(77,159,255,0.45)'
        : lvl==='mid' ? 'rgba(255,215,64,0.4)'
        : 'rgba(255,87,34,0.45)';
    } else {
      path.style.fill = s.aiScore>=80 ? 'rgba(179,136,255,0.7)'"
$newFillLogic2 = ": lvl==='good' ? 'rgba(77,159,255,0.45)'
        : lvl==='mid' ? 'rgba(255,215,64,0.4)'
        : 'rgba(255,87,34,0.45)';
      el.style.fill = isCircle ? fillColor.replace('0.55','0.95').replace('0.45','0.95').replace('0.4','0.95') : fillColor;
    } else {
      const aiColor = s.aiScore>=80 ? 'rgba(179,136,255,0.9)'"
$content = $content.Replace($oldFillLogic2, $newFillLogic2)

$oldAiFill = ": s.aiScore>=60 ? 'rgba(179,136,255,0.45)'
        : s.aiScore>=40 ? 'rgba(179,136,255,0.25)'
        : 'rgba(30,45,69,0.5)';
    }
  });
}"
$newAiFill = ": s.aiScore>=60 ? 'rgba(179,136,255,0.5)'
        : s.aiScore>=40 ? 'rgba(179,136,255,0.28)'
        : 'rgba(30,45,69,0.5)';
      el.style.fill = isCircle ? aiColor.replace('0.5','0.95').replace('0.28','0.95') : aiColor;
    }
  });
}"
$content = $content.Replace($oldAiFill, $newAiFill)

# 15. Add footer before </body></html>
$oldEnd = '<div id="map-tooltip" class="map-tooltip"></div>
</body>
</html>'

$newEnd = '<div id="map-tooltip" class="map-tooltip"></div>
<footer style="background:linear-gradient(135deg,#060b18,#0a1428);border-top:1px solid rgba(77,159,255,0.2);padding:18px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;flex-shrink:0">
  <div style="display:flex;align-items:center;gap:14px">
    <img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" style="height:26px;filter:brightness(0) invert(1);opacity:0.65">
    <div style="width:1px;height:20px;background:rgba(77,159,255,0.2)"></div>
    <img src="ЛОГО/ыыы.png" alt="DGSC" style="height:24px;opacity:0.65">
  </div>
  <div style="font-size:11px;color:#4a6385;text-align:center;line-height:1.6">
    SmartCity / SmartRegion KZ &nbsp;&middot;&nbsp; 2026
  </div>
  <div style="display:flex;align-items:center;gap:14px">
    <img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" style="height:26px;filter:brightness(0) invert(1);opacity:0.65">
    <div style="width:1px;height:20px;background:rgba(77,159,255,0.2)"></div>
    <img src="ЛОГО/ыыы.png" alt="DGSC" style="height:24px;opacity:0.65">
  </div>
</footer>
</body>
</html>'
$content = $content.Replace($oldEnd, $newEnd)

# Save file
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "DONE - file saved"

# Quick verification
$c2 = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
if ($c2 -match 'brandCity') { Write-Host "OK: Animation CSS present" } else { Write-Host "MISSING: Animation CSS" }
if ($c2 -match 'header-brand') { Write-Host "OK: New header HTML" } else { Write-Host "MISSING: New header HTML" }
if ($c2 -match 'footer') { Write-Host "OK: Footer present" } else { Write-Host "MISSING: Footer" }
if ($c2 -match 'city-dot') { Write-Host "OK: City dot CSS" } else { Write-Host "MISSING: City dot CSS" }
if ($c2 -match '#07090f') { Write-Host "OK: New color palette" } else { Write-Host "MISSING: New colors" }
