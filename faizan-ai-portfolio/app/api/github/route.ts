import { profile, projects } from '@/content/portfolio';
export const revalidate=3600;
export async function GET(){
  try{
    const r=await fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,{next:{revalidate:3600},headers:{Accept:'application/vnd.github+json','User-Agent':'faizan-ai-portfolio'}});
    if(!r.ok)throw new Error('GitHub unavailable');
    const rows=await r.json() as {name:string;description:string|null;html_url:string;updated_at:string;stargazers_count:number;language:string|null;fork:boolean}[];
    const featured=new Set(projects.map(p=>p.github).filter(Boolean));
    return Response.json({source:'github',repos:rows.filter(r=>!r.fork && featured.has(r.html_url)).map(r=>({name:r.name,description:r.description,html_url:r.html_url,updated_at:r.updated_at,stars:r.stargazers_count,language:r.language})).sort((a,b)=>b.updated_at.localeCompare(a.updated_at))});
  }catch{return Response.json({source:'static',repos:projects.filter(p=>p.github).map(p=>({name:p.name,description:p.description,html_url:p.github,updated_at:null,stars:null,language:p.tech[0]}))});}
}
