import { z } from 'zod';
import { getClientIp, rateLimit } from '@/lib/rate-limit';
export const runtime='nodejs';
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.string().trim().email().max(180),message:z.string().trim().min(12).max(4000),website:z.string().max(250).optional().default('')});
const escapeHtml=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export async function POST(req:Request) {
  if(!rateLimit(`contact:${getClientIp(req)}`,4,60*60_000))return Response.json({error:'Too many messages. Please contact me by email.'},{status:429});
  let payload:unknown;try{payload=await req.json();}catch{return Response.json({error:'Invalid request'},{status:400});}
  const result=schema.safeParse(payload);
  if(!result.success)return Response.json({error:'Please enter a valid name, email and message (12+ characters).'},{status:400});
  const {name,email,message,website}=result.data;
  if(website)return Response.json({ok:true}); // honeypot
  const key=process.env.RESEND_API_KEY, to=process.env.CONTACT_TO_EMAIL, from=process.env.CONTACT_FROM_EMAIL;
  if(!key || !to || !from)return Response.json({error:'The form is not configured yet. Please use the direct email link.'},{status:503});
  try {
    const res=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},
      body:JSON.stringify({from,to:[to],reply_to:email,subject:`Portfolio enquiry from ${name.slice(0,80)}`,html:`<h2>Portfolio enquiry</h2><p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g,'<br>')}</p>`}),signal:AbortSignal.timeout(12000)});
    if(!res.ok)throw new Error('Email provider returned an error');
    return Response.json({ok:true});
  } catch {return Response.json({error:'Message could not be delivered. Please use the direct email link.'},{status:502});}
}
