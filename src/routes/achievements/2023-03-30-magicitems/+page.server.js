import { supabase } from "$lib/supabaseClient.js";

export async function load() {
  const { data, error } = await supabase.from("magic_item").select()
  return {

    magicItems: data ?? [],
  };
}
   


