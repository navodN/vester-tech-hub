import { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import event1 from '@/assets/event-1.jpg';
import event2 from '@/assets/event-2.jpg';
import event3 from '@/assets/event-3.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import aboutTeam from '@/assets/about-team.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: event2, title: 'Annual Hackathon 2024', category: 'Events' },
    { src: event1, title: 'Workshop Session', category: 'Workshops' },
    { src: event3, title: 'Tech Talk', category: 'Seminars' },
    { src: aboutTeam, title: 'Team Collaboration', category: 'Community' },
    { src: project1, title: 'Project Development', category: 'Projects' },
    { src: project2, title: 'Mobile App Demo', category: 'Projects' },
    { src: project3, title: 'AI Workshop', category: 'Workshops' },
    { src: heroBg, title: 'Tech Innovation', category: 'Community' },
    { src: event1, title: 'Coding Bootcamp', category: 'Workshops' },
    { src: event2, title: 'Competition Day', category: 'Events' },
    { src: event3, title: 'Guest Speaker', category: 'Seminars' },
    { src: project1, title: 'Development Sprint', category: 'Projects' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card/50 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Gallery
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="gradient-text">Memories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Capturing moments from workshops, events, hackathons, and community gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(photo.src)}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold text-foreground">{photo.title}</p>
                    <p className="text-xs text-primary">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-card hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
