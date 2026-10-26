'use client';
import {createContext, useContext, useEffect, useState} from 'react';
type Store = {cart:string[]; wishlist:string[]; add:(id:string)=>void; remove:(id:string)=>void; toggleWish:(id:string)=>void; count:number; cartOpen:boolean; setCartOpen:(v:boolean)=>void};
const Ctx=createContext<Store|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}) {
 const [cart,setCart]=useState<string[]>([]),[wishlist,setWishlist]=useState<string[]>([]),[cartOpen,setCartOpen]=useState(false),[ready,setReady]=useState(false);
 useEffect(()=>{try {setCart(JSON.parse(localStorage.getItem('eden-cart')||'[]'));setWishlist(JSON.parse(localStorage.getItem('eden-wishlist')||'[]'));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem('eden-cart',JSON.stringify(cart))},[cart,ready]);
 useEffect(()=>{if(ready)localStorage.setItem('eden-wishlist',JSON.stringify(wishlist))},[wishlist,ready]);
 return <Ctx.Provider value={{cart,wishlist,add:id=>{setCart(c=>[...c,id]);setCartOpen(true)},remove:id=>setCart(c=>{const i=c.indexOf(id);return i<0?c:c.filter((_,j)=>j!==i)}),toggleWish:id=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]),count:cart.length,cartOpen,setCartOpen}}>{children}</Ctx.Provider>;
}
export function useStore(){const store=useContext(Ctx);if(!store)throw new Error('StoreProvider missing');return store;}
