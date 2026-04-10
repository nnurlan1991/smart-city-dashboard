// Графики Chart.js

let overviewBarChart = null;
let overviewAiChart = null;
let analyticsBarChartInstance = null;
let analyticsPieChartInstance = null;

// Настройка стилей по умолчанию для темной темы
Chart.defaults.color = '#8b949e';
Chart.defaults.font.family = "'Inter', sans-serif";

window.initOverviewCharts = function() {
    initBarChart();
    initAiChart();
};

window.initAnalyticsCharts = function() {
    initAnalyticsBar();
    initAnalyticsPie();
};

function initBarChart() {
    const ctx = document.getElementById('barChart');
    if (!ctx) return;
    
    // Считаем инициативы по сферам
    const counts = {
        management: 0,
        security: 0,
        transport: 0,
        ecology: 0,
        communal: 0,
        infrastructure: 0,
        social: 0
    };
    INITIATIVES.forEach(i => {
        if (counts[i.sphere] !== undefined) counts[i.sphere]++;
        else counts[i.sphere] = 1;
    });

    const data = [counts.management, counts.security, counts.transport, counts.ecology, counts.communal, counts.infrastructure, counts.social];
    const labels = ['Управление', 'Безопасность', 'Транспорт', 'Экология', 'ЖКХ', 'Инфраструктура', 'Соцсфера'];

    if (overviewBarChart) overviewBarChart.destroy();

    overviewBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Количество инициатив',
                data: data,
                backgroundColor: [
                    '#1f6feb', '#238636', '#8957e5', '#d29922', '#e36209', '#6e7681', '#10b981'
                ],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) { return " " + context.raw + " шт"; }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function initAiChart() {
    const ctx = document.getElementById('aiChart');
    if (!ctx) return;
    
    if (overviewAiChart) overviewAiChart.destroy();
    
    overviewAiChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['P1: Охват', 'P2: Эффект', 'P3: Обучение', 'DataLake'],
            datasets: [{
                data: [35, 30, 20, 15], // веса
                backgroundColor: ['#1f6feb', '#238636', '#8957e5', '#d29922'],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right' }
            }
        }
    });
}

function initAnalyticsBar() {
    const ctx = document.getElementById('analyticsBarChart');
    if (!ctx) return;
    
    // Сортированные города для аналитики
    const sortedCities = [...CITIES].sort((a,b) => getTotalScore(b) - getTotalScore(a));
    const labels = sortedCities.map(c => c.name);
    const data = sortedCities.map(c => getTotalScore(c));

    if (analyticsBarChartInstance) analyticsBarChartInstance.destroy();

    analyticsBarChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'TotalScore',
                data: data,
                backgroundColor: '#1f6feb',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

function initAnalyticsPie() {
    const ctx = document.getElementById('analyticsPieChart');
    if (!ctx) return;

    if (analyticsPieChartInstance) analyticsPieChartInstance.destroy();

    // Считаем общее среднее выполнение (done, inprogress, planned, notstarted) по всем
    let statusCounts = { done:0, inprogress:0, planned:0, notstarted:0 };
    INITIATIVES.forEach(init => {
        CITIES.forEach(c => {
            const st = c.initiativeStatus[init.id];
            if (st) statusCounts[st.status]++;
        })
    });

    analyticsPieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Выполнено', 'В работе', 'Планируется', 'Не начато'],
            datasets: [{
                data: [statusCounts.done, statusCounts.inprogress, statusCounts.planned, statusCounts.notstarted],
                backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}
