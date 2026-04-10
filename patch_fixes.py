import re

with open('v2.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. DGSC opacity and logos inversion logic
c = c.replace('class="header-logo-img color"', 'class="header-logo-img color dgsc-logo"')
c = c.replace('<img src="ЛОГО/ыыы.png" alt="DGSC" style="height:24px;opacity:0.65">', '<img src="ЛОГО/ыыы.png" alt="DGSC" class="footer-dgsc-logo" style="height:28px;">')
c = c.replace('<img src="ЛОГО/ыыы.png" alt="DGSC" style="height:24px;opacity:0.65">', '<img src="ЛОГО/ыыы.png" alt="DGSC" class="footer-dgsc-logo" style="height:28px;">')
c = c.replace('<img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" style="height:26px;filter:brightness(0) invert(1);opacity:0.65">', '<img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" class="footer-mii-logo" style="height:26px;">')

# 2. Fix the alignment of CITY/REGION text
c = c.replace('.brand-word-wrap{position:relative;display:inline-block;width:128px;height:28px;overflow:visible;margin-left:10px}',
              '.brand-word-wrap{position:relative;display:inline-block;width:142px;height:28px;overflow:visible;margin-left:10px;transform:translateY(1px)}')

# 3. Add CSS variables for light/dark theme structural backgrounds
c = c.replace('  --shadow: 0 8px 32px rgba(0,0,0,0.6); --cyan: #00e5ff; --magenta: #ff00c8;\n}',
              '  --shadow: 0 8px 32px rgba(0,0,0,0.6); --cyan: #00e5ff; --magenta: #ff00c8;\n  --header-bg: linear-gradient(135deg,#060b18 0%,#0a1428 50%,#08101e 100%);\n  --sidebar-bg: linear-gradient(180deg,#0a0f1e,#07090f);\n  --footer-bg: linear-gradient(135deg,#060b18,#0a1428);\n  --nav-active-bg: linear-gradient(90deg,rgba(13,107,255,0.22),rgba(13,107,255,0.04));\n  --nav-active-border: #00e5ff;\n  --logo-filter: brightness(0) invert(1);\n}')

c = c.replace('  --purple: #8250df; --purple2: #8250df; --purple-bg: rgba(130,80,223,0.08);\n}',
              '  --purple: #8250df; --purple2: #8250df; --purple-bg: rgba(130,80,223,0.08);\n  --header-bg: #ffffff;\n  --sidebar-bg: #f6f8fa;\n  --footer-bg: #e8edf4;\n  --nav-active-bg: rgba(9,105,218,0.1);\n  --nav-active-border: #0969da;\n  --logo-filter: brightness(0);\n}')

# 4. Use these variables in CSS
c = c.replace('background:linear-gradient(135deg,#060b18 0%,#0a1428 50%,#08101e 100%)', 'background:var(--header-bg)')
c = c.replace('background:linear-gradient(180deg,#0a0f1e,#07090f)', 'background:var(--sidebar-bg)')
c = c.replace('background:linear-gradient(90deg,rgba(13,107,255,0.22),rgba(13,107,255,0.04))', 'background:var(--nav-active-bg)')
c = c.replace('border-left-color:#00e5ff', 'border-left-color:var(--nav-active-border)')
c = c.replace('filter:brightness(0) invert(1)', 'filter:var(--logo-filter)')

# Fix the footer hardcoded inline styles
c = c.replace('<footer style="background:linear-gradient(135deg,#060b18,#0a1428);', '<footer style="background:var(--footer-bg);')

# Upgrade DGSC logo styling (it doesn't need invert, but needs drop-shadow in dark mode)
new_logo_css = """
.header-logo-img.dgsc-logo { opacity: 1; filter: drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
[data-theme="light"] .header-logo-img.dgsc-logo { filter: none; }
.footer-dgsc-logo { opacity: 1; filter: drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
[data-theme="light"] .footer-dgsc-logo { filter: none; }
.brand-smart { color: var(--txt); }
"""
c = c.replace("/* ── LAYOUT ── */", new_logo_css + "/* ── LAYOUT ── */")

# Add class to footer MIDI logos so they get inverted properly
c = c.replace('<img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" class="footer-mii-logo" style="height:26px;">',
              '<img src="ЛОГО/миицр/ai_digital_1.png" alt="MIDI" class="footer-mii-logo" style="height:26px;filter:var(--logo-filter);opacity:0.85;">')

# Fix text colors for brand text in light mode
c = c.replace('.brand-smart{color:#fff;', '.brand-smart{') # Use var(--txt) added above

with open('v2.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Update successful')
