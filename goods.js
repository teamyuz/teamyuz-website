// ============================================================
//  굿즈 판매 — 공통 스크립트
//
//  상품마다 아래 GOODS 안의 openAt / closeAt 만 고치면
//  메인 굿즈샵(index.html)과 상품 상세(goods/*.html)에 함께 반영됩니다.
//
//  화면 요소는 가장 가까운 [data-product="..."] 로 어떤 상품인지 구분합니다.
//  (상세 페이지는 <body data-product="...">, 메인은 해당 블록에 지정)
// ============================================================
const GOODS = {

  // ── 1차 · 로고 티셔츠 (기간 한정 예약 판매) ─────────────────
  tee: {
    openAt:  new Date('2026-08-26T19:00:00+09:00'),
    closeAt: new Date('2026-08-31T23:59:59+09:00'),
    // 사이즈별 페이앱 결제 링크
    orderUrls: {
      'S':  'https://www.payapp.kr/L/z4jmpE',
      'M':  'https://www.payapp.kr/L/z4jmq4',
      'L':  'https://www.payapp.kr/L/z4jmr9',
      'LL': 'https://www.payapp.kr/L/z4jmsB',
      '3L': 'https://www.payapp.kr/L/z4jmt4',
      '5L': 'https://www.payapp.kr/L/z4jmu0'
    },
    // 사이즈 혼합 주문 (2장 이상)
    mixUrl: 'https://www.payapp.kr/L/z4jmv1',
    txt: {
      before: {
        label: '예약 오픈까지',
        note:  '8월 26일(수) 저녁 7시에 열립니다',
        cta:   '8월 26일(수) 저녁 7시 오픈',
        nav:   '상품 정보 보기'
      },
      open: {
        label: '1차 예약 판매 진행 중',
        note:  '예약 마감 8월 31일(월) 23:59 · 마감 후 제작에 들어갑니다',
        cta:   '예약 주문하기',
        nav:   '예약 주문하기'
      },
      closed: {
        label: '예약 마감',
        note:  '1차 예약 판매가 종료되었습니다. 2차 판매는 인스타그램에서 안내드립니다.',
        cta:   '예약이 마감되었습니다',
        nav:   '상품 정보 보기'
      }
    }
  },

  // ── 2차 · 로고 짐색 (재고 소진 시까지 판매) ──────────────────
  bag: {
    openAt:  new Date('2026-11-02T19:00:00+09:00'),
    closeAt: null,          // 마감일 없음 — 재고 소진 시까지
    soldOut: false,         // 품절되면 true 로 바꾸면 판매 종료 화면으로 전환
    // 페이앱 결제 링크 (상품가 18,000원 · 배송비 4,000원 수량 무관 · 수량은 결제창 금액 드롭다운)
    orderUrl: 'https://www.payapp.kr/L/z4n2ZD',
    // 결제창을 열기 전에 받는 분 성함·주소 입력 안내 모달(#payConfirm)을 먼저 띄움
    confirmBeforePay: true,
    txt: {
      before: {
        label: '판매 오픈까지',
        note:  '11월 2일(월) 저녁 7시에 열립니다',
        cta:   '11월 2일(월) 저녁 7시 오픈',
        nav:   '상품 정보 보기'
      },
      open: {
        label: '지금 판매 중',
        note:  '준비된 수량이 모두 판매되면 종료됩니다',
        cta:   '주문하기',
        nav:   '주문하러 가기'
      },
      closed: {
        label: '품절',
        note:  '준비된 수량이 모두 판매되었습니다. 재입고 소식은 인스타그램에서 안내드립니다.',
        cta:   '품절되었습니다',
        nav:   '상품 정보 보기'
      }
    }
  },

  // ── 3차 · 로고 LED 응원봉 단품 (첫 제작 15개 한정) ──────────────
  stick: {
    openAt:  new Date('2026-11-02T19:00:00+09:00'),
    closeAt: null,
    soldOut: false,
    // 상품가 25,000원 · 배송비 3,000원 수량 무관
    orderUrl: 'https://www.payapp.kr/L/z4n344',
    confirmBeforePay: true,
    txt: {
      before: {
        label: '판매 오픈까지',
        note:  '11월 2일(월) 저녁 7시에 열립니다',
        cta:   '11월 2일(월) 저녁 7시 오픈',
        nav:   '상품 정보 보기'
      },
      open: {
        label: '지금 판매 중',
        note:  '첫 제작 15개 한정 · 수량이 모두 판매되면 종료됩니다',
        cta:   '응원봉 주문하기',
        nav:   '주문하러 가기'
      },
      closed: {
        label: '품절',
        note:  '첫 제작 수량이 모두 판매되었습니다. 다음 소식은 인스타그램에서 안내드립니다.',
        cta:   '품절되었습니다',
        nav:   '상품 정보 보기'
      }
    }
  },

  // ── 3차 · 응원봉 + 짐색 세트 ─────────────────────────────────
  stickSet: {
    openAt:  new Date('2026-11-02T19:00:00+09:00'),
    closeAt: null,
    soldOut: false,
    // 세트 39,000원 · 배송비 3,000원 수량 무관
    orderUrl: 'https://www.payapp.kr/L/z4n356',
    confirmBeforePay: true,
    txt: {
      before: {
        label: '판매 오픈까지',
        note:  '11월 2일(월) 저녁 7시에 열립니다',
        cta:   '11월 2일(월) 저녁 7시 오픈',
        nav:   '상품 정보 보기'
      },
      open: {
        label: '지금 판매 중',
        note:  '첫 제작 15개 한정 · 수량이 모두 판매되면 종료됩니다',
        cta:   '세트 주문하기',
        nav:   '주문하러 가기'
      },
      closed: {
        label: '품절',
        note:  '첫 제작 수량이 모두 판매되었습니다. 다음 소식은 인스타그램에서 안내드립니다.',
        cta:   '품절되었습니다',
        nav:   '상품 정보 보기'
      }
    }
  }
};

