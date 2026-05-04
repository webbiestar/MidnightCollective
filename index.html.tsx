import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, TrendingUp, Sparkles, MessageCircle, DollarSign, Check, Star, Shield, Clock, Users, Lock, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoMark from "@/assets/logo-option-c.png";
import aboutBg from "@/assets/about-bg.jpg";
import faqBg from "@/assets/faq-bg.jpg";
import { Reveal } from "@/components/Reveal";
import { useEffect } from "react";
import { toast } from "sonner";

const services = [
  { icon: TrendingUp, title: "Traffic & Growth", desc: "Multi-platform funnels across TikTok, Instagram, Reddit and X — engineered to drive qualified subscribers on autopilot." },
  { icon: Sparkles, title: "Branding & Positioning", desc: "A signature visual identity, premium photoshoots and a niche position that commands top-tier rates." },
  { icon: MessageCircle, title: "24/7 Chatting & Sales", desc: "Trained, NDA-bound chat team converting subscribers into high-spending fans around the clock — in your voice." },
  { icon: DollarSign, title: "Monetisation Strategy", desc: "PPV pricing, bundle ladders, tip menus and VIP tiers — modeled and optimised against six-figure data sets." },
];

const logos = ["FORBES", "BUSINESS INSIDER", "VOGUE", "MAXIM", "ROLLING STONE", "GQ", "PLAYBOY", "COSMO"];

const cases = [
  { name: "Model A.", niche: "Lifestyle", before: "$1.2K", after: "$12K", metric: "Monthly net earnings", lift: "+900%" },
  { name: "Model J.", niche: "Fitness", before: "$2K", after: "$10K", metric: "Monthly net earnings", lift: "+400%" },
  { name: "Model R.", niche: "Glamour", before: "$3K", after: "$15K", metric: "Monthly net earnings", lift: "+400%" },
];

const testimonials = [
  { quote: "I went from $4K to $80K months. They handle everything — I just shoot content.", name: "Top 0.1% Creator", role: "Anonymous · 6-figure month" },
  { quote: "The chat team alone tripled my PPV revenue. Discreet, professional, ridiculously effective.", name: "Top 0.5% Creator", role: "Anonymous · Lifestyle niche" },
  { quote: "Finally an agency that treats us like a real business. Contracts, transparency, results.", name: "Top 1% Creator", role: "Anonymous · Fitness niche" },
];

const faqs = [
  { q: "Who do you accept?", a: "Anyone serious about scaling. Whether you're brand new or already earning, if you're committed and coachable, we'd love to talk." },
  { q: "Is everything confidential?", a: "Absolutely. NDAs across the entire team, encrypted communications, and zero public client lists. Your privacy is non-negotiable." },
  
  { q: "How fast will I see results?", a: "Most signed models hit a new revenue all-time-high within 30 days. Compounding growth follows from there." },
  { q: "Do I keep ownership of my account?", a: "100%. Your account, your audience, your content. We're the operator behind the scenes — never the owner." },
  { q: "What does the contract look like?", a: "Short, plain-English and creator-friendly. Month-to-month, no exclusivity outside OnlyFans, full account ownership stays with you, and either side can exit with 30 days' notice. We'll walk you through every clause before you sign." },
  { q: "What support will I receive?", a: "A dedicated account manager, a 24/7 trained chat team, in-house creative direction for branding and content planning, traffic and growth specialists, and direct access to our founder. You'll have a real team behind you." },
  { q: "Who runs my account day-to-day?", a: "Our team sits on and manages your account for you — handling messages, posts, PPVs, tips and fan relationships around the clock. All you have to do is create the required content." },
];

