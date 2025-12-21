import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ApplicationForm from '@/components/ApplicationForm';
import { Shield, Lock, Award, Users } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('form') === 'open') {
      setIsFormOpen(true);
    }
  }, [searchParams]);

  const features = [
    {
      icon: Shield,
      title: t('features.reliability'),
      description: t('features.reliability.desc'),
    },
    {
      icon: Lock,
      title: t('features.confidentiality'),
      description: t('features.confidentiality.desc'),
    },
    {
      icon: Award,
      title: t('features.tradition'),
      description: t('features.tradition.desc'),
    },
    {
      icon: Users,
      title: t('features.expertise'),
      description: t('features.expertise.desc'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-navy min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2">
                D.A.C. Private Bank
              </h1>
              <p className="text-accent text-lg md:text-xl tracking-widest uppercase">
                {t('footer.tagline')}
              </p>
            </div>
            
            <div className="w-24 h-px bg-accent mx-auto mb-8" />
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {t('hero.subtitle')}
            </p>
            
            <Button
              onClick={() => setIsFormOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-8 py-6 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              {t('about.mission')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('about.mission.text')}
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              {t('nav.apply')}
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Index;
