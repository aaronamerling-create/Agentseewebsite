// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Assessment request forms: compose an email with the website filled in
document.querySelectorAll('.assess-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const site = form.querySelector('input').value.trim();
    if (!site) return;
    const subject = `AgentSee Assessment request: ${site}`;
    const body = [
      'Hi AgentSee,',
      '',
      "I'd like a free Assessment.",
      '',
      `Website: ${site}`,
      'Company:',
      'Main competitors (optional):',
      '',
    ].join('\r\n');
    window.location.href = `mailto:aaronamerling@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

// 60-second self-check
const checkCards = document.querySelectorAll('[data-check]');
const checkText = document.getElementById('checkResultText');

function updateCheckResult() {
  if (!checkText) return;
  const answers = [...checkCards]
    .map((card) => card.querySelector('button[aria-pressed="true"]'))
    .filter(Boolean)
    .map((btn) => btn.dataset.answer);
  const total = checkCards.length;
  const yes = answers.filter((a) => a === 'yes').length;
  const gaps = answers.length - yes;

  if (answers.length < total) {
    checkText.innerHTML = `<strong>${answers.length} of ${total}</strong> answered. Keep going.`;
  } else if (gaps === 0) {
    checkText.innerHTML = `<strong>Yes to all ${total}.</strong> Confident. The Assessment will confirm it with evidence, and show how you compare with similar companies.`;
  } else {
    checkText.innerHTML = `<strong>${gaps} of ${total}</strong> stages are "not sure" or "no". Each one is a place where a buyer's agent can drop you without anyone noticing. The free Assessment checks all six from the outside.`;
  }
}

checkCards.forEach((card) => {
  card.querySelectorAll('button[data-answer]').forEach((btn) => {
    btn.addEventListener('click', () => {
      card.querySelectorAll('button[data-answer]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      updateCheckResult();
    });
  });
});

// Mobile sticky CTA: hide while the hero form or final CTA is on screen
const stickyCta = document.querySelector('.sticky-cta');
const ctaTargets = document.querySelectorAll('.hero, #contact');
if (stickyCta && 'IntersectionObserver' in window && ctaTargets.length) {
  const visible = new Set();
  const stickyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    });
    stickyCta.classList.toggle('is-hidden', visible.size > 0);
  });
  ctaTargets.forEach((el) => stickyObserver.observe(el));
}
