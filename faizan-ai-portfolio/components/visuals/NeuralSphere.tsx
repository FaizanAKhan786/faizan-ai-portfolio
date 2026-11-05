'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function seeded(i:number){const x=Math.sin(i*917.13+6.7)*43758.5453;return x-Math.floor(x);}
function Brain(){
  const cluster=useRef<THREE.Group>(null);
  const signal=useRef<THREE.Points>(null);
  const {vertices,connections,particles}=useMemo(()=>{
    const count=155; const pts:THREE.Vector3[]=[];
    for(let i=0;i<count;i++){
      const y=1-2*(i+0.5)/count;const radius=Math.sqrt(1-y*y);
      const theta=i*Math.PI*(3-Math.sqrt(5));const wobble=0.88+seeded(i)*.24;
      pts.push(new THREE.Vector3(Math.cos(theta)*radius*wobble*2.05,y*wobble*2.05,Math.sin(theta)*radius*wobble*2.05));
    }
    const edge:number[]=[];
    pts.forEach((p,i)=>{const close=pts.map((q,j)=>({j,d:p.distanceToSquared(q)})).filter(t=>t.j!==i && t.d<1.22).sort((a,b)=>a.d-b.d).slice(0,3);close.forEach(({j})=>edge.push(p.x,p.y,p.z,pts[j].x,pts[j].y,pts[j].z));});
    const particle:number[]=[];
    for(let i=0;i<52;i++){const n=pts[(i*17)%count];particle.push(n.x,n.y,n.z);}
    return {vertices:new Float32Array(pts.flatMap(p=>[p.x,p.y,p.z])),connections:new Float32Array(edge),particles:new Float32Array(particle)};
  },[]);
  useFrame(({clock,pointer},delta)=>{
    if(cluster.current){cluster.current.rotation.y+=Math.min(delta,0.05)*.065;cluster.current.rotation.x=THREE.MathUtils.lerp(cluster.current.rotation.x,pointer.y*.12,0.025);cluster.current.rotation.z=THREE.MathUtils.lerp(cluster.current.rotation.z,-pointer.x*.10,0.025);}
    if(signal.current)signal.current.rotation.y=clock.elapsedTime*.12;
  });
  return <group ref={cluster}>
    <mesh><sphereGeometry args={[1.56,42,42]}/><meshBasicMaterial color="#4c34a0" transparent opacity={0.08} depthWrite={false}/></mesh>
    <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[connections,3]}/></bufferGeometry><lineBasicMaterial color="#7869bf" transparent opacity={.23} depthWrite={false}/></lineSegments>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[vertices,3]}/></bufferGeometry><pointsMaterial color="#b9a7ff" size={.055} sizeAttenuation transparent opacity={.95} depthWrite={false}/></points>
    <points ref={signal}><bufferGeometry><bufferAttribute attach="attributes-position" args={[particles,3]}/></bufferGeometry><pointsMaterial color="#78eaf5" size={.092} sizeAttenuation transparent opacity={.85} depthWrite={false}/></points>
    <mesh><sphereGeometry args={[1.9,40,40]}/><meshBasicMaterial color="#7190fa" transparent opacity={.035} side={THREE.BackSide} depthWrite={false}/></mesh>
  </group>;
}
export default function NeuralSphere(){return <div className="neural-canvas" aria-hidden="true"><Canvas camera={{position:[0,0,6.8],fov:45}} dpr={[1,1.75]} gl={{alpha:true,antialias:true,powerPreference:'low-power'}}><ambientLight intensity={.8}/><Brain/><OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={.05} autoRotate autoRotateSpeed={.19} minPolarAngle={Math.PI*.38} maxPolarAngle={Math.PI*.62}/></Canvas></div>}
