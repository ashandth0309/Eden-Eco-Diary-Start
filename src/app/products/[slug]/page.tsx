import {notFound} from 'next/navigation';import {getProduct,products} from '@/data/products';import {ProductDetail} from '@/components/ProductDetail';import type {Metadata} from 'next';
export async function generateStaticParams(){return products.map(p=>({slug:p.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProduct(slug);return {title:p?.name||'Product',description:p?.description}}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProduct(slug);if(!p)notFound();return <ProductDetail p={p}/>}
