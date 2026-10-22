import { createClient } from '@supabase/supabase-js'

// อ่านค่าจาก .env (Vite ต้องขึ้นต้นด้วย VITE_ ถึงจะถูกฝังเข้าไปใน build ได้)
// .env ถูกใส่ไว้ใน .gitignore แล้ว จะไม่ถูก push ขึ้น GitHub
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
