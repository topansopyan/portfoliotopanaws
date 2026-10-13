/* ============================================
   Site Data — single source of truth
   Edit content here without touching markup.
   ============================================ */

const SITE_DATA = {
    typewriter: [
        'Web Developer',
        'Full-Stack AI Engineer',
        'Educator',
        'Problem Solver'
    ],

    /* Skills grouped by category, each with a proficiency level (%) */
    skills: [
        {
            icon: '🎨',
            title: 'Frontend',
            items: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'TypeScript', level: 88 },
                { name: 'Framer Motion', level: 85 }
            ]
        },
        {
            icon: '⚙️',
            title: 'Backend',
            items: [
                { name: 'Node.js', level: 92 },
                { name: 'Express.js', level: 90 },
                { name: 'Python', level: 88 },
                { name: 'FastAPI', level: 84 }
            ]
        },
        {
            icon: '🗄️',
            title: 'Database',
            items: [
                { name: 'PostgreSQL', level: 88 },
                { name: 'MongoDB', level: 90 },
                { name: 'Firebase', level: 85 }
            ]
        },
        {
            icon: '🤖',
            title: 'AI & Cloud',
            items: [
                { name: 'OpenAI API', level: 93 },
                { name: 'LangChain', level: 86 },
                { name: 'Docker', level: 84 },
                { name: 'AWS', level: 82 },
                { name: 'Vercel', level: 90 }
            ]
        }
    ],

    projects: [
        {
            emoji: '✅',
            title: 'AI Task Manager',
            desc: 'Aplikasi produktivitas cerdas dengan bantuan AI untuk melakukan prioritas dan penjadwalan tugas.',
            tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
            demo: '#',
            code: 'https://github.com/topansopyan'
        },
        {
            emoji: '📊',
            title: 'DevOps Monitoring Dashboard',
            desc: 'Dashboard monitoring server dan analitik secara real-time dengan grafik interaktif.',
            tags: ['React', 'Express.js', 'Docker', 'Chart.js'],
            demo: '#',
            code: 'https://github.com/topansopyan'
        },
        
{
    emoji: '🏫',
    title: 'APP_Kesiswaan',
    desc: 'Aplikasi manajemen kesiswaan sekolah untuk mengelola pelanggaran siswa, pembinaan, home visit, keterlambatan, program kerja, ekstrakurikuler, dan pemilihan OSIS dalam satu dashboard terintegrasi.',
    tags: ['PHP Native', 'MySQL', 'Bootstrap 5', 'JavaScript', 'Dompdf', 'PhpSpreadsheet'],
    demo: '#',
    code: 'https://github.com/topansopyan'
}
    ],

    experience: [
        {
            company: 'TopOneTeach Solutions',
            role: 'Junior Full Stack Engineer',
            period: '2024 — Sekarang',
            desc: 'Memimpin pengembangan platform full-stack bertenaga AI dengan arsitektur bersih dan scalable.'
        },
        {
            company: 'Teacher Ambasador',
            role: 'Ai Hackathon',
            period: '2025 — 2027',
            desc: 'Membangun dan mengembangkan media pembelajaran berbasis AI.'
        },
        {
            company: 'CloudNest AI',
            role: 'Junior Software Engineer',
            period: '2025 — 2026',
            desc: 'Mengembangkan fitur aplikasi dan layanan cloud, serta integrasi API berbasis AI.'
        }
    ],

testimonials: [
        {
            name: 'Ahmad Fauzi',
            role: 'CTO, Prestasi Junior Indonesia',
            avatar: 'AF',
            quote: 'Topan is an exceptional engineer who consistently delivers beyond expectations. His ability to bridge AI capabilities with practical user needs is remarkable. He transformed our platform\u2019s intelligence layer in a way that measurably improved user engagement.'
        },
        {
            name: 'Siti Rahayu',
            role: 'Product Manager, PT Indo',
            avatar: 'SR',
            quote: 'Working with Topan was a pleasure. He has a rare talent for turning complex data into clear, actionable insights. His dashboards became the go-to tool for our entire leadership team, and he always brought ideas that went far beyond the initial brief.'
        },
        {
            name: 'Budi Santoso',
            role: 'Lead Engineer, PT. Technesia',
            avatar: 'BS',
            quote: 'Topan\u2019s technical depth combined with his product mindset makes him stand out. He delivered a full-stack AI feature in record time without compromising code quality. I\u2019d recommend him without hesitation to any team looking for a high-impact engineer.'
        }
    ]
};
