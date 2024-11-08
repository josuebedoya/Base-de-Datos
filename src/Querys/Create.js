import supabase from "../supabase";

export async function InsertData(table, values) {

  if (values) {
    const { error } = await supabase
      .from(table)
      .insert(values);

    if (error) {
      throw new Error(error.message); 
    };
  }
};
 
InsertData();