const Section = ({ id, eyebrow, title, sub, children }: any) => (
  <section id={id} className="py-28 px-6 max-w-7xl mx-auto">
    <Reveal className="mb-16 max-w-3xl">
      {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">{eyebrow}</div>}
      {title && <h2 className="font-display text-4xl md:text-6xl font-semibold text-gradient leading-[1.05]">{title}</h2>}
      {sub && <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{sub}</p>}
    </Reveal>
    {children}
  </section>
);

const Index = () => {
  const renderLogo = (size: number) => (
    <img src={logoMark} alt="Midnight Collective logo" width={size} height={size} loading="lazy" style={{ width: size, height: size, objectFit: "contain" }} />
  );

  useEffect(() => {
    document.title = "Midnight Collective — Elite OnlyFans Management Agency for Models";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute('content', 'Midnight Collective is the elite OnlyFans management agency scaling top models to six and seven-figure months. Traffic, branding, chatting and monetisation — done for you.');
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received. Our team will reach out within 24 hours — discreetly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2.5 text-foreground">
            {renderLogo(44)}
            MIDNIGHT COLLECTIVE<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#chat-team" className="hover:text-foreground transition">Chat Team</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-medium">
            <a href="#contact">Apply Now</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
        <img src={logoMark} alt="" aria-hidden="true" className="absolute right-[2%] top-[10%] w-[55vw] max-w-[700px] opacity-60 pointer-events-none animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
              The Elite <span className="text-accent-gradient">Management</span> Agency for OnlyFans
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We help serious models scale to consistent $6K–$9K months — discreetly. Traffic, branding, 24/7 chatting and monetisation, fully done for you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base h-14 px-8 font-medium glow group">
                <a href="#contact">Apply Now <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base h-14 px-8 border-border bg-transparent hover:bg-card">
                <a href="#services">Our Services</a>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
              {[["$6–9K","Avg. monthly earnings"],["15+","Models scaled"]].map(([n,l])=>(
                <div key={l}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="Everything done for you." sub="A vertically integrated team handling every layer of the business — so you focus exclusively on content.">
        <div className="grid md:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <div key={s.title} className="group bg-card p-10 hover:bg-card/40 transition-all duration-500 relative">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="font-display text-sm text-muted-foreground/50">0{i+1}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="absolute bottom-8 right-8 w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
            </div>
          ))}
        </div>
      </Section>

      {/* CHAT TEAM — light section for contrast */}
      <section id="chat-team" className="bg-foreground text-background py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--background)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live · 24/7
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-6">
                An <span className="text-background">elite chatting team</span> operating 24/7 on your account.
              </h2>
              <p className="text-lg text-background/70 leading-relaxed mb-8 max-w-xl">
                Hand-picked, NDA-bound chatters trained on your tone, your fans and your offers. They convert subscribers into VIPs while you sleep — no missed messages, no missed money.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Clock, t: "True 24/7 coverage", d: "Three shifts. Zero downtime. Every fan replied to within minutes." },
                  { icon: Users, t: "Trained in your voice", d: "Onboarding, scripts and tone-matching so it feels 100% you." },
                  { icon: Zap, t: "Sales-trained closers", d: "PPV, custom content and tip menus pitched at the right moment." },
                  { icon: Lock, t: "NDA + secure access", d: "Encrypted comms, locked devices, signed contracts top to bottom." },
                ].map(f => (
                  <div key={f.t} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-display font-semibold mb-0.5">{f.t}</div>
                      <div className="text-sm text-background/60 leading-relaxed">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="bg-background text-foreground rounded-2xl p-6 shadow-elegant border border-border max-w-md ml-auto">
                <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow" />
                    <div>
                      <div className="font-medium text-sm">Subscriber · Tier 3</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Online now</div>
                    </div>
                  </div>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-end"><div className="bg-secondary rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">Hey gorgeous, you up? 😍</div></div>
                  <div className="flex"><div className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">Always up for you babe 🖤 Just shot something I think you'll love…</div></div>
                  <div className="flex"><div className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">Locked PPV — $45 · want me to send?</div></div>
                  <div className="flex justify-end"><div className="bg-secondary rounded-2xl rounded-tr-sm px-4 py-2.5">Tipped 💸 send it 🔥</div></div>
                </div>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span>Avg. response · 47s</span>
                  <span className="text-foreground font-medium">+ $4,820 today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <img src={aboutBg} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="relative">
          <Section id="about" eyebrow="About">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-gradient">
                  We treat your career like the <span className="text-accent-gradient">eight-figure business</span> it can become.
                </h2>
              </div>
              <div className="md:col-span-5 space-y-6 text-muted-foreground text-lg leading-relaxed md:pt-4">
                <p>Midnight Collective was founded by <span className="text-foreground font-medium">Samuel Dempsey</span> after watching too many talented models lose years — and millions — to amateur agencies, exploitative contracts and burnout.</p>
                <p>Our mission: build sustainable, premium creator businesses for the top 1% of models. Real numbers. Real ownership. Real privacy.</p>
                <div className="pt-4 space-y-3">
                  {["Fully NDA-protected. Zero public client list.","You keep 100% account ownership, always.","Performance-based — we win when you do.","Various connections within the industry."].map(p => (
                    <div key={p} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-border">
                  <div className="font-display text-foreground">Samuel Dempsey</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO, Midnight Collective · Very experienced within the industry</div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* FAQ */}
      <div className="relative">
        <img src={faqBg} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        <div className="relative">
          <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
            <Accordion type="single" collapsible className="max-w-3xl">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-xl font-medium hover:no-underline hover:text-primary py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Section>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">Apply</div>
            <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-gradient">
              Ready to <span className="text-accent-gradient">scale</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">All applications are reviewed personally. 100% confidential — we'll respond within 24 hours.</p>
          </div>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Input required placeholder="Stage / model name" className="h-14 bg-card border-border rounded-xl px-5" />
            <Input required type="email" placeholder="Email" className="h-14 bg-card border-border rounded-xl px-5" />
            <Input required placeholder="OnlyFans handle (or 'not yet')" className="h-14 bg-card border-border rounded-xl px-5 md:col-span-2" />
            <Input required placeholder="Current monthly earnings (USD)" className="h-14 bg-card border-border rounded-xl px-5 md:col-span-2" />
            <Textarea required placeholder="Tell us about your goals." rows={5} className="bg-card border-border rounded-xl px-5 py-4 md:col-span-2 resize-none" />
            <Button type="submit" size="lg" className="md:col-span-2 h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium text-base glow">
              Submit Application <ArrowUpRight className="ml-1" />
            </Button>
            <p className="md:col-span-2 text-xs text-center text-muted-foreground flex items-center justify-center gap-2 mt-2">
              <Shield className="w-3 h-3" /> Fully confidential. Protected under NDA from first contact.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-display text-foreground flex items-center gap-2">{renderLogo(32)}MIDNIGHT COLLECTIVE<span className="text-primary">.</span></div>
          <div>© {new Date().getFullYear()} Midnight Collective. 18+ only.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-foreground transition">Instagram</a><a href="#" className="hover:text-foreground transition">X</a><a href="#" className="hover:text-foreground transition">Privacy</a></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