// ===== 상태 판정 =====
function goodsState(id, now) {
  const p = GOODS[id];
  const t = now || new Date();
  if (p.soldOut) return 'closed';
  if (t < p.openAt) return 'before';
  if (p.closeAt && t >= p.closeAt) return 'closed';
  return 'open';
}

// 현재 상태에서 카운트다운이 향하는 시각 (없으면 null)
function goodsTarget(id, state) {
  if (state === 'before') return GOODS[id].openAt;
  if (state === 'open')   return GOODS[id].closeAt;
  return null;
}

// 결제 링크가 연결돼 있는지
function goodsHasLink(id) {
  const p = GOODS[id];
  return !!(p.orderUrl || (p.orderUrls && Object.values(p.orderUrls).some(Boolean)));
}

// 요소가 속한 상품 id
function productOf(el) {
  const host = el.closest('[data-product]');
  return host ? host.dataset.product : null;
}

// 특정 상품에 속한 요소만 고르기
function goodsEls(id, sel) {
  return [...document.querySelectorAll(sel)].filter(el => productOf(el) === id);
}

// ===== 화면 렌더링 =====
function renderGoodsState(id) {
  const state  = goodsState(id);
  const txt    = GOODS[id].txt[state];
  const target = goodsTarget(id, state);
  const diff   = target ? target - new Date() : 0;

  // --- 카운트다운 배너 ---
  goodsEls(id, '[data-goods-countdown]').forEach(box => {
    const live   = box.querySelector('.gcd-live');
    const closed = box.querySelector('.gcd-closed');
    const note   = box.querySelector('.gcd-note');
    const timer  = box.querySelector('.gcd-timer');

    box.classList.toggle('closed', state === 'closed');
    if (note) note.textContent = txt.note;

    if (state === 'closed') {
      if (live)   live.style.display = 'none';
      if (closed) { closed.style.display = ''; closed.querySelector('.gcd-label').textContent = txt.label; }
      return;
    }

    if (live)   live.style.display = '';
    if (closed) closed.style.display = 'none';
    // 마감일 없는 판매 중 상태는 타이머 없이 문구만
    if (timer)  timer.style.display = target ? '' : 'none';

    const lbl = box.querySelector('.gcd-live .gcd-label');
    if (lbl) lbl.textContent = txt.label;
    if (!target) return;

    const set = (sel, v) => {
      const el = box.querySelector(sel);
      if (el) el.textContent = String(v).padStart(2, '0');
    };
    set('.gcd-days',  Math.floor(diff / 86400000));
    set('.gcd-hours', Math.floor((diff % 86400000) / 3600000));
    set('.gcd-mins',  Math.floor((diff % 3600000) / 60000));
    set('.gcd-secs',  Math.floor((diff % 60000) / 1000));
  });

  // --- 메인 상단 굿즈 배너: 마감·품절되면 숨김 ---
  goodsEls(id, '[data-goods-promo]').forEach(el => {
    el.style.display = state === 'closed' ? 'none' : '';
  });

  // --- 구매 버튼 / 사이즈 / 혼합 주문 링크 ---
  const sellable = state === 'open' && goodsHasLink(id);

  goodsEls(id, '[data-goods-cta]').forEach(el => {
    el.textContent = state === 'open' && !sellable ? '곧 주문이 열립니다' : txt.cta;
    el.classList.toggle('is-locked', !sellable);
    if (el.tagName === 'BUTTON') el.disabled = !sellable;
    else el.setAttribute('aria-disabled', String(!sellable));
  });

  // 메인 굿즈샵의 CTA는 상세 페이지로 가는 링크 — 상태 문구만 바꾸고 막지 않음
  goodsEls(id, '[data-goods-nav]').forEach(el => { el.textContent = txt.nav; });

  goodsEls(id, '.size-btn').forEach(b => { b.disabled = !sellable; });

  goodsEls(id, '[data-mix-link]').forEach(a => {
    a.classList.toggle('is-locked', !sellable);
    a.setAttribute('aria-disabled', String(!sellable));
  });

  return state;
}

