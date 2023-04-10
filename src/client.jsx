import { createClient } from "@supabase/supabase-js"

const URL = 'https://teonwetdjyxtkrinlldm.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlb253ZXRkanl4dGtyaW5sbGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNzQzODcsImV4cCI6MTk5NjY1MDM4N30.aBCjqKwPR3fDtxx7KbxinC_S8cw2xuhfpXeKa6kKTwo'

export const supabase = createClient(URL, API_KEY)
