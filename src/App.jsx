import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Wallet, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Sparkles, 
  Search,
  Menu,
  X,
  ChevronRight,
  Star,
  Globe,
  Coins,
  Target,
  Rocket,
  Heart,
  Eye,
  ArrowRight,
  Filter,
  Play
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const features = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "NFT Marketplace",
      description: "Trade, mint, and discover unique digital assets with advanced auction mechanisms and instant transactions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Crowdfunding Platform",
      description: "Fund innovative projects with milestone-based releases and community-driven governance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "DAO Governance",
      description: "Participate in platform decisions through token-based voting and proposal systems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Built on Andromeda Protocol with robust smart contracts ensuring transparency and security."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Advanced UI/UX",
      description: "Futuristic design with smooth animations, 3D elements, and responsive mobile experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Chain Ready",
      description: "Designed for future interoperability across multiple blockchain networks."
    }
  ]

  const stats = [
    { label: "Total Volume", value: "2.4M", suffix: "UANDR" },
    { label: "Active Users", value: "15.2K", suffix: "" },
    { label: "Projects Funded", value: "342", suffix: "" },
    { label: "Success Rate", value: "94", suffix: "%" }
  ]

  const trendingNFTs = [
    { id: 1, name: "Cosmic Warrior #1337", price: "125.5", image: "🚀", likes: 234, creator: "QuantumArtist" },
    { id: 2, name: "Digital Dreams", price: "89.2", image: "✨", likes: 189, creator: "NeonMaster" },
    { id: 3, name: "Neon Genesis", price: "156.8", image: "🌟", likes: 312, creator: "CyberCreator" },
    { id: 4, name: "Quantum Art", price: "203.4", image: "🎨", likes: 445, creator: "PixelPioneer" }
  ]

  const crowdfundingProjects = [
    {
      id: 1,
      title: "MetaVerse Gaming Platform",
      description: "Revolutionary blockchain-based gaming platform with play-to-earn mechanics and NFT integration.",
      raised: 387500,
      goal: 500000,
      backers: 1247,
      daysLeft: 12,
      category: "Gaming",
      image: "🎮"
    },
    {
      id: 2,
      title: "DeFi Yield Optimizer",
      description: "Advanced DeFi protocol for automated yield farming and liquidity optimization across multiple chains.",
      raised: 245000,
      goal: 350000,
      backers: 892,
      daysLeft: 8,
      category: "DeFi",
      image: "💰"
    },
    {
      id: 3,
      title: "NFT Creator Studio",
      description: "Professional-grade tools for creating, minting, and managing NFT collections with AI assistance.",
      raised: 156000,
      goal: 200000,
      backers: 634,
      daysLeft: 15,
      category: "Tools",
      image: "🎨"
    }
  ]

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  const renderMarketplace = () => (
    <div className="min-h-screen pt-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6 gradient-text">
            NFT Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover, collect, and trade extraordinary digital assets
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search NFTs, creators, collections..." 
                className="pl-10 luxury-input"
              />
            </div>
            <Button variant="outline" className="neon-border">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {['All', 'Digital Art', 'Gaming', 'Music', 'Collectibles'].map((category, index) => (
              <Badge key={index} variant={index === 0 ? "default" : "outline"} className="cursor-pointer">
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trendingNFTs.map((nft, index) => (
            <motion.div key={nft.id} variants={fadeInUp}>
              <Card className="luxury-card group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform rounded-t-lg">
                    {nft.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {nft.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">by {nft.creator}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-bold">
                        {nft.price} UANDR
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Heart className="w-4 h-4 mr-1" />
                        {nft.likes}
                      </div>
                    </div>
                    <Button className="w-full mt-3 luxury-button">
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )

  const renderCrowdfunding = () => (
    <div className="min-h-screen pt-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6 gradient-text">
            Crowdfunding Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fund innovative Web3 projects and shape the future of decentralized technology
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">$2.4M</div>
            <div className="text-sm text-muted-foreground">Total Funded</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">342</div>
            <div className="text-sm text-muted-foreground">Projects Funded</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">15.2K</div>
            <div className="text-sm text-muted-foreground">Active Backers</div>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {['All Projects', 'Gaming', 'Digital Art', 'DeFi', 'NFT Tools'].map((category, index) => (
            <Badge key={index} variant={index === 0 ? "default" : "outline"} className="cursor-pointer px-4 py-2">
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {crowdfundingProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className="luxury-card group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="text-3xl">{project.image}</div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>${project.raised.toLocaleString()} raised</span>
                        <span>of ${project.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(project.raised / project.goal) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm text-primary font-semibold mt-1">
                        {Math.round((project.raised / project.goal) * 100)}% funded
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div>
                        <div className="font-semibold text-foreground">{project.backers}</div>
                        <div>Backers</div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{project.daysLeft}</div>
                        <div>Days Left</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 luxury-button">
                        Back This Project
                      </Button>
                      <Button variant="outline" size="icon" className="neon-border">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )

  const renderGovernance = () => (
    <div className="min-h-screen pt-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6 gradient-text">
            DAO Governance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shape the future of Andromeda Nexus through community-driven governance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Active Proposals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-primary" />
                  Active Proposals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Reduce marketplace fees to 2%", votes: 1247, status: "Active" },
                  { title: "Add support for Ethereum NFTs", votes: 892, status: "Active" },
                  { title: "Implement staking rewards", votes: 634, status: "Pending" }
                ].map((proposal, index) => (
                  <div key={index} className="glass-effect rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{proposal.title}</h4>
                      <Badge variant={proposal.status === 'Active' ? 'default' : 'outline'}>
                        {proposal.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{proposal.votes} votes</span>
                      <Button size="sm" className="luxury-button">Vote</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Governance Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                  Governance Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2.4M</div>
                    <div className="text-sm text-muted-foreground">Total Tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">67%</div>
                    <div className="text-sm text-muted-foreground">Participation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">Proposals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">89%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full luxury-button">
                    <Coins className="w-4 h-4 mr-2" />
                    Stake Tokens
                  </Button>
                  <Button variant="outline" className="w-full neon-border">
                    <Target className="w-4 h-4 mr-2" />
                    Create Proposal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'marketplace':
        return renderMarketplace()
      case 'crowdfunding':
        return renderCrowdfunding()
      case 'governance':
        return renderGovernance()
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-luxury font-bold mb-6 gradient-text"
            >
              The Future of
              <br />
              <span className="float-effect inline-block">Digital Assets</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Experience the next generation NFT marketplace with integrated crowdfunding 
              and DAO governance on the Andromeda Protocol
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="pulse-glow-effect luxury-button" onClick={() => handleNavigation('marketplace')}>
                <Rocket className="w-5 h-5 mr-2" />
                Explore Marketplace
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}{stat.suffix}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6 gradient-text">
              Revolutionary Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the cutting-edge capabilities that make Andromeda Nexus 
              the most advanced Web3 platform
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full luxury-card group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending NFTs Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6 gradient-text">
              Trending Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular NFTs and emerging artists in our marketplace
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trendingNFTs.map((nft, index) => (
              <motion.div key={nft.id} variants={fadeInUp}>
                <Card className="luxury-card group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform rounded-t-lg">
                      {nft.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {nft.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {nft.creator}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-primary font-bold">
                          {nft.price} UANDR
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Heart className="w-4 h-4 mr-1" />
                          {nft.likes}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="neon-border" onClick={() => handleNavigation('marketplace')}>
              View All Collections
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6 gradient-text">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators, collectors, and innovators building 
              the next generation of digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow-effect luxury-button">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet & Start
              </Button>
              <Button variant="outline" size="lg" className="neon-border">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'glass-effect' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-effect">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-luxury font-bold gradient-text">Andromeda Nexus</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('marketplace')} 
                className={`hover:text-primary transition-colors ${currentPage === 'marketplace' ? 'text-primary' : ''}`}
              >
                Marketplace
              </button>
              <button 
                onClick={() => handleNavigation('crowdfunding')} 
                className={`hover:text-primary transition-colors ${currentPage === 'crowdfunding' ? 'text-primary' : ''}`}
              >
                Crowdfunding
              </button>
              <button 
                onClick={() => handleNavigation('governance')} 
                className={`hover:text-primary transition-colors ${currentPage === 'governance' ? 'text-primary' : ''}`}
              >
                Governance
              </button>
              <button 
                onClick={() => handleNavigation('home')} 
                className={`hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary' : ''}`}
              >
                About
              </button>
              <Button variant="outline" className="neon-border">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden glass-effect border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                <button 
                  onClick={() => handleNavigation('marketplace')} 
                  className="block hover:text-primary transition-colors"
                >
                  Marketplace
                </button>
                <button 
                  onClick={() => handleNavigation('crowdfunding')} 
                  className="block hover:text-primary transition-colors"
                >
                  Crowdfunding
                </button>
                <button 
                  onClick={() => handleNavigation('governance')} 
                  className="block hover:text-primary transition-colors"
                >
                  Governance
                </button>
                <button 
                  onClick={() => handleNavigation('home')} 
                  className="block hover:text-primary transition-colors"
                >
                  About
                </button>
                <Button variant="outline" className="w-full neon-border">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      {renderCurrentPage()}

      {/* Footer - Only show on home page */}
      {currentPage === 'home' && (
        <footer className="py-12 bg-card border-t border-border relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-luxury font-bold gradient-text">Andromeda Nexus</span>
                </div>
                <p className="text-muted-foreground">
                  The future of digital assets, powered by community governance and innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <div className="space-y-2 text-muted-foreground">
                  <button onClick={() => handleNavigation('marketplace')} className="block hover:text-primary transition-colors">Marketplace</button>
                  <button onClick={() => handleNavigation('crowdfunding')} className="block hover:text-primary transition-colors">Crowdfunding</button>
                  <button onClick={() => handleNavigation('governance')} className="block hover:text-primary transition-colors">Governance</button>
                  <div>Staking</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>Documentation</div>
                  <div>API</div>
                  <div>Support</div>
                  <div>Blog</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>Discord</div>
                  <div>Twitter</div>
                  <div>Telegram</div>
                  <div>GitHub</div>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2025 Andromeda Nexus. Built on Andromeda Protocol.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App

