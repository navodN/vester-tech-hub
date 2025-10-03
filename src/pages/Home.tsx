import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Rocket, Image as ImageIcon, ArrowRight, Code, Users, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  const announcements = [
    {
      title: 'Annual Hackathon 2025',
      date: 'March 15, 2025',
      description: 'Join us for 48 hours of coding, innovation, and prizes worth $5,000!',
    },
    {
      title: 'Web Development Workshop',
      date: 'February 28, 2025',
      description: 'Learn React and build your first web application with industry experts.',
    },
    {
      title: 'AI & ML Seminar Series',
      date: 'Ongoing',
      description: 'Weekly sessions exploring artificial intelligence and machine learning fundamentals.',
    },
  ];

  const quickLinks = [
    {
      icon: Calendar,
      title: 'Events',
      description: 'Workshops, hackathons, and tech talks',
      path: '/events',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Projects',
      description: 'Student innovations and developments',
      path: '/projects',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ImageIcon,
      title: 'Gallery',
      description: 'Moments from our tech journey',
      path: '/gallery',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const features = [
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Regular workshops and training sessions on latest technologies',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded tech enthusiasts and build together',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Transform your ideas into reality with mentorship and resources',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Welcome to Vester's ICT Society
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Empowering Students with{' '}
              <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our vibrant community of innovators, developers, and tech enthusiasts. 
              Learn, build, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Join Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                About VITS
              </div>
              <h2 className="text-4xl font-bold">
                Building Tomorrow's <span className="gradient-text">Tech Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                VITS is more than just a society – it's a movement. We're dedicated to fostering 
                technological innovation, providing hands-on learning experiences, and creating 
                opportunities for students to excel in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Active Members</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Events Hosted</div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="mt-2">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Latest Updates
            </div>
            <h2 className="text-4xl font-bold mb-4">What's Happening</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and society announcements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="bg-card border-border card-hover">
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">{announcement.date}</div>
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{announcement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore VITS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our events, projects, and community highlights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Card className="bg-card border-border card-hover h-full group cursor-pointer">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{link.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{link.description}</CardDescription>
                    <div className="flex items-center text-primary font-medium mt-4 group-hover:translate-x-2 transition-transform duration-300">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
