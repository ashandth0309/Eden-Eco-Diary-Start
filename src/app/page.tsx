import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Flower2,
  Leaf,
  MapPin,
  MoveUpRight,
  Sparkles,
  Waves,
} from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { Atmosphere } from '@/components/Atmosphere';

const campaign = (name: string) => `/images/campaign/${name}.webp`;

const collections = [
  {
    number: '01',
    title: 'Botanical forms',
    subtitle: 'Inspired by the leaf',
    image: 'monstera-flatlay',
    href: '/shop?category=Botanical',
  },
  {
    number: '02',
    title: 'Earth & texture',
    subtitle: 'Sculptural by nature',
    image: 'cream-still-life',
    href: '/shop?category=Earth%20%26%20Texture',
  },
  {
    number: '03',
    title: 'Small treasures',
    subtitle: 'Stories from the coast',
    image: 'coastal-turtles',
    href: '/shop?category=Small%20Treasures',
  },
] as const;

const journal = [
  { image: 'forest-detail', number: '01', label: 'FOREST NOTES', title: 'A study in green' },
  { image: 'coastal-turtles', number: '02', label: 'ISLAND NOTES', title: 'Where the island meets the sea' },
  { image: 'dark-volcanic', number: '03', label: 'EARTH NOTES', title: 'The beauty of texture' },
] as const;

function EditorialImage({
  name,
  alt,
  sizes,
  priority = false,
  className = '',
}: {
  name: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={campaign(name)}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`eden-editorial-image ${className}`.trim()}
    />
  );
}

