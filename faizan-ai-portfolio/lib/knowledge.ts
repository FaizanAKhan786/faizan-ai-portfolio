import { profile, projects, experience, skillGroups } from '@/content/portfolio';

/** Approved public portfolio facts only. Do not store private employer documents here. */
export const knowledgeEntries = [
  {title:'Professional overview',text:`${profile.name} is an AI / Machine Learning Engineer with 3+ years combined industry and research experience. Areas: Generative AI, RAG, Agentic AI, Arabic NLP, model optimization and MLOps. Open to AI engineering opportunities.`},
  ...experience.map(e=>({title:`Experience: ${e.company}`,text:`${e.role} at ${e.company}, ${e.period}. ${e.description} ${e.highlights.join('. ')}`})),
  ...projects.map(p=>({title:`Project: ${p.name}`,text:`${p.name}: ${p.description} Challenge: ${p.challenge}. Technologies: ${p.tech.join(', ')}. Evidence: ${p.results.join('. ')}.`})),
  ...skillGroups.map(g=>({title:`Skills: ${g.name}`,text:`${g.desc}. ${g.skills.join(', ')}`})),
  {title:'Connect',text:`Professional LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}. Work enquiries: ${profile.email}.`},
];

const stopwords = new Set('the a an and or is are do does can what who how tell about me my your for with in of to on from his he it please this that have has where when'.split(' '));
export function tokens(s:string): string[] {
  return s.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,' ').split(/\s+/).filter(t=>t.length>2 && !stopwords.has(t));
}
export function retrievePortfolio(query:string, max=4) {
  const q=tokens(query);
  const ranked = knowledgeEntries.map(entry=>{
    const title=tokens(entry.title), body=tokens(entry.text);
    const score=q.reduce((sum,t)=>sum + (title.includes(t)?4:0) + (body.includes(t)?1:0),0);
    return {...entry,score};
  }).sort((a,b)=>b.score-a.score);
  return (ranked.some(r=>r.score>0)?ranked.filter(r=>r.score>0):ranked.slice(0,2)).slice(0,max);
}
export function localPortfolioAnswer(question:string) {
  const entries=retrievePortfolio(question,3);
  const q=question.toLowerCase();
  if(/availab|hire|contact|reach|email/.test(q))return `Faizan is open to AI engineering opportunities. You can reach him at ${profile.email} or connect on LinkedIn: ${profile.linkedin}.`;
  if(/project|built|github|portfolio|work/.test(q))return `Selected work includes ${projects.slice(0,4).map(p=>p.name).join(', ')}. ${entries.filter(e=>e.title.startsWith('Project:')).slice(0,2).map(e=>e.text.split(' Challenge:')[0]).join(' ')}`;
  if(/skill|stack|tech|framework/.test(q))return `His core stack spans ${skillGroups.slice(0,4).map(g=>g.skills.slice(0,4).join(', ')).join('; ')}. He focuses on building AI systems that can be evaluated, deployed, and monitored.`;
  if(/experience|background|worked|company|career/.test(q))return `Faizan has 3+ years of combined industry and research experience, with roles at Global Tech Technology, NIT Jalandhar, and Goalwit Technologies. His work focuses on multilingual language AI, private RAG, recommendation systems, and model serving.`;
  return `Here's what the public portfolio documents: ${entries.map(e=>e.text.split(' Challenge:')[0]).join(' ')} For details beyond this published information, contact Faizan directly.`.slice(0,920);
}
