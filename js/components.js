/* ============================================
   Reusable render functions (components)
   Keeps markup generation in one place.
   ============================================ */

/** Build a skill category card with animated progress bars */
function SkillCard({ icon, title, items }) {
    const el = document.createElement('article');
    el.className = 'glass skill-card reveal';
    el.innerHTML = `
        <div class="skill-card__head">
            <span class="skill-card__icon">${icon}</span>
            <h3 class="skill-card__title">${title}</h3>
        </div>
        <div class="skill-bars">
            ${items
                .map(
                    (it) => `
                <div class="skill-bar">
                    <div class="skill-bar__top">
                        <span class="skill-bar__name">${it.name}</span>
                        <span class="skill-bar__pct">${it.level}%</span>
                    </div>
                    <div class="skill-bar__track">
                        <span class="skill-bar__fill" data-level="${it.level}"></span>
                    </div>
                </div>`
                )
                .join('')}
        </div>
    `;
    return el;
}

/** Build a project card element */
function ProjectCard({ emoji, title, desc, tags, demo, code }) {
    const el = document.createElement('article');
    el.className = 'glass project-card reveal';
    el.innerHTML = `
        <div class="project-card__media">${emoji}</div>
        <div class="project-card__body">
            <h3 class="project-card__title">${title}</h3>
            <p class="project-card__desc">${desc}</p>
            <div class="project-card__tags">
                ${tags.map((t) => `<span>${t}</span>`).join('')}
            </div>
            <div class="project-card__links">
                <a href="${demo}" target="_blank" rel="noopener">
                    Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </a>
                <a href="${code}" target="_blank" rel="noopener">
                    GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
                </a>
            </div>
        </div>
    `;
    return el;
}

/** Build a timeline experience item */
function ExperienceItem({ company, role, period, desc }, index) {
    const el = document.createElement('div');
    el.className = 'timeline__item reveal';
    el.innerHTML = `
        <span class="timeline__dot"></span>
        <div class="glass timeline__card">
            <span class="timeline__period">${period}</span>
            <h3 class="timeline__role">${role}</h3>
            <p class="timeline__company">${company}</p>
            <p class="timeline__desc">${desc}</p>
        </div>
    `;
    return el;
}

/** Build a testimonial card */
function TestimonialCard({ name, role, avatar, quote }) {
    const el = document.createElement('article');
    el.className = 'glass testimonial reveal';
    el.innerHTML = `
        <span class="testimonial__mark">\u201C</span>
        <p class="testimonial__quote">${quote}</p>
        <div class="testimonial__author">
            <span class="testimonial__avatar">${avatar}</span>
            <div>
                <strong class="testimonial__name">${name}</strong>
                <span class="testimonial__role">${role}</span>
            </div>
        </div>
    `;
    return el;
}

/** Render a list of components into a container */
function renderInto(containerId, items, factory) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const frag = document.createDocumentFragment();
    items.forEach((item, i) => frag.appendChild(factory(item, i)));
    container.appendChild(frag);
}
