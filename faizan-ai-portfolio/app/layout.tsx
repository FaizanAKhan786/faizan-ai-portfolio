import type {ReactNode} from 'react';
import type { Metadata } from 'next';
import { profile } from '@/content/portfolio';
import './globals.css';
const site=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';
export const metadata:Metadata={
  metadataBase:new URL(site),title:'Faizan Ahmed Khan | AI Engineering & Intelligent Systems',
  description:'AI Engineer specializing in LLMs, Agentic AI, Arabic NLP, RAG and offline production machine learning systems. Explore projects, architectures and live interactive demos.',
  alternates:{canonical:'/'},openGraph:{title:'Faizan Ahmed Khan | Engineering Intelligence',description:profile.subheadline,type:'website',url:site,images:['/opengraph-image']},
  twitter:{card:'summary_large_image',title:'Faizan Ahmed Khan | AI Engineer',description:profile.subheadline,images:['/opengraph-image']},
  robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:ReactNode}) {
  const data={ '@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:'AI / Machine Learning Engineer',url:site,description:profile.subheadline,sameAs:[profile.linkedin,profile.github],knowsAbout:['Generative AI','Retrieval-Augmented Generation','Machine Learning','Arabic NLP','Agentic AI']};
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>{children}</body></html>;
}
