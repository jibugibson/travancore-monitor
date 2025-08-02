<script type="module">
  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  const SUPABASE_URL = "https://sixwbibqadtvxiovdaqa.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpeHdiaWJxYWR0dnhpb3ZkYXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTU5NDUsImV4cCI6MjA2OTY5MTk0NX0.N1kgsZZRQ8i0-zGTxq1UspDnA9GZzXSLAiX9oYbOf58";

  export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
</script>
