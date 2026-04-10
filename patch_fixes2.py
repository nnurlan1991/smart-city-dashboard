import re

with open('v2.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Remove DGSC logo and dividers from header and footer
c = re.sub(r'<div class="header-logo-divider"></div>\s*<img src="ЛОГО/ыыы\.png"[^>]+>', '', c)
c = re.sub(r'<div style="width:1px;height:20px;background:rgba[^>]+></div>\s*<img src="ЛОГО/ыыы\.png"[^>]+>', '', c)

# 2. Fix the alignment of CITY/REGION text by explicitly setting a pixel line-height and baseline
# Let's override the brand-word-wrap logic so it relies on exact line-heights without translateY hacking
new_css = """
.header-brand{flex:1;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;letter-spacing:-0.02em;user-select:none;line-height:24px}
.brand-smart{text-shadow:0 0 20px rgba(255,255,255,0.3)}
.brand-word-wrap{position:relative;display:inline-block;width:142px;height:24px;overflow:visible;margin-left:8px}
.brand-city,.brand-region{position:absolute;left:0;top:0;line-height:24px;white-space:nowrap}
.brand-city{color:#00e5ff;text-shadow:0 0 18px #00e5ff,0 0 36px rgba(0,229,255,0.4);animation:brandCity 6s ease-in-out infinite}
.brand-region{color:#ff00c8;text-shadow:0 0 18px #ff00c8,0 0 36px rgba(255,0,200,0.4);animation:brandRegion 6s ease-in-out infinite}
@keyframes brandCity{0%,38%{opacity:1;filter:blur(0)}48%{opacity:0;filter:blur(5px)}82%{opacity:0;filter:blur(3px)}92%,100%{opacity:1;filter:blur(0)}}
@keyframes brandRegion{0%,38%{opacity:0;filter:blur(5px)}48%,82%{opacity:1;filter:blur(0)}92%,100%{opacity:0;filter:blur(3px)}}
"""

# Replace the block of old CSS
pattern = re.compile(r'\.header-brand\{.*?(?=\.city-dot\{)', re.DOTALL)
c = pattern.sub(new_css.strip() + '\n', c)

with open('v2.html', 'w', encoding='utf-8') as f:
    f.write(c)
print('Done!')
