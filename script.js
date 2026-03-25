const aiTools = [
    {
        name: 'ChatGPT',
        icon: '💬',
        category: 'text',
        usecase: 'Общее назначение',
        description: 'Мощная языковая модель для генерации текста, ответов на вопросы и ведения диалогов.',
        capabilities: ['Ответы на вопросы', 'Написание текстов', 'Анализ информации', 'Образование', 'Консультация'],
        url: 'https://chat.openai.com'
    },
    {
        name: 'Claude',
        icon: '🧠',
        category: 'text',
        usecase: 'Анализ и логика',
        description: 'Продвинутый AI ассистент от Anthropic с фокусом на точность и безопасность.',
        capabilities: ['Логический анализ', 'Написание кода', 'Исследования', 'Редактирование', 'Обсуждения'],
        url: 'https://claude.ai'
    },
    {
        name: 'Google Gemini',
        icon: '✨',
        category: 'text',
        usecase: 'Мультимодальность',
        description: 'Универсальная AI модель от Google для работы с текстом, изображениями и кодом.',
        capabilities: ['Анализ изображений', 'Генерация текста', 'Программирование', 'Математика', 'Творчество'],
        url: 'https://gemini.google.com'
    },
    {
        name: 'Perplexity AI',
        icon: '🔍',
        category: 'text',
        usecase: 'Поиск и исследования',
        description: 'AI поисковик с доступом к интернету для получения актуальной информации.',
        capabilities: ['Поиск информации', 'Анализ источников', 'Исследования', 'Текущие новости', 'Проверка фактов'],
        url: 'https://www.perplexity.ai'
    },
    {
        name: 'DALL-E 3',
        icon: '🖼️',
        category: 'image',
        usecase: 'Изображения',
        description: 'Генератор высококачественных изображений на основе текстового описания от OpenAI.',
        capabilities: ['Генерация изображений', 'Дизайн', 'Иллюстрации', 'Редактирование', 'Маркетинг'],
        url: 'https://openai.com/dall-e-3'
    },
    {
        name: 'Midjourney',
        icon: '🎨',
        category: 'image',
        usecase: 'Художественные изображения',
        description: 'Мощный генератор искусства с высокой художественности и качеством.',
        capabilities: ['Художественные изображения', 'Концепт-арт', 'Дизайн интерьера', 'Логотипы', 'Постеры'],
        url: 'https://midjourney.com'
    },
    {
        name: 'Stable Diffusion',
        icon: '💎',
        category: 'image',
        usecase: 'Открытый инструмент',
        description: 'Открытая модель генерации изображений, доступная для локального использования.',
        capabilities: ['Генерация изображений', 'Редактирование', 'Раскраска', 'Апскейл', 'Расширение изображений'],
        url: 'https://stablediffusionweb.com'
    },
    {
        name: 'Ideogram',
        icon: '🎭',
        category: 'image',
        usecase: 'Текст в изображениях',
        description: 'Специализирован на генерации изображений с корректным текстом и символами.',
        capabilities: ['Изображения с текстом', 'Логотипы', 'Поздравительные открытки', 'Дизайн'],
        url: 'https://ideogram.ai'
    },
    {
        name: 'GitHub Copilot',
        icon: '⚙️',
        category: 'code',
        usecase: 'Разработка ПО',
        description: 'AI ассистент для написания и объяснения кода, встроенный в IDE.',
        capabilities: ['Автодополнение кода', 'Генерация функций', 'Объяснение кода', 'Тестирование', 'Документация'],
        url: 'https://github.com/features/copilot'
    },
    {
        name: 'Codeium',
        icon: '💻',
        category: 'code',
        usecase: 'Бесплатная альтернатива',
        description: 'Бесплатный AI помощник для кода с поддержкой 40+ языков и IDE.',
        capabilities: ['Автодополнение', 'Поиск по коду', 'Объяснение', 'Рефакторинг', 'Поддержка múltiple IDE'],
        url: 'https://codeium.com'
    },
    {
        name: 'Tabnine',
        icon: '⚡',
        category: 'code',
        usecase: 'Быстрое кодирование',
        description: 'AI-powered автодополнение кода с поддержкой локальных и облачных моделей.',
        capabilities: ['Интеллектуальное автодополнение', 'Обучение на коде компании', 'Безопасность', 'Поддержка команд'],
        url: 'https://www.tabnine.com'
    },
    {
        name: 'ChatGPT Code Interpreter',
        icon: '🔧',
        category: 'code',
        usecase: 'Исполнение кода',
        description: 'Выполнение Python кода прямо в чате для обработки данных и анализа.',
        capabilities: ['Выполнение кода', 'Обработка CSV', 'Визуализация', 'Математика', 'Загрузка файлов'],
        url: 'https://chat.openai.com'
    },
    {
        name: 'ElevenLabs',
        icon: '🔊',
        category: 'audio',
        usecase: 'Синтез речи',
        description: 'Высокого качества синтез речи с множеством голосов и языков.',
        capabilities: ['Синтез речи', 'Множество голосов', 'Эмоциональность', 'Долгоформа контент', 'API'],
        url: 'https://elevenlabs.io'
    },
    {
        name: 'Murf AI',
        icon: '🎙️',
        category: 'audio',
        usecase: 'Видео озвучивание',
        description: 'Генератор AI голосов для озвучивания видео, подкастов и презентаций.',
        capabilities: ['Озвучивание видео', 'Подкасты', 'Презентации', 'Закадровый голос', 'Множество языков'],
        url: 'https://murf.ai'
    },
    {
        name: 'Descript',
        icon: '📻',
        category: 'audio',
        usecase: 'Редактирование аудио',
        description: 'Редактирование видео и аудио как текста с AI транскрипцией.',
        capabilities: ['Транскрипция', 'Редактирование аудио', 'Удаление швов', 'Синтез речи', 'Видеомонтаж'],
        url: 'https://www.descript.com'
    },
    {
        name: 'Runwayml',
        icon: '🎬',
        category: 'video',
        usecase: 'Видеогенерация',
        description: 'Платформа для создания и редактирования видео с AI эффектами.',
        capabilities: ['Генерация видео', 'Редактирование', 'Удаление объектов', 'Расширение видео', 'AI фильтры'],
        url: 'https://runwayml.com'
    },
    {
        name: 'Synthesia',
        icon: '📹',
        category: 'video',
        usecase: 'Видео с аватарами',
        description: 'Создание профессиональных видео с AI аватарами и синтезом речи.',
        capabilities: ['AI аватары', 'Синтез речи', 'Видеошаблоны', 'Локоризация', 'Корпоративные видео'],
        url: 'https://www.synthesia.io'
    },
    {
        name: 'Fliki',
        icon: '🎥',
        category: 'video',
        usecase: 'Видео из текста',
        description: 'Автоматическое создание видео из текста с AI голосом и музыкой.',
        capabilities: ['Текст в видео', 'AI озвучивание', 'Стоковая музыка', 'Субтитры', 'Социальные медиа'],
        url: 'https://fliki.ai'
    },
    {
        name: 'Jasper',
        icon: '✍️',
        category: 'text',
        usecase: 'Маркетинг контент',
        description: 'AI копирайтер для создания маркетингового контента и рекламных текстов.',
        capabilities: ['Копирайтинг', 'Блог посты', 'Email маркетинг', 'РПС объявления', 'SEO оптимизация'],
        url: 'https://www.jasper.ai'
    },
    {
        name: 'Copy.ai',
        icon: '📄',
        category: 'text',
        usecase: 'Быстрое написание',
        description: 'AI инструмент для быстрого создания маркетингового и рекламного контента.',
        capabilities: ['Копирайтинг', 'Email', 'Соцсети', 'Товаровы описания', 'Объявления'],
        url: 'https://www.copy.ai'
    },
    {
        name: 'Notion AI',
        icon: '📝',
        category: 'text',
        usecase: 'Интеграция',
        description: 'AI помощник прямо в Notion для письма, редактирования и автоматизации.',
        capabilities: ['Письмо', 'Редактирование', 'Резюмирование', 'Перевод', 'Автоответ'],
        url: 'https://www.notion.so'
    },
    {
        name: 'Grammarly',
        icon: '📚',
        category: 'text',
        usecase: 'Проверка грамматики',
        description: 'AI для проверки грамматики, пунктуации и улучшения качества текста.',
        capabilities: ['Грамматика', 'Пунктуация', 'Стиль', 'Тон', 'Плагиат'],
        url: 'https://www.grammarly.com'
    },
    {
        name: 'Quillbot',
        icon: '✏️',
        category: 'text',
        usecase: 'Переписывание текста',
        description: 'Переписывание и парафразирование текста с сохранением смысла.',
        capabilities: ['Парафразирование', 'Упрощение текста', 'Проверка плагиата', 'Самопроверка', 'Расширение'],
        url: 'https://quillbot.com'
    },
    {
        name: 'Descript (Filler Word Removal)',
        icon: '🎯',
        category: 'audio',
        usecase: 'Чистка аудио',
        description: 'Удаление слов-паразитов и пауз из видео и аудио автоматически.',
        capabilities: ['Удаление слов-паразитов', 'Редактирование речи', 'Улучшение видео', 'Транскрипция'],
        url: 'https://www.descript.com'
    },
    {
        name: 'ChatGPT Vision',
        icon: '👁️',
        category: 'image',
        usecase: 'Анализ изображений',
        description: 'Анализ и описание изображений, извлечение текста с фотографий и диаграмм.',
        capabilities: ['Анализ изображений', 'OCR', 'Описание фото', 'Анализ диаграмм', 'Визуальный поиск'],
        url: 'https://chat.openai.com'
    },
    {
        name: 'Google Lens',
        icon: '🔎',
        category: 'image',
        usecase: 'Визуальный поиск',
        description: 'Визуальный поиск с камеры для идентификации объектов и информации.',
        capabilities: ['Визуальный поиск', 'Переводчик текста', 'Решение школьных задач', 'Определение растений/животных'],
        url: 'https://lens.google.com'
    },
    {
        name: 'Hugging Face',
        icon: '🤗',
        category: 'other',
        usecase: 'ML модели',
        description: 'Платформа с множеством открытых моделей машинного обучения.',
        capabilities: ['Модели NLP', 'Компьютерное зрение', 'Аудио модели', 'Демонстрации', 'Обучение'],
        url: 'https://huggingface.co'
    },
    {
        name: 'Kaggle',
        icon: '🏆',
        category: 'other',
        usecase: 'Соревнования ML',
        description: 'Сообщество для соревнований по машинному обучению и доступу к наборам данных.',
        capabilities: ['Каком по ML', 'Наборы данных', 'Обучение', 'Блокноты', 'AI модели'],
        url: 'https://www.kaggle.com'
    },
    {
        name: 'TensorFlow',
        icon: '📊',
        category: 'other',
        usecase: 'ML библиотека',
        description: 'Открытая библиотека для машинного обучения и глубокого обучения от Google.',
        capabilities: ['Нейросети', 'Глубокое обучение', 'Компьютерное зрение', 'NLP', 'Развертывание'],
        url: 'https://www.tensorflow.org'
    },
    {
        name: 'PyTorch',
        icon: '🔥',
        category: 'other',
        usecase: 'ML фреймворк',
        description: 'Фреймворк для исследований и разработки моделей глубокого обучения.',
        capabilities: ['Нейросети', 'Глубокое обучение', 'Исследования', 'Прототипирование', 'Производство'],
        url: 'https://pytorch.org'
    },
    {
        name: 'Teachable Machine',
        icon: '🤖',
        category: 'other',
        usecase: 'ML без кода',
        description: 'Обучение моделей машинного обучения без написания кода от Google.',
        capabilities: ['Обучение без кода', 'Классификация', 'Распознавание', 'Тексты', 'Позы'],
        url: 'https://teachablemachine.withgoogle.com'
    },
    {
        name: 'LibreChat',
        icon: '💬',
        category: 'text',
        usecase: 'Открытый чат',
        description: 'Открытый чат с поддержкой множества моделей и полной приватностью.',
        capabilities: ['Множество моделей', 'Плагины', 'Локальное развертывание', 'Приватность', 'Open Source'],
        url: 'https://docs.librechat.ai'
    },
    {
        name: 'LocalLLM (Ollama)',
        icon: '🖥️',
        category: 'code',
        usecase: 'Локальные модели',
        description: 'Запуск больших языковых моделей локально на вашем компьютере.',
        capabilities: ['Локальное выполнение', 'Приватность', 'Офлайн', 'Множество моделей', 'Интеграция'],
        url: 'https://ollama.ai'
    },
    {
        name: 'Cursor',
        icon: '✨',
        category: 'code',
        usecase: 'AI IDE',
        description: 'IDE построенная на базе VSCode с встроенным AI для разработки.',
        capabilities: ['AI автодополнение', 'Объяснение кода', 'Рефакторинг', 'Поиск кода', 'Chat'],
        url: 'https://cursor.so'
    },
    {
        name: 'Myscribe',
        icon: '📋',
        category: 'audio',
        usecase: 'Транскрипция',
        description: 'Быстрая транскрипция аудио и видео в текст с высокая точностью.',
        capabilities: ['Транскрипция', 'Множество языков', 'Метаинформация', 'Экспорт', 'API'],
        url: 'https://myscribe.ai'
    },
    {
        name: 'Cleanup.pictures',
        icon: '🧹',
        category: 'image',
        usecase: 'Удаление объектов',
        description: 'Удаление ненужных объектов и людей с фотографий с помощью AI.',
        capabilities: ['Удаление объектов', 'Восстановление фото', 'Удаление людей', 'Фон', 'Веб интерфейс'],
        url: 'https://cleanup.pictures'
    },
    {
        name: 'Remove.bg',
        icon: '⚪',
        category: 'image',
        usecase: 'Удаление фона',
        description: 'Автоматическое удаление фона с помощью AI.',
        capabilities: ['Удаление фона', 'Детальное редактирование', 'Пакетная обработка', 'API', 'Импорт/экспорт'],
        url: 'https://remove.bg'
    },
    {
        name: 'Upscayl',
        icon: '🔍',
        category: 'image',
        usecase: 'Увеличение изображений',
        description: 'Увеличение разрешения изображений с помощью нейросетей (бесплатно).',
        capabilities: ['Апскейл', 'Улучшение качества', 'Open Source', 'Локальное выполнение', 'Пакетная обработка'],
        url: 'https://upscayl.github.io'
    }
];

