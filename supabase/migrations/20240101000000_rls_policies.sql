-- Enable RLS on all public tables and add anon SELECT policies

-- profile
alter table profile enable row level security;
create policy "Public read profile" on profile for select to anon using (true);

-- skills
alter table skills enable row level security;
create policy "Public read skills" on skills for select to anon using (true);

-- skill_categories
alter table skill_categories enable row level security;
create policy "Public read skill_categories" on skill_categories for select to anon using (true);

-- projects
alter table projects enable row level security;
create policy "Public read projects" on projects for select to anon using (true);

-- contact_messages: anon can insert but not read
alter table contact_messages enable row level security;
create policy "Anon insert contact_messages" on contact_messages for insert to anon with check (true);
