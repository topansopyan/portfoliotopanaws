/* ============================================
   Main — bootstraps interactivity & effects
   ============================================ */
(function () {
    'use strict';

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- 1. Render dynamic components ---------- */
    renderInto('skillsGrid', SITE_DATA.skills, SkillCard);
    renderInto('projectsGrid', SITE_DATA.projects, ProjectCard);
    renderInto('timeline', SITE_DATA.experience, ExperienceItem);
    renderInto('testimonialsGrid', SITE_DATA.testimonials, TestimonialCard);

    /* ---------- 2. Current year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- 3. Typewriter effect ---------- */
    const twEl = document.getElementById('typewriter');
    if (twEl) {
        const words = SITE_DATA.typewriter;
        let wi = 0, ci = 0, deleting = false;

        function tick() {
            const word = words[wi];
            twEl.textContent = word.slice(0, ci);

            if (!deleting && ci < word.length) {
                ci++;
                setTimeout(tick, 90);
            } else if (!deleting && ci === word.length) {
                deleting = true;
                setTimeout(tick, 1600);
            } else if (deleting && ci > 0) {
                ci--;
                setTimeout(tick, 45);
            } else {
                deleting = false;
                wi = (wi + 1) % words.length;
                setTimeout(tick, 350);
            }
        }
        tick();
    }

    /* ---------- 4. Navbar: scroll state + progress ---------- */
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scrollProgress');

    function onScroll() {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle('is-scrolled', y > 40);

        if (progress) {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- 5. Mobile nav toggle ---------- */
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    function closeMenu() {
        if (!menu || !toggle) return;
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu');
    }

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const open = menu.classList.toggle('is-open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
        });
        menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    }

    /* ---------- 6. Scroll reveal (IntersectionObserver) ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !prefersReduced) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- 7. Animated stat counters ---------- */
    const stats = document.querySelectorAll('.stat__num');
    if ('IntersectionObserver' in window && !prefersReduced) {
        const statIO = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    animateCount(entry.target);
                    statIO.unobserve(entry.target);
                });
            },
            { threshold: 0.5 }
        );
        stats.forEach((s) => statIO.observe(s));
    } else {
        stats.forEach((s) => (s.textContent = s.dataset.target));
    }

    function animateCount(el) {
        const target = parseInt(el.dataset.target, 10) || 0;
        const duration = 1600;
        const start = performance.now();

        function step(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            el.textContent = Math.floor(eased * target).toLocaleString('id-ID');
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target.toLocaleString('id-ID');
        }
        requestAnimationFrame(step);
    }

    /* ---------- 7b. Animated skill progress bars ---------- */
    const bars = document.querySelectorAll('.skill-bar__fill');
    if ('IntersectionObserver' in window && !prefersReduced) {
        const barIO = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.style.width = entry.target.dataset.level + '%';
                    barIO.unobserve(entry.target);
                });
            },
            { threshold: 0.4 }
        );
        bars.forEach((b) => barIO.observe(b));
    } else {
        bars.forEach((b) => (b.style.width = b.dataset.level + '%'));
    }

    /* ---------- 7c. Contact form validation ---------- */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (form) {
        const fields = {
            name: form.querySelector('#name'),
            email: form.querySelector('#email'),
            message: form.querySelector('#message')
        };
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function setError(key, msg) {
            const input = fields[key];
            const wrap = input.closest('.field');
            const err = form.querySelector('.field__error[data-for="' + key + '"]');
            if (msg) {
                wrap.classList.add('has-error');
                if (err) err.textContent = msg;
            } else {
                wrap.classList.remove('has-error');
                if (err) err.textContent = '';
            }
            return !msg;
        }

        function validateField(key) {
            const val = fields[key].value.trim();
            if (key === 'name') {
                if (!val) return setError('name', 'Nama wajib diisi.');
                if (val.length < 2) return setError('name', 'Nama minimal 2 karakter.');
                return setError('name', '');
            }
            if (key === 'email') {
                if (!val) return setError('email', 'Email wajib diisi.');
                if (!emailRe.test(val)) return setError('email', 'Format email tidak valid.');
                return setError('email', '');
            }
            if (key === 'message') {
                if (!val) return setError('message', 'Pesan wajib diisi.');
                if (val.length < 10) return setError('message', 'Pesan minimal 10 karakter.');
                return setError('message', '');
            }
            return true;
        }

        Object.keys(fields).forEach((key) => {
            fields[key].addEventListener('input', () => {
                if (fields[key].closest('.field').classList.contains('has-error')) {
                    validateField(key);
                }
            });
            fields[key].addEventListener('blur', () => validateField(key));
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const results = Object.keys(fields).map((k) => validateField(k));
            const valid = results.every(Boolean);

            if (status) {
                status.classList.remove('is-success', 'is-error');
            }

            if (!valid) {
                if (status) {
                    status.textContent = 'Mohon perbaiki isian yang ditandai.';
                    status.classList.add('is-error');
                }
                return;
            }

            // Client-side only (no backend): simulate success
            if (status) {
                status.textContent = 'Terima kasih! Pesan Anda berhasil dikirim.';
                status.classList.add('is-success');
            }
            form.reset();
        });
    }

    /* ---------- 7d. Back to top ---------- */
    const toTop = document.getElementById('toTop');
    if (toTop) {
        window.addEventListener(
            'scroll',
            () => toTop.classList.toggle('is-visible', window.scrollY > 500),
            { passive: true }
        );
        toTop.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
        );
    }

    /* ---------- 8. Active nav link on scroll (scrollspy) ---------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navLinks.forEach((l) =>
                            l.classList.toggle('is-active', l.getAttribute('href') === '#' + id)
                        );
                    }
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach((s) => spy.observe(s));
    }

    /* ---------- 9. Lightweight particle field ---------- */
    const canvas = document.getElementById('particles');
    if (canvas && !prefersReduced) {
        const ctx = canvas.getContext('2d');
        let w, h, particles, raf;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            const count = Math.min(90, Math.floor((w * h) / 18000));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.6 + 0.4
            }));
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(140, 170, 255, 0.6)';
                ctx.fill();

                // connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x, dy = p.y - q.y;
                    const dist = dx * dx + dy * dy;
                    if (dist < 13000) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(108, 150, 255, ${0.12 * (1 - dist / 13000)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        }

        resize();
        draw();
        window.addEventListener('resize', () => {
            cancelAnimationFrame(raf);
            resize();
            draw();
        });
    }
})();
