import supabase from '../supabase';

export async function GetProducts() {
  const { data, error } = await supabase
    .from('productos')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}