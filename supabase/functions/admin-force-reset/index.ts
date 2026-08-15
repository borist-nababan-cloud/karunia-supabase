import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize the Admin client securely using environment variables automatically injected by Supabase
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    const { userId } = await req.json();

    if (!userId) {
       return new Response(
         JSON.stringify({ error: "Missing userId" }), 
         { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
       );
    }

    console.log(`Processing forced reset for user: ${userId}`);

    // 1. Force update the user's password to the default temporary password
    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(userId, { 
      password: 'ilovekarunia' 
    });

    if (authError) {
      console.error("Auth update error:", authError);
      throw authError;
    }

    // 2. Set the redirect flag so they are forced to change it on next login
    const { error: dbError } = await supabaseAdmin
      .from('user_profiles')
      .update({ force_password_reset: true })
      .eq('id', userId);

    if (dbError) {
      console.error("DB update error:", dbError);
      throw dbError;
    }

    console.log(`Successfully forced reset for user: ${userId}`);

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error("Force Reset Error:", err);
    return new Response(
      JSON.stringify({ error: err.message }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
