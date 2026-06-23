// ===== REPERTOIRE DATA =====
const repertoire = [
  // ── 뮤지컬 (같은 작품끼리 묶음) ─────────────────────────────────
  { num: 1,  title: "Seasons of Love",                     source: "뮤지컬 렌트",                      genre: "뮤지컬" },
  { num: 2,  title: "One Short Day",                       source: "뮤지컬 위키드",                    genre: "뮤지컬" },
  { num: 3,  title: "Defying Gravity",                     source: "뮤지컬 위키드",                    genre: "뮤지컬" },
  { num: 4,  title: "All I Ask of You",                    source: "뮤지컬 오페라의 유령",              genre: "뮤지컬" },
  { num: 5,  title: "지금 이 순간",                        source: "뮤지컬 지킬 앤 하이드",             genre: "뮤지컬" },
  { num: 6,  title: "컨프론테이션",                        source: "뮤지컬 지킬 앤 하이드",             genre: "뮤지컬" },
  { num: 7,  title: "그 날을 기약하며",                    source: "뮤지컬 영웅",                      genre: "뮤지컬" },
  { num: 8,  title: "You Will Be Found",                   source: "뮤지컬 디어 에반 핸슨",             genre: "뮤지컬" },
  { num: 9,  title: "Waving Through a Window",             source: "뮤지컬 디어 에반 핸슨",             genre: "뮤지컬" },
  { num: 10, title: "아라비안 나이트",                     source: "뮤지컬·영화 알라딘",                genre: "뮤지컬" },
  { num: 11, title: "Land of Lola",                        source: "뮤지컬 킹키부츠",                  genre: "뮤지컬" },
  { num: 12, title: "Everybody Say Yeah",                  source: "뮤지컬 킹키부츠",                  genre: "뮤지컬" },
  { num: 13, title: "C'mon Everybody",                     source: "뮤지컬 올 슉 업",                  genre: "뮤지컬" },
  { num: 14, title: "슈퍼스타",                            source: "뮤지컬 지저스 크라이스트 수퍼스타", genre: "뮤지컬" },
  { num: 15, title: "Steal Your Rock N Roll",              source: "뮤지컬 멤피스",                    genre: "뮤지컬" },
  { num: 16, title: "And I Am Telling You I'm Not Going",  source: "뮤지컬 드림걸즈",                  genre: "뮤지컬" },
  { num: 17, title: "Let It Go",                           source: "뮤지컬 겨울왕국",                  genre: "뮤지컬" },

  // ── 디즈니 ──────────────────────────────────────────────────────
  { num: 18, title: "사랑은 열린 문",    source: "영화 겨울왕국",                    genre: "디즈니" },
  { num: 19, title: "Ring in the Season", source: "올라프의 겨울왕국 어드벤처 OST",  genre: "디즈니" },
  { num: 20, title: "디즈니 메들리",    source: "Disney 곡 모음",                    genre: "디즈니" },

  // ── 팝 ──────────────────────────────────────────────────────────
  { num: 21, title: "Can't Help Falling in Love", source: "Elvis Presley 원곡",        genre: "팝" },
  { num: 22, title: "Try Everything",             source: "영화 주토피아 OST · Shakira", genre: "팝" },
  { num: 23, title: "This Is Me",                 source: "영화 위대한 쇼맨",           genre: "팝" },

  // ── 가요 ──────────────────────────────────────────────────────────
  { num: 24, title: "꽃이 피고 지듯이",       source: "영화 사도 OST · 조승우",       genre: "가요" },
  { num: 25, title: "빙글빙글",               source: "나미",                         genre: "가요" },
  { num: 26, title: "삐에로는 우릴 보고 웃지", source: "김완선",                      genre: "가요" },
  { num: 27, title: "널 사랑하겠어",          source: "—",                            genre: "가요" },
  { num: 28, title: "이제 나만 믿어요",        source: "임영웅",                       genre: "가요" },
  { num: 29, title: "바람의 노래",            source: "소향",                         genre: "가요" },
  { num: 30, title: "라라라",                 source: "SG 워너비",                    genre: "가요" },
  { num: 31, title: "아름다운 나라",          source: "심문희",                       genre: "가요" },
  { num: 32, title: "Welcome to the Show",    source: "DAY6",                         genre: "가요" },
  { num: 33, title: "질풍가도",               source: "유정석 · 애니 쾌걸 근육맨 2세", genre: "가요" },
  { num: 34, title: "깊은 밤을 날아서",       source: "규현",                         genre: "가요" },
  { num: 35, title: "촛불하나",               source: "이문세",                       genre: "가요" },
  { num: 36, title: "붉은노을",               source: "이문세",                       genre: "가요" },
  { num: 37, title: "서울의 달",              source: "김건모",                       genre: "가요" },
  { num: 38, title: "그대 고운 내 사랑",      source: "이정열 / 어반자카파",           genre: "가요" },
  { num: 39, title: "LOVE DAY",               source: "양요섭, 정은지",               genre: "가요" },
  { num: 40, title: "버터플라이",             source: "국가대표 OST",                 genre: "가요" },
  { num: 41, title: "슈퍼스타",               source: "미도와 파라솔",                genre: "가요" },
  { num: 42, title: "새들처럼",               source: "변진섭",                       genre: "가요" },

  // ── 트로트 ──────────────────────────────────────────────────────
  { num: 43, title: "아모르파티",  source: "김연자",        genre: "트로트" },
  { num: 44, title: "아파트",      source: "윤수일",        genre: "트로트" },
  { num: 45, title: "당신이 좋아", source: "장윤정 / 남진", genre: "트로트" },
  { num: 46, title: "10분 내로",   source: "이찬원",        genre: "트로트" },

  // ── 팝페라 ──────────────────────────────────────────────────────
  { num: 47, title: "Il libro dell'amor", source: "팝페라",                       genre: "팝페라" },
  { num: 48, title: "Champions",          source: "조수미 · 2002 FIFA 월드컵 테마", genre: "팝페라" },

  // ── 민요·기타 ────────────────────────────────────────────────────
  { num: 49, title: "아리랑연곡",  source: "한국 전통민요 메들리", genre: "민요" },
  { num: 50, title: "캐롤 메들리", source: "크리스마스 캐롤 모음", genre: "캐롤" },
];

