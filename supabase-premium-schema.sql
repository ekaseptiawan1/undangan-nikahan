-- Jalankan seluruh SQL ini di Supabase SQL Editor.
-- Mendukung banyak undangan dan template custom milik setiap user.
create table if not exists public.invitations (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 slug text not null unique,
 bride_name text not null, groom_name text not null,
 bride_parents text default '', groom_parents text default '',
 event_date text default '', date_label text default '',
 akad_time text default '', reception_time text default '',
 venue_name text default '', venue_address text default '', maps_url text default '',
 whatsapp text default '',
 bride_photo text default '', groom_photo text default '',
 gallery1 text default '', gallery2 text default '', gallery3 text default '',
 theme_key text not null default 'classic',
 theme_primary text not null default '#536b59',
 theme_accent text not null default '#b58a5a',
 theme_bg text default '',
 music_url text default '',
 music_enabled boolean not null default true,
 is_published boolean not null default false,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.invitations add column if not exists theme_key text not null default 'classic';
alter table public.invitations add column if not exists theme_primary text not null default '#536b59';
alter table public.invitations add column if not exists theme_accent text not null default '#b58a5a';
alter table public.invitations add column if not exists theme_bg text default '';
alter table public.invitations add column if not exists music_url text default '';
alter table public.invitations add column if not exists music_enabled boolean not null default true;
create unique index if not exists invitations_slug_lower_idx on public.invitations(lower(slug));
alter table public.invitations enable row level security;
drop policy if exists "Public reads published or owner reads own" on public.invitations;
create policy "Public reads published or owner reads own" on public.invitations for select to anon, authenticated using (is_published = true or auth.uid() = owner_id);
drop policy if exists "Owner creates own invitations" on public.invitations;
create policy "Owner creates own invitations" on public.invitations for insert to authenticated with check (auth.uid() = owner_id);
drop policy if exists "Owner updates own invitations" on public.invitations;
create policy "Owner updates own invitations" on public.invitations for update to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "Owner deletes own invitations" on public.invitations;
create policy "Owner deletes own invitations" on public.invitations for delete to authenticated using (auth.uid() = owner_id);

create table if not exists public.wedding_templates (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 name text not null,
 theme_key text not null default 'classic',
 theme_primary text not null default '#536b59',
 theme_accent text not null default '#b58a5a',
 theme_bg text default '',
 created_at timestamptz not null default now()
);
alter table public.wedding_templates enable row level security;
drop policy if exists "Owners read own templates" on public.wedding_templates;
create policy "Owners read own templates" on public.wedding_templates for select to authenticated using (auth.uid() = owner_id);
drop policy if exists "Owners add own templates" on public.wedding_templates;
create policy "Owners add own templates" on public.wedding_templates for insert to authenticated with check (auth.uid() = owner_id);
drop policy if exists "Owners delete own templates" on public.wedding_templates;
create policy "Owners delete own templates" on public.wedding_templates for delete to authenticated using (auth.uid() = owner_id);

-- Metadata untuk preset musik (20.000 kombinasi rekomendasi, audio memakai URL HTTPS yang sah).
alter table public.invitations add column if not exists music_title text default '';
alter table public.invitations add column if not exists music_preset text default '';
