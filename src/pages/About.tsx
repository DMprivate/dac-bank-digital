import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Eye, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc'),
    },
    {
      icon: Star,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: Eye,
      title: t('about.values.discretion'),
      description: t('about.values.discretion.desc'),
    },
  ];

  const team = [
    {
      name: 'Alexander Hartwell',
      position: 'Chairman & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Victoria Chen',
      position: 'Chief Investment Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'William Ashford',
      position: 'Head of Private Banking',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <div className="w-24 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">
              {t('about.history')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              {t('about.history.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              {t('about.mission')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            {t('about.values')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-all duration-300">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            {t('about.team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm mt-1">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            {t('about.contact')}
          </h2>
          <div className="max-w-xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{t('about.address')}</h4>
                      <p className="text-muted-foreground text-sm">
                        123 Financial District<br />
                        New York, NY 10004<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{t('about.phone')}</h4>
                      <p className="text-muted-foreground text-sm">+1 (212) 555-0100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{t('about.email')}</h4>
                      <p className="text-muted-foreground text-sm">info@dacprivatebank.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
