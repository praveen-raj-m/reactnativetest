import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://befwuwgracchsiwjvmwo.supabase.co'
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZnd1d2dyYWNjaHNpd2p2bXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4Nzg0ODQsImV4cCI6MjAyODQ1NDQ4NH0.EIPJeZJJPihUEZ8WtxedSv6zmI3J-6WyxX71vMVXVGg'


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey =process.env.SUPABASE_KEY;


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})