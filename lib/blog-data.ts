export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        title: "The Rise of Algorithmic Trading in 2026",
        excerpt: "Why retail investors are moving towards systems that eliminate emotional bias and focus on mathematical precision.",
        content: `
      <p>Algorithmic trading, once the exclusive domain of institutional giants, is now more accessible than ever for retail investors. In 2026, the shift is driven by a need for discipline in an increasingly volatile market.</p>
      
      <h2>Moving Away from Emotion</h2>
      <p>The single biggest hurdle for any trader is their own mind. Fear of loss and the greed for quick gains often lead to irrational decisions. Algorithms don't feel; they execute.</p>
      
      <h2>Precision and Speed</h2>
      <p>Market movements happen in milliseconds. By the time a human processes a news event, the opportunity is often gone. Automated systems can process data and execute trades at speeds impossible for manual traders.</p>
      
      <blockquote>"Technology is not just a tool; it's a bridge to disciplined wealth creation."</blockquote>
      
      <h2>The G7 Approach</h2>
      <p>At G7 Holdings, we build systems that prioritize risk management over absolute returns. Our algorithms are backtested across multiple market cycles to ensure resilience.</p>
    `,
        date: "Jan 12, 2026",
        category: "Insights",
        readTime: "5 min read",
        image: "/blog/algo-rise.jpg", // We'll need to handle placeholders or real images
        author: {
            name: "Alex Thorne",
            role: "Lead Strategist",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
        }
    },
    {
        id: "2",
        title: "Risk Management: The Silent Hero of Trading",
        excerpt: "Most traders focus on profits, but the successful ones focus on not losing. Discover the G7 risk-first philosophy.",
        content: `
      <p>In the world of finance, survival is the prerequisite for success. Most trading gurus talk about 10x returns, but they rarely talk about the 100% loss potential.</p>
      
      <h2>Defining Your Risk Tolerance</h2>
      <p>Every algorithm we deploy starts with a strict 'Stop Loss' philosophy. We pre-define exactly how much we are willing to risk on every single trade before it's even executed.</p>
      
      <h2>Position Sizing</h2>
      <p>It's not about being right; it's about how much you make when you're right and how much you lose when you're wrong. Proper position sizing is what separates a gambler from an investor.</p>
    `,
        date: "Jan 18, 2026",
        category: "Strategy",
        readTime: "7 min read",
        image: "/blog/risk-mgmt.jpg",
        author: {
            name: "Sarah Chen",
            role: "Risk Officer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        }
    },
    {
        id: "3",
        title: "Building a Passive Income Machine",
        excerpt: "How to transition from active trading to a system-driven approach that works while you sleep.",
        content: `
      <p>The goal of trading should be to buy back your time, not to spend more of it staring at charts. Algorithmic systems are the ultimate tool for this transition.</p>
      
      <h2>The Set-and-Forget Myth</h2>
      <p>While systems are automated, they aren't 'set and forget'. They require monitoring and periodic updates to match changing market regimes. However, the time required is reduced by 90% compared to manual trading.</p>
    `,
        date: "Jan 20, 2026",
        category: "Lifestyle",
        readTime: "4 min read",
        image: "/blog/passive-income.jpg",
        author: {
            name: "Michael G7",
            role: "Founder",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
        }
    }
];
