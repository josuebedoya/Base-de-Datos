import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jfzyjvrwqkzwgmgxxkqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmenlqdnJ3cWt6d2dtZ3h4a3FuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDk5MTkzNywiZXhwIjoyMDQ2NTY3OTM3fQ.UDqPtJRuQ0pr9s1p53Tds9u7g_d4UnpGxu76As0K7jI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;