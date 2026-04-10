// Общие утилиты
function makeAvatar(initials, size=80) {
    if (!initials) initials = 'NN';
    const colors = ['#1f6feb','#8957e5','#238636','#d29922','#e36209'];
    const seed = initials.charCodeAt(0) % colors.length;
    const bg = colors[seed];
    return `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" rx="${size/2}" fill="${bg}"/>
        <text x="${size/2}" y="${size*0.625}" text-anchor="middle" font-family="Inter,sans-serif"
          font-size="${size*0.36}px" font-weight="600" fill="white">${initials}</text>
      </svg>`
    )}`;
}

function getTotalScore(city) {
    return city.cityScore100 + city.bonusPoints - city.penalty;
}

// Навигация
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            const page = item.getAttribute('data-page');
            document.querySelectorAll('.page-section').forEach(sec => {
                if (sec) sec.style.display = 'none';
            });
            const pageEl = document.getElementById('page-' + page);
            if (pageEl) {
                pageEl.style.display = 'block';
            }
            routePage(page);
        });
    });
    // Init default
    routePage('overview');
});

function routePage(page) {
    if (page === 'overview') renderOverview();
    else if (page === 'ratings') renderRatings();
    else if (page === 'initiatives') renderInitiatives();
    else if (page === 'cities') renderCities();
    else if (page === 'leaders') renderLeaders();
    else if (page === 'analytics') renderAnalytics();
}

function renderOverview() {
    const page = document.getElementById('page-overview');
    
    // Вычисляем KPI для карточек
    let doneInit = 0;
    let avgFunc = 0;
    let sduSum = 0;
    let topCities = 0;
    let totalFuncPerc = 0;
    let funcCount = 0;

    CITIES.forEach(c => {
        let ts = getTotalScore(c);
        if (ts > 75) topCities++;
        sduSum += c.sduIntegration;
        
        // считаем func
        Object.values(c.initiativeStatus).forEach(st => {
            if (st.status === 'done') doneInit++;
            if (st.funcTotal > 0) {
                totalFuncPerc += (st.funcDone / st.funcTotal);
                funcCount++;
            }
        });
    });

    const avgFuncPerc = funcCount ? Math.round((totalFuncPerc / funcCount) * 100) : 0;
    const avgSdu = Math.round(sduSum / CITIES.length);

    // Сортируем топ-3
    const sortedCities = [...CITIES].sort((a,b) => getTotalScore(b) - getTotalScore(a)).slice(0,3);

    // AI Score (пример по первому городу Алматы или среднее)
    const almaty = CITIES.find(c => c.id === 'almaty') || CITIES[0];
    const aiScore = almaty.aiScore || 0;

    page.innerHTML = `
        <div class="kpi-grid">
            <div class="card kpi-card blue">
                <div class="kpi-info">
                    <h3>Инициатив «Выполнено»</h3>
                    <div class="value">${doneInit}</div>
                </div>
                <i class="icon" data-lucide="check-circle"></i>
            </div>
            <div class="card kpi-card green">
                <div class="kpi-info">
                    <h3>Средний прогресс функционала</h3>
                    <div class="value">${avgFuncPerc}%</div>
                </div>
                <i class="icon" data-lucide="percent"></i>
            </div>
            <div class="card kpi-card purple">
                <div class="kpi-info">
                    <h3>Ср. интеграция с SDU</h3>
                    <div class="value">${avgSdu}%</div>
                </div>
                <i class="icon" data-lucide="database"></i>
            </div>
            <div class="card kpi-card orange">
                <div class="kpi-info">
                    <h3>Городов с CityScore > 75</h3>
                    <div class="value">${topCities}</div>
                </div>
                <i class="icon" data-lucide="award"></i>
            </div>
        </div>

        <div class="charts-grid second-row">
            <div class="card chart-card bar">
                <h2>Инициативы по сферам</h2>
                <div class="chart-container">
                    <canvas id="barChart"></canvas>
                </div>
            </div>
            
            <div class="card ai-card">
                <h2>AI Score (Алматы как пример)</h2>
                <div style="font-size: 32px; font-weight: bold; color: var(--accent-blue)">${aiScore}</div>
                <div style="margin-top: 10px;">
                    <div>P1 Охват (35%)</div>
                    <div class="progress-bar-container"><div class="progress-bar" style="width: 80%"></div></div>
                </div>
                <canvas id="aiChart" style="margin-top: 20px; max-height:200px;"></canvas>
            </div>
            
            <div class="card city-rating-card">
                <h2>Рейтинг топ-3 городов</h2>
                <div class="city-list">
                    ${sortedCities.map((c, i) => `
                        <div class="city-item">
                            <div class="city-rank ${i===0?'gold':i===1?'silver':'bronze'}">${i+1}</div>
                            <div class="city-main">
                                <h4>${c.name}</h4>
                                <span>${c.classLabel}</span>
                            </div>
                            <div class="city-score">
                                <span class="score-val">${getTotalScore(c)}</span>
                                <span class="score-total">из 100</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
    if(window.initOverviewCharts) window.initOverviewCharts();
}

function renderRatings() {
    const page = document.getElementById('page-ratings');
    const rClass = [...CITIES].filter(c => c.class === 'R').sort((a,b) => getTotalScore(b) - getTotalScore(a));
    const oClass = [...CITIES].filter(c => c.class === 'O').sort((a,b) => getTotalScore(b) - getTotalScore(a));

    page.innerHTML = `
        <div class="card">
            <h2>Рейтинги городов по классам</h2>
            
            <h3 style="margin-top:20px;">Р-класс (республиканского значения)</h3>
            <table class="matrix-table" style="margin-top: 10px;">
                <tr>
                    <th>Место</th><th>Город</th><th>TotalScore</th><th>AI Score</th>
                </tr>
                ${rClass.map((c, i) => `
                    <tr>
                        <td>${i+1}</td>
                        <td>${c.name}</td>
                        <td><strong>${getTotalScore(c)}</strong></td>
                        <td>${c.aiScore}</td>
                    </tr>
                `).join('')}
            </table>

            <h3 style="margin-top:40px;">О-класс (областные центры)</h3>
            <table class="matrix-table" style="margin-top: 10px;">
                <tr>
                    <th>Место</th><th>Город</th><th>TotalScore</th><th>AI Score</th><th>RegionScore</th>
                </tr>
                ${oClass.map((c, i) => `
                    <tr>
                        <td>${i+1}</td>
                        <td>${c.name}</td>
                        <td><strong>${getTotalScore(c)}</strong></td>
                        <td>${c.aiScore}</td>
                        <td>${c.regionScore || '-'}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;
}

function renderInitiatives() {
    const page = document.getElementById('page-initiatives');
    if (!page) return;
    
    // Простая карточная сетка
    const html = INITIATIVES.map(init => `
        <div class="card" style="margin-bottom: 15px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <span class="spec-tag">Инициатива ${init.num}</span> <span class="stage-badge">${STAGE_LABELS[init.stage] || ''}</span>
                    <h3 style="margin-top:8px;">${init.title}</h3>
                    <p style="font-size:12px; color:var(--text-secondary); margin-top:4px;">${init.sphereLabel}</p>
                </div>
                <div style="text-align:right;">
                    <div class="ai-level-badge ai-${init.aiLevel}">${AI_LEVEL_LABELS[init.aiLevel]}</div>
                    <div style="font-size:12px; color:var(--text-secondary); margin-top:8px;">KPI: ${init.kpi.length} | Функционал: ${init.functional.length}</div>
                </div>
            </div>
            <p style="font-size:13px; margin-top:12px; color:var(--text-secondary);">${init.description}</p>
        </div>
    `).join('');

    page.innerHTML = `
        <div class="card" style="margin-bottom: 20px;">
            <h2>Все инициативы (20 базовых + 3 доп)</h2>
        </div>
        ${html}
    `;
}

function renderCities() {
    const page = document.getElementById('page-cities');
    if (!page) return;

    const html = CITIES.map(c => `
        <div class="card" style="margin-bottom: 15px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3>${c.name}</h3>
                    <p style="font-size:12px; color:var(--text-secondary);">${c.classLabel} | ${c.oblast}</p>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:24px; font-weight:bold;">${getTotalScore(c)} <span style="font-size:12px; font-weight:normal;">TotalScore</span></div>
                    <div class="ai-level-badge">AI Score: ${c.aiScore}</div>
                </div>
            </div>
            <div style="margin-top:12px; display:flex; gap:8px;">
                ${(c.regionalSpec||[]).map(s => `<span class="spec-tag">${REGIONAL_SPEC_LABELS[s]}</span>`).join('')}
            </div>
        </div>
    `).join('');

    page.innerHTML = `
        <div class="card" style="margin-bottom: 20px;">
            <h2>Города и Регионы</h2>
        </div>
        <div class="cities-grid">
            ${html}
        </div>
    `;
}

function renderLeaders() {
    const page = document.getElementById('page-leaders');
    if (!page) return;

    const html = LEADERS.map(l => {
        const curAva = makeAvatar(l.curator.initials);
        const ucAva = makeAvatar(l.uc.initials);
        return `
        <div class="card" style="display:flex; gap:20px; align-items:flex-start; margin-bottom: 15px;">
            <div style="flex:1; display:flex; gap:15px; align-items:center; border-right: 1px solid var(--border-color); padding-right:15px;">
                <img src="${curAva}" class="leader-avatar">
                <div>
                    <h4>${l.curator.name}</h4>
                    <p style="font-size:12px; color:var(--text-secondary);">${l.curator.post}</p>
                    <div style="margin-top:8px;">
                        <span class="spec-tag">Score: ${l.curator.totalScore}</span>
                        <span class="spec-tag">AI: ${l.curator.aiScore}</span>
                    </div>
                </div>
            </div>
            <div style="flex:1; display:flex; gap:15px; align-items:center;">
                <img src="${ucAva}" class="leader-avatar" style="width:50px; height:50px;">
                <div>
                    <h5>${l.uc.name}</h5>
                    <p style="font-size:12px; color:var(--text-secondary);">${l.uc.post}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');

    page.innerHTML = `
        <div class="card" style="margin-bottom: 20px;">
            <h2>Рейтинг Руководителей (v2.4)</h2>
        </div>
        ${html}
    `;
}

function renderAnalytics() {
    const page = document.getElementById('page-analytics');
    if (!page) return;

    // Матрица город x инициатива
    let matrixTh = `<tr><th style="min-width:180px;">Город</th>` + INITIATIVES.map(init => `<th><span title="${init.title}">${init.num}</span></th>`).join('') + `</tr>`;
    
    let matrixTrs = CITIES.map(c => {
        let tr = `<tr><td>${c.name}</td>`;
        INITIATIVES.forEach(init => {
            const st = c.initiativeStatus[init.id];
            if (!st) {
                tr += `<td class="val-low">N/A</td>`;
                return;
            }
            const colorClass = st.kpiRag === 'green' ? 'val-high' : st.kpiRag === 'yellow' ? 'val-mid' : 'val-low';
            tr += `<td class="${colorClass}">${st.funcDone}/${st.funcTotal}</td>`;
        });
        tr += `</tr>`;
        return tr;
    }).join('');

    page.innerHTML = `
        <div class="card" style="margin-bottom: 20px;">
            <h2>Аналитика и Матрица внедрения</h2>
            <div class="matrix-container" style="margin-top: 20px;">
                <table class="matrix-table">
                    ${matrixTh}
                    ${matrixTrs}
                </table>
            </div>
        </div>
        
        <div class="charts-grid second-row">
            <div class="card chart-card bar">
                <h2>TotalScore по всем городам</h2>
                <div class="chart-container">
                    <canvas id="analyticsBarChart"></canvas>
                </div>
            </div>
            <div class="card chart-card pie">
                <h2>Выполнение инициатив (Среднее)</h2>
                <div class="chart-container">
                    <canvas id="analyticsPieChart"></canvas>
                </div>
            </div>
        </div>
    `;

    if(window.initAnalyticsCharts) window.initAnalyticsCharts();
}
