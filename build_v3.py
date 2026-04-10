import re

def build_v3():
    with open(r"C:\Users\NURSULTAN\Downloads\smart-city-region\v2.html", "r", encoding="utf-8") as f:
        html = f.read()

    css_new = """
:root {
  --bg: #0B0C10; --bg2: #15161A; --bg3: #1F2028; --bg4: #2A2A35;
  --border: rgba(255,255,255,0.08); --border2: rgba(255,255,255,0.12);
  --txt: #ffffff; --txt2: #8f95b2; --txt3: #585c70;
  --primary: #8b5cf6; --primary-hover: #a78bfa; --primary-bg: rgba(139, 92, 246, 0.15); --primary-txt: #c4b5fd;
  --blue: #3b82f6; --blue2: #60a5fa; --blue-bg: rgba(59, 130, 246, 0.15);
  --green: #10b981; --green2: #34d399; --green-bg: rgba(16, 185, 129, 0.15);
  --yellow: #f59e0b; --yellow2: #fbbf24; --yellow-bg: rgba(245, 158, 11, 0.15);
  --red: #ef4444; --red2: #f87171; --red-bg: rgba(239, 68, 68, 0.15);
  --purple: var(--primary); --purple2: var(--primary-hover); --purple-bg: var(--primary-bg);
  --orange: #f97316; --orange2: #fb923c;
  --radius: 12px; --radius-lg: 20px; --radius-xl: 24px;
  --shadow: 0 8px 32px rgba(0,0,0,0.4);
  --sidebar-w: 280px;
  --header-bg: rgba(11, 12, 16, 0.7);
  --logo-filter: brightness(0) invert(1);
}
[data-theme="light"] {
  --bg: #f4f6f8; --bg2: #ffffff; --bg3: #f9fafb; --bg4: #f1f5f9;
  --border: #e2e8f0; --border2: #cbd5e1;
  --txt: #0f172a; --txt2: #475569; --txt3: #94a3b8;
  --primary: #125a3a; --primary-hover: #1c7a52; --primary-bg: #e8f5ed; --primary-txt: #125a3a;
  --blue: #2563eb; --blue2: #3b82f6; --blue-bg: #eff6ff;
  --green: #059669; --green2: #10b981; --green-bg: #ecfdf5;
  --yellow: #d97706; --yellow2: #f59e0b; --yellow-bg: #fffbeb;
  --red: #dc2626; --red2: #ef4444; --red-bg: #fef2f2;
  --purple: #7c3aed; --purple2: #8b5cf6; --purple-bg: #f5f3ff;
  --shadow: 0 4px 20px rgba(0,0,0,0.03);
  --header-bg: rgba(244, 246, 248, 0.7);
  --logo-filter: brightness(0);
}
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--txt); min-height: 100vh; font-size: 14px; -webkit-font-smoothing: antialiased; }
.app { display: flex; height: 100vh; overflow: hidden; }
.sidebar { width: var(--sidebar-w); background: var(--bg2); border-right: 1px solid var(--border); display: flex; flex-direction: column; overflow-y: auto; z-index: 200; }
.main-wrapper { flex: 1; display: flex; flex-direction: column; overflow: hidden; position: relative; }
.header { height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 32px; background: var(--header-bg); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); z-index: 100; flex-shrink:0; }
.content { flex: 1; overflow-y: auto; padding: 32px; scroll-behavior: smooth; }
.page { display: none; animation: fadeIn 0.3s ease; }
.page.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.sidebar-header { padding: 24px; display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.header-logo-img { height: 40px; filter: var(--logo-filter); }
.header-brand { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 18px; line-height: 1.2; display:flex; flex-direction:column; justify-content:center; }
.brand-smart { color: var(--txt); }
.brand-word-wrap { position: relative; display: inline-block; width: 80px; height: 18px; overflow: visible; }
.brand-city, .brand-region { position: absolute; left: 0; top: 0; line-height: 18px; font-size:18px; white-space: nowrap; }
.brand-city { color: var(--blue2); animation: brandCity 6s ease-in-out infinite; }
.brand-region { color: var(--primary); animation: brandRegion 6s ease-in-out infinite; }
@keyframes brandCity{0%,38%{opacity:1;filter:blur(0)}48%{opacity:0;filter:blur(3px)}82%{opacity:0;filter:blur(2px)}92%,100%{opacity:1;filter:blur(0)}}
@keyframes brandRegion{0%,38%{opacity:0;filter:blur(3px)}48%,82%{opacity:1;filter:blur(0)}92%,100%{opacity:0;filter:blur(2px)}}
.nav-group-label { font-size: 11px; font-weight: 600; color: var(--txt3); padding: 12px 24px 6px; text-transform: uppercase; letter-spacing: 0.05em; margin-top:12px; }
.nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; color: var(--txt2); transition: all 0.2s; font-size: 14px; font-weight: 500; margin: 4px 16px; border-radius: var(--radius); }
.nav-item svg { width: 18px; height: 18px; flex-shrink: 0; }
.nav-item:hover { background: var(--bg3); color: var(--txt); }
.nav-item.active { background: var(--primary-bg); color: var(--primary-txt); font-weight: 600; }
.nav-item.active svg { color: var(--primary); }
.header-title { font-size: 20px; font-weight: 700; font-family: 'Montserrat', sans-serif; color: var(--txt); }
.header-right { display: flex; gap: 12px; align-items: center; }
.btn-icon { width: 40px; height: 40px; border: 1px solid var(--border); background: var(--bg2); border-radius: 50%; cursor: pointer; color: var(--txt2); display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: var(--shadow); }
.btn-icon:hover { background: var(--bg3); color: var(--txt); transform: translateY(-1px); }
.btn-icon svg { width: 18px; height: 18px; }
.breadcrumb { display: none; }
.section-title { font-size: 24px; font-weight: 700; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; color: var(--txt); font-family: 'Montserrat', sans-serif;}
.section-title svg { width: 24px; height: 24px; color: var(--primary); }
.kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
.kpi-card { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow); transition: transform 0.2s; position:relative; overflow:hidden; }
.kpi-card:hover { transform: translateY(-3px); border-color: var(--border2); }
.kpi-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; opacity:0; transition:opacity 0.2s; }
.kpi-card:hover::before { opacity:1; }
.kpi-card.blue::before { background: var(--blue2); }
.kpi-card.green::before { background: var(--green2); }
.kpi-card.yellow::before { background: var(--yellow2); }
.kpi-card.purple::before { background: var(--purple2); }
.kpi-card-label { font-size: 13px; color: var(--txt2); margin-bottom: 12px; font-weight: 500; }
.kpi-card-val { font-size: 36px; font-weight: 700; font-family: 'Montserrat', sans-serif; line-height: 1; margin-bottom: 8px; }
.kpi-card-sub { font-size: 13px; color: var(--txt3); font-weight: 500;}
.kpi-card.blue .kpi-card-val { color: var(--blue2); }
.kpi-card.green .kpi-card-val { color: var(--green2); }
.kpi-card.yellow .kpi-card-val { color: var(--yellow2); }
.kpi-card.purple .kpi-card-val { color: var(--purple2); }
.card { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow); margin-bottom: 24px; }
.card-title { font-size: 16px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; font-family: 'Montserrat', sans-serif;}
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px; }
.tbl-wrap { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow-x: auto; box-shadow: var(--shadow); margin-bottom: 24px; }
.tbl { width: 100%; border-collapse: collapse; }
.tbl th { text-align: left; font-size: 11px; font-weight: 600; color: var(--txt2); text-transform: uppercase; letter-spacing: 0.05em; padding: 12px 18px; border-bottom: 1px solid var(--border); background: var(--bg3); }
.tbl td { padding: 14px 18px; border-bottom: 1px solid var(--border); font-size: 13px; vertical-align: middle; color: var(--txt); }
.tbl tr:last-child td { border-bottom: none; }
.tbl tr:hover td { background: var(--bg4); cursor: pointer; }
.map-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 32px; }
.map-container { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; display: flex; flex-direction: column; position: relative; min-height: 480px; box-shadow: var(--shadow); }
.map-svg-wrap { flex: 1; display: flex; align-items: center; justify-content: center; margin-top: 16px; }
.map-svg-wrap svg { width: 100%; height: 100%; max-height: 480px; filter: drop-shadow(0 4px 16px rgba(0,0,0,0.15)); }
.region-path { stroke: var(--bg2); stroke-width: 1.5; stroke-linejoin: round; cursor: pointer; fill: var(--bg4); transition: all 0.3s ease;}
.region-path:hover { stroke: var(--txt); stroke-width: 2.5; filter: drop-shadow(0 0 12px var(--blue2)) brightness(1.2); }
.map-nav { display: flex; gap: 8px; margin-top: 12px; margin-bottom: 8px; z-index: 10; background: var(--bg3); padding: 6px; border-radius: 12px; border: 1px solid var(--border); width: fit-content; }
.map-btn { font-size: 12px; font-weight: 600; padding: 8px 16px; border-radius: 8px; border: none; background: transparent; color: var(--txt2); cursor: pointer; transition: all 0.2s; }
.map-btn.active { background: var(--bg2); color: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.map-tooltip { position: fixed; pointer-events: none; z-index: 9999; background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; font-size: 13px; color: var(--txt); box-shadow: var(--shadow); display: none; min-width: 200px; backdrop-filter: blur(12px); border-top: 3px solid var(--primary); }
.map-tt-title { font-size: 15px; font-weight: 700; margin-bottom: 12px; padding-bottom: 8px; font-family:'Montserrat', sans-serif;}
.badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; }
.badge-blue { background: var(--blue-bg); color: var(--blue2); }
.badge-green { background: var(--green-bg); color: var(--green2); }
.badge-yellow { background: var(--yellow-bg); color: var(--yellow2); }
.badge-red { background: var(--red-bg); color: var(--red2); }
.badge-purple { background: var(--purple-bg); color: var(--purple2); }
.badge-gray { background: var(--bg4); color: var(--txt2); }
.ai-lvl { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; border: 1px solid transparent; }
.ai-lvl.ai-1, .ai-lvl.ai-2, .ai-lvl.ai-3 { border-color: rgba(255,255,255,0.05); }
.ai-0 { background: var(--bg4); color: var(--txt3); }
.ai-1 { background: var(--blue-bg); color: var(--blue2); }
.ai-2 { background: var(--yellow-bg); color: var(--yellow2); }
.ai-3 { background: var(--primary-bg); color: var(--primary-txt); }
.rag { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; }
.rag-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.rag-green .rag-dot { background: var(--green2); box-shadow: 0 0 8px var(--green-bg); }
.rag-yellow .rag-dot { background: var(--yellow2); box-shadow: 0 0 8px var(--yellow-bg); }
.rag-red .rag-dot { background: var(--red2); box-shadow: 0 0 8px var(--red-bg); }
.prog-wrap { height: 8px; background: var(--bg4); border-radius: 4px; overflow: hidden; width: 100%; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); }
.prog-fill { height: 100%; border-radius: 4px; transition: width 0.6s ease; }
.stat-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border); }
.stat-row:last-child { border-bottom: none; }
.stat-row-label { font-size: 14px; color: var(--txt2); }
.stat-row-val { font-size: 14px; font-weight: 600; font-family:'JetBrains Mono', monospace; }
.alert { display: flex; gap: 16px; padding: 20px; border-radius: var(--radius-lg); margin-bottom: 16px; border: 1px solid transparent; align-items: flex-start; }
.alert-red { background: var(--red-bg); border-color: rgba(239, 68, 68, 0.2); }
.alert-red svg { color: var(--red2); }
.alert-yellow { background: var(--yellow-bg); border-color: rgba(245, 158, 11, 0.2); }
.alert-yellow svg { color: var(--yellow2); }
.alert-blue { background: var(--blue-bg); border-color: rgba(59, 130, 246, 0.2); }
.alert-blue svg { color: var(--blue2); }
.alert svg { flex-shrink: 0; width: 24px; height: 24px; margin-top: 2px; }
.alert p { font-size: 14px; line-height: 1.6; color: var(--txt); }
.leader-card { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px; display: flex; gap: 16px; box-shadow: var(--shadow); transition: transform 0.2s; }
.leader-card:hover { transform: translateY(-3px); border-color: var(--primary); }
.leader-card-info { flex: 1; }
.leader-card-name { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
.leader-card-post { font-size: 13px; color: var(--txt2); margin-bottom: 16px; line-height: 1.4; }
.leader-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
.leader-metric { background: var(--bg3); border-radius: 12px; padding: 14px; text-align: center; border: 1px solid var(--border); transition: border-color 0.2s; }
.leader-metric:hover { border-color: var(--border2); }
.leader-metric-val { font-size: 20px; font-weight: 700; font-family: 'Montserrat', sans-serif; margin-bottom: 4px;}
.leader-metric-label { font-size: 11px; color: var(--txt3); font-weight: 600; text-transform: uppercase; }
.timeline { display: flex; flex-direction: column; }
.timeline-item { display: flex; gap: 24px; padding-bottom: 32px; position: relative; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-line { display: flex; flex-direction: column; align-items: center; width: 24px; flex-shrink: 0; }
.timeline-dot { width: 16px; height: 16px; border-radius: 50%; background: var(--bg3); border: 4px solid var(--bg2); box-shadow: 0 0 0 2px var(--border); z-index: 2; margin-top: 2px;}
.timeline-item:nth-child(1) .timeline-dot { background: var(--green2); box-shadow: 0 0 0 2px var(--green2); }
.timeline-item:nth-child(2) .timeline-dot { background: var(--blue2); box-shadow: 0 0 0 2px var(--blue2); }
.timeline-item:nth-child(3) .timeline-dot { background: var(--txt3); }
.timeline-connector { position: absolute; left: 11px; top: 18px; bottom: -4px; width: 2px; background: var(--border); z-index: 1; }
.timeline-item:last-child .timeline-connector { display: none; }
.modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); z-index: 500; align-items: center; justify-content: center; padding: 24px; opacity: 0; transition: opacity 0.3s; }
.modal-overlay.open { display: flex; opacity: 1; }
.modal { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius-xl); width: 100%; max-width: 1000px; max-height: 85vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 24px 48px rgba(0,0,0,0.5); transform: translateY(20px); transition: transform 0.3s; }
.modal-overlay.open .modal { transform: translateY(0); }
.modal-header { padding: 24px 28px; display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid var(--border); background: var(--bg3); flex-shrink: 0; }
.modal-header-inner { flex: 1; }
.modal-header h2 { font-size: 24px; font-weight: 700; margin-bottom: 8px; font-family: 'Montserrat', sans-serif;}
.modal-header p { font-size: 14px; color: var(--txt2); }
.modal-tabs { display: flex; padding: 0 28px; background: var(--bg3); border-bottom: 1px solid var(--border); overflow-x: auto; scrollbar-width: none; flex-shrink: 0; }
.modal-tab { padding: 14px 20px; font-size: 13px; font-weight: 500; cursor: pointer; color: var(--txt2); border-bottom: 3px solid transparent; transition: all 0.2s; white-space: nowrap; margin-bottom: -1px; }
.modal-tab:hover { color: var(--txt); }
.modal-tab.active { color: var(--primary); border-bottom-color: var(--primary); font-weight: 600; }
.modal-body { padding: 28px; overflow-y: auto; flex: 1; background: var(--bg); }
.modal-close { width: 40px; height: 40px; background: var(--bg4); border-radius: 50%; border: none; cursor: pointer; color: var(--txt); display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
.modal-close:hover { background: var(--red-bg); color: var(--red2); }
.modal-close svg { width: 18px; height: 18px; }
.chart-box { position: relative; height: 300px; }
.func-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--border); }
.func-check-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.func-check-icon.done { background: var(--green-bg); color: var(--green2); }
.func-check-icon.prog { background: var(--blue-bg); color: var(--blue2); }
.func-check-icon.wait { background: var(--bg4); color: var(--txt3); }
.func-check-icon.na { background: var(--bg4); color: var(--txt3); }
.func-item-text { flex: 1; font-size: 15px; line-height: 1.5; }
.func-item-deadline { font-size: 13px; color: var(--txt3); font-weight: 500; font-family: 'JetBrains Mono', monospace;}
.map-legend { display: flex; gap: 12px; margin-top: 10px; flex-wrap: wrap; }
.map-legend-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--txt2); }
.map-legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
.avatar { border-radius: 50%; flex-shrink: 0; }
.gauge-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.gauge-val { font-size: 36px; font-weight: 700; font-family: 'JetBrains Mono', monospace; line-height: 1; }
.gauge-label { font-size: 12px; color: var(--txt2); }
.score-section { display: flex; gap: 2px; margin: 8px 0; }
.score-seg { height: 6px; flex: 1; border-radius: 2px; background: var(--bg4); }
.score-seg.fill-red { background: var(--red2); }
.score-seg.fill-orange { background: var(--orange2); }
.score-seg.fill-yellow { background: var(--yellow2); }
.score-seg.fill-blue { background: var(--blue2); }
.score-seg.fill-green { background: var(--green2); }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }
@media(max-width: 1024px) {
  .map-layout { grid-template-columns: 1fr; }
  .grid-3 { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 768px) {
  .app { flex-direction: column; }
  .sidebar { width: 100%; height: auto; max-height: 300px; border-right: none; border-bottom: 1px solid var(--border); }
  .grid-2, .grid-3, .kpi-grid { grid-template-columns: 1fr; }
  .content { padding: 16px; }
}
"""

    html = re.sub(r'<style>.*?</style>', f'<style>\\n{css_new}\\n</style>', html, flags=re.DOTALL)
    
    header_match = re.search(r'(<header class="header">.*?</header>)', html, re.DOTALL)
    sidebar_match = re.search(r'<nav class="sidebar" id="sidebar">.*?</nav>', html, re.DOTALL)
    content_match = re.search(r'<div class="content">.*?</div><!-- /content -->', html, re.DOTALL)
    
    if header_match and sidebar_match and content_match:
        old_h = header_match.group(0)
        old_sb = sidebar_match.group(0)
        new_content = content_match.group(0)
        
        logos_match = re.search(r'<div class="header-logos">.*?</div>', old_h, re.DOTALL)
        brand_match = re.search(r'<div class="header-brand">.*?</div>\s*</div>', old_h, re.DOTALL)
        
        # Remove redundant inline padding from v2 content. content already has padding.
        new_content = new_content.replace(' style="padding:24px"', '')
        new_content = new_content.replace(' style="padding: 24px;"', '')
        new_content = new_content.replace(' style="padding:20px"', '')
        new_content = new_content.replace(' style="padding: 20px;"', '')
        
        sidebar_logos = ""
        if logos_match and brand_match:
            sidebar_logos = f'<div class="sidebar-header">{logos_match.group(0)}\\n{brand_match.group(0)}</div>\\n'
        
        # Inject logos right after the <nav ...> open tag
        new_sb = re.sub(r'(<nav[^>]*>)', r'\1\n' + sidebar_logos, old_sb, count=1)
        
        # remove logos from header
        new_h = re.sub(r'<div class="header-logos">.*?</div>\s*<div class="header-brand">.*?</div>\s*</div>', '<div class="header-title">Dashboard Overview</div>', old_h, flags=re.DOTALL)
        
        app_match = re.search(r'<div class="app">.*?</div><!-- /app -->', html, re.DOTALL)
        if app_match:
            new_app = f'''<div class="app">
{new_sb}
<div class="main-wrapper">
{new_h}
{new_content}
</div>
</div><!-- /app -->'''
            html = html.replace(app_match.group(0), new_app)

    with open(r"C:\Users\NURSULTAN\Downloads\smart-city-region\v3.html", "w", encoding="utf-8") as f:
        f.write(html)

build_v3()
