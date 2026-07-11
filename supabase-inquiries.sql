-- 공연 문의 저장 테이블
-- 실행 방법: https://supabase.com/dashboard → 프로젝트(iwaeswhrysvcuopqeyia) → SQL Editor → 아래 전체 붙여넣기 → Run
-- 접수된 문의 확인: 대시보드 → Table Editor → inquiries

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  org text not null,
  phone text not null,
  email text,
  event_type text,
  event_date text,
  venue text,
  budget text,
  message text not null
);

alter table public.inquiries enable row level security;

-- 익명 방문자는 쓰기만 가능, 조회 불가 (연락처 개인정보 보호)
create policy "anon can insert inquiries" on public.inquiries
  for insert to anon with check (true);
