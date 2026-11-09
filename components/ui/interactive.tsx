"use client";
import { createContext, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from ".";

export function Tabs({ items }: { items: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0); const id = useId(); const refs = useRef<(HTMLButtonElement | null)[]>([]);
  return <div><div role="tablist" aria-label="View options" className="mb-6 flex flex-wrap gap-2">{items.map((item, i) => <button key={item.label} ref={el => { refs.current[i] = el; }} role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-panel-${i}`} aria-selected={active === i} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => { let next = i; if(e.key === "ArrowRight") next = (i+1)%items.length; else if(e.key === "ArrowLeft") next = (i+items.length-1)%items.length; else if(e.key === "Home") next=0; else if(e.key === "End") next=items.length-1; else return; e.preventDefault(); setActive(next); refs.current[next]?.focus(); }} className={`min-h-11 rounded-full px-5 py-2 text-sm ${active === i ? "bg-forest text-white" : "border border-sand bg-white text-forest"}`}>{item.label}</button>)}</div>{items.map((item,i) => <div key={item.label} role="tabpanel" id={`${id}-panel-${i}`} aria-labelledby={`${id}-tab-${i}`} tabIndex={0} hidden={active!==i}>{item.content}</div>)}</div>;
}
export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null); const id = useId();
  useEffect(() => { const dialog=ref.current; if(open && !dialog?.open) dialog?.showModal(); else if(!open && dialog?.open) dialog.close(); },[open]);
  return <dialog ref={ref} aria-labelledby={id} onCancel={onClose} onClose={onClose} className="m-auto max-h-[85svh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl bg-ivory p-6 text-ink shadow-lift backdrop:bg-forest/60"><div className="mb-5 flex items-start justify-between gap-4"><h2 id={id} className="font-display text-3xl">{title}</h2><Button autoFocus aria-label="Close dialog" onClick={onClose} className="min-h-11 px-3"><X size={18}/></Button></div>{children}</dialog>;
}
const ToastContext = createContext<(message: string) => void>(() => {});
export function Toast({ message }: { message: string }) { return <div role="status" aria-live="polite" className={message ? "fixed right-5 bottom-6 left-5 z-[70] mx-auto max-w-md rounded-xl bg-forest px-6 py-4 text-white shadow-lift" : "sr-only"}>{message}</div>; }
export function ToastProvider({ children }: { children: ReactNode }) { const [message,setMessage]=useState(""); useEffect(()=>{if(!message)return; const timer=setTimeout(()=>setMessage(""),5000); return ()=>clearTimeout(timer);},[message]); return <ToastContext.Provider value={setMessage}>{children}<Toast message={message}/></ToastContext.Provider>; }
export function useToast(){return useContext(ToastContext);}
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const el=ref.current; if(!el || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return; const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){el.animate([{opacity:.5,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'ease-out'});observer.unobserve(el);}});},{threshold:.12});observer.observe(el);return ()=>observer.disconnect();},[]);
  return <div ref={ref} className={className}>{children}</div>;
}
