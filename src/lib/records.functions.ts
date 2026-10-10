import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { z } from 'zod';
export const listRecords=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).handler(async({context})=>{const {data,error}=await context.supabase.from('health_records').select('*').order('created_at',{ascending:false});if(error)throw new Error(error.message);return data;});
export const savePreference=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({display_name:z.string().max(100),abha_id:z.string().nullable(),language:z.string()})).handler(async({data,context})=>{const {error}=await context.supabase.from('health_preferences').upsert({...data,user_id:context.userId});if(error)throw new Error(error.message);return {success:true};});
export const getPreference=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).handler(async({context})=>{const {data,error}=await context.supabase.from('health_preferences').select('*').maybeSingle();if(error)throw new Error(error.message);return data;});
