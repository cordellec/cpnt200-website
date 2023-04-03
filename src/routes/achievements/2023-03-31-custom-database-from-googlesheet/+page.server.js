import { supabase } from "$lib/supabaseClient.js";

export async function load() {
  const { data } = await supabase.from("coin").select()
  
  return {

    cryptocoins: data ?? [],
  };
}