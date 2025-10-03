import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aboutTeam from '@/assets/about-team.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const missionVision = useScrollAnimation();
  const historySection = useScrollAnimation();
  const leadershipSection = useScrollAnimation();
  const achievementsSection = useScrollAnimation();

  const leadership = [
    { name: 'Sarah Johnson', role: 'President', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { name: 'Michael Chen', role: 'Vice President', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { name: 'Emily Rodriguez', role: 'Secretary', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
    { name: 'David Kim', role: 'Treasurer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    { name: 'Aisha Patel', role: 'Technical Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha' },
    { name: 'James Wilson', role: 'Events Coordinator', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
  ];

  const achievements = [
    { icon: Award, title: '1st Place', description: 'National Hackathon 2024' },
    { icon: Users, title: '500+ Members', description: 'Active Community' },
    { icon: Award, title: '50+ Events', description: 'Successfully Organized' },
    { icon: Users, title: '100+ Projects', description: 'Student Innovations' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              VITS is a student-led organization dedicated to fostering innovation, 
              technical excellence, and community building in the field of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div ref={missionVision.ref} className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${missionVision.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-card border-border card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription className="text-base mt-4 leading-relaxed">
                  To create an inclusive environment where students can explore, learn, and innovate 
                  in technology. We aim to bridge the gap between theoretical knowledge and practical 
                  skills through hands-on projects, workshops, and collaborative learning experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="text-base mt-4 leading-relaxed">
                  To become the leading student technology society that empowers the next generation 
                  of innovators and tech leaders. We envision a community where every member has the 
                  opportunity to transform their ideas into impactful solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div ref={historySection.ref} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${historySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <img
                src={aboutTeam}
                alt="VITS Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-4xl font-bold">
                A Journey of <span className="gradient-text">Innovation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Vester's ICT Society started with a small group of passionate 
                  students who shared a common vision: to create a thriving tech community within 
                  our school.
                </p>
                <p>
                  What began as weekly coding meetups has evolved into a full-fledged organization 
                  hosting hackathons, workshops, seminars, and collaborative projects. Today, we're 
                  proud to have over 500 active members and have organized more than 50 successful 
                  events.
                </p>
                <p>
                  Our journey has been marked by numerous achievements, including winning the 
                  National Student Hackathon 2024 and establishing partnerships with leading tech 
                  companies for mentorship programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div ref={leadershipSection.ref} className={`text-center mb-12 transition-all duration-700 ${leadershipSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Leadership
            </div>
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working together to make VITS a success
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${leadershipSection.isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {leadership.map((member, index) => (
              <Card 
                key={index} 
                className="bg-card border-border card-hover text-center"
                style={{
                  animation: leadershipSection.isVisible ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div ref={achievementsSection.ref} className={`text-center mb-12 transition-all duration-700 ${achievementsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Achievements
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlights of our journey and accomplishments
            </p>
          </div>

          <div className={`grid md:grid-cols-4 gap-6 transition-all duration-700 ${achievementsSection.isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-card border-border card-hover text-center"
                style={{
                  animation: achievementsSection.isVisible ? `scale-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mb-4">
                    <achievement.icon className="h-8 w-8 text-background" />
                  </div>
                  <CardTitle className="text-2xl gradient-text">{achievement.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{achievement.description}</CardDescription>
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

export default About;
