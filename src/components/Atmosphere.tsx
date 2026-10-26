'use client';
import {useEffect,useRef,useState} from 'react';
import {motion,useReducedMotion,useScroll,useSpring} from 'motion/react';

/** A restrained cinematic layer. Motion is transform-only and switches off for reduced motion. */
export function Atmosphere(){
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll();
 const scaleX=useSpring(scrollYProgress,{stiffness:95,damping:28,restDelta:0.001});
 const [canHover,setCanHover]=useState(false);
 const glow=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const media=window.matchMedia('(hover: hover) and (pointer: fine)');
  setCanHover(media.matches);if(reduced||!media.matches)return;
  let raf=0;let px=-999,py=-999;
  const onMove=(event:PointerEvent)=>{px=event.clientX;py=event.clientY;if(raf)return;raf=requestAnimationFrame(()=>{if(glow){glow.current?.style.setProperty('--pointer-x',`${px}px`);glow.current?.style.setProperty('--pointer-y',`${py}px`);}raf=0;});};
  window.addEventListener('pointermove',onMove,{passive:true});return()=>{window.removeEventListener('pointermove',onMove);cancelAnimationFrame(raf)};
 },[reduced]);
 return <><motion.div className="reading-progress" style={{scaleX}} aria-hidden="true" />{!reduced&&canHover&&<div ref={glow} className="cursor-ambience" aria-hidden="true"/>}</>;
}
