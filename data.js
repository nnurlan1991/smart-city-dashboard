// data.js

const INITIATIVES = [
  // ── БАЗОВЫЕ ────────────────────────────────────────────────────────
  {
    id: 1,
    num: '1',
    title: 'Региональный ситуационный центр',
    type: 'base',                       // 'base' | 'additional'
    sphere: 'management',               // управление
    sphereLabel: 'Управление городом и регионом',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027',
    stage: 1,
    executors: ['МИО'],
    weightInCityScore: 25,             // раздел «Управление» = 25%
    description: 'Оборудованное помещение с видеостенами и АРМ операторов для круглосуточного мониторинга города и региона, оперативного реагирования на инциденты.',
    aiLevel: 1,                        // текущий уровень 0–3 по шкале Методики
    kpi: [
      { id: '1.1', label: 'Время готовности центра (% дней без простоев)', target_R: '≥99,5%', target_O: '≥99%', target_RC: null, points: 8, type: 'base' },
      { id: '1.2', label: 'Среднее время реагирования на инциденты (мин)', target_R: '≤5', target_O: '≤7', target_RC: null, points: 7, type: 'base' },
      { id: '1.3', label: 'Доля инцидентов, закрытых в срок (%)', target_R: '≥90', target_O: '≥85', target_RC: null, points: 6, type: 'base' },
    ],
    functional: [
      { id: '1.1', label: 'Организация помещения ситуационного центра (видеостены, АРМ)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.2', label: 'Отображение данных в реальном времени (транспорт, ЖКХ, безопасность, экология)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.3', label: 'Интеграция с ЕДДС, пожарной охраной, полицией, скорой помощью', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.4', label: 'Интеграция с единой системой видеомониторинга', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.5', label: 'Протоколирование и журналирование инцидентов', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.6', label: 'Передача данных об инцидентах в аналитический центр', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.7', label: 'Дашборды оперативного управления для операторов', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '1.8', label: 'Подключение отраслевых мониторинговых систем (транспорт, ЖКХ, экология)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 2, num: '2',
    title: 'Региональный аналитический центр (с озером данных)',
    type: 'base', sphere: 'management', sphereLabel: 'Управление городом и регионом',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 25,
    description: 'Включает озеро данных (Data Lake), серверную инфраструктуру, ПО и инструменты аналитики. Обязательное требование: постоянно действующая Data Team.',
    aiLevel: 2,
    kpi: [
      { id: '2.1', label: 'Uptime аналитического центра (%)', target_R: '≥99,5', target_O: '≥99', target_RC: null, points: 8, type: 'base' },
      { id: '2.2', label: 'Доля ИС МИО, интегрированных с АЦ (%)', target_R: '≥90', target_O: '≥80', target_RC: null, points: 7, type: 'base' },
      { id: '2.3', label: 'Доля KPI, рассчитываемых автоматически из SDU (%)', target_R: '≥90', target_O: '≥80', target_RC: null, points: 8, type: 'base' },
      { id: '2.4', label: 'Число публичных дашбордов', target_R: '≥5', target_O: '≥3', target_RC: null, points: 5, type: 'base' },
      { id: '2.5', label: 'Количество подключённых источников данных', target_R: '≥15', target_O: '≥10', target_RC: null, points: 6, type: 'base' },
      { id: '2.6', label: 'Доля активных ИИ-моделей в продакшне', target_R: '≥3', target_O: '≥1', target_RC: null, points: 8, type: 'ai' },
      { id: '2.7', label: 'AI Score аналитического центра (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: null, points: 7, type: 'ai' },
    ],
    functional: [
      { id: '2.1', label: 'Создание озера данных: развёртывание хранилища, ETL-процессы', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.2', label: 'Централизованный сбор данных из ИС МИО, IoT, камер', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.3', label: 'Интеграция с центральными государственными базами данных', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.4', label: 'Публичный дашборд с визуализацией ключевых данных', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.5', label: 'GIS-визуализация: тематические карты, геослои', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.6', label: 'Подключение отраслевых дашбордов', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.7', label: 'Мониторинг уязвимых семей (классы D и E)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.8', label: 'Передача данных в SDU и получение агрегированных данных из SDU', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.9', label: 'Формирование открытых данных для IT-сообщества', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.10', label: 'Пространственный анализ городской среды (15-минутный город)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '2.11', label: 'Мультиагентная система ИИ для проактивного выявления инцидентов', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '2.12', label: 'ИИ-помощник руководителя (LLM) — генерация справок, аналитических записок', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '2.13', label: 'Автогенерация отчётов без ручного ввода данных', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '2.14', label: 'Моделирование паводков/селей (интеграция с Казгидромет)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '2.15', label: 'Digital Twin: 3D-модель города, моделирование сценариев', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '2.16', label: 'Получение агрегированных данных от операторов связи (heat maps)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '2.17', label: 'Модуль загрузки доказательных материалов для AI-рейтинга', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 3, num: '3', title: 'Единый контактный центр ЕКЦ 109+',
    type: 'base', sphere: 'management', sphereLabel: 'Управление городом и регионом',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 25,
    description: 'Единый региональный колл-центр по всем вопросам жителей, кроме экстренных служб (101, 102, 103). Основная точка взаимодействия граждан с муниципальными службами.',
    aiLevel: 1,
    kpi: [
      { id: '3.1', label: 'Доля обращений, закрытых в срок (%)', target_R: '≥90', target_O: '≥85', target_RC: '≥80', points: 8, type: 'base' },
      { id: '3.2', label: 'Индекс удовлетворённости граждан CSI (1–5)', target_R: '≥4,5', target_O: '≥4,3', target_RC: '≥4,0', points: 7, type: 'base' },
      { id: '3.3', label: 'Среднее время обработки обращения (мин)', target_R: '≤3', target_O: '≤5', target_RC: '≤7', points: 6, type: 'base' },
      { id: '3.4', label: 'Доля обращений, обработанных ИИ-агентом (%)', target_R: '≥30', target_O: '≥20', target_RC: '≥10', points: 8, type: 'ai' },
    ],
    functional: [
      { id: '3.1', label: 'Единый региональный номер 109', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.2', label: 'Мобильное приложение с функционалом обращений', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.3', label: 'Голосовые обращения, онлайн-чат, видеозвонки', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.4', label: 'Telegram-бот / WhatsApp-бот', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.5', label: 'Категоризация и геометка обращений', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.6', label: 'Обратная связь и уведомления о статусе обращения', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.7', label: 'Интеграция с ЕДДС, ЕРЦ, аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.8', label: 'Личный кабинет пользователя', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.9', label: 'Механизм голосований, опросов, идей от граждан', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.10', label: 'QR-доступ к услугам', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '3.11', label: 'Разговорный ИИ-агент (LLM, казахский/русский)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '3.12', label: 'Голосовой ИИ-агент', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '3.13', label: 'ИИ-маршрутизация обращений к профильным службам', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '3.14', label: 'Автовыявление системных проблем (20+ обращений за 48 часов)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '3.15', label: 'Дашборд «Картина дня» для акима', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 4, num: '4', title: 'Единый расчётный центр (ЕРЦ)',
    type: 'base', sphere: 'communal', sphereLabel: 'ЖКХ',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 18,
    description: 'Централизованный расчёт и оплата коммунальных услуг. Онлайн-оплата, управление задолженностью, ИИ-выявление аномалий в начислениях.',
    aiLevel: 1,
    kpi: [
      { id: '4.1', label: 'Доля платежей, принятых онлайн (%)', target_R: '≥70', target_O: '≥60', target_RC: '≥50', points: 7, type: 'base' },
      { id: '4.2', label: 'Ошибки начислений на 1000 лицевых счётов', target_R: '≤5', target_O: '≤7', target_RC: '≤10', points: 6, type: 'base' },
      { id: '4.3', label: 'Uptime системы ЕРЦ (%)', target_R: '≥99,5', target_O: '≥99', target_RC: '≥98', points: 7, type: 'base' },
    ],
    functional: [
      { id: '4.1', label: 'Централизованный расчёт за коммунальные услуги', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.2', label: 'Интеграция с системами ЖКХ (поставщики услуг)', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.3', label: 'Онлайн-оплата и управление задолженностью', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.4', label: 'Переоформление договоров при купле-продаже недвижимости', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.5', label: 'ЖКХ-услуги (передача показаний, подача заявок)', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.6', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '4.7', label: 'Предиктивная модель задолженностей (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '4.8', label: 'Умный выбор канала уведомления (push/SMS/звонок)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '4.9', label: 'Автовыявление аномалий в начислениях (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '4.10', label: 'ИИ-сверка данных от поставщиков', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
    ]
  },
  {
    id: 5, num: '5', title: 'Интегрированная система городского транспорта',
    type: 'base', sphere: 'transport', sphereLabel: 'Транспорт и логистика',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 15,
    description: 'Управление маршрутами и рейсами, GPS/ГЛОНАСС мониторинг, электронный билет, ИИ-оптимизация расписания.',
    aiLevel: 2,
    kpi: [
      { id: '5.1', label: 'Доля маршрутов с электронными билетами (%)', target_R: '≥95', target_O: '≥90', target_RC: null, points: 8, type: 'base' },
      { id: '5.2', label: 'Точность соблюдения расписания (%)', target_R: '≥85', target_O: '≥80', target_RC: null, points: 7, type: 'base' },
      { id: '5.3', label: 'Охват GPS/ГЛОНАСС мониторингом (% автопарка)', target_R: '≥98', target_O: '≥95', target_RC: null, points: 6, type: 'base' },
      { id: '5.4', label: 'AI Score транспортной системы (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: null, points: 7, type: 'ai' },
    ],
    functional: [
      { id: '5.1', label: 'Управление маршрутами и рейсами', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.2', label: 'Онлайн-мониторинг транспортных средств (GPS/ГЛОНАСС)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.3', label: 'Контроль скорости, пробега, времени маршрутов', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.4', label: 'Контроль пассажиропотока', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.5', label: 'Электронный билет, все формы оплаты (NFC, QR, карта)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.6', label: 'Интеграция с мобильными приложениями и транспортными картами', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.7', label: 'Интеграция со службой 109 и аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '5.8', label: 'Динамическое управление маршрутами на основе ИИ', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '5.9', label: 'Предиктивное техническое обслуживание транспорта (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '5.10', label: 'ИИ-оптимизация расписания по данным пассажиропотока', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '5.11', label: 'Проактивная выдача льготных билетов (ИИ-аналитика)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 6, num: '6', title: 'Автоматизированная система управления парковками',
    type: 'base', sphere: 'transport', sphereLabel: 'Транспорт и логистика',
    applicability: { R: true, O: false, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 15,
    description: 'Онлайн-оплата парковки, мониторинг занятости, CV-распознавание номеров, динамическое ценообразование на основе ИИ.',
    aiLevel: 2,
    kpi: [
      { id: '6.1', label: 'Доля парковочных мест с онлайн-оплатой (%)', target_R: '≥80', target_O: null, target_RC: null, points: 7, type: 'base' },
      { id: '6.2', label: 'Доля парковок с мониторингом занятости (%)', target_R: '≥70', target_O: null, target_RC: null, points: 6, type: 'base' },
      { id: '6.3', label: 'AI Score парковочной системы (шкала 0–3)', target_R: '≥2', target_O: null, target_RC: null, points: 6, type: 'ai' },
    ],
    functional: [
      { id: '6.1', label: 'Онлайн-оплата парковки через мобильное приложение', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.2', label: 'Мониторинг занятости парковочных мест', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.3', label: 'Автоматическая проверка оплаты (камеры)', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.4', label: 'Навигация к свободным местам (геолокация)', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.5', label: 'Ежемесячная аналитика по парковкам', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.6', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '6.7', label: 'CV-распознавание номеров автомобилей', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '6.8', label: 'Динамическое ценообразование на основе ИИ', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '6.9', label: 'Предиктивный прогноз заполненности', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '6.10', label: 'Интеграция с навигационными системами (2GIS, Яндекс)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 7, num: '7', title: 'Система управления дорожным движением (СУДД)',
    type: 'base', sphere: 'transport', sphereLabel: 'Транспорт и логистика',
    applicability: { R: true, O: false, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО', 'ДП'], weightInCityScore: 15,
    description: 'Интеллектуальное управление светофорами, адаптивные алгоритмы на основе ИИ, «зелёная волна» для экстренных служб, CV-выявление ДТП.',
    aiLevel: 2,
    kpi: [
      { id: '7.1', label: 'Снижение среднего времени в пути (%)', target_R: '≥10', target_O: null, target_RC: null, points: 8, type: 'base' },
      { id: '7.2', label: 'Доля светофоров с адаптивным управлением (%)', target_R: '≥60', target_O: null, target_RC: null, points: 7, type: 'base' },
      { id: '7.3', label: 'AI Score СУДД (шкала 0–3)', target_R: '≥2', target_O: null, target_RC: null, points: 7, type: 'ai' },
    ],
    functional: [
      { id: '7.1', label: 'Интеллектуальное управление светофорами', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.2', label: 'Датчики трафика и мониторинг загрузки дорог', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.3', label: 'Интеграция с мобильными приложениями', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.4', label: 'Автоматическое регулирование транспортных потоков', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.5', label: 'Система предупреждения о ДТП', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.6', label: 'Интеграция с общественным транспортом', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.7', label: 'Аналитика и отчёты по движению', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.8', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: false, RC: false },
      { id: '7.9', label: 'Адаптивные светофоры с ИИ (реальное время, данные камер)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '7.10', label: '«Зелёная волна» для экстренных служб', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '7.11', label: 'ИИ-перенаправление потоков при ДТП', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '7.12', label: 'CV-выявление ДТП на перекрёстках', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '7.13', label: 'Мониторинг пешеходных переходов (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '7.14', label: 'Поддержка протокола V2X', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 8, num: '8', title: 'Единая система видеомониторинга',
    type: 'base', sphere: 'security', sphereLabel: 'Общественная безопасность',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО', 'ДП'], weightInCityScore: 25,
    description: 'Видеонаблюдение в общественных местах, фиксация нарушений ПДД, распознавание лиц и номеров, детекция аномального поведения.',
    aiLevel: 2,
    kpi: [
      { id: '8.1', label: 'Охват общественных мест видеонаблюдением (%)', target_R: '≥90', target_O: '≥80', target_RC: '≥60', points: 8, type: 'base' },
      { id: '8.2', label: 'Uptime системы (%)', target_R: '≥99', target_O: '≥98', target_RC: '≥97', points: 7, type: 'base' },
      { id: '8.3', label: 'AI Score видеосистемы (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: '≥0', points: 6, type: 'ai' },
    ],
    functional: [
      { id: '8.1', label: 'Видеонаблюдение в общественных местах', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.2', label: 'Фиксация нарушений ПДД', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.3', label: 'Учёт и контроль транспорта в зонах контроля', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.4', label: 'Автоматизация формирования постановлений об АП', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.5', label: 'Архивирование видеоинформации', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.6', label: 'Интеграция с экстренными службами и ситуационным центром', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.7', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '8.8', label: 'Распознавание лиц и номеров (интеграция с базами МВД)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '8.9', label: 'Детекция аномального поведения (драки, оставленные предметы)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '8.10', label: 'CV-мониторинг несанкционированных строений / стихийной торговли', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 9, num: '9', title: 'Система управления пожарной безопасностью УТО',
    type: 'base', sphere: 'security', sphereLabel: 'Общественная безопасность',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО', 'ДЧС'], weightInCityScore: 25,
    description: 'Автоматическое оповещение о пожаре, умные датчики в УТО, ИИ-модель оценки пожарного риска, маршрутизация расчётов через СУДД.',
    aiLevel: 2,
    kpi: [
      { id: '9.1', label: 'Доля УТО, охваченных системой (%)', target_R: '≥95', target_O: '≥90', target_RC: null, points: 8, type: 'base' },
      { id: '9.2', label: 'Время автоматического оповещения о пожаре (сек)', target_R: '≤30', target_O: '≤45', target_RC: null, points: 7, type: 'base' },
      { id: '9.3', label: 'AI Score системы пожарной безопасности (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: null, points: 6, type: 'ai' },
    ],
    functional: [
      { id: '9.1', label: 'Автоматическое оповещение о пожаре', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '9.2', label: 'Установка датчиков выявления возгорания', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '9.3', label: 'Интеграция с видеонаблюдением и датчиками дыма', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '9.4', label: 'Автоматическое определение точного местоположения инцидента', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '9.5', label: 'Интеграция с аналитическим и ситуационным центром', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '9.6', label: 'ИИ-модель оценки пожарного риска (год постройки, материалы, история)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '9.7', label: 'Умные датчики в УТО — автозапуск эвакуации без участия человека', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '9.8', label: 'ИИ-маршрутизация пожарных расчётов через СУДД («зелёная волна»)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 10, num: '10', title: 'Система экологического мониторинга и зелёного фонда',
    type: 'base', sphere: 'ecology', sphereLabel: 'Экология',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 17,
    description: 'Мониторинг зелёных насаждений, качества воздуха (PM2.5, PM10, CO, NO₂), водных ресурсов, несанкционированных свалок. ИИ-прогноз AQI.',
    aiLevel: 1,
    kpi: [
      { id: '10.1', label: 'Доля зелёных насаждений с IoT-мониторингом (%)', target_R: '≥70', target_O: '≥50', target_RC: null, points: 7, type: 'base' },
      { id: '10.2', label: 'Uptime экологических датчиков (%)', target_R: '≥95', target_O: '≥90', target_RC: null, points: 6, type: 'base' },
      { id: '10.3', label: 'Число станций мониторинга воздуха на 100 тыс. жителей', target_R: '≥3', target_O: '≥2', target_RC: null, points: 7, type: 'base' },
      { id: '10.4', label: 'AI Score экологической системы (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: null, points: 6, type: 'ai' },
    ],
    functional: [
      { id: '10.1', label: 'Мониторинг зелёных насаждений (IoT-датчики)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.2', label: 'Инвентаризация зелёных насаждений (цифровой реестр)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.3', label: 'Карта зелёных насаждений (ГИС)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.4', label: 'Мониторинг почвы (влажность, состав, загрязнение)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.5', label: 'Мониторинг качества атмосферного воздуха (PM2.5, PM10, CO, NO₂)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.6', label: 'Мониторинг водных ресурсов (качество воды)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.7', label: 'Публичная карта качества воздуха', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.8', label: 'Единая экологическая ГИС-платформа', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.9', label: 'Публичные экологические дашборды', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.10', label: 'Мониторинг несанкционированных свалок (интеграция с КҒС)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.11', label: 'Взаимодействие с населением (жалобы, уведомления)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.12', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '10.13', label: 'ИИ-прогноз качества воздуха (следующие 24 часа)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '10.14', label: 'Умный полив на основе данных датчиков почвы', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '10.15', label: 'Предиктивная диагностика состояния деревьев (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 11, num: '11', title: 'Система управления ТБО',
    type: 'base', sphere: 'ecology', sphereLabel: 'Экология',
    applicability: { R: true, O: true, RC: false },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 17,
    description: 'Мониторинг заполненности контейнеров (IoT), оптимизация маршрутов вывоза, CV-контроль несанкционированных свалок, предиктивный график вывоза.',
    aiLevel: 1,
    kpi: [
      { id: '11.1', label: 'Доля контейнеров с IoT-датчиками (%)', target_R: '≥70', target_O: '≥50', target_RC: null, points: 7, type: 'base' },
      { id: '11.2', label: 'Доля маршрутов вывоза ТБО в срок (%)', target_R: '≥95', target_O: '≥90', target_RC: null, points: 6, type: 'base' },
      { id: '11.3', label: 'AI Score системы ТБО (шкала 0–3)', target_R: '≥2', target_O: '≥1', target_RC: null, points: 5, type: 'ai' },
    ],
    functional: [
      { id: '11.1', label: 'Мониторинг заполненности контейнеров (IoT-датчики)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.2', label: 'Оптимизация маршрутов вывоза ТБО', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.3', label: 'Контроль работы мусоровозов (GPS)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.4', label: 'Карта контейнерных площадок и приёма ТБО (ГИС)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.5', label: 'Мониторинг нарушений (переполнение, загрязнение)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.6', label: 'Интеграция с ЕКЦ 109 для приёма жалоб', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.7', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '11.8', label: 'Предиктивный график вывоза ТБО (ИИ)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '11.9', label: 'CV-контроль несанкционированных свалок', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '11.10', label: 'Оцифровка объектов переработки и сортировки', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 12, num: '12', title: 'Оцифровка ЖКХ: умные счётчики электроэнергии',
    type: 'base', sphere: 'communal', sphereLabel: 'ЖКХ',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО'], weightInCityScore: 18,
    description: 'Установка умных счётчиков, цифровой реестр объектов электросети, интеграция с ЕРЦ, ИИ-выявление хищений электроэнергии.',
    aiLevel: 1,
    kpi: [
      { id: '12.1', label: 'Доля умных счётчиков электроэнергии (%)', target_R: '≥80', target_O: '≥70', target_RC: '≥50', points: 9, type: 'base' },
      { id: '12.2', label: 'Снижение нормативных потерь (%)', target_R: '≥10', target_O: '≥7', target_RC: '≥5', points: 7, type: 'base' },
      { id: '12.3', label: 'Доля небюджетного финансирования (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 9, type: 'base' },
    ],
    functional: [
      { id: '12.1', label: 'Установка умных счётчиков электроэнергии', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.2', label: 'Цифровой реестр объектов электросети', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.3', label: 'Интеграция с биллинговыми системами ЕРЦ', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.4', label: 'Автоматическая передача показаний', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.5', label: 'Отчёты по потреблению и нормативным потерям', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.6', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2027', R: true, O: true, RC: true },
      { id: '12.7', label: 'ИИ-выявление хищений электроэнергии (аномальный расход)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '12.8', label: 'Предиктивное ТО подстанций', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '12.9', label: 'Оцифровка инфраструктуры: трансформаторные подстанции, кабельные трассы', deadline: '2028–2029', R: true, O: true, RC: false },
    ]
  },
  {
    id: 13, num: '13', title: 'Оцифровка ЖКХ: умные счётчики воды',
    type: 'base', sphere: 'communal', sphereLabel: 'ЖКХ',
    applicability: { R: true, O: true, RC: true },
    deadline: 'II пол. 2027', stage: 2, executors: ['МИО'], weightInCityScore: 18,
    description: 'Умные водосчётчики, гидравлическое моделирование сети, ИИ-выявление утечек, мониторинг качества воды через IoT-датчики.',
    aiLevel: 1,
    kpi: [
      { id: '13.1', label: 'Доля умных счётчиков воды (%)', target_R: '≥80', target_O: '≥70', target_RC: '≥50', points: 9, type: 'base' },
      { id: '13.2', label: 'Снижение потерь воды (%)', target_R: '≥15', target_O: '≥10', target_RC: '≥7', points: 8, type: 'base' },
      { id: '13.3', label: 'Доля небюджетного финансирования (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 9, type: 'base' },
    ],
    functional: [
      { id: '13.1', label: 'Установка умных водосчётчиков', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.2', label: 'Цифровой реестр водопроводных сетей', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.3', label: 'Интеграция с биллинговыми системами ЕРЦ', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.4', label: 'Автоматическая передача показаний', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.5', label: 'Отчёты по потреблению и нормативным потерям', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.6', label: 'Интеграция с аналитическим центром', deadline: 'II пол. 2027', R: true, O: true, RC: true },
      { id: '13.7', label: 'ИИ-выявление утечек (расхождение: ввод в дом vs сумма квартир)', deadline: 'I пол. 2028–II пол. 2028', R: true, O: true, RC: false },
      { id: '13.8', label: 'Гидравлическое моделирование сети водоснабжения', deadline: 'I пол. 2028–II пол. 2028', R: true, O: true, RC: false },
      { id: '13.9', label: 'Мониторинг качества воды (IoT-датчики в сети)', deadline: 'I пол. 2028–II пол. 2028', R: true, O: true, RC: false },
      { id: '13.10', label: 'Оцифровка инфраструктуры: резервуары, насосные станции', deadline: '2028–2029', R: true, O: true, RC: false },
    ]
  },
  {
    id: 14, num: '14', title: 'Оцифровка ЖКХ: умные счётчики тепла',
    type: 'base', sphere: 'communal', sphereLabel: 'ЖКХ',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 18,
    description: 'Тепловые сети, ЦТП, теплотрассы. Погодозависимое ИИ-регулирование, тепловизионные дроны для предиктивного ТО.',
    aiLevel: 1,
    kpi: [
      { id: '14.1', label: 'Доля умных теплосчётчиков (%)', target_R: '≥70', target_O: '≥60', target_RC: '≥40', points: 9, type: 'base' },
      { id: '14.2', label: 'Снижение теплопотерь (%)', target_R: '≥10', target_O: '≥7', target_RC: '≥5', points: 7, type: 'base' },
      { id: '14.3', label: 'Доля небюджетного финансирования (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 9, type: 'base' },
    ],
    functional: [
      { id: '14.1', label: 'Установка умных теплосчётчиков на ЦТП и в домах', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.2', label: 'Цифровой реестр тепловых сетей и ЦТП', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.3', label: 'Интеграция с биллинговыми системами ЕРЦ', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.4', label: 'Автоматическая передача показаний', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.5', label: 'Отчёты по теплопотерям и нормативным потерям', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.6', label: 'Интеграция с аналитическим центром', deadline: 'I пол. 2028', R: true, O: true, RC: true },
      { id: '14.7', label: 'Погодозависимое ИИ-регулирование температуры на ЦТП', deadline: 'II пол. 2028', R: true, O: true, RC: false },
      { id: '14.8', label: 'Выявление несанкционированного отбора тепла', deadline: 'II пол. 2028', R: true, O: true, RC: false },
      { id: '14.9', label: 'Предиктивное ТО теплотрасс (тепловизионные дроны)', deadline: 'II пол. 2028', R: true, O: true, RC: false },
      { id: '14.10', label: 'Оцифровка инфраструктуры: управление теплотрассами и ЦТП', deadline: '2028–2029', R: true, O: true, RC: false },
    ]
  },
  {
    id: 15, num: '15', title: 'Оцифровка ЖКХ: умные счётчики газа',
    type: 'base', sphere: 'communal', sphereLabel: 'ЖКХ',
    applicability: { R: true, O: true, RC: true },
    deadline: 'II пол. 2028', stage: 3, executors: ['МИО'], weightInCityScore: 18,
    description: 'Оцифровка газовых сетей, распределительных узлов. IoT-детекция утечек, предиктивный спрос в холодный период.',
    aiLevel: 1,
    kpi: [
      { id: '15.1', label: 'Доля умных газовых счётчиков (%)', target_R: '≥80', target_O: '≥70', target_RC: '≥50', points: 9, type: 'base' },
      { id: '15.2', label: 'Снижение потерь газа (%)', target_R: '≥10', target_O: '≥7', target_RC: '≥5', points: 7, type: 'base' },
      { id: '15.3', label: 'Доля небюджетного финансирования (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 9, type: 'base' },
    ],
    functional: [
      { id: '15.1', label: 'Установка умных газовых счётчиков с автоматической передачей данных', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.2', label: 'Цифровой реестр газовых сетей и распределительных узлов', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.3', label: 'Интеграция с биллинговыми системами ЕРЦ', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.4', label: 'Автоматическая передача показаний', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.5', label: 'Отчёты по потреблению и балансу газа', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.6', label: 'Интеграция с аналитическим центром', deadline: 'II пол. 2028', R: true, O: true, RC: true },
      { id: '15.7', label: 'IoT-детекция утечек газа на узлах сети', deadline: 'II пол. 2028', R: true, O: true, RC: false },
      { id: '15.8', label: 'Предиктивный спрос на газ в холодный период (ИИ-модель)', deadline: 'II пол. 2028', R: true, O: true, RC: false },
      { id: '15.9', label: 'Оцифровка инфраструктуры: газораспределительные станции', deadline: '2028–2029', R: true, O: true, RC: false },
    ]
  },
  {
    id: 16, num: '16', title: 'Развитие региональных IT-хабов и районных IT-центров',
    type: 'base', sphere: 'management', sphereLabel: 'Управление городом и регионом',
    applicability: { R: true, O: true, RC: true },
    deadline: 'I пол. 2027', stage: 1, executors: ['МИО', 'УЦ'], weightInCityScore: 25,
    description: 'Обязательная инициатива для Р и О — полноценные IT-хабы. Для РЦ — локальные IT-центры. УЦ ставят задачи в соответствии с региональной спецификой.',
    aiLevel: 1,
    kpi: [
      { id: '16.1', label: 'Площадь IT-хаба (кв. м)', target_R: '≥5000', target_O: '≥2000', target_RC: '≥50', points: 7, type: 'base' },
      { id: '16.2', label: 'Число IT-стартапов (прирост в год)', target_R: '≥20', target_O: '≥10', target_RC: '≥2', points: 8, type: 'base' },
      { id: '16.3', label: 'Число мероприятий в год', target_R: '≥50', target_O: '≥30', target_RC: '≥12', points: 6, type: 'base' },
      { id: '16.4', label: 'Число задач по региональной специфике', target_R: '≥5', target_O: '≥3', target_RC: '≥1', points: 7, type: 'ai' },
    ],
    functional: [
      { id: '16.1', label: 'Расширение площадей IT-хаба (5 000–10 000 кв. м)', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.2', label: 'Соответствие инфраструктуры минимальным требованиям', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.3', label: 'Обеспечение обслуживания: интернет 24/7, клининг, охрана', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.4', label: 'Нормативный уровень заполняемости рабочих зон', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.5', label: 'Выполнение плановых показателей по мероприятиям и участникам', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.6', label: 'Количественный рост IT-стартапов через инкубацию и акселерацию', deadline: 'I пол. 2027', R: true, O: true, RC: false },
      { id: '16.7', label: 'Акселерационная программа ИИ для задач региональной специфики', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '16.8', label: 'Открытие локального районного IT-центра (от 100 кв. м)', deadline: 'II пол. 2027–I пол. 2028', R: false, O: true, RC: false },
      { id: '16.9', label: 'Открытие IT-центра для молодёжи РЦ (от 50 кв. м)', deadline: 'II пол. 2027–I пол. 2028', R: false, O: false, RC: true },
      { id: '16.10', label: 'Проведение не менее 12 мероприятий в год в IT-центре РЦ', deadline: 'II пол. 2027–I пол. 2028', R: false, O: false, RC: true },
      { id: '16.11', label: 'Дистанционное участие молодёжи РЦ в акселерационных программах', deadline: 'II пол. 2027–I пол. 2028', R: false, O: false, RC: true },
    ]
  },
  {
    id: 17, num: '17', title: 'Инфраструктура дронов (БПЛА)',
    type: 'base', sphere: 'security', sphereLabel: 'Безопасность / Экология',
    applicability: { R: true, O: true, RC: true },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО', 'ДП', 'ДЧС'], weightInCityScore: 25,
    description: 'Региональная инфраструктура БПЛА для безопасности, экологии, ЧС и контроля инфраструктуры. ИИ-диспетчеризация всех дронов из единой точки.',
    aiLevel: 2,
    kpi: [
      { id: '17.1', label: 'Число выполненных миссий БПЛА в год', target_R: '≥200', target_O: '≥100', target_RC: '≥20', points: 7, type: 'base' },
      { id: '17.2', label: 'Доля автономных миссий от общего числа (%)', target_R: '≥30', target_O: '≥20', target_RC: null, points: 6, type: 'ai' },
    ],
    functional: [
      { id: '17.1', label: 'Создание регионального диспетчерского центра управления БПЛА', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '17.2', label: 'Планирование маршрутов БПЛА (миссии, расписание, запретные зоны)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.3', label: 'Формирование истории полётов и аналитика по миссиям', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.4', label: 'Контроль строительства, дорожной и инженерной инфраструктуры', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.5', label: 'Проведение спасательных мероприятий (поиск людей, оценка ущерба)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.6', label: 'Автоматическое эко-патрулирование лесных массивов и водоёмов', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.7', label: 'Тепловизионные дроны для обследования крупных объектов', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '17.8', label: 'Дроны-патрули для мониторинга общественных пространств', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '17.9', label: 'ИИ-диспетчеризация — управление всеми БПЛА из единой точки', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '17.10', label: 'Автономные дроны-патрули (парки, окраины, промзоны)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
      { id: '17.11', label: 'CV-определение правонарушений с борта БПЛА', deadline: 'II пол. 2027–I пол. 2028', R: true, O: false, RC: false },
    ]
  },
  {
    id: 18, num: '18', title: 'Мониторинг цен (СЗПТ): парсинг и фотофиксация',
    type: 'base', sphere: 'management', sphereLabel: 'Экономика',
    applicability: { R: true, O: true, RC: true },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 0,
    description: 'Автоматический парсинг маркетплейсов, фотофиксация цен в магазинах, аналитические отчёты, интеграция с аналитическим центром.',
    aiLevel: 1,
    kpi: [
      { id: '18.1', label: 'Охват товарных позиций мониторингом (%)', target_R: '≥90', target_O: '≥80', target_RC: '≥70', points: 7, type: 'base' },
      { id: '18.2', label: 'Частота обновления данных (раз в неделю)', target_R: '≥3', target_O: '≥2', target_RC: '≥1', points: 6, type: 'base' },
    ],
    functional: [
      { id: '18.1', label: 'Парсинг маркетплейсов: автоматический сбор цен на социально значимые продукты', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '18.2', label: 'Фотофиксация цен в магазинах (мобильные инспекторы)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '18.3', label: 'Аналитические отчёты и дашборд по ценовому мониторингу', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '18.4', label: 'Интеграция с аналитическим центром', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
    ]
  },
  {
    id: 19, num: '19', title: 'Опоры двойного назначения (ОДН) с освещением',
    type: 'base', sphere: 'infrastructure', sphereLabel: 'Инфраструктура',
    applicability: { R: true, O: true, RC: false },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 0,
    description: 'Мультифункциональные опоры (освещение + базовые станции связи). Реализуется преимущественно за счёт небюджетных средств. Wi-Fi — необязательный компонент.',
    aiLevel: 0,
    kpi: [
      { id: '19.1', label: 'Доля установленных ОДН от плана (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 8, type: 'base' },
      { id: '19.2', label: 'Uptime систем освещения (%)', target_R: '≥98', target_O: '≥97', target_RC: null, points: 6, type: 'base' },
      { id: '19.3', label: 'Доля небюджетного финансирования (%)', target_R: '≥80', target_O: '≥70', target_RC: null, points: 9, type: 'base' },
    ],
    functional: [
      { id: '19.1', label: 'Установка мультифункциональных опор (освещение, базовые станции связи)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '19.2', label: 'Подключение к системе мониторинга освещения (умное освещение)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '19.3', label: 'Размещение датчиков экологического мониторинга на опорах', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '19.4', label: 'Wi-Fi: развёртывание публичного Wi-Fi в общественных местах (необязательно)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 20, num: '20', title: 'Контроль доступности интернета в образовании',
    type: 'base', sphere: 'management', sphereLabel: 'Социальная сфера',
    applicability: { R: true, O: true, RC: true },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 25,
    description: 'Система круглосуточного мониторинга скорости ШПД в школах, паспортизация внутренней ЛС, автоуведомления при падении скорости, взаимодействие с операторами.',
    aiLevel: 0,
    kpi: [
      { id: '20.1', label: 'Доля школ со скоростью ≥100 Мбит/с (%)', target_R: '≥90', target_O: '≥80', target_RC: '≥60', points: 10, type: 'base' },
      { id: '20.2', label: 'Uptime системы мониторинга (%)', target_R: '≥99', target_O: '≥99', target_RC: '≥98', points: 8, type: 'base' },
      { id: '20.3', label: 'Доля школ с паспортизированной внутренней ЛС (%)', target_R: '≥80', target_O: '≥60', target_RC: '≥40', points: 7, type: 'base' },
    ],
    functional: [
      { id: '20.1', label: 'Развёртывание системы круглосуточного мониторинга скорости ШПД в школах', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '20.2', label: 'Интеграция данных в региональный дашборд качества образования', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '20.3', label: 'Публикация данных о качестве интернета на публичном дашборде АЦ', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '20.4', label: 'Автоматическое уведомление МИО при падении скорости ниже порогового значения', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
      { id: '20.5', label: 'Взаимодействие с операторами связи для устранения нарушений (интеграция с ЕКЦ 109)', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: true },
    ]
  },

  // ── ДОПОЛНИТЕЛЬНЫЕ ─────────────────────────────────────────────────
  {
    id: 21, num: '21', title: '«Умные» остановки',
    type: 'additional', sphere: 'transport', sphereLabel: 'Транспорт и логистика',
    applicability: { R: true, O: true, RC: false },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 0,
    bonusPoints: 2,
    description: 'Информационные табло с прогнозом прибытия, обогрев/кондиционирование, SOS-кнопка, публичный Wi-Fi.',
    aiLevel: 0,
    kpi: [],
    functional: [
      { id: '21.1', label: 'Установка информационных табло с прогнозом прибытия транспорта', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '21.2', label: 'Оснащение системами обогрева/кондиционирования и видеонаблюдения', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '21.3', label: 'Интеграция тревожной кнопки SOS и публичного Wi-Fi', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 22, num: '22', title: 'Цифровые музеи, библиотеки, 3D/VR туры',
    type: 'additional', sphere: 'social', sphereLabel: 'Социальная сфера',
    applicability: { R: true, O: true, RC: false },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО'], weightInCityScore: 0,
    bonusPoints: 2,
    description: 'Оцифровка фондов библиотек и музеев, единый портал, разработка 3D/VR туров по туристическим объектам региона.',
    aiLevel: 0,
    kpi: [],
    functional: [
      { id: '22.1', label: 'Оцифровка фондов библиотек и музеев, создание единого портала', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '22.2', label: 'Разработка 3D/VR туров по ключевым туристическим объектам региона', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
  {
    id: 23, num: '23', title: 'Система мониторинга качества автодорог — CV',
    type: 'additional', sphere: 'transport', sphereLabel: 'Транспорт и логистика',
    applicability: { R: true, O: true, RC: false },
    deadline: 'II пол. 2027–I пол. 2028', stage: 2, executors: ['МИО', 'МТ'], weightInCityScore: 0,
    bonusPoints: 3,
    description: 'CV-система фиксации ям, автосоздание заявок на ремонт через ЕКЦ 109, интеграция с аналитическим центром.',
    aiLevel: 2,
    kpi: [],
    functional: [
      { id: '23.1', label: 'Развёртывание CV-системы фиксации ям и качества дорожного полотна', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '23.2', label: 'Интеграция с ЕКЦ 109 для авто-создания заявок на ремонт', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '23.3', label: 'Аналитические отчёты по качеству дорог для МИО и МТ', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
      { id: '23.4', label: 'Интеграция с аналитическим центром', deadline: 'II пол. 2027–I пол. 2028', R: true, O: true, RC: false },
    ]
  },
];

// Продолжение data.js

// Демо-данные по методике: TotalScore считается по формуле из Приложения 5
// TotalScore = CityScore_100 + Σ(баллы доп.) − Penalty

const CITIES = [
  // ── Р-класс ─────────────────────────────────────────
  {
    id: 'astana', name: 'Астана', class: 'R', classLabel: 'Р — город республиканского значения',
    oblast: 'Столица', population: '1 300 000',
    regionalSpec: ['transport', 'services'],          // направления из п.18 Методики
    cityScore100: 74, bonusPoints: 9, penalty: 0,     // TotalScore = 83
    aiScore: 62, aiLevel: 'AI-продвинутый',
    regionScore: null,                                 // только для областей
    curator: { name: 'Турдыбеков Ришат', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Серикбаев Нурлан', post: 'Руководитель УЦ', avatar: null },
    sduIntegration: 82,                               // % KPI из SDU
    acIntegrations: 12,                               // число интеграций с АЦ
    initiativeStatus: {                               // ключ = id инициативы
      1:  { status: 'done', funcDone: 8, funcTotal: 8,  kpiRag: 'green',  aiLevel: 2 },
      2:  { status: 'done', funcDone: 14, funcTotal: 17, kpiRag: 'green', aiLevel: 2 },
      3:  { status: 'done', funcDone: 15, funcTotal: 15, kpiRag: 'green', aiLevel: 2 },
      4:  { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'yellow',aiLevel: 1 },
      5:  { status: 'done', funcDone: 9,  funcTotal: 11, kpiRag: 'green', aiLevel: 2 },
      6:  { status: 'inprogress', funcDone: 7, funcTotal: 10, kpiRag: 'yellow', aiLevel: 2 },
      7:  { status: 'inprogress', funcDone: 10, funcTotal: 14, kpiRag: 'yellow', aiLevel: 2 },
      8:  { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'green', aiLevel: 2 },
      9:  { status: 'done', funcDone: 7, funcTotal: 8,   kpiRag: 'green', aiLevel: 2 },
      10: { status: 'done', funcDone: 12, funcTotal: 15, kpiRag: 'green', aiLevel: 1 },
      11: { status: 'done', funcDone: 8, funcTotal: 10,  kpiRag: 'yellow',aiLevel: 1 },
      12: { status: 'inprogress', funcDone: 5, funcTotal: 9, kpiRag: 'yellow', aiLevel: 1 },
      13: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',   aiLevel: 0 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',   aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',   aiLevel: 0 },
      16: { status: 'done', funcDone: 7, funcTotal: 7,   kpiRag: 'green', aiLevel: 1 },
      17: { status: 'inprogress', funcDone: 5, funcTotal: 11, kpiRag: 'yellow', aiLevel: 2 },
      18: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',   aiLevel: 0 },
      19: { status: 'inprogress', funcDone: 2, funcTotal: 4,  kpiRag: 'yellow', aiLevel: 0 },
      20: { status: 'inprogress', funcDone: 3, funcTotal: 5,  kpiRag: 'yellow', aiLevel: 0 },
      21: { status: 'done',       funcDone: 3, funcTotal: 3,  kpiRag: 'green',  aiLevel: 0 },
      22: { status: 'planned',    funcDone: 0, funcTotal: 2,  kpiRag: 'red',    aiLevel: 0 },
      23: { status: 'inprogress', funcDone: 2, funcTotal: 4,  kpiRag: 'yellow', aiLevel: 2 },
    },
    kpiValues: {
      '1.1': 99.7, '1.2': 4.2, '1.3': 92,
      '2.1': 99.6, '2.2': 88, '2.3': 85, '2.4': 7, '2.5': 14, '2.6': 4, '2.7': 2,
      '3.1': 92, '3.2': 4.6, '3.3': 2.8, '3.4': 32,
      '4.1': 72, '4.2': 4, '4.3': 99.6,
      '5.1': 96, '5.2': 87, '5.3': 99, '5.4': 2,
      '6.1': 82, '6.2': 73, '6.3': 2,
      '7.1': 11, '7.2': 65, '7.3': 2,
      '8.1': 92, '8.2': 99.1, '8.3': 2,
      '9.1': 96, '9.2': 28, '9.3': 2,
      '10.1': 72, '10.2': 95.5, '10.3': 3.2, '10.4': 2,
      '11.1': 72, '11.2': 96, '11.3': 2,
      '12.1': 58, '12.2': 8, '12.3': 78,
      '13.1': 0, '13.2': 0, '13.3': 0,
      '14.1': 0, '14.2': 0, '14.3': 0,
      '15.1': 0, '15.2': 0, '15.3': 0,
      '16.1': 8000, '16.2': 25, '16.3': 60, '16.4': 6,
      '17.1': 185, '17.2': 28,
      '18.1': 0, '18.2': 0,
      '19.1': 75, '19.2': 98.1, '19.3': 82,
      '20.1': 88, '20.2': 99.1, '20.3': 78,
    }
  },
  {
    id: 'almaty', name: 'Алматы', class: 'R', classLabel: 'Р — город республиканского значения',
    oblast: 'Южный мегаполис', population: '2 100 000',
    regionalSpec: ['transport', 'services', 'tourism'],
    cityScore100: 78, bonusPoints: 12, penalty: 0,    // TotalScore = 90
    aiScore: 71, aiLevel: 'AI-продвинутый',
    regionScore: null,
    curator: { name: 'Аскаров Данияр', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Омаров Бауыржан', post: 'Руководитель УЦ', avatar: null },
    sduIntegration: 90, acIntegrations: 15,
    initiativeStatus: {
      1:  { status: 'done', funcDone: 8, funcTotal: 8,  kpiRag: 'green', aiLevel: 2 },
      2:  { status: 'done', funcDone: 17, funcTotal: 17, kpiRag: 'green', aiLevel: 3 },
      3:  { status: 'done', funcDone: 15, funcTotal: 15, kpiRag: 'green', aiLevel: 2 },
      4:  { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'green', aiLevel: 2 },
      5:  { status: 'done', funcDone: 11, funcTotal: 11, kpiRag: 'green', aiLevel: 2 },
      6:  { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'green', aiLevel: 2 },
      7:  { status: 'done', funcDone: 14, funcTotal: 14, kpiRag: 'green', aiLevel: 3 },
      8:  { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'green', aiLevel: 2 },
      9:  { status: 'done', funcDone: 8, funcTotal: 8,   kpiRag: 'green', aiLevel: 2 },
      10: { status: 'done', funcDone: 15, funcTotal: 15, kpiRag: 'green', aiLevel: 2 },
      11: { status: 'done', funcDone: 10, funcTotal: 10, kpiRag: 'green', aiLevel: 1 },
      12: { status: 'done', funcDone: 8, funcTotal: 9,   kpiRag: 'green', aiLevel: 1 },
      13: { status: 'inprogress', funcDone: 6, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      16: { status: 'done',       funcDone: 7, funcTotal: 7,  kpiRag: 'green',  aiLevel: 2 },
      17: { status: 'done',       funcDone: 9, funcTotal: 11, kpiRag: 'green',  aiLevel: 2 },
      18: { status: 'inprogress', funcDone: 2, funcTotal: 4,  kpiRag: 'yellow', aiLevel: 1 },
      19: { status: 'done',       funcDone: 4, funcTotal: 4,  kpiRag: 'green',  aiLevel: 0 },
      20: { status: 'done',       funcDone: 5, funcTotal: 5,  kpiRag: 'green',  aiLevel: 0 },
      21: { status: 'done',       funcDone: 3, funcTotal: 3,  kpiRag: 'green',  aiLevel: 0 },
      22: { status: 'inprogress', funcDone: 1, funcTotal: 2,  kpiRag: 'yellow', aiLevel: 0 },
      23: { status: 'done',       funcDone: 4, funcTotal: 4,  kpiRag: 'green',  aiLevel: 2 },
    },
    kpiValues: {
      '1.1': 99.9, '1.2': 3.8, '1.3': 95,
      '2.1': 99.8, '2.2': 92, '2.3': 91, '2.4': 9, '2.5': 17, '2.6': 5, '2.7': 3,
      '3.1': 94, '3.2': 4.7, '3.3': 2.5, '3.4': 38,
      '4.1': 75, '4.2': 3, '4.3': 99.8,
      '5.1': 98, '5.2': 88, '5.3': 99, '5.4': 2,
      '6.1': 87, '6.2': 76, '6.3': 3,
      '7.1': 14, '7.2': 72, '7.3': 3,
      '8.1': 95, '8.2': 99.3, '8.3': 2,
      '9.1': 98, '9.2': 24, '9.3': 2,
      '10.1': 78, '10.2': 96, '10.3': 4.1, '10.4': 2,
      '11.1': 78, '11.2': 97, '11.3': 2,
      '12.1': 72, '12.2': 11, '12.3': 82,
      '13.1': 35, '13.2': 5, '13.3': 72,
      '14.1': 0, '14.2': 0, '14.3': 0,
      '15.1': 0, '15.2': 0, '15.3': 0,
      '16.1': 12000, '16.2': 35, '16.3': 75, '16.4': 8,
      '17.1': 245, '17.2': 34,
      '18.1': 65, '18.2': 2,
      '19.1': 82, '19.2': 98.5, '19.3': 85,
      '20.1': 92, '20.2': 99.4, '20.3': 82,
    }
  },
  {
    id: 'shymkent', name: 'Шымкент', class: 'R', classLabel: 'Р — город республиканского значения',
    oblast: 'Туркестанская область (шеф)', population: '1 050 000',
    regionalSpec: ['oil_gas', 'industry', 'transport', 'services'],
    cityScore100: 66, bonusPoints: 8, penalty: 5,    // TotalScore = 69, штраф за ND
    aiScore: 48, aiLevel: 'AI-развивающийся',
    regionScore: null,
    curator: { name: 'Бектасова Айгуль', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Жумабеков Ерлан', post: 'Руководитель УЦ', avatar: null },
    sduIntegration: 70, acIntegrations: 9,
    initiativeStatus: {
      1:  { status: 'done',       funcDone: 7, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      2:  { status: 'done',       funcDone: 13, funcTotal: 17, kpiRag: 'yellow', aiLevel: 2 },
      3:  { status: 'done',       funcDone: 13, funcTotal: 15, kpiRag: 'green',  aiLevel: 1 },
      4:  { status: 'done',       funcDone: 8, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      5:  { status: 'done',       funcDone: 9, funcTotal: 11, kpiRag: 'green',  aiLevel: 1 },
      6:  { status: 'notstarted', funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      7:  { status: 'notstarted', funcDone: 0, funcTotal: 14, kpiRag: 'red',    aiLevel: 0 },
      8:  { status: 'done',       funcDone: 8, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      9:  { status: 'done',       funcDone: 6, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      10: { status: 'inprogress', funcDone: 9, funcTotal: 15, kpiRag: 'yellow', aiLevel: 1 },
      11: { status: 'inprogress', funcDone: 7, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      12: { status: 'inprogress', funcDone: 4, funcTotal: 9,  kpiRag: 'yellow', aiLevel: 0 },
      13: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      16: { status: 'done',       funcDone: 6, funcTotal: 7,  kpiRag: 'green',  aiLevel: 1 },
      17: { status: 'planned',    funcDone: 0, funcTotal: 11, kpiRag: 'red',    aiLevel: 0 },
      18: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
      19: { status: 'inprogress', funcDone: 2, funcTotal: 4,  kpiRag: 'yellow', aiLevel: 0 },
      20: { status: 'inprogress', funcDone: 2, funcTotal: 5,  kpiRag: 'yellow', aiLevel: 0 },
      21: { status: 'planned',    funcDone: 0, funcTotal: 3,  kpiRag: 'red',    aiLevel: 0 },
      22: { status: 'planned',    funcDone: 0, funcTotal: 2,  kpiRag: 'red',    aiLevel: 0 },
      23: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
    },
    kpiValues: {
      '1.1': 99.1, '1.2': 6.2, '1.3': 87,
      '2.1': 99.2, '2.2': 76, '2.3': 72, '2.4': 4, '2.5': 11, '2.6': 2, '2.7': 1,
      '3.1': 89, '3.2': 4.4, '3.3': 3.2, '3.4': 22,
      '4.1': 65, '4.2': 6, '4.3': 99.1,
      '5.1': 91, '5.2': 82, '5.3': 96, '5.4': 1,
      '6.1': 0, '6.2': 0, '6.3': 0,
      '7.1': 0, '7.2': 0, '7.3': 0,
      '8.1': 82, '8.2': 98.5, '8.3': 1,
      '9.1': 91, '9.2': 42, '9.3': 1,
      '10.1': 58, '10.2': 91, '10.3': 2.2, '10.4': 1,
      '11.1': 58, '11.2': 91, '11.3': 1,
      '12.1': 42, '12.2': 6, '12.3': 71,
      '13.1': 0, '13.2': 0, '13.3': 0,
      '14.1': 0, '14.2': 0, '14.3': 0,
      '15.1': 0, '15.2': 0, '15.3': 0,
      '16.1': 6000, '16.2': 18, '16.3': 52, '16.4': 4,
      '17.1': 0, '17.2': 0,
      '18.1': 0, '18.2': 0,
      '19.1': 62, '19.2': 97.5, '19.3': 78,
      '20.1': 79, '20.2': 98.8, '20.3': 65,
    }
  },

  // ── О-класс — 6 областных центров ────────────────────────────────────
  {
    id: 'karaganda', name: 'Караганда', class: 'O', classLabel: 'О — областной центр',
    oblast: 'Карагандинская область', population: '500 000',
    regionalSpec: ['industry', 'agro'],
    cityScore100: 62, bonusPoints: 5, penalty: 0,    // TotalScore = 67
    aiScore: 41, aiLevel: 'AI-развивающийся',
    regionScore: 61,
    curator: { name: 'Сейткали Мурат', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Ахметов Санжар', post: 'Руководитель УЦ', avatar: null },
    sduIntegration: 68, acIntegrations: 8,
    initiativeStatus: {
      1:  { status: 'done',       funcDone: 7, funcTotal: 8,  kpiRag: 'green',  aiLevel: 1 },
      2:  { status: 'done',       funcDone: 11, funcTotal: 17, kpiRag: 'yellow', aiLevel: 1 },
      3:  { status: 'done',       funcDone: 12, funcTotal: 15, kpiRag: 'green',  aiLevel: 1 },
      4:  { status: 'done',       funcDone: 8, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      5:  { status: 'done',       funcDone: 8, funcTotal: 11, kpiRag: 'yellow', aiLevel: 1 },
      8:  { status: 'done',       funcDone: 8, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      9:  { status: 'inprogress', funcDone: 5, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      10: { status: 'inprogress', funcDone: 8, funcTotal: 15, kpiRag: 'yellow', aiLevel: 1 },
      11: { status: 'inprogress', funcDone: 6, funcTotal: 10, kpiRag: 'yellow', aiLevel: 0 },
      12: { status: 'inprogress', funcDone: 3, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      13: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      16: { status: 'done',       funcDone: 6, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      17: { status: 'inprogress', funcDone: 3, funcTotal: 11, kpiRag: 'red',    aiLevel: 0 },
      18: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
      19: { status: 'inprogress', funcDone: 1, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
      20: { status: 'inprogress', funcDone: 2, funcTotal: 5,  kpiRag: 'yellow', aiLevel: 0 },
    },
    kpiValues: {
      '1.1': 99.2, '1.2': 6.5, '1.3': 87,
      '2.1': 99.1, '2.2': 72, '2.3': 68, '2.4': 3, '2.5': 10, '2.6': 1, '2.7': 1,
      '3.1': 88, '3.2': 4.4, '3.3': 4.2, '3.4': 18,
      '4.1': 63, '4.2': 6, '4.3': 99.0,
      '5.1': 92, '5.2': 81, '5.3': 96,  '5.4': 1,
      '8.1': 82, '8.2': 98.2, '8.3': 1,
      '9.1': 89, '9.2': 41, '9.3': 1,
      '10.1': 52, '10.2': 92, '10.3': 2.0, '10.4': 1,
      '11.1': 52, '11.2': 91, '11.3': 1,
      '12.1': 32, '12.2': 5, '12.3': 65,
      '13.1': 0, '13.2': 0, '13.3': 0,
      '14.1': 0, '14.2': 0, '14.3': 0,
      '15.1': 0, '15.2': 0, '15.3': 0,
      '16.1': 3500, '16.2': 14, '16.3': 40, '16.4': 3,
      '17.1': 62, '17.2': 12,
      '18.1': 0, '18.2': 0,
      '19.1': 52, '19.2': 97.1, '19.3': 68,
      '20.1': 74, '20.2': 98.9, '20.3': 58,
    }
  },

  // Добавить аналогично: Актобе, Атырау, Павлодар, Усть-Каменогорск, Туркестан,
  // Кокшетау, Петропавловск, Костанай, Уральск, Тараз, Талдыкорган, Актау,
  // Кызылорда, Семей (О-класс) и РЦ
  // Для мокапа достаточно 4–5 полных + остальные с минимальными полями

  {
    id: 'aktobe', name: 'Актобе', class: 'O', classLabel: 'О — областной центр',
    oblast: 'Актюбинская область', population: '420 000',
    regionalSpec: ['oil_gas', 'industry'],
    cityScore100: 59, bonusPoints: 3, penalty: 0, aiScore: 36, aiLevel: 'AI-развивающийся',
    regionScore: 55, sduIntegration: 62, acIntegrations: 6,
    curator: { name: 'Кенжебеков Руслан', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Алибекова Назира', post: 'Руководитель УЦ', avatar: null },
    initiativeStatus: { /* упрощённые данные */
      1:  { status: 'done', funcDone: 6, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      2:  { status: 'done', funcDone: 9, funcTotal: 17, kpiRag: 'yellow', aiLevel: 1 },
      3:  { status: 'done', funcDone: 11, funcTotal: 15, kpiRag: 'yellow', aiLevel: 1 },
      4:  { status: 'inprogress', funcDone: 6, funcTotal: 10, kpiRag: 'yellow', aiLevel: 0 },
      5:  { status: 'done', funcDone: 7, funcTotal: 11, kpiRag: 'yellow', aiLevel: 1 },
      8:  { status: 'done', funcDone: 7, funcTotal: 10, kpiRag: 'yellow', aiLevel: 1 },
      9:  { status: 'inprogress', funcDone: 4, funcTotal: 8, kpiRag: 'red', aiLevel: 0 },
      10: { status: 'inprogress', funcDone: 7, funcTotal: 15, kpiRag: 'red', aiLevel: 0 },
      11: { status: 'inprogress', funcDone: 5, funcTotal: 10, kpiRag: 'red', aiLevel: 0 },
      12: { status: 'planned',    funcDone: 0, funcTotal: 9, kpiRag: 'red', aiLevel: 0 },
      13: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red', aiLevel: 0 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red', aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9, kpiRag: 'red', aiLevel: 0 },
      16: { status: 'inprogress', funcDone: 5, funcTotal: 8, kpiRag: 'yellow', aiLevel: 0 },
      17: { status: 'planned',    funcDone: 0, funcTotal: 11, kpiRag: 'red', aiLevel: 0 },
      18: { status: 'planned',    funcDone: 0, funcTotal: 4, kpiRag: 'red', aiLevel: 0 },
      19: { status: 'planned',    funcDone: 0, funcTotal: 4, kpiRag: 'red', aiLevel: 0 },
      20: { status: 'inprogress', funcDone: 1, funcTotal: 5, kpiRag: 'red', aiLevel: 0 },
    },
    kpiValues: { '3.1': 86, '3.2': 4.3, '3.3': 4.8, '5.1': 89, '5.2': 79, '8.1': 79, '8.2': 98.0 }
  },

  {
    id: 'atyrau', name: 'Атырау', class: 'O', classLabel: 'О — областной центр',
    oblast: 'Атырауская область', population: '280 000',
    regionalSpec: ['oil_gas', 'transport'],
    cityScore100: 55, bonusPoints: 2, penalty: 5, aiScore: 29, aiLevel: 'AI-начинающий',
    regionScore: 52, sduIntegration: 55, acIntegrations: 5,
    curator: { name: 'Досмаганбетов Нурсултан', post: 'Зам. акима по цифровизации', avatar: null },
    ucHead: { name: 'Кариев Асылхан', post: 'Руководитель УЦ', avatar: null },
    initiativeStatus: {
      1:  { status: 'done',       funcDone: 5, funcTotal: 8,  kpiRag: 'yellow', aiLevel: 1 },
      2:  { status: 'inprogress', funcDone: 7, funcTotal: 17, kpiRag: 'red',    aiLevel: 1 },
      3:  { status: 'done',       funcDone: 10, funcTotal: 15, kpiRag: 'yellow', aiLevel: 1 },
      4:  { status: 'inprogress', funcDone: 5, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      5:  { status: 'inprogress', funcDone: 6, funcTotal: 11, kpiRag: 'yellow', aiLevel: 0 },
      8:  { status: 'done',       funcDone: 6, funcTotal: 10, kpiRag: 'yellow', aiLevel: 0 },
      9:  { status: 'planned',    funcDone: 0, funcTotal: 8,  kpiRag: 'red',    aiLevel: 0 },
      10: { status: 'planned',    funcDone: 0, funcTotal: 15, kpiRag: 'red',    aiLevel: 0 },
      11: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      12: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      13: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      14: { status: 'planned',    funcDone: 0, funcTotal: 10, kpiRag: 'red',    aiLevel: 0 },
      15: { status: 'planned',    funcDone: 0, funcTotal: 9,  kpiRag: 'red',    aiLevel: 0 },
      16: { status: 'inprogress', funcDone: 4, funcTotal: 8,  kpiRag: 'red',    aiLevel: 0 },
      17: { status: 'planned',    funcDone: 0, funcTotal: 11, kpiRag: 'red',    aiLevel: 0 },
      18: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
      19: { status: 'planned',    funcDone: 0, funcTotal: 4,  kpiRag: 'red',    aiLevel: 0 },
      20: { status: 'planned',    funcDone: 0, funcTotal: 5,  kpiRag: 'red',    aiLevel: 0 },
    },
    kpiValues: { '3.1': 82, '3.2': 4.2, '3.3': 4.9, '5.1': 85, '8.1': 75, '8.2': 97.5 }
  },
];

// Вспомогательные константы из Методики
const CITYSCORE_WEIGHTS = {
  management: 25,   // Управление: Ин. 1, 2, 3, 16, 20
  security:   25,   // Безопасность: Ин. 8, 9, 17
  transport:  15,   // Транспорт: Ин. 5, 6, 7
  ecology:    17,   // Экология: Ин. 10, 11
  communal:   18,   // ЖКХ: Ин. 4, 12, 13, 14, 15
};

const REGIONAL_SPEC_LABELS = {
  oil_gas:    'Нефтегазовый сектор',
  industry:   'Промышленность',
  agro:       'АПК',
  transport:  'Транспорт и логистика',
  services:   'Услуги, инновации, экономика знаний',
  tourism:    'Туризм',
};

const AI_LEVEL_LABELS = {
  0: 'Без ИИ',
  1: 'ИИ-аналитика',
  2: 'ИИ-рекомендации',
  3: 'ИИ-автономные решения',
};

const STAGE_LABELS = {
  1: 'Этап 1 (2026–I пол. 2027)',
  2: 'Этап 2 (II пол. 2027–I пол. 2028)',
  3: 'Этап 3 (2028–2029)',
};

const STATUS_LABELS = {
  done:        { label: 'Выполнено',  color: '#10b981' },
  inprogress:  { label: 'В работе',   color: '#3b82f6' },
  planned:     { label: 'Планируется',color: '#d29922' },
  notstarted:  { label: 'Не начато',  color: '#6b7280' },
};

const RAG_COLORS = {
  green:  '#10b981',
  yellow: '#f59e0b',
  red:    '#ef4444',
};

// Продолжение data.js

// Данные по Методике: зам. акима = R-3, руководитель УЦ = R-4
const LEADERS = [
  {
    rank: 1, cityId: 'almaty',
    curator: {
      name: 'Аскаров Данияр Жанатович', post: 'Заместитель акима Алматы по цифровизации',
      region: 'Алматы', totalScore: 90, aiScore: 71,
      // avatar: используем SVG-заглушку с инициалами
      avatar: null, initials: 'АД',
      metrics: {
        sduKpiPct: 90, acIntegrations: 15, acTotal: 17,
        aiModels: 5, aiMaturity: 2.8, roadmapStatus: 'approved',
        strongInitiatives: [2, 7, 3], weakInitiatives: [14, 15, 18],
      }
    },
    uc: {
      name: 'Омаров Бауыржан Серикович', post: 'Руководитель Управления цифровизации Алматы',
      avatar: null, initials: 'ОБ',
      metrics: { sduKpiPct: 90, acIntegrations: 15, aiModels: 5, regionalTasks: 8 }
    }
  },
  {
    rank: 2, cityId: 'astana',
    curator: {
      name: 'Турдыбеков Ришат Уалиханович', post: 'Заместитель акима Астаны по цифровизации',
      region: 'Астана', totalScore: 83, aiScore: 62,
      avatar: null, initials: 'ТР',
      metrics: {
        sduKpiPct: 82, acIntegrations: 12, acTotal: 17,
        aiModels: 4, aiMaturity: 2.2, roadmapStatus: 'approved',
        strongInitiatives: [1, 8, 3], weakInitiatives: [13, 14, 18],
      }
    },
    uc: {
      name: 'Серикбаев Нурлан Адилович', post: 'Руководитель Управления цифровизации Астаны',
      avatar: null, initials: 'СН',
      metrics: { sduKpiPct: 82, acIntegrations: 12, aiModels: 4, regionalTasks: 6 }
    }
  },
  {
    rank: 3, cityId: 'shymkent',
    curator: {
      name: 'Бектасова Айгуль Маратовна', post: 'Заместитель акима Шымкента по цифровизации',
      region: 'Шымкент', totalScore: 69, aiScore: 48,
      avatar: null, initials: 'БА',
      metrics: {
        sduKpiPct: 70, acIntegrations: 9, acTotal: 17,
        aiModels: 2, aiMaturity: 1.6, roadmapStatus: 'pending',
        strongInitiatives: [3, 5, 16], weakInitiatives: [6, 7, 17],
      }
    },
    uc: {
      name: 'Жумабеков Ерлан Болатович', post: 'Руководитель УЦ Шымкента',
      avatar: null, initials: 'ЖЕ',
      metrics: { sduKpiPct: 70, acIntegrations: 9, aiModels: 2, regionalTasks: 4 }
    }
  },
  {
    rank: 4, cityId: 'karaganda',
    curator: {
      name: 'Сейткали Мурат Дуйсенбекович', post: 'Заместитель акима Карагандинской области',
      region: 'Карагандинская область', totalScore: 67, aiScore: 41,
      avatar: null, initials: 'СМ',
      metrics: {
        sduKpiPct: 68, acIntegrations: 8, acTotal: 17,
        aiModels: 1, aiMaturity: 1.2, roadmapStatus: 'approved',
        strongInitiatives: [1, 3, 16], weakInitiatives: [12, 13, 17],
      }
    },
    uc: {
      name: 'Ахметов Санжар Ерланович', post: 'Руководитель УЦ Карагандинской области',
      avatar: null, initials: 'АС',
      metrics: { sduKpiPct: 68, acIntegrations: 8, aiModels: 1, regionalTasks: 3 }
    }
  },
  {
    rank: 5, cityId: 'aktobe',
    curator: {
      name: 'Кенжебеков Руслан Бауыржанович', post: 'Заместитель акима Актюбинской области',
      region: 'Актюбинская область', totalScore: 62, aiScore: 36,
      avatar: null, initials: 'КР',
      metrics: {
        sduKpiPct: 62, acIntegrations: 6, acTotal: 17,
        aiModels: 1, aiMaturity: 1.0, roadmapStatus: 'approved',
        strongInitiatives: [1, 3, 5], weakInitiatives: [9, 10, 12],
      }
    },
    uc: {
      name: 'Алибекова Назира Сериковна', post: 'Руководитель УЦ Актюбинской области',
      avatar: null, initials: 'АН',
      metrics: { sduKpiPct: 62, acIntegrations: 6, aiModels: 1, regionalTasks: 2 }
    }
  },
  {
    rank: 6, cityId: 'atyrau',
    curator: {
      name: 'Досмаганбетов Нурсултан Кайратович', post: 'Заместитель акима Атырауской области',
      region: 'Атырауская область', totalScore: 52, aiScore: 29,
      avatar: null, initials: 'ДН',
      metrics: {
        sduKpiPct: 55, acIntegrations: 5, acTotal: 17,
        aiModels: 0, aiMaturity: 0.8, roadmapStatus: 'pending',
        strongInitiatives: [3, 8], weakInitiatives: [9, 10, 11],
      }
    },
    uc: {
      name: 'Кариев Асылхан Нурланович', post: 'Руководитель УЦ Атырауской области',
      avatar: null, initials: 'КА',
      metrics: { sduKpiPct: 55, acIntegrations: 5, aiModels: 0, regionalTasks: 1 }
    }
  },
];

function renderOverview() {
  // 1. CityScore gauge: TotalScore по Алматы как дефолтный город
  //    TotalScore = cityScore100 + bonusPoints - penalty
  //    Рисуй SVG-gauge или canvas arc с 5-уровневой цветовой шкалой:
  //    <45=red, 45-59=orange, 60-74=yellow, 75-89=blue, 90-100=green

  // 2. AI Score блок:
  //    Четыре прогресс-бара: P1 (охват), P2 (эффект), P3 (обучение), DataLake
  //    Формула: AI_Score = 0.35*P1 + 0.30*P2 + 0.20*P3 + 0.15*DataLake
  //    Уровень из LEADERS.curator.metrics.aiMaturity

  // 3. KPI-карточки (4 штуки):
  //    — Число инициатив «Выполнено» / 20
  //    — Средний % функционала по всем инициативам
  //    — Число ИС МИО в SDU (sduIntegration %)
  //    — Число регионов с CityScore > 75

  // 4. Рейтинг топ-3 городов (мини-список с TotalScore)

  // 5. Bar chart: CityScore по 5 сферам (CITYSCORE_WEIGHTS),
  //    данные из kpiValues первого города
}

function renderInitiatives(filterSphere) {
  // Фильтр по сферам: Все | Управление | ЖКХ | Транспорт | Безопасность | Экология | Доп.
  // Для каждой инициативы из INITIATIVES — карточка:
  //   — Номер (1–23)
  //   — Название
  //   — Бейдж сферы, этапа, применимости (Р/О/РЦ)
  //   — AI-уровень (шкала 0–3 из Таблицы 3 Методики)
  //   — Количество KPI
  //   — Дедлайн
  //   — Кнопка «Подробнее» → открывает initiative-detail-modal

  // initiative-detail-modal (переработанная версия details-modal):
  //   Tab 1 — Функционал: чек-лист пунктов из initiative.functional
  //            Статус A/NA по классу (R/O/RC) с иконками
  //   Tab 2 — KPI: таблица с target_R, target_O, target_RC, points, type
  //   Tab 3 — Статус по городам: из CITIES.initiativeStatus[id]
}

function renderCities() {
  // Фильтр: Все | Р-класс | О-класс | РЦ
  // Карточки из CITIES (перезаписать citycard-функцию):
  //   — Название, класс (Р/О/РЦ), область
  //   — TotalScore (вычислять!) + цветовой уровень
  //   — AI Score
  //   — Теги региональной специфики из REGIONAL_SPEC_LABELS
  //   — Прогресс по этапам: Этап 1 done/total, Этап 2, Этап 3
  //   — Кнопка «Детали» → city-detail-modal

  // city-detail-modal (расширить):
  //   — Куратор (зам. акима) + руководитель УЦ с avatar
  //   — TotalScore gauge
  //   — Статус 20 инициатив: цветной светофор (done/inprogress/planned/notstarted)
  //   — Клик на инициативу → initiative-detail для данного города
}

function renderLeaders() {
  // Вкладка-табы по городам (как в оригинале)

  // Для каждого лидера из LEADERS:
  //   — Карточка куратора (зам. акима):
  //     * makeAvatar(curator.initials) — SVG-аватар
  //     * Имя, должность, регион
  //     * TotalScore gauge-мини (SVG arc, 60×60)
  //     * AI Score
  //     * Топ-3 сильных инициативы (зелёные) + топ-3 слабых (красные)
  //     * Метрики: % KPI в SDU, интеграции АЦ, дедлайн 2027
  //     * Статус Дорожной карты (утверждена/на согласовании)
  //     * Кнопка «Показать команду» → leader-team-modal

  //   — Карточка УЦ:
  //     * makeAvatar(uc.initials)
  //     * Имя, должность
  //     * % KPI в SDU, интеграции АЦ, AI-модели, задачи хабу

  // leader-team-modal: показывать карточки куратора и УЦ рядом
  //   + sparkline TotalScore по кварталам (имитация через массив)
}

function renderAnalytics() {
  // Секция 1: Сравнение городов
  //   — Multi-bar chart: TotalScore по всем городам CITIES
  //   — Line chart: динамика TotalScore по кварталам (имитация)

  // Секция 2: Прогресс по инициативам
  //   — Horizontal bar: % выполнения функционала по каждой из 20 инициатив
  //     (среднее по всем городам: funcDone/funcTotal)

  // Секция 3: Матрица город×инициатива
  //   — Сохранить существующий renderMatrix, но заменить данные:
  //     Данные из CITIES[i].initiativeStatus[j].funcDone/funcTotal
  //     Цвет = RAG_COLORS по kpiRag
  //     Клик на ячейку → initiative-detail для данного города

  // Секция 4: AI-тепловая карта
  //   — Grid: 20 инициатив × 6 городов
  //     Цвет = AI-уровень (0=серый, 1=синий, 2=жёлтый, 3=зелёный)
}

// charts.js
// Инициализируется после DOMContentLoaded

// Chart 1: Bar — Инициативы по сферам (вкладка Обзор)
// labels = ключи CITYSCORE_WEIGHTS
// data = количество инициатив по каждой сфере из INITIATIVES

// Chart 2: Radar — CityScore по 5 сферам для выбранного города
// Данные: нормализованные значения из kpiValues по группам

// Chart 3: Line — Динамика TotalScore (имитация поквартально)
// Для каждого города: реалистичный восходящий тренд

// Chart 4: Doughnut — AI-зрелость
// 4 сегмента: уровни 0/1/2/3 — число инициатив на каждом уровне