// ===== RENDER REPERTOIRE =====
function renderRep(filter) {
  const grid = document.getElementById('repGrid');
  const items = filter === 'all' ? repertoire : repertoire.filter(r => {
    if (filter === '민요') return r.genre === '민요' || r.genre === '캐롤';
    return r.genre === filter;
  });
  grid.innerHTML = items.map(r => `
    <div class="rep-item">
      <span class="rep-num">#${String(r.num).padStart(2,'0')}</span>
      <span class="rep-title">${r.title}</span>
      <span class="rep-source">${r.source}</span>
      <span class="rep-genre ${r.genre}">${r.genre}</span>
    </div>
  `).join('');
}

// ===== SCHEDULE DATA =====
const schedule = [
  { date: '2026.7.11', title: '부산 영도 깡깡이 마을 공연', venue: '깡깡이 마을 (부산 영도)', status: 'upcoming' },
  { date: '2026.6.20', title: '수성못 뮤직앤비어 페스티벌', venue: '수성못 (대구)', status: 'past' },
  { date: '2026.5', title: '광안리 발코니 음악회', venue: '부산 수영구', status: 'past' },
  { date: '2026.5', title: '숲속 작은 음악회', venue: '부산 북구', status: 'past' },
  { date: '2026.5', title: '경산 어린이날 큰 잔치', venue: '경산 (경북)', status: 'past' },
  { date: '2026.3', title: 'NC 다이노스 개막식 공연', venue: 'NC 다이노스 구장', status: 'past' },
];

function renderSchedule() {
  const list = document.getElementById('scheduleList');
  if (!list) return;
  list.innerHTML = schedule.map(s => `
    <div class="sched-row">
      <span class="sched-date">${s.date}</span>
      <span class="sched-title">${s.title}</span>
      <span class="sched-venue">${s.venue}</span>
      <span class="sched-badge ${s.status}">${s.status === 'upcoming' ? '예정' : '완료'}</span>
    </div>
  `).join('');
}

// ===== FILTER BUTTONS =====
function initFilters() {
  renderRep('all');
  document.querySelectorAll('.rep-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rep-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRep(btn.dataset.filter);
    });
  });
}

