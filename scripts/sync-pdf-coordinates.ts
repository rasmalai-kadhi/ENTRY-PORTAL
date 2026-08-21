import { loadEnvConfig } from '@next/env';
import { createClient } from '@supabase/supabase-js';
import { manualPdfMappings } from '@/config/pdf-field-coordinates';

loadEnvConfig(process.cwd());

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error(
      'Supabase configuration is missing. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local, then run the command again.',
    );
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await supabase
    .from('pdf_field_mappings')
    .upsert(manualPdfMappings, { onConflict: 'template_id,field_key' });

  if (error) throw error;
  console.log(`Synced ${manualPdfMappings.length} PDF field coordinates.`);
}

void main();
