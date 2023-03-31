import { supabase } from "$lib/supabaseClient.js";

export async function load() {
  const { data } = await supabase.from("office_employee").select()
  
  return {

    employees: data ?? [],
  };
}