import {Suspense} from 'react';import {Shop} from '@/components/Shop';import type {Metadata} from 'next';
export const metadata:Metadata={title:'Shop handmade jewellery'};
export default function ShopPage(){return <Suspense fallback={<main className="shop-page section"><h1>Loading collection...</h1></main>}><Shop/></Suspense>}
