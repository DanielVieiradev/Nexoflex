import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchProjects = async () => {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
};

export const deleteProject = async (id) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) throw error;
};

export const getProject = async (id) => {
    const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
};

export const updateProject = async (id, projectData) => {
    const { data, error } = await supabase
        .from("projects")
        .update(projectData)
        .eq("id", id)
        .select();

    if (error) throw error;
    return data;
};
