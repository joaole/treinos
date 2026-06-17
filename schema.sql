create table settings (
  id integer primary key default 1,
  current_week integer not null default 5
);

insert into settings (id, current_week) values (1, 5);

create table workout_logs (
  id text primary key,
  date text not null,
  week integer not null,
  day_index integer not null,
  variant integer,
  status text not null default 'in_progress',
  exercises jsonb not null default '[]'::jsonb,
  note text not null default ''
);

alter table settings disable row level security;
alter table workout_logs disable row level security;

GRANT ALL ON public.settings TO anon;
GRANT ALL ON public.workout_logs TO anon;