// ===== NAV SCROLL =====
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== CONTACT FORM =====
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`[팀유즈 공연문의] ${data.get('org')} - ${data.get('eventType')}`);
    const body = encodeURIComponent(
`단체/성함: ${data.get('org')}
연락처: ${data.get('phone')}
이메일: ${data.get('email') || '—'}
행사 유형: ${data.get('eventType')}
행사 날짜: ${data.get('eventDate') || '미정'}
행사 장소: ${data.get('venue') || '—'}
예산 규모: ${data.get('budget') || '미정'}

문의 내용:
${data.get('message')}`
    );

    // 메일 클라이언트 열기
    window.location.href = `mailto:yuzevent@naver.com?subject=${subject}&body=${body}`;

    // 성공 메시지 표시
    form.style.display = 'none';
    const success = document.createElement('div');
    success.className = 'form-success visible';
    success.innerHTML = `
      <h3>문의가 전송되었습니다</h3>
      <p>이메일 앱이 열렸습니다. 전송 후 영업일 1~2일 내 답변드리겠습니다.<br>
      긴급 문의: <a href="tel:010-6668-2436">010-6668-2436</a></p>
    `;
    form.parentNode.appendChild(success);
  });
}

// ===== SCROLL REVEAL (간단) =====
function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.id-card, .featured-card, .member-card, .program-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

// ===== PERF PHOTO MODAL =====
function initPerfModal() {
  const overlay = document.getElementById('perfModal');
  const img     = document.getElementById('perfModalImg');
  const title   = document.getElementById('perfModalTitle');
  const counter = document.getElementById('perfModalCounter');
  const prev    = document.getElementById('perfModalPrev');
  const next    = document.getElementById('perfModalNext');
  const close   = document.getElementById('perfModalClose');
  if (!overlay) return;

  let imgs = [], idx = 0;

  function show(i) {
    idx = (i + imgs.length) % imgs.length;
    const n = String(idx_to_num(idx)).padStart(3, '0');
    img.src = `images/perf-imgs/img-${n}.png`;
    img.alt = title.textContent;
    counter.textContent = `${idx + 1} / ${imgs.length}`;
    prev.style.display = imgs.length > 1 ? '' : 'none';
    next.style.display = imgs.length > 1 ? '' : 'none';
  }

  function idx_to_num(i) { return imgs[i]; }

  function open(imgNums, titleText) {
    imgs = imgNums;
    title.textContent = titleText;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(0);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  close.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  prev.addEventListener('click', () => show(idx - 1));
  next.addEventListener('click', () => show(idx + 1));
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  document.querySelectorAll('.perf-table tbody tr[data-imgs]').forEach(row => {
    row.addEventListener('click', () => {
      const nums = row.dataset.imgs.split(',').map(Number);
      const t = row.dataset.title || row.cells[1]?.textContent || '';
      open(nums, t);
    });
  });

  document.querySelectorAll('.gallery-item[data-imgs]').forEach(item => {
    item.addEventListener('click', () => {
      const nums = item.dataset.imgs.split(',').map(Number);
      const t = item.dataset.title || '';
      open(nums, t);
    });
  });
}

// ===== TYPING ANIMATION (1) =====
function initTyping() {
  const el = document.getElementById('heroSub');
  if (!el) return;
  const phrases = [
    'CROSSOVER MUSIC PERFORMANCE',
    '뮤지컬 · 팝페라 · 실용음악',
    '무대에서 노는 걸 제일 좋아하는 팀',
    '대구 · 부산 · 경북 기반 6인 퍼포먼스',
  ];
  let pi = 0, ci = 0, deleting = false, paused = false;

  function tick() {
    if (paused) return;
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        deleting = true; paused = true;
        setTimeout(() => { paused = false; tick(); }, 2200);
        return;
      }
      setTimeout(tick, 75);
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
      setTimeout(tick, ci === 0 ? 300 : 38);
    }
  }
  setTimeout(tick, 800);
}

// ===== COUNT-UP ANIMATION (3) =====
function initCountUp() {
  const stats = document.querySelectorAll('.stat-num');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const hasPlus = raw.endsWith('+');
      const target = parseInt(raw);
      if (isNaN(target)) return;
      const duration = 1400, step = 16;
      let start = 0;
      const inc = target / (duration / step);
      const timer = setInterval(() => {
        start += inc;
        if (start >= target) {
          el.textContent = target + (hasPlus ? '+' : '');
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start) + (hasPlus ? '+' : '');
        }
      }, step);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  stats.forEach(s => obs.observe(s));
}

