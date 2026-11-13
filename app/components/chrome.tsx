'use client';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export const demoEmail = 'mailto:kyntexsupport@gmail.com?subject=Kyntex%20demo%20request';
export const palettes = [{id:'muted-jade',name:'Muted jade',hex:'#91B5A6',description:'The approved Kyntex signature accent.'}];
export function Theme({children}:{children:ReactNode}){
  return children;
}
export function SiteHeader({active='product'}:{active?:string}){
  const [open,setOpen]=useState(false);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="product-header"><a href="/" className="mono-brand" aria-label="Kyntex home"><img src="/kyntex-logo-mono.jpg" width="1536" height="1024" alt="Kyntex"/></a><nav className={open?'product-nav is-open':'product-nav'} aria-label="Main navigation"><a href="/#band" onClick={()=>setOpen(false)} aria-current={active==='product'?'page':undefined}>The band</a><a href="/#experience" onClick={()=>setOpen(false)}>The experience</a><a href="/engineering/" aria-current={active==='engineering'?'page':undefined}>Engineering</a></nav><a href={demoEmail} className="button product-demo">Request a demo <ArrowUpRight size={15}/></a><button className="product-menu" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header></>;
}
export function SiteFooter(){return <footer className="product-footer"><a href="/" aria-label="Kyntex home"><img className="footer-brand" src="/kyntex-logo-mono.jpg" alt="Kyntex" width="1536" height="1024"/></a><p>Understand how you move.</p><a href="/engineering/">Engineering <ArrowUpRight size={13}/></a><a href="mailto:kyntexsupport@gmail.com">Contact <ArrowUpRight size={13}/></a><span>© 2026 Kyntex</span></footer>;}
