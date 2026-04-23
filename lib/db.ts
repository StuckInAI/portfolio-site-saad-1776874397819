import { createClient } from '@supabase/supabase-js';

export interface Profile {
  id?: string;
  name?: string;
  title?: string;
  bio?: string;
  bio_secondary?: string;
  email?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  available_for_work?: boolean;
  years_experience?: string | number;
  projects_completed?: string | number;
  happy_clients?: string | number;
  awards?: string | number;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  sort_order?: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon?: string;
  skills?: string[];
  sort_order?: number;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  emoji?: string;
  gradient?: string;
  sort_order?: number;
}

function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Missing Supabase environment variables');
  return createClient(url, key);
}

export async function getProfile(): Promise<Profile | null> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .limit(1)
      .single();
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    return data;
  } catch (e) {
    console.error('Error creating supabase client:', e);
    return null;
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
    return data ?? [];
  } catch (e) {
    console.error('Error creating supabase client:', e);
    return [];
  }
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('skill_categories')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      console.error('Error fetching skill categories:', error);
      return [];
    }
    return data ?? [];
  } catch (e) {
    console.error('Error creating supabase client:', e);
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
    return data ?? [];
  } catch (e) {
    console.error('Error creating supabase client:', e);
    return [];
  }
}
