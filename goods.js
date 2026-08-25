// ============================================================
//  굿즈 1차 예약 판매 — 공통 스크립트
//
//  ▼ 일정을 바꾸려면 아래 두 줄만 고치면 됩니다.
//    메인 굿즈샵(index.html)과 상품 상세(goods/tee.html)에 함께 반영됩니다.
// ============================================================
const OPEN_AT  = new Date('2026-08-26T19:00:00+09:00');
const CLOSE_AT = new Date('2026-08-30T23:59:59+09:00');

// 사이즈별 페이앱 결제 링크
const ORDER_URLS = {
  'S':  'https://www.payapp.kr/L/z4jmpE',
  'M':  'https://www.payapp.kr/L/z4jmq4',
  'L':  'https://www.payapp.kr/L/z4jmr9',
  'LL': 'https://www.payapp.kr/L/z4jmsB',
  '3L': 'https://www.payapp.kr/L/z4jmt4',
  '5L': 'https://www.payapp.kr/L/z4jmu0'
};
// 사이즈 혼합 주문 (2장 이상)
const MIX_URL = 'https://www.payapp.kr/L/z4jmv1';

// 화면 문구
const TXT = {
  before: {
    label: '예약 오픈까지',
    note:  '8월 26일(수) 저녁 7시에 열립니다',
    cta:   '8월 26일(수) 저녁 7시 오픈',
    nav:   '상품 정보 보기'
  },
  open: {
    label: '1차 예약 판매 진행 중',
    note:  '예약 마감 8월 30일(일) 23:59 · 마감 후 제작에 들어갑니다',
    cta:   '예약 주문하기',
    nav:   '예약 주문하기'
  },
  closed: {
    label: '예약 마감',
    note:  '1차 예약 판매가 종료되었습니다. 2차 판매는 인스타그램에서 안내드립니다.',
    cta:   '예약이 마감되었습니다',
    nav:   '상품 정보 보기'
  }
};

// ===== 상태 판정 (두 페이지 공용) =====
function goodsState(now) {
  const t = now || new Date();
  if (t < OPEN_AT)  return 'before';
  if (t < CLOSE_AT) return 'open';
  return 'closed';
}

// 현재 상태에서 카운트다운이 향하는 시각 (마감 상태면 null)
function goodsTarget(state) {
  if (state === 'before') return OPEN_AT;
  if (state === 'open')   return CLOSE_AT;
  return null;
}

// ===== 화면 렌더링 =====
function renderGoodsState() {
  const state = goodsState();
  const txt   = TXT[state];
  const target = goodsTarget(state);
  const diff = target ? target - new Date() : 0;

  // --- 카운트다운 배너 ---
  document.querySelectorAll('[data-goods-countdown]').forEach(box => {
    const live   = box.querySelector('.gcd-live');
    const closed = box.querySelector('.gcd-closed');
    const note   = box.querySelector('.gcd-note');

    box.classList.toggle('closed', state === 'closed');
    if (note) note.textContent = txt.note;

    if (state === 'closed') {
      if (live)   live.style.display = 'none';
      if (closed) { closed.style.display = ''; closed.querySelector('.gcd-label').textContent = txt.label; }
      return;
    }

    if (live)   live.style.display = '';
    if (closed) closed.style.display = 'none';

    const lbl = box.querySelector('.gcd-live .gcd-label');
    if (lbl) lbl.textContent = txt.label;

    const set = (sel, v) => {
      const el = box.querySelector(sel);
      if (el) el.textContent = String(v).padStart(2, '0');
    };
    set('.gcd-days',  Math.floor(diff / 86400000));
    set('.gcd-hours', Math.floor((diff % 86400000) / 3600000));
    set('.gcd-mins',  Math.floor((diff % 3600000) / 60000));
    set('.gcd-secs',  Math.floor((diff % 60000) / 1000));
  });

  // --- 구매 버튼 / 사이즈 / 혼합 주문 링크 ---
  const sellable = state === 'open';

  document.querySelectorAll('[data-goods-cta]').forEach(el => {
    el.textContent = txt.cta;
    el.classList.toggle('is-locked', !sellable);
    if (el.tagName === 'BUTTON') el.disabled = !sellable;
    else el.setAttribute('aria-disabled', String(!sellable));
  });

  // 메인 굿즈샵의 CTA는 상세 페이지로 가는 링크 — 상태 문구만 바꾸고 막지 않음
  document.querySelectorAll('[data-goods-nav]').forEach(el => { el.textContent = txt.nav; });

  document.querySelectorAll('.size-btn').forEach(b => { b.disabled = !sellable; });

  document.querySelectorAll('[data-mix-link]').forEach(a => {
    a.classList.toggle('is-locked', !sellable);
    a.setAttribute('aria-disabled', String(!sellable));
  });

  return state;
}

function initGoodsCountdown() {
  if (!document.querySelector('[data-goods-countdown], [data-goods-cta]')) return;
  renderGoodsState();
  // 1초마다 재평가 — 오픈/마감 시각에 새로고침 없이 자동 전환
  setInterval(renderGoodsState, 1000);
}

// ===== 사이즈 선택 + 예약 주문 (상품 상세 페이지) =====
function initGoodsOrder() {
  const wrap = document.getElementById('goodsOrder');
  if (!wrap) return;

  const notice = document.getElementById('goodsNotice');
  const buyBtn = document.getElementById('goodsBuy');
  let size = null;

  function say(msg) {
    if (!notice) return;
    notice.textContent = msg;
    notice.classList.toggle('show', !!msg);
  }

  wrap.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (goodsState() !== 'open') return;
      wrap.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      size = btn.dataset.size;
      say('');
    });
  });

  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      if (goodsState() !== 'open') return;   // 오픈 전 · 마감 후에는 아무 동작 없음
      if (!size) {
        say('사이즈를 먼저 선택해 주세요.');
        return;
      }
      const url = ORDER_URLS[size];
      if (!url) { say('사이즈를 먼저 선택해 주세요.'); return; }
      // 비회원 구매를 허용해야 하므로 로그인/회원가입 단계를 넣지 말 것
      window.open(url, '_blank', 'noopener');
    });
  }

  // 사이즈 혼합 주문
  document.querySelectorAll('[data-mix-link]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      if (goodsState() !== 'open') return;
      window.open(MIX_URL, '_blank', 'noopener');
    });
  });
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