export default function Home() {
  return (
    <main className="premium-home eden-flagship">
      <Atmosphere />

      {/* 01 — Main hero: left side reserved for typography, real Eden jewellery on the right. */}
      <section className="premium-hero eden-hero" aria-labelledby="eden-hero-title">
        <EditorialImage
          name="hero-waterfall"
          alt="Dark coconut-shell-inspired leaf earrings displayed on rainforest stone beside a waterfall"
          sizes="100vw"
          priority
          className="premium-hero-image"
        />
        <div className="premium-hero-shade" aria-hidden="true" />
        <div className="eden-hero-light" aria-hidden="true" />
        <div className="premium-hero-content cinematic-copy eden-hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="gold-line" /> A LOVE LETTER TO SRI LANKA</span>
          <h1 id="eden-hero-title">Nature,<br /><em>worn</em><br />beautifully.</h1>
          <p>Born from an island of extraordinary beauty. Discover handcrafted coconut-shell adornments inspired by nature's most expressive forms.</p>
          <div className="hero-buttons">
            <Link className="btn btn-gold" href="/shop">Discover the collection <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="text-link light" href="/#story">Our story <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <span className="hero-side-label">EDEN ECO DIARY / ISLAND EDITION</span>
        <Link className="premium-scroll" href="/#collection">SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" /></Link>
        <span className="hero-corner">COCONUT-SHELL JEWELLERY · SRI LANKA</span>
      </section>

      {/* Branding line — deliberately brief and tactile rather than a dense banner. */}
      <div className="marquee eden-marquee" aria-label="Nature inspired, handmade in Sri Lanka">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => <span key={i}>ROOTED IN SRI LANKA <b>✳</b> BORN FROM NATURE <b>✳</b> HANDMADE WITH INTENTION <b>✳</b> THE EDEN ECO DIARY <b>✳</b></span>)}
        </div>
      </div>

      {/* 02 — Actual inventory, not AI-invented products. */}
      <section className="section arrivals eden-arrivals" id="collection" aria-labelledby="eden-arrivals-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">01 / THE EDEN EDIT</span>
              <h2 id="eden-arrivals-heading">Little works<br />of <em>nature.</em></h2>
            </div>
            <div className="section-intro">
              <p>Statement shapes. Intricate details. Pieces that bring a little of the island into every day.</p>
              <Link className="text-link" href="/shop">Explore every piece <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </Reveal>
        <div className="product-row eden-product-rail" aria-label="Featured Eden jewellery">
          {products.slice(0, 5).map((product) => <ProductCard key={product.id} p={product} />)}
        </div>
        <p className="eden-editor-note">THE EDEN COLLECTION <span>—</span> INDIVIDUAL BY NATURE</p>
      </section>

      {/* 03 — Sri Lankan editorial identity. */}
      <section className="premium-manifesto eden-manifesto" id="story" aria-labelledby="eden-story-heading">
        <div className="manifesto-image eden-manifesto-image">
          <EditorialImage name="hero-golden-portrait" alt="Campaign portrait featuring sculptural handmade earrings in tropical golden light" sizes="(max-width: 850px) 100vw, 52vw" />
          <span className="image-stamp">AN ISLAND STORY / 2026</span>
        </div>
        <div className="manifesto-copy eden-manifesto-copy">
          <Reveal>
            <span className="eyebrow">02 / THE PLACE WE CALL HOME</span>
            <h2 id="eden-story-heading">An island.<br />A feeling.<br /><em>An Eden.</em></h2>
            <span className="short-rule" aria-hidden="true" />
            <p>There is a certain kind of beauty in Sri Lanka — in the quiet curve of a tropical leaf, the meeting of ocean and stone, and the warmth of the earth after rain.</p>
            <p>That is the spirit of Eden Eco Diary: nature-inspired adornments, thoughtful details, and a distinctly personal sense of style.</p>
            <Link className="text-link light" href="/shop">Discover the pieces <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </Reveal>
          <span className="manifesto-outline" aria-hidden="true">ශ්‍රී ලංකා · SRI LANKA</span>
        </div>
      </section>

      {/* 04 — Big, immersive categories. */}
      <section className="premium-categories section eden-categories" aria-labelledby="eden-collections-heading">
        <Reveal>
          <div className="center-head">
            <span className="eyebrow">03 / DISCOVER YOUR EDEN</span>
            <h2 id="eden-collections-heading">The shape of <em>nature.</em></h2>
            <p>Three ways to explore a world of organic detail.</p>
          </div>
        </Reveal>
        <div className="premium-category-grid">
          {collections.map((item) => (
            <Link key={item.number} className="premium-category interactive-editorial eden-category" href={item.href}>
              <EditorialImage name={item.image} alt={`${item.title} — Eden Eco Diary styled jewellery photograph`} sizes="(max-width: 767px) 100vw, 33vw" />
              <span className="premium-category-overlay" aria-hidden="true" />
              <span className="premium-category-index">{item.number} / COLLECTION</span>
              <div className="premium-category-text">
                <small>{item.subtitle}</small>
                <h3>{item.title}</h3>
                <span>EXPLORE COLLECTION <ArrowUpRight size={17} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 05 — Full-width cinematic interlude, not a product card. */}
      <section className="premium-quote chapter-break eden-interlude" aria-label="Eden philosophy">
        <span className="eyebrow">A NOTE FROM EDEN</span>
        <Reveal>
          <h2>Nature never makes<br />two things <em>quite alike.</em></h2>
        </Reveal>
        <span className="premium-quote-line" aria-hidden="true" />
        <span className="eden-interlude-footnote">THE BEAUTY OF BEING INDIVIDUAL</span>
      </section>

      {/* 06 — Runway-quality editorial, model images are marketing assets. */}
      <section className="lookbook-premium eden-lookbook" aria-labelledby="eden-lookbook-heading">
        <div className="lookbook-premium-left">
          <EditorialImage name="coastal-portrait" alt="Warm coastal campaign portrait with handmade statement earrings" sizes="(max-width: 850px) 100vw, 52vw" />
          <span>THE ISLAND MUSE / LOOK 01</span>
        </div>
        <div className="lookbook-premium-right">
          <Reveal>
            <span className="eyebrow">04 / AN ISLAND WARDROBE</span>
            <h2 id="eden-lookbook-heading">A little<br /><em>wildness.</em><br />A lot of soul.</h2>
            <p>Designed to be noticed. Styled to feel entirely your own. Let a single detail tell the whole story.</p>
            <Link className="btn btn-outline" href="/shop">Shop the look <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </Reveal>
          <div className="mini-look eden-mini-look">
            <EditorialImage name="linen-portrait" alt="Ivory-toned editorial portrait displaying handmade botanical jewellery" sizes="(max-width: 850px) 45vw, 220px" />
            <span>LOOK 02 / QUIET ELEGANCE</span>
          </div>
        </div>
      </section>

      {/* 07 — Another point of sale after the editorial lookbook. */}
      <section className="section selected eden-selected" aria-labelledby="eden-selected-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">05 / THE LITTLE DETAILS</span>
              <h2 id="eden-selected-heading">Not ordinary.<br /><em>Never meant to be.</em></h2>
            </div>
            <Link className="text-link" href="/shop">See the complete edit <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </Reveal>
        <div className="selected-grid">
          {products.slice(5, 9).map((product) => <ProductCard key={product.id} p={product} />)}
        </div>
      </section>

      {/* 08 — Heritage and design; avoids unverified process claims. */}
      <section className="premium-craft eden-craft" aria-labelledby="eden-craft-heading">
        <div className="premium-craft-image">
          <EditorialImage name="craft-workshop" alt="Illustrative still life showing carved jewellery, coconut shell textures and natural craft materials" sizes="(max-width: 850px) 100vw, 53vw" />
          <span className="eden-photo-caption">A STUDY OF MATERIAL & FORM</span>
        </div>
        <div className="premium-craft-content">
          <Reveal>
            <span className="eyebrow">06 / THE CHARACTER OF CRAFT</span>
            <h2 id="eden-craft-heading">Beauty in<br />the <em>details.</em></h2>
            <p>Look closer. Every curve, cutout and silhouette tells a different visual story — shaped by an appreciation for natural materials and expressive design.</p>
            <div className="craft-values">
              <span><Flower2 size={22} aria-hidden="true" /> Organic inspiration</span>
              <span><Leaf size={22} aria-hidden="true" /> Distinctive forms</span>
              <span><Waves size={22} aria-hidden="true" /> Island spirit</span>
            </div>
            <Link className="text-link light" href="/shop">Find your Eden <MoveUpRight size={17} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* 09 — Sri Lanka origin, without claiming that an AI scene is a real physical site. */}
      <section className="eden-origin-band" aria-label="Rooted in Sri Lanka">
        <span className="eden-origin-symbol"><MapPin size={18} aria-hidden="true" /> 6°–10° N / 79°–82° E</span>
        <p>One island. Endless inspiration.</p>
        <span className="eden-origin-trailing"><Sparkles size={18} aria-hidden="true" /> SRI LANKA</span>
      </section>

      {/* 10 — Visual diary, not falsely represented as published journalism. */}
      <section className="section premium-journal eden-journal" id="journal" aria-labelledby="eden-journal-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">07 / THE VISUAL DIARY</span>
              <h2 id="eden-journal-heading">An island of <em>inspiration.</em></h2>
            </div>
            <p className="journal-note">A quiet collection of textures, places and beautiful little details that inspire the Eden aesthetic.</p>
          </div>
        </Reveal>
        <div className="premium-editorial-grid eden-journal-grid">
          <div className="editorial-large">
            <EditorialImage name={journal[0].image} alt="Handcrafted jewellery styled among tropical forest textures" sizes="(max-width: 850px) 100vw, 55vw" />
            <span>{journal[0].label} / {journal[0].number}</span>
          </div>
          <div className="editorial-stack">
            {journal.slice(1).map((entry) => (
              <div key={entry.number}>
                <EditorialImage name={entry.image} alt={entry.title} sizes="(max-width: 850px) 50vw, 33vw" />
                <span>{entry.label} / {entry.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Direct CTA as visible content: no opacity-based Reveal wrapper. */}
      <section className="premium-closing cinematic-end eden-closing" aria-labelledby="eden-closing-heading">
        <EditorialImage
          name="waterfall-rock"
          alt="Eden-inspired statement earrings on moss-covered rocks in a tropical waterfall landscape"
          sizes="100vw"
          className="premium-closing-image"
        />
        <div className="premium-closing-overlay" aria-hidden="true" />
        <div className="premium-closing-content eden-closing-content">
          <span className="eyebrow">THE EDEN ECO DIARY COLLECTION</span>
          <h2 id="eden-closing-heading">A little piece<br />of <em>Eden.</em></h2>
          <p>Take a piece of the island with you.</p>
          <Link className="btn btn-gold" href="/shop">Explore the collection <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
