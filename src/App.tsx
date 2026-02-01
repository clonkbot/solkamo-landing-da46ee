import { useState, useEffect } from 'react'

function App() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '0xad6c0fe4fc0c11d46032ee3ef8e1a3c37c677b07'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats = [
    { label: 'Market Cap', value: '$2.4M', icon: '📈' },
    { label: 'Holders', value: '12,847', icon: '👥' },
    { label: 'Liquidity', value: '$890K', icon: '💧' },
    { label: 'Volume 24h', value: '$1.2M', icon: '🔥' },
  ]

  const tokenomics = [
    { label: 'Total Supply', value: '1,000,000,000', percent: 100 },
    { label: 'Liquidity Pool', value: '900,000,000', percent: 90 },
    { label: 'Community', value: '100,000,000', percent: 10 },
  ]

  const howToBuy = [
    { step: '01', title: 'Get a Wallet', desc: 'Download MetaMask or Coinbase Wallet and set up your account' },
    { step: '02', title: 'Bridge to Base', desc: 'Use bridge.base.org to move ETH from Ethereum to Base network' },
    { step: '03', title: 'Swap for SOLKAMO', desc: 'Connect to Uniswap, paste contract address, and swap!' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Ticker Banner */}
      <div className="bg-gradient-to-r from-[#b8ff57] via-[#00fff5] to-[#ff2d92] py-2 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 font-display text-black text-sm tracking-wider">
                🦎 SOLKAMO ON BASE • THE NEXT 1000X • COMMUNITY DRIVEN • NO TAX • LP LOCKED •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-50 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🦎</span>
            <span className="font-display text-2xl gradient-text">SOLKAMO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-heading text-sm">
            <a href="#about" className="hover:text-[#b8ff57] transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-[#b8ff57] transition-colors">Tokenomics</a>
            <a href="#buy" className="hover:text-[#b8ff57] transition-colors">How to Buy</a>
            <a href="#community" className="hover:text-[#b8ff57] transition-colors">Community</a>
          </div>
          <a
            href="https://app.uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded-xl font-heading text-sm"
          >
            BUY NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg grid-pattern min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>💎</div>
        <div className="absolute top-1/3 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🚀</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }}>🌙</div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Token Icon */}
          <div className="token-icon mb-8 inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#b8ff57] via-[#00fff5] to-[#ff2d92] p-2 mx-auto">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                <span className="text-8xl md:text-9xl">🦎</span>
              </div>
            </div>
          </div>

          <div className="animate-in delay-1">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 glitch-text">
              <span className="gradient-text">SOLKAMO</span>
            </h1>
          </div>

          <div className="animate-in delay-2">
            <p className="font-heading text-xl md:text-2xl text-white/70 mb-4 tracking-wider">
              THE MEMECOIN REVOLUTION ON BASE
            </p>
          </div>

          <div className="animate-in delay-3">
            <p className="text-lg text-[#b8ff57] font-mono mb-10">
              Community-Driven • Zero Tax • Locked Liquidity
            </p>
          </div>

          {/* Contract Address */}
          <div className="animate-in delay-4 mb-10">
            <div
              onClick={copyToClipboard}
              className="inline-flex items-center gap-4 bg-white/5 border border-[#b8ff57]/30 rounded-2xl px-6 py-4 cursor-pointer hover:bg-white/10 hover:border-[#b8ff57] transition-all group"
            >
              <span className="text-white/50 text-sm font-mono">CA:</span>
              <span className="font-mono text-sm md:text-base text-[#00fff5] group-hover:text-white transition-colors">
                {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
              </span>
              <span className="text-xl">{copied ? '✅' : '📋'}</span>
            </div>
            {copied && (
              <p className="text-[#b8ff57] text-sm mt-2 animate-pulse">Copied to clipboard!</p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="animate-in delay-5 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 rounded-2xl font-display text-lg tracking-wider"
            >
              🚀 BUY $SOLKAMO
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl font-display text-lg tracking-wider border-2 border-[#b8ff57]/50 hover:border-[#b8ff57] hover:bg-[#b8ff57]/10 transition-all"
            >
              📊 VIEW CHART
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#b8ff57] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal stat-card rounded-2xl p-6 text-center card-hover transition-all duration-500 delay-${i + 1}`}
            >
              <span className="text-4xl mb-4 block">{stat.icon}</span>
              <p className="font-display text-2xl md:text-3xl gradient-text mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm font-mono">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 hero-bg">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              WHY <span className="gradient-text">SOLKAMO</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-heading">
              Born from the Base chain revolution. Built by degens, for degens.
              SOLKAMO isn't just a memecoin — it's a movement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🔒', title: 'Liquidity Locked', desc: 'LP tokens are locked forever. No rugs, no scams, just pure memecoin energy.' },
              { icon: '0️⃣', title: 'Zero Tax', desc: 'Buy and sell freely with 0% tax. Your gains are YOUR gains.' },
              { icon: '🌐', title: 'Base Native', desc: 'Built on Base for lightning-fast, low-cost transactions.' },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal stat-card rounded-3xl p-8 card-hover transition-all duration-500 delay-${i + 1}`}
              >
                <span className="text-5xl mb-6 block">{feature.icon}</span>
                <h3 className="font-display text-xl mb-4 text-[#b8ff57]">{feature.title}</h3>
                <p className="text-white/60 font-heading">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#b8ff57]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              <span className="gradient-text">TOKENOMICS</span>
            </h2>
            <p className="text-white/60 text-lg font-heading">Simple. Fair. Community-first.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Visual */}
            <div className="reveal relative">
              <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-[#b8ff57] to-[#00fff5] p-1 glow-box">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 rounded-full border-8 border-[#b8ff57]/30"></div>
                  <div className="absolute inset-8 rounded-full border-4 border-[#00fff5]/20"></div>
                  <div className="text-center relative z-10">
                    <p className="text-5xl mb-2">🦎</p>
                    <p className="font-display text-2xl gradient-text">1B</p>
                    <p className="text-white/50 text-sm">TOTAL SUPPLY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokenomics List */}
            <div className="space-y-6">
              {tokenomics.map((item, i) => (
                <div key={item.label} className={`reveal delay-${i + 1}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-heading text-white/80">{item.label}</span>
                    <span className="font-mono text-[#b8ff57]">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#b8ff57] to-[#00fff5] rounded-full transition-all duration-1000"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-white/40 text-sm mt-1 font-mono">{item.value} tokens</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="buy" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              HOW TO <span className="gradient-text">BUY</span>
            </h2>
            <p className="text-white/60 text-lg font-heading">Three simple steps to join the SOLKAMO army</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howToBuy.map((item, i) => (
              <div
                key={item.step}
                className={`reveal stat-card rounded-3xl p-8 card-hover transition-all duration-500 delay-${i + 1} relative overflow-hidden`}
              >
                <div className="absolute -top-4 -right-4 text-8xl font-display text-white/5">{item.step}</div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#b8ff57]/10 text-[#b8ff57] font-mono text-sm mb-6">
                    STEP {item.step}
                  </span>
                  <h3 className="font-display text-xl mb-4">{item.title}</h3>
                  <p className="text-white/60 font-heading">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contract Address Highlight */}
          <div className="reveal mt-16 stat-card rounded-3xl p-8 text-center glow-box">
            <p className="text-white/50 text-sm mb-4 font-mono">CONTRACT ADDRESS</p>
            <div
              onClick={copyToClipboard}
              className="inline-flex items-center gap-4 bg-[#0a0a0f] rounded-2xl px-8 py-4 cursor-pointer hover:bg-white/5 transition-all group border border-[#b8ff57]/30"
            >
              <span className="font-mono text-lg text-[#00fff5] break-all">{contractAddress}</span>
              <span className="text-2xl flex-shrink-0">{copied ? '✅' : '📋'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              JOIN THE <span className="gradient-text">MOVEMENT</span>
            </h2>
            <p className="text-white/60 text-lg font-heading mb-12">
              Be part of the most based community on Base
            </p>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-6">
            {[
              { icon: '𝕏', name: 'Twitter', url: 'https://twitter.com' },
              { icon: '💬', name: 'Telegram', url: 'https://telegram.org' },
              { icon: '📊', name: 'DexScreener', url: 'https://dexscreener.com' },
              { icon: '🦄', name: 'Uniswap', url: 'https://app.uniswap.org' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stat-card px-8 py-6 rounded-2xl card-hover transition-all duration-300 flex items-center gap-4 group"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform">{social.icon}</span>
                <span className="font-heading text-lg">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#b8ff57]/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="reveal">
            <p className="text-6xl mb-8">🦎</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              READY TO <span className="gradient-text">APE IN</span>?
            </h2>
            <p className="text-white/60 text-lg font-heading mb-10">
              Don't miss the next 1000x. Join the SOLKAMO revolution today.
            </p>
            <a
              href="https://app.uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-12 py-6 rounded-2xl font-display text-xl tracking-wider"
            >
              🚀 BUY $SOLKAMO NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🦎</span>
              <span className="font-display text-xl gradient-text">SOLKAMO</span>
            </div>
            <p className="text-white/30 text-sm font-mono text-center">
              © 2024 SOLKAMO. Not financial advice. DYOR. Trade responsibly.
            </p>
            <div className="flex gap-6 text-2xl">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">𝕏</a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">💬</a>
            </div>
          </div>
          
          {/* Attribution Footer */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/25 text-xs font-mono">
              Requested by <a href="https://twitter.com/GMGBIZZ" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">@GMGBIZZ</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">@clonkbot</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App