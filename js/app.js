document.addEventListener('DOMContentLoaded', () => {
    // Application State
    const state = {
        activeTab: 'dashboard',
        activeSlideModule: 'chatbot',
        activeSlideIndex: 0,
        activeExerciseId: 'ex-chatbot-1',
        completedExercises: JSON.parse(localStorage.getItem('completed_exercises') || '[]'),
        searchQuery: '',
        isFullscreen: false
    };

    // DOM Elements
    const elements = {
        sidebarLinks: document.querySelectorAll('.nav-link'),
        sections: document.querySelectorAll('.content-section'),
        
        // Dashboard
        modulesGrid: document.getElementById('modules-grid'),
        completedStatsCount: document.getElementById('completed-stats-count'),
        completedStatsPercent: document.getElementById('completed-stats-percent'),
        
        // Slides
        slideModuleSelect: document.getElementById('slide-module-select'),
        slideViewport: document.getElementById('slide-viewport'),
        slidePrevBtn: document.getElementById('slide-prev-btn'),
        slideNextBtn: document.getElementById('slide-next-btn'),
        slideFullscreenBtn: document.getElementById('slide-fullscreen-btn'),
        slideProgressBar: document.getElementById('slide-progress-bar'),
        slideNumberDisplay: document.getElementById('slide-number-display'),
        speakerNotesBtn: document.getElementById('speaker-notes-btn'),
        speakerNotesBox: document.getElementById('speaker-notes-box'),
        
        // Manuals
        manualSearch: document.getElementById('manual-search'),
        manualToc: document.getElementById('manual-toc-list'),
        manualContent: document.getElementById('manual-content-wrapper'),
        
        // Exercises
        exerciseTopicSelect: document.getElementById('exercise-topic-select'),
        exerciseListGroup: document.getElementById('exercise-list-group'),
        exerciseDetailsPane: document.getElementById('exercise-details-pane')
    };

    // Initialize Application
    function init() {
        setupNavigation();
        setupDashboard();
        setupSlides();
        setupManuals();
        setupExercises();
        setupGlobalEvents();
        updateProgressStats();
    }

    // --- Core Navigation ---
    function setupNavigation() {
        elements.sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = link.getAttribute('data-tab');
                switchTab(targetTab);
            });
        });
    }

    function switchTab(tabId) {
        state.activeTab = tabId;
        
        // Update sidebar links
        elements.sidebarLinks.forEach(link => {
            if (link.getAttribute('data-tab') === tabId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update active content section
        elements.sections.forEach(section => {
            if (section.id === `${tabId}-section`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Exit fullscreen if switching away from slides
        if (tabId !== 'slides' && state.isFullscreen) {
            exitFullscreen();
        }

        // Action-specific rendering updates
        if (tabId === 'dashboard') {
            updateProgressStats();
            renderDashboardModules();
        } else if (tabId === 'slides') {
            renderActiveSlide();
        } else if (tabId === 'manuals') {
            renderManuals();
        } else if (tabId === 'exercises') {
            renderExercisesList();
            renderActiveExercise();
        }
    }

    // --- Dashboard logic ---
    function setupDashboard() {
        renderDashboardModules();
    }

    function renderDashboardModules() {
        if (!elements.modulesGrid) return;
        elements.modulesGrid.innerHTML = '';
        
        Object.values(ACADEMY_DATA.modules).forEach(mod => {
            const card = document.createElement('div');
            card.className = 'glass-card module-card';
            
            // Calculate module exercises progress
            const moduleExercises = ACADEMY_DATA.manuals.exercises.filter(ex => ex.topic === mod.id);
            const completedInModule = moduleExercises.filter(ex => state.completedExercises.includes(ex.id)).length;
            const progressPercent = moduleExercises.length > 0 ? Math.round((completedInModule / moduleExercises.length) * 100) : 0;

            card.innerHTML = `
                <div>
                    <div class="module-meta">
                        <span class="module-number">${mod.id.toUpperCase()}</span>
                        <span class="module-time"><i class="fa-regular fa-clock"></i> ${mod.time}</span>
                    </div>
                    <h3 class="module-title">${mod.title}</h3>
                    <p class="module-desc">${mod.desc}</p>
                    <div style="margin-bottom: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem; color: var(--text-secondary);">
                            <span>Ejercicios Prácticos</span>
                            <span>${completedInModule}/${moduleExercises.length} (${progressPercent}%)</span>
                        </div>
                        <div style="height: 4px; background: var(--bg-tertiary); border-radius: 2px; overflow: hidden;">
                            <div style="width: ${progressPercent}%; height: 100%; background: var(--accent-gradient);"></div>
                        </div>
                    </div>
                </div>
                <div class="module-actions">
                    <button class="btn btn-primary btn-start-slide" data-module="${mod.id}">
                        <i class="fa-solid fa-play"></i> Presentación
                    </button>
                    <button class="btn btn-secondary btn-start-ex" data-module="${mod.id}">
                        <i class="fa-solid fa-dumbbell"></i> Prácticos
                    </button>
                </div>
            `;
            
            // Add click events
            card.querySelector('.btn-start-slide').addEventListener('click', () => {
                state.activeSlideModule = mod.id;
                state.activeSlideIndex = 0;
                elements.slideModuleSelect.value = mod.id;
                switchTab('slides');
            });

            card.querySelector('.btn-start-ex').addEventListener('click', () => {
                elements.exerciseTopicSelect.value = mod.id;
                const firstEx = ACADEMY_DATA.manuals.exercises.find(ex => ex.topic === mod.id);
                if (firstEx) {
                    state.activeExerciseId = firstEx.id;
                }
                switchTab('exercises');
            });

            elements.modulesGrid.appendChild(card);
        });
    }

    function updateProgressStats() {
        const totalExercises = ACADEMY_DATA.manuals.exercises.length;
        const completedCount = state.completedExercises.length;
        const percent = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

        if (elements.completedStatsCount) {
            elements.completedStatsCount.textContent = `${completedCount}/${totalExercises}`;
        }
        if (elements.completedStatsPercent) {
            elements.completedStatsPercent.textContent = `${percent}% Completado`;
        }
    }

    // --- Slides logic ---
    function setupSlides() {
        if (!elements.slideModuleSelect) return;
        
        // Populate module select dropdown
        elements.slideModuleSelect.innerHTML = '';
        Object.values(ACADEMY_DATA.modules).forEach(mod => {
            const opt = document.createElement('option');
            opt.value = mod.id;
            opt.textContent = mod.title;
            elements.slideModuleSelect.appendChild(opt);
        });

        // Event Listeners
        elements.slideModuleSelect.addEventListener('change', (e) => {
            state.activeSlideModule = e.target.value;
            state.activeSlideIndex = 0;
            renderActiveSlide();
        });

        elements.slidePrevBtn.addEventListener('click', prevSlide);
        elements.slideNextBtn.addEventListener('click', nextSlide);
        elements.slideFullscreenBtn.addEventListener('click', toggleFullscreen);
        
        if (elements.speakerNotesBtn) {
            elements.speakerNotesBtn.addEventListener('click', () => {
                elements.speakerNotesBox.classList.toggle('active');
                elements.speakerNotesBtn.classList.toggle('btn-primary');
            });
        }
    }

    function renderActiveSlide() {
        const slidesList = ACADEMY_DATA.slides[state.activeSlideModule] || [];
        const slide = slidesList[state.activeSlideIndex];
        
        if (!slide || !elements.slideViewport) return;

        elements.slideViewport.innerHTML = '';

        const slideElement = document.createElement('div');
        slideElement.className = 'slide-container';

        let innerContent = '';
        if (slide.layout === 'title') {
            innerContent = `
                <div class="slide-content slide-title-layout active" style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; gap: 1rem;">
                    <h1 style="font-size: 3rem; color: #be141e; margin-bottom: 0.5rem; font-weight: 800; text-shadow: 0 0 15px rgba(190,20,30,0.15);">${slide.title}</h1>
                    <p style="font-size: 1.25rem; color: var(--text-primary); max-width: 800px; font-weight: 500;">${slide.subtitle || ''}</p>
                    <div style="border-top: 1px solid var(--glass-border); padding-top: 1rem; margin-top: 1rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                        ${slide.author || ''}
                    </div>
                </div>
            `;
        } else if (slide.layout === 'content') {
            const imgSrc = `images/${slide.image}`;
            innerContent = `
                <div class="slide-content slide-grid-layout active" style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 2rem; align-items: center; width: 100%; height: 100%;">
                    <div class="slide-body-text" style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: var(--text-primary); line-height: 1.45; text-align: justify; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                        <h2 style="font-size: 1.8rem; font-family: 'Outfit', sans-serif; color: #be141e; margin-bottom: 0.75rem; font-weight: 700; border-left: 4px solid #be141e; padding-left: 0.75rem;">${slide.title}</h2>
                        <div style="overflow-y: auto; max-height: 380px; padding-right: 0.5rem;">
                            ${slide.text || ''}
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <div class="slide-visual-element" style="width: 100%; max-width: 380px; aspect-ratio: 1; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); box-shadow: 0 10px 25px rgba(0,0,0,0.5); background: #0b0f19; padding: 0;">
                            <img src="${imgSrc}" style="width: 100%; height: 100%; object-fit: cover;" alt="${slide.title}">
                        </div>
                    </div>
                </div>
            `;
        }

        slideElement.innerHTML = innerContent;
        elements.slideViewport.appendChild(slideElement);

        // Update metadata and progress
        const total = slidesList.length;
        const current = state.activeSlideIndex + 1;
        const progress = total > 0 ? (current / total) * 100 : 0;
        
        elements.slideProgressBar.style.width = `${progress}%`;
        elements.slideNumberDisplay.textContent = `${current} / ${total}`;
        
        if (elements.speakerNotesBox) {
            elements.speakerNotesBox.innerHTML = `<strong>Notas del Expositor:</strong><br>${slide.notes || 'No hay notas adicionales para esta diapositiva.'}`;
        }

        // Enable/Disable buttons
        elements.slidePrevBtn.disabled = state.activeSlideIndex === 0;
        
        if (state.activeSlideIndex === total - 1) {
            elements.slideNextBtn.disabled = false;
            elements.slideNextBtn.innerHTML = `Ir a Ejercicios <i class="fa-solid fa-dumbbell"></i>`;
            elements.slideNextBtn.classList.remove('btn-primary');
            elements.slideNextBtn.classList.add('btn-success');
        } else {
            elements.slideNextBtn.disabled = false;
            elements.slideNextBtn.innerHTML = `Siguiente <i class="fa-solid fa-arrow-right"></i>`;
            elements.slideNextBtn.classList.remove('btn-success');
            elements.slideNextBtn.classList.add('btn-primary');
        }
    }

    function nextSlide() {
        const slidesList = ACADEMY_DATA.slides[state.activeSlideModule] || [];
        if (state.activeSlideIndex < slidesList.length - 1) {
            state.activeSlideIndex++;
            renderActiveSlide();
        } else {
            // Ir a la pestaña de ejercicios
            if (elements.exerciseTopicSelect) {
                elements.exerciseTopicSelect.value = state.activeSlideModule;
            }
            const firstEx = ACADEMY_DATA.manuals.exercises.find(ex => ex.topic === state.activeSlideModule);
            if (firstEx) {
                state.activeExerciseId = firstEx.id;
            }
            switchTab('exercises');
        }
    }

    document.addEventListener('keydown', (e) => {
        if (state.activeTab === 'slides') {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen();
            }
        }
    });

    function prevSlide() {
        if (state.activeSlideIndex > 0) {
            state.activeSlideIndex--;
            renderActiveSlide();
        }
    }

    function toggleFullscreen() {
        if (!state.isFullscreen) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    }

    function enterFullscreen() {
        state.isFullscreen = true;
        document.body.classList.add('fullscreen-mode');
        elements.slideFullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i> Salir Pantalla Completa';
        
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) docEl.requestFullscreen();
    }

    function exitFullscreen() {
        state.isFullscreen = false;
        document.body.classList.remove('fullscreen-mode');
        elements.slideFullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i> Pantalla Completa';
        
        if (document.exitFullscreen && document.fullscreenElement) {
            document.exitFullscreen();
        }
    }

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && state.isFullscreen) {
            exitFullscreen();
        }
    });

    // --- Manuals logic ---
    function setupManuals() {
        renderManuals();
        
        if (elements.manualSearch) {
            elements.manualSearch.addEventListener('input', (e) => {
                state.searchQuery = e.target.value.toLowerCase();
                renderManuals();
            });
        }
    }

    function renderManuals() {
        if (!elements.manualToc || !elements.manualContent) return;

        elements.manualToc.innerHTML = '';
        elements.manualContent.innerHTML = '';

        const filteredManuals = ACADEMY_DATA.manuals.use.filter(manual => {
            return manual.title.toLowerCase().includes(state.searchQuery) || 
                   manual.content.toLowerCase().includes(state.searchQuery);
        });

        if (filteredManuals.length === 0) {
            elements.manualContent.innerHTML = `<div class="glass-card"><p>No se encontraron manuales con los criterios de búsqueda.</p></div>`;
            return;
        }

        filteredManuals.forEach((manual, index) => {
            const tocLi = document.createElement('li');
            tocLi.innerHTML = `<a href="#${manual.id}" class="toc-link ${index === 0 ? 'active' : ''}">${manual.title}</a>`;
            
            tocLi.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                
                const targetEl = document.getElementById(manual.id);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            elements.manualToc.appendChild(tocLi);

            const article = document.createElement('article');
            article.className = 'manual-article';
            article.id = manual.id;
            article.innerHTML = `
                <h2>${manual.title}</h2>
                <div>${manual.content}</div>
            `;
            elements.manualContent.appendChild(article);
        });

        setupCopyButtons();
    }

    function setupCopyButtons() {
        document.querySelectorAll('.code-container').forEach(container => {
            const btn = container.querySelector('.btn-copy');
            const code = container.querySelector('code').innerText;
            
            if (btn) {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText(code).then(() => {
                        const originalText = btn.innerHTML;
                        btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--success)"></i> Copiado';
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                        }, 2000);
                    });
                });
            }
        });
    }

    // --- Exercises logic ---
    function setupExercises() {
        if (!elements.exerciseTopicSelect) return;

        elements.exerciseTopicSelect.innerHTML = '<option value="all">Todos los Módulos</option>';
        Object.values(ACADEMY_DATA.modules).forEach(mod => {
            const opt = document.createElement('option');
            opt.value = mod.id;
            opt.textContent = mod.title;
            elements.exerciseTopicSelect.appendChild(opt);
        });

        elements.exerciseTopicSelect.addEventListener('change', () => {
            renderExercisesList();
        });

        renderExercisesList();
        renderActiveExercise();
    }

    function renderExercisesList() {
        if (!elements.exerciseListGroup) return;

        elements.exerciseListGroup.innerHTML = '';
        const filter = elements.exerciseTopicSelect.value;

        const filteredExercises = ACADEMY_DATA.manuals.exercises.filter(ex => {
            return filter === 'all' || ex.topic === filter;
        });

        filteredExercises.forEach(ex => {
            const isCompleted = state.completedExercises.includes(ex.id);
            const isActive = state.activeExerciseId === ex.id;
            
            const btn = document.createElement('button');
            btn.className = `exercise-item-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            btn.innerHTML = `
                <div>
                    <div style="font-weight: 600; font-size: 0.9rem;">${ex.title}</div>
                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Mód: ${ex.topic}</span>
                </div>
                <div class="exercise-status-dot"></div>
            `;

            btn.addEventListener('click', () => {
                state.activeExerciseId = ex.id;
                document.querySelectorAll('.exercise-item-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderActiveExercise();
            });

            elements.exerciseListGroup.appendChild(btn);
        });
    }

    function renderActiveExercise() {
        if (!elements.exerciseDetailsPane) return;

        const exercise = ACADEMY_DATA.manuals.exercises.find(ex => ex.id === state.activeExerciseId);
        
        if (!exercise) {
            elements.exerciseDetailsPane.innerHTML = `<div class="glass-card"><p>Selecciona un ejercicio de la lista.</p></div>`;
            return;
        }

        const isCompleted = state.completedExercises.includes(exercise.id);

        elements.exerciseDetailsPane.innerHTML = `
            <div class="glass-card exercise-header">
                <div class="exercise-title-group">
                    <div class="exercise-meta-tags" style="margin-bottom: 0.5rem;">
                        <span class="meta-tag topic-tag">${exercise.topic.toUpperCase()}</span>
                        <span class="meta-tag difficulty-${exercise.difficulty}">${exercise.difficultyText}</span>
                    </div>
                    <h2>${exercise.title}</h2>
                </div>
                <button class="btn btn-complete-task ${isCompleted ? 'completed' : ''}" id="btn-toggle-complete">
                    <i class="fa-solid ${isCompleted ? 'fa-square-check' : 'fa-square'}"></i> 
                    ${isCompleted ? 'Completado' : 'Marcar Completado'}
                </button>
            </div>

            <div class="glass-card exercise-section-card">
                <h3>Objetivo</h3>
                <p style="color: var(--text-secondary); font-size: 1rem;">${exercise.objective}</p>
            </div>

            <div class="glass-card exercise-section-card">
                <h3>Instrucciones del Ejercicio</h3>
                <div style="color: var(--text-secondary); line-height: 1.8;">${exercise.instructions}</div>
            </div>

            <div class="glass-card exercise-section-card">
                <h3>Manual de Solución y Guía Paso a Paso</h3>
                <div style="color: var(--text-secondary); line-height: 1.8;">${exercise.solution}</div>
            </div>
        `;

        const completeBtn = document.getElementById('btn-toggle-complete');
        if (completeBtn) {
            completeBtn.addEventListener('click', () => {
                toggleExerciseCompleted(exercise.id);
            });
        }

        // Render navigation button at the bottom of the exercise card
        const navFooter = document.createElement('div');
        navFooter.className = 'exercise-navigation-footer';
        navFooter.style.cssText = 'display: flex; justify-content: flex-end; margin-top: 1.5rem;';

        const moduleExercises = ACADEMY_DATA.manuals.exercises.filter(ex => ex.topic === exercise.topic);
        const currentIdx = moduleExercises.findIndex(ex => ex.id === exercise.id);

        if (currentIdx < moduleExercises.length - 1) {
            // Next Exercise Button
            const nextExBtn = document.createElement('button');
            nextExBtn.className = 'btn btn-primary';
            nextExBtn.innerHTML = `Siguiente Ejercicio <i class="fa-solid fa-arrow-right"></i>`;
            nextExBtn.addEventListener('click', () => {
                state.activeExerciseId = moduleExercises[currentIdx + 1].id;
                renderActiveExercise();
                renderExercisesList();
            });
            navFooter.appendChild(nextExBtn);
        } else {
            // Last exercise of the module: Next Module!
            const moduleIds = Object.keys(ACADEMY_DATA.modules);
            const currentModIdx = moduleIds.indexOf(exercise.topic);

            const nextModBtn = document.createElement('button');
            
            if (currentModIdx < moduleIds.length - 1) {
                const nextModId = moduleIds[currentModIdx + 1];
                const nextModName = ACADEMY_DATA.modules[nextModId].title.split(': ')[1];
                nextModBtn.className = 'btn btn-success'; // Green success color
                nextModBtn.innerHTML = `Comenzar Módulo Siguiente: ${nextModName} <i class="fa-solid fa-angles-right"></i>`;
                nextModBtn.addEventListener('click', () => {
                    state.activeSlideModule = nextModId;
                    state.activeSlideIndex = 0;
                    if (elements.slideModuleSelect) {
                        elements.slideModuleSelect.value = nextModId;
                    }
                    switchTab('slides');
                });
            } else {
                // Last exercise of the last module
                nextModBtn.className = 'btn btn-primary';
                nextModBtn.innerHTML = `Finalizar Capacitación (Ir al Panel) <i class="fa-solid fa-house-chimney"></i>`;
                nextModBtn.addEventListener('click', () => {
                    switchTab('dashboard');
                });
            }
            navFooter.appendChild(nextModBtn);
        }

        elements.exerciseDetailsPane.appendChild(navFooter);
    }

    function toggleExerciseCompleted(id) {
        const index = state.completedExercises.indexOf(id);
        
        if (index === -1) {
            state.completedExercises.push(id);
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981']
                });
            }
        } else {
            state.completedExercises.splice(index, 1);
        }

        localStorage.setItem('completed_exercises', JSON.stringify(state.completedExercises));
        updateProgressStats();
        renderExercisesList();
        renderActiveExercise();
    }

    function setupGlobalEvents() {}

    init();
});
