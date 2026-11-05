/** In-memory guard for small deployments. Use Redis/KV for coordinated multi-instance limits. */
const requests=new Map<string,{count:number,reset:number}>();
export function rateLimit(key:string,limit:number,windowMs:number): boolean {
  const now=Date.now();
  if(requests.size>3000) for(const [k,v] of requests)if(v.reset<now)requests.delete(k);
  const existing=requests.get(key);
  if(!existing || existing.reset<=now) {requests.set(key,{count:1,reset:now+windowMs});return true;}
  if(existing.count>=limit)return false;
  existing.count++;return true;
}
export function getClientIp(req:Request):string {
  // On Vercel the infrastructure sets x-forwarded-for. Never pass this to provider prompts.
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}
