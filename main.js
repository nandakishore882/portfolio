const projects = {
    signature: {
        title: 'Signature Recognition using Deep Learning',
        date: 'May 2024',
        type: 'Deep Learning · Final Year Project',
        abstract: `This project presents a comparative analysis of deep learning approaches for signature recognition, evaluating CNNs, Siamese networks, LSTM, Capsule networks, and RBF architectures. Essential preprocessing steps — including noise reduction, image normalization, and data augmentation — were applied to improve model robustness. Each architecture was assessed across accuracy, scalability, and computational efficiency to identify the best-performing model for real-world signature verification. The study also addresses dataset accessibility and proposes directions for building more diverse signature datasets to advance future research.`,
        results: [
            { src: 'sign/real.png', caption: 'Model accuracy comparison', full: false },
            { src: 'sign/forged.png', caption: 'Confusion matrix', full: false },
            { src: 'sign/accuracy.png', caption: 'Sample verification output', full: true },
        ],
        tags: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'NumPy', 'Matplotlib'],
        github: 'https://github.com/nandakishore882/Signature-Recognition-Project',
        demo: 'https://signature-recognition-project.vercel.app/'
    },
    crop: {
        title: 'Crop Prediction using Machine Learning',
        date: 'Jun 2023',
        type: 'Machine Learning · Academic Project',
        abstract: `Crop prediction is a critical challenge in modern agriculture. This project applies machine learning algorithms to build a crop recommendation system trained on environmental data — including soil composition, historical weather patterns, and climatic conditions. The study evaluates multiple ML models for accuracy in crop type classification and yield estimation, integrating diverse data sources into a unified predictive pipeline. The result is a real-time web interface that empowers farmers with data-driven crop recommendations, optimizing resource allocation and improving agricultural productivity.`,
        results: [
            { src: 'crop/accuracy.png', caption: 'Feature importance plot', full: false },
            { src: 'crop/rfm.png', caption: 'Model performance metrics', full: false },
            { src: 'crop/result.png', caption: 'Web interface — prediction UI', full: true },
        ],
        tags: ['Python', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy', 'Machine Learning'],
        github: 'https://github.com/nandakishore882/Crop-Prediction',
        demo: 'https://crop-prediction-ksm5.onrender.com/'
    }
};

function openDrawer(key) {
    const p = projects[key];

    document.getElementById('drawerHeaderTitle').textContent = p.title;
    document.getElementById('drawerDate').textContent = p.date;
    document.getElementById('drawerType').textContent = p.type;
    document.getElementById('drawerAbstract').textContent = p.abstract;
    document.getElementById('drawerGithub').href = p.github;
    document.getElementById('drawerDemo').href = p.demo;

    // results grid
    document.getElementById('drawerResultsGrid').innerHTML = p.results.map(r => `
          <div class="result-img-wrap ${r.full ? 'img-full' : ''}" onclick="openLightbox('${r.src}'); event.stopPropagation();">
            <img src="${r.src}" alt="${r.caption}" loading="lazy">
            <div class="result-img-caption">${r.caption}</div>
          </div>
        `).join('');

    // tags
    document.getElementById('drawerTags').innerHTML = p.tags.map(t =>
        `<span class="tech-tag">${t}</span>`
    ).join('');

    document.getElementById('projectDrawer').classList.add('open');
    document.getElementById('drawerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    const demoBtn = document.getElementById('drawerDemo');
    demoBtn.style.visibility = p.demo ? 'visible' : 'hidden';
    if (p.demo) demoBtn.href = p.demo;
}

function closeDrawer() {
    document.getElementById('projectDrawer').classList.remove('open');
    document.getElementById('drawerOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeLightbox(); closeDrawer(); }
});


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => observer.observe(sec));
    const resume = document.querySelector('a[download]');
    if (resume) {
        const now = new Date();
        const date = now.toISOString().slice(0, 10); // 2026-03-08
        resume.setAttribute('download', `NandaKishore_Resume_${date}.pdf`);
    }
});