function renderAllGoods() {
  Object.keys(GOODS).forEach(renderGoodsState);
}

function initGoodsCountdown() {
  if (!document.querySelector('[data-goods-countdown], [data-goods-cta], [data-goods-promo]')) return;
  renderAllGoods();
  // 1초마다 재평가 — 오픈/마감 시각에 새로고침 없이 자동 전환
  setInterval(renderAllGoods, 1000);
}

// ===== 사이즈 선택 + 주문 (상품 상세 페이지) =====
function initGoodsOrder() {
  const wrap = document.getElementById('goodsOrder');
  if (!wrap) return;

  const id = productOf(wrap);
  const p = GOODS[id];
  if (!p) return;

  const notice = document.getElementById('goodsNotice');
  const buyBtn = document.getElementById('goodsBuy');
  const sizeBtns = wrap.querySelectorAll('.size-btn');
  const payConfirm = initPayConfirm();
  let size = null;

  function say(msg) {
    if (!notice) return;
    notice.textContent = msg;
    notice.classList.toggle('show', !!msg);
  }

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (goodsState(id) !== 'open') return;
      sizeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      size = btn.dataset.size;
      say('');
    });
  });

  // 구매 버튼 — 한 페이지에 상품이 여럿이면(응원봉 단품·세트) 버튼마다 자기 상품으로 결제
  const buyBtns = buyBtn ? [buyBtn] : [...wrap.querySelectorAll('[data-goods-buy]')];
  buyBtns.forEach(btn => {
    const bid = productOf(btn);
    const bp = GOODS[bid];
    if (!bp) return;
    btn.addEventListener('click', () => {
      if (goodsState(bid) !== 'open') return;   // 오픈 전 · 마감 후에는 아무 동작 없음
      let url = bp.orderUrl;
      if (sizeBtns.length) {
        if (!size) { say('사이즈를 먼저 선택해 주세요.'); return; }
        url = bp.orderUrls[size];
      }
      if (!url) return;
      // 비회원 구매를 허용해야 하므로 로그인/회원가입 단계를 넣지 말 것
      if (bp.confirmBeforePay && payConfirm) { payConfirm.open(url); return; }
      window.open(url, '_blank', 'noopener');
    });
  });

  // 사이즈 혼합 주문
  document.querySelectorAll('[data-mix-link]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      if (goodsState(id) !== 'open' || !p.mixUrl) return;
      window.open(p.mixUrl, '_blank', 'noopener');
    });
  });
}

// ===== 결제 전 확인 모달 =====
// 페이앱 결제창에는 성함 칸이 없어 주소란에 함께 적어야 함 — 결제 전에 한 번 안내
function initPayConfirm() {
  const modal = document.getElementById('payConfirm');
  if (!modal) return null;

  const goBtn = modal.querySelector('[data-pay-go]');
  let url = null;
  let lastFocus = null;

  function open(u) {
    url = u;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('pay-confirm-open');
    goBtn.focus();
  }

  function close() {
    url = null;
    modal.hidden = true;
    document.body.classList.remove('pay-confirm-open');
    if (lastFocus) lastFocus.focus();
  }

  goBtn.addEventListener('click', () => {
    const u = url;
    close();
    if (u) window.open(u, '_blank', 'noopener');
  });

  // [닫기] · 배경 클릭
  modal.querySelectorAll('[data-pay-close]').forEach(el => el.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { close(); return; }
    // 모달 안에서만 Tab 이동
    if (e.key === 'Tab') {
      const f = [...modal.querySelectorAll('button')];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  return { open, close };
}

// ===== 상품 이미지 썸네일 전환 =====
function initGoodsGallery() {
  const main = document.getElementById('goodsMainImg');
  const thumbs = document.querySelectorAll('.goods-thumb');
  if (!main || !thumbs.length) return;

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      if (t.dataset.src) main.src = t.dataset.src;
      if (t.dataset.label) main.alt = t.dataset.label;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGoodsCountdown();
  initGoodsOrder();
  initGoodsGallery();
});
