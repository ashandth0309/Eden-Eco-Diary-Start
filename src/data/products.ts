export type Product = { id: string; name: string; image: string; category: 'Botanical' | 'Earth & Texture' | 'Small Treasures'; description: string; price: number | null; featured?: boolean };
// Working editorial titles; confirm names, actual materials, stock, and prices with client.
export const products: Product[] = [
 {id:'leaf-lace', name:'Leaf Lace Drops', image:'/images/products/eden-15.webp',category:'Botanical',description:'Statement drops with intricate openwork leaf details.',price:null,featured:true},
 {id:'sun-disc', name:'Sunlit Disc Earrings',image:'/images/products/eden-special-01.webp',category:'Earth & Texture',description:'Circular earrings with an expressive cut-out centre.',price:null,featured:true},
 {id:'forest-fern',name:'Forest Fern Drops',image:'/images/products/eden-06.webp',category:'Botanical',description:'An organic silhouette inspired by woodland forms.',price:null,featured:true},
 {id:'petal-art',name:'Petal Art Earrings',image:'/images/products/eden-11.webp',category:'Small Treasures',description:'Intricately detailed, artful handmade earrings.',price:null,featured:true},
 {id:'moonflower',name:'Moonflower Earrings',image:'/images/products/eden-10.webp',category:'Small Treasures',description:'A delicate botanical motif in a round form.',price:null},
 {id:'canopy',name:'Canopy Statement Drops',image:'/images/products/eden-17.webp',category:'Botanical',description:'Sculptural details inspired by nature.',price:null},
 {id:'earth-spiral',name:'Earth Spiral Earrings',image:'/images/products/eden-04.webp',category:'Earth & Texture',description:'Bold spiralling forms with a natural character.',price:null},
 {id:'tropical-petal',name:'Tropical Petal Drops',image:'/images/products/eden-05.webp',category:'Botanical',description:'A graceful leaf-like silhouette.',price:null},
 {id:'terra-disc',name:'Terra Disc Earrings',image:'/images/products/eden-02.webp',category:'Earth & Texture',description:'Simple patterned discs for everyday styling.',price:null},
 {id:'woven-circle',name:'Woven Circle Drops',image:'/images/products/eden-13.webp',category:'Earth & Texture',description:'Layered circular shapes and carved detail.',price:null},
 {id:'mini-botanical',name:'Mini Botanical Drops',image:'/images/products/eden-12.webp',category:'Small Treasures',description:'Small nature-inspired earrings.',price:null},
 {id:'night-garden',name:'Night Garden Drops',image:'/images/products/eden-16.webp',category:'Botanical',description:'Detailed leaves in a dark statement form.',price:null},
 {id:'ornate-petal',name:'Ornate Petal Earrings',image:'/images/products/eden-03.webp',category:'Botanical',description:'Decorative openwork in a soft teardrop shape.',price:null},
 {id:'little-leaf',name:'Little Leaf Drops',image:'/images/products/eden-07.webp',category:'Small Treasures',description:'A smaller botanical silhouette.',price:null},
 {id:'etched-earth',name:'Etched Earth Earrings',image:'/images/products/eden-08.webp',category:'Earth & Texture',description:'Ornate details inspired by earthy textures.',price:null},
 {id:'mini-spiral',name:'Mini Spiral Drops',image:'/images/products/eden-09.webp',category:'Small Treasures',description:'Playful nature-inspired outlines.',price:null},
 {id:'flower-etched',name:'Flower Etched Earrings',image:'/images/products/eden-14.webp',category:'Small Treasures',description:'Compact flower-inspired statement earrings.',price:null},
 {id:'garden-motif',name:'Garden Motif Earrings',image:'/images/products/eden-special-02.webp',category:'Small Treasures',description:'Handcrafted intricate motif earrings.',price:null},
 {id:'ornament',name:'Ornament Drops',image:'/images/products/eden-special-03.webp',category:'Earth & Texture',description:'Decorative statement jewellery.',price:null},
 {id:'woven-garden',name:'Woven Garden Drops',image:'/images/products/eden-special-04.webp',category:'Botanical',description:'Patterned drops with a botanical feel.',price:null},
];
export function getProduct(id: string) { return products.find(p=>p.id===id); }
export function formatPrice(price: number|null) { return price===null?'Price on request':new Intl.NumberFormat('en-LK',{style:'currency',currency:'LKR',maximumFractionDigits:0}).format(price); }