// ===== PARTICLES (4) =====
function initParticles() {
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    dx: (Math.random() - 0.5) * 0.35,
    dy: -(Math.random() * 0.45 + 0.15),
    alpha: Math.random() * 0.45 + 0.15,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168,216,240,${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
      if (p.x < -4) p.x = canvas.width + 4;
      if (p.x > canvas.width + 4) p.x = -4;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== STAR ANIMATION (20) =====
function initStarAnimation() {
  const cards = document.querySelectorAll('.review-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const stars = entry.target.querySelectorAll('.review-stars span');
      stars.forEach((star, i) => {
        setTimeout(() => star.classList.add('lit'), i * 130 + 250);
      });
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  cards.forEach(c => obs.observe(c));
}

// ===== MEMBER FLIP (touch 대응) (15) =====
function initMemberFlip() {
  document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
}

// ===== COUNTDOWN =====
function initCountdown() {
  const target = new Date('2026-07-11T00:00:00+09:00');
  const banner = document.getElementById('countdownBanner');
  const els = {
    days:  document.getElementById('cdDays'),
    hours: document.getElementById('cdHours'),
    mins:  document.getElementById('cdMins'),
    secs:  document.getElementById('cdSecs'),
  };
  if (!els.days) return;
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      banner.innerHTML = '<div class="countdown-inner"><span style="font-size:18px;font-weight:700;color:white">🎉 오늘 공연 날! 깡깡이 마을에서 만나요!</span></div>';
      return;
    }
    els.days.textContent  = String(Math.floor(diff / 86400000)).padStart(2, '0');
    els.hours.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
    els.mins.textContent  = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    els.secs.textContent  = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ===== GUESTBOOK (Supabase) =====
function initGuestbook() {
  const form = document.getElementById('guestbookForm');
  const list = document.getElementById('guestbookList');
  if (!form || !list) return;

  const { createClient } = window.supabase;
  const db = createClient(
    'https://iwaeswhrysvcuopqeyia.supabase.co',
    'sb_publishable_AZWK-T5m0Q-dKOw4WeJ5Pw_uzyVrXA-'
  );

  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function fmtDate(iso) {
    const d = new Date(iso);
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  }
  function renderEntries(entries) {
    if (!entries || !entries.length) {
      list.innerHTML = '<div class="gb-empty">아직 방명록이 비어있어요. 첫 번째 응원 메시지를 남겨주세요! 💙</div>';
      return;
    }
    list.innerHTML = entries.map(e => `
      <div class="gb-item">
        <div class="gb-avatar">${esc(e.name.charAt(0).toUpperCase())}</div>
        <div>
          <div class="gb-name">${esc(e.name)}</div>
          <div class="gb-msg">${esc(e.message)}</div>
          <div class="gb-date">${fmtDate(e.created_at)}</div>
        </div>
      </div>
    `).join('');
  }

  async function loadMessages() {
    list.innerHTML = '<div class="gb-empty">불러오는 중…</div>';
    const { data, error } = await db
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);
    if (error) {
      list.innerHTML = '<div class="gb-empty">⚠ 메시지를 불러오지 못했어요. 잠시 후 새로고침해주세요.</div>';
      console.error('Guestbook load error:', error);
      return;
    }
    renderEntries(data);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name    = document.getElementById('gbName').value.trim();
    const message = document.getElementById('gbMessage').value.trim();
    if (!name || !message) return;
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '저장 중…';
    const { error } = await db.from('guestbook').insert({ name, message });
    btn.disabled = false;
    btn.textContent = '남기기';
    if (!error) { form.reset(); loadMessages(); }
  });

  // 실시간 업데이트 — 다른 방문자가 남기면 즉시 반영
  db.channel('guestbook_realtime')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'guestbook' }, loadMessages)
    .subscribe();

  loadMessages();
}

// ===== INIT =====
// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFilters();
  renderSchedule();
  initForm();
  initReveal();
  initPerfModal();
  initCountdown();
  initGuestbook();
  initScrollTop();
  initTyping();
  initCountUp();
  initParticles();
  initStarAnimation();
  initMemberFlip();
});
