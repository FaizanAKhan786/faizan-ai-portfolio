'use client';
import {motion,useMotionValue,useReducedMotion,useSpring} from 'framer-motion';
import type {ReactNode} from 'react';
export default function MagneticLink({href,className,children}:{href:string;className:string;children:ReactNode}){
 const mx=useMotionValue(0),my=useMotionValue(0),x=useSpring(mx,{stiffness:230,damping:16,mass:.26}),y=useSpring(my,{stiffness:230,damping:16,mass:.26});const reduce=useReducedMotion();
 return <motion.a href={href} className={className} style={reduce?{}:{x,y}} onPointerMove={e=>{if(reduce||e.pointerType!=='mouse')return;const b=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-(b.left+b.width/2))*.16);my.set((e.clientY-(b.top+b.height/2))*.2)}} onPointerLeave={()=>{mx.set(0);my.set(0)}}>{children}</motion.a>;
}
