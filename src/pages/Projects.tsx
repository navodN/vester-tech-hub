import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const projectsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const projects = [
    {
      title: 'Campus Connect Platform',
      description: 'A comprehensive web platform connecting students, faculty, and resources. Features include real-time messaging, event management, and academic resource sharing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: project1,
      team: 'Sarah Johnson, Michael Chen, Emily Rodriguez',
      status: 'Live',
    },
    {
      title: 'StudyBuddy Mobile App',
      description: 'Mobile application helping students find study partners and form study groups. Includes scheduling, note sharing, and group chat functionality.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: project2,
      team: 'David Kim, Aisha Patel',
      status: 'In Development',
    },
    {
      title: 'AI Exam Prep Assistant',
      description: 'An intelligent tutoring system using machine learning to provide personalized exam preparation recommendations and practice questions.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      image: project3,
      team: 'James Wilson, Sarah Johnson',
      status: 'Beta Testing',
    },
    {
      title: 'Library Management System',
      description: 'Digital library system with book cataloging, borrowing tracking, and automated reminders. Includes QR code scanning for quick checkouts.',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: project1,
      team: 'Michael Chen, Emily Rodriguez, David Kim',
      status: 'Live',
    },
    {
      title: 'Smart Attendance Tracker',
      description: 'Automated attendance system using facial recognition technology. Reduces manual work and provides detailed attendance analytics.',
      technologies: ['Python', 'OpenCV', 'Django', 'React'],
      image: project2,
      team: 'Aisha Patel, James Wilson',
      status: 'In Development',
    },
    {
      title: 'Campus Event Manager',
      description: 'Event management platform for organizing and promoting campus events. Features ticketing, RSVP tracking, and post-event feedback collection.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: project3,
      team: 'Sarah Johnson, David Kim, Michael Chen',
      status: 'Live',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Development':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Beta Testing':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Projects
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Student <span className="gradient-text">Innovations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore amazing projects built by our talented members. From web apps to 
              AI solutions, witness the power of student innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div ref={projectsSection.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${projectsSection.isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-border card-hover overflow-hidden flex flex-col"
                style={{
                  animation: projectsSection.isVisible ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-secondary text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Team</p>
                      <p className="text-sm">{project.team}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <Card 
            ref={ctaSection.ref} 
            className={`bg-gradient-to-br from-card to-secondary border-border text-center p-8 md:p-12 transition-all duration-700 ${ctaSection.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Have a Project Idea?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto mb-6">
                Join VITS and bring your ideas to life. Get access to mentorship, resources, 
                and a supportive community of fellow developers.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Submit Your Project
                </Button>
                <Button variant="outline" size="lg">
                  Join VITS
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
