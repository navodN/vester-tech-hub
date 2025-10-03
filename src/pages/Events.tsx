import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import event1 from '@/assets/event-1.jpg';
import event2 from '@/assets/event-2.jpg';
import event3 from '@/assets/event-3.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Events = () => {
  const upcomingSection = useScrollAnimation();
  const pastSection = useScrollAnimation();

  const upcomingEvents = [
    {
      title: 'Annual Hackathon 2025',
      date: 'March 15-16, 2025',
      time: '9:00 AM - 9:00 AM',
      location: 'Main Campus Hall',
      description: 'Join us for 48 hours of intense coding, collaboration, and innovation. Build amazing projects and compete for prizes worth $5,000!',
      attendees: '150+',
      image: event2,
    },
    {
      title: 'Web Development Bootcamp',
      date: 'February 28, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab A',
      description: 'Learn modern web development with React, Node.js, and cloud deployment. Perfect for beginners and intermediate developers.',
      attendees: '75+',
      image: event1,
    },
    {
      title: 'AI & Machine Learning Workshop',
      date: 'March 5, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Tech Building, Room 301',
      description: 'Dive into the world of AI and ML. Learn fundamental concepts and build your first machine learning model.',
      attendees: '60+',
      image: event3,
    },
  ];

  const pastEvents = [
    {
      title: 'Python Programming Workshop',
      date: 'January 20, 2025',
      attendees: '80',
      image: event1,
    },
    {
      title: 'Cybersecurity Seminar',
      date: 'December 15, 2024',
      attendees: '120',
      image: event3,
    },
    {
      title: 'Mobile App Development',
      date: 'November 8, 2024',
      attendees: '65',
      image: event2,
    },
    {
      title: 'Cloud Computing Workshop',
      date: 'October 22, 2024',
      attendees: '90',
      image: event1,
    },
    {
      title: 'Data Science Bootcamp',
      date: 'September 30, 2024',
      attendees: '110',
      image: event3,
    },
    {
      title: 'Game Development Jam',
      date: 'August 18, 2024',
      attendees: '85',
      image: event2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Events
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Tech Events & <span className="gradient-text">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us for exciting workshops, hackathons, and seminars designed to enhance 
              your technical skills and expand your network.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div ref={upcomingSection.ref} className={`mb-12 transition-all duration-700 ${upcomingSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Don't miss out on these exciting opportunities to learn and grow
            </p>
          </div>

          <div className={`grid md:grid-cols-1 gap-8 transition-all duration-700 ${upcomingSection.isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index} 
                className="bg-card border-border card-hover overflow-hidden"
                style={{
                  animation: upcomingSection.isVisible ? `fade-in-up 0.6s ease-out ${index * 0.2}s both` : 'none'
                }}
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-background px-3 py-1 rounded-full text-sm font-semibold">
                      Upcoming
                    </div>
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-2xl mb-4">{event.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Users className="h-5 w-5 text-primary" />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                      <Button variant="hero">Register Now</Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div ref={pastSection.ref} className={`mb-12 transition-all duration-700 ${pastSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Past Events</h2>
            <p className="text-muted-foreground">
              A look back at our successful events and workshops
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${pastSection.isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {pastEvents.map((event, index) => (
              <Card 
                key={index} 
                className="bg-card border-border card-hover overflow-hidden"
                style={{
                  animation: pastSection.isVisible ? `scale-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between mt-2">
                    <span className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} attended</span>
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
