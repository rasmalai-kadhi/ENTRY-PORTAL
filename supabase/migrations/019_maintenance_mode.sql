-- Migration 019: Add password protection fields to site_settings table
alter table if exists public.site_settings
  add column if not exists password_protection_enabled boolean not null default true,
  add column if not exists maintenance_password_hash text not null default '';
