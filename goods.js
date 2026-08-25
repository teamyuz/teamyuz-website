// ============================================================
//  굿즈 1차 예약 판매 — 공통 스크립트
//
//  ▼ 예약 마감일은 아래 한 줄만 고치면 됩니다.
//    메인 굿즈샵(index.html)과 상품 상세(goods/tee.html)에 모두 반영됩니다.
// ============================================================
const GOODS_DEADLINE = '2026-09-07T23:59:59+09:00';

// ▼ 페이앱 결제 링크. 비워두면 버튼이 안내 문구만 표시하고 이동하지 않습니다.
const ORDER_URL = '';   // 페이앱 결제 링크 (추후 입력)

// ===== 예약 마감 카운트다운 =====
// 마크업: [data-goods-countdown] 안에 .gcd-days / .gcd-hours / .gcd-mins,
//        마감 후 노출할 .gcd-closed, 마감 전 노출할 .gcd-live
function initGoodsCountdown() {
  const boxes = document.querySelectorAll('[data-goods-countdown]');
  if (!boxes.length) return;

  const target = new Date(GOODS_DEADLINE);

  function tick() {
    const diff = target - new Date();

    boxes.forEach(box => {
      const live   = box.querySelector('.gcd-live');
      const closed = box.querySelector('.gcd-closed');

      if (diff <= 0) {
        box.classList.add('closed');
        if (live)   live.style.display = 'none';
        if (closed) closed.style.display = '';
        return;
      }

      box.classList.remove('closed');
      if (live)   live.style.display = '';
      if (closed) closed.style.display = 'none';

      const set = (sel, v) => {
        const el = box.querySelector(sel);
        if (el) el.textContent = String(v).padStart(2, '0');
      };
      set('.gcd-days',  Math.floor(diff / 86400000));
      set('.gcd-hours', Math.floor((diff % 86400000) / 3600000));
      set('.gcd-mins',  Math.floor((diff % 3600000) / 60000));
    });
  }

  tick();
  setInterval(tick, 1000);
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

  if (!buyBtn) return;
  buyBtn.addEventListener('click', () => {
    // 결제 링크가 아직 없으면 안내만 하고 이동하지 않음
    if (!ORDER_URL) {
      say('결제 준비 중입니다.');
      return;
    }
    if (!size) {
      say('사이즈를 먼저 선택해 주세요.');
      return;
    }
    // 비회원 구매를 허용해야 하므로 로그인/회원가입 단계를 넣지 말 것
    window.open(ORDER_URL, '_blank', 'noopener');
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
      main.textContent = t.dataset.label || '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGoodsCountdown();
  initGoodsOrder();
  initGoodsGallery();
});