// Функция для отображения инструментов
function displayTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: white; padding: 40px;">😔 Инструменты не найдены. Попробуйте изменить фильтры.</p>';
        return;
    }

    tools.forEach((tool, index) => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.style.animationDelay = `${index * 0.05}s`;
        
        const capabilitiesHtml = tool.capabilities ? `
            <div class="tool-capabilities">
                <div class="tool-capabilities-title">Возможности:</div>
                <div class="tool-capabilities-list">
                    ${tool.capabilities.map(cap => `<span class="capability-tag">${cap}</span>`).join('')}
                </div>
            </div>
        ` : '';
        
        toolCard.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h3>${tool.name}</h3>
            <div class="tool-badges">
                <span class="tool-category">${getCategoryLabel(tool.category)}</span>
                <span class="tool-usecase">${tool.usecase || 'Универсально'}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <button class="tool-expand">Показать больше</button>
            <div class="tool-extra hidden">
                ${capabilitiesHtml}
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">Перейти на сайт →</a>
            </div>
        `;

        const expandBtn = toolCard.querySelector('.tool-expand');
        const extraSection = toolCard.querySelector('.tool-extra');

        expandBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            extraSection.classList.toggle('hidden');
            if (extraSection.classList.contains('hidden')) {
                expandBtn.textContent = 'Показать больше';
            } else {
                expandBtn.textContent = 'Свернуть';
            }
        });

        toolCard.addEventListener('click', () => {
            extraSection.classList.toggle('hidden');
            if (extraSection.classList.contains('hidden')) {
                expandBtn.textContent = 'Показать больше';
            } else {
                expandBtn.textContent = 'Свернуть';
            }
        });

        toolsGrid.appendChild(toolCard);
    });
}

// Функция для получения названия категории
function getCategoryLabel(category) {
    const labels = {
        'text': '📄 Текст',
        'image': '🖼️ Изображения',
        'code': '💻 Код',
        'audio': '🔊 Аудио',
        'video': '📹 Видео',
        'other': '⚙️ Прочее'
    };
    return labels[category] || category;
}

// Функция для фильтрации инструментов
function filterTools() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const categoryValue = document.getElementById('filterCategory').value;
    const usecaseValue = document.getElementById('filterUsecase').value;

    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchValue) ||
                            tool.description.toLowerCase().includes(searchValue) ||
                            (tool.capabilities && tool.capabilities.some(cap => cap.toLowerCase().includes(searchValue)));
        const matchesCategory = !categoryValue || tool.category === categoryValue;
        const matchesUsecase = !usecaseValue || tool.usecase === usecaseValue;

        return matchesSearch && matchesCategory && matchesUsecase;
    });

    displayTools(filteredTools);
}

// Функция для поиска рекомендованных инструментов
function findRecommendedTools(task) {
    const keywords = {
        'текст': ['text'],
        'написать': ['text'],
        'статья': ['text'],
        'копирайтинг': ['text'],
        'редактирование': ['text'],
        'перевод': ['text'],
        'изображение': ['image'],
        'картинка': ['image'],
        'фото': ['image'],
        'дизайн': ['image'],
        'логотип': ['image'],
        'арт': ['image'],
        'код': ['code'],
        'программирование': ['code'],
        'разработка': ['code'],
        'аудио': ['audio'],
        'голос': ['audio'],
        'музыка': ['audio'],
        'транскрипция': ['audio'],
        'видео': ['video'],
        'озвучка': ['audio', 'video'],
        'синтез речи': ['audio'],
        'поиск': ['text'],
        'исследование': ['text'],
        'анализ': ['text', 'image'],
        'обучение': ['code', 'other'],
        'машинное обучение': ['other'],
        'данные': ['code', 'other']
    };

    const matchedCategories = new Set();
    
    // Найти категории по ключевым словам
    Object.keys(keywords).forEach(keyword => {
        if (task.includes(keyword)) {
            keywords[keyword].forEach(category => matchedCategories.add(category));
        }
    });

    // Если ничего не найдено, вернуть популярные инструменты
    if (matchedCategories.size === 0) {
        return aiTools.slice(0, 5);
    }

    // Фильтровать инструменты по категориям
    const recommended = aiTools.filter(tool => matchedCategories.has(tool.category));
    
    // Если мало результатов, добавить еще
    if (recommended.length < 3) {
        const additional = aiTools.filter(tool => !matchedCategories.has(tool.category)).slice(0, 3 - recommended.length);
        recommended.push(...additional);
    }

    return recommended.slice(0, 5);
}

// Функция для отображения рекомендаций
function displayRecommendations(tools) {
    const recommendations = document.getElementById('recommendations');
    
    if (tools.length === 0) {
        recommendations.innerHTML = '<p>К сожалению, подходящих инструментов не найдено. Попробуйте описать задачу иначе.</p>';
        return;
    }

    const html = tools.map(tool => `
        <div class="recommendation-item">
            <h4>${tool.icon} ${tool.name}</h4>
            <p>${tool.description}</p>
            <p><strong>Категория:</strong> ${getCategoryLabel(tool.category)} | <strong>Назначение:</strong> ${tool.usecase}</p>
            <a href="${tool.url}" target="_blank" class="recommendation-link">Перейти к инструменту →</a>
        </div>
    `).join('');
    
    recommendations.innerHTML = html;
}

// Функция для переключения секций
function switchSection(sectionId) {
    // Скрыть все секции
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Показать выбранную секцию
    document.getElementById(sectionId).classList.add('active');
    
    // Обновить активную ссылку в навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // Если переходим в каталог, отобразить инструменты
    if (sectionId === 'catalog') {
        displayTools(aiTools);
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Показать главную страницу по умолчанию
    switchSection('home');
    
    // Добавить fallback для изображений
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7QntCe0J7QntCePC90ZXh0Pjwvc3ZnPg==';
        };
    });
    
    // Обработчики для навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            switchSection(sectionId);
            
            // Закрыть мобильное меню после клика
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.querySelector('.overlay');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }
        });
    });
    
    // Мобильная навигация
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Обработчик для кнопки CTA
    document.querySelector('.cta-button').addEventListener('click', () => {
        switchSection('catalog');
    });
    
    // ИИ Помощник
    const aiAssistantBtn = document.getElementById('aiAssistantBtn');
    const modal = document.getElementById('aiAssistantModal');
    const closeModal = document.getElementById('closeModal');
    const findToolsBtn = document.getElementById('findToolsBtn');
    const taskInput = document.getElementById('taskInput');
    const recommendations = document.getElementById('recommendations');

    // Открыть модальное окно
    aiAssistantBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        taskInput.focus();
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        taskInput.value = '';
        recommendations.innerHTML = '';
    });

    // Закрыть при клике вне модала
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            taskInput.value = '';
            recommendations.innerHTML = '';
        }
    });

    // Найти инструменты
    findToolsBtn.addEventListener('click', () => {
        const task = taskInput.value.toLowerCase().trim();
        if (!task) {
            alert('Пожалуйста, опишите вашу задачу!');
            return;
        }
        
        const recommendedTools = findRecommendedTools(task);
        displayRecommendations(recommendedTools);
    });

    // Слушатели событий для поиска и фильтрации (только для каталога)
    const searchInput = document.getElementById('searchInput');
    const filterCategory = document.getElementById('filterCategory');
    const filterUsecase = document.getElementById('filterUsecase');
    
    if (searchInput) searchInput.addEventListener('input', filterTools);
    if (filterCategory) filterCategory.addEventListener('change', filterTools);
    if (filterUsecase) filterUsecase.addEventListener('change', filterTools);
});
