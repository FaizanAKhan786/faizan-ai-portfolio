'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export function Reveal({children,className='',delay=0}:{children:ReactNode,className?:string,delay?:number}){
  const reduce=useReducedMotion();
  return <motion.div className={className} initial={reduce?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.72,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
