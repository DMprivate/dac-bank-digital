import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Building2, Scale, BookOpen } from 'lucide-react';

const Links = () => {
  const { t, language } = useLanguage();

  const linkCategories = [
    {
      title: t('links.partners'),
      icon: Building2,
      links: [
        {
          name: 'Swiss Private Banking Association',
          description: language === 'ru' 
            ? 'Ассоциация частных банков Швейцарии'
            : 'Association of Swiss Private Banks',
          url: '#',
        },
        {
          name: 'International Trust Council',
          description: language === 'ru'
            ? 'Международный совет по трастовому управлению'
            : 'International trust management council',
          url: '#',
        },
        {
          name: 'Global Wealth Management Forum',
          description: language === 'ru'
            ? 'Глобальный форум по управлению капиталом'
            : 'Global wealth management forum',
          url: '#',
        },
      ],
    },
    {
      title: t('links.regulators'),
      icon: Scale,
      links: [
        {
          name: 'Federal Reserve',
          description: language === 'ru'
            ? 'Федеральная резервная система США'
            : 'U.S. Federal Reserve System',
          url: '#',
        },
        {
          name: 'Securities and Exchange Commission',
          description: language === 'ru'
            ? 'Комиссия по ценным бумагам и биржам'
            : 'SEC - Securities regulation',
          url: '#',
        },
        {
          name: 'Financial Conduct Authority',
          description: language === 'ru'
            ? 'Управление финансового надзора Великобритании'
            : 'UK financial regulatory body',
          url: '#',
        },
      ],
    },
    {
      title: t('links.resources'),
      icon: BookOpen,
      links: [
        {
          name: 'Bloomberg',
          description: language === 'ru'
            ? 'Финансовые новости и аналитика'
            : 'Financial news and analytics',
          url: '#',
        },
        {
          name: 'Financial Times',
          description: language === 'ru'
            ? 'Международные деловые новости'
            : 'International business news',
          url: '#',
        },
        {
          name: 'The Economist',
          description: language === 'ru'
            ? 'Экономический анализ и прогнозы'
            : 'Economic analysis and forecasts',
          url: '#',
        },
        {
          name: 'CFA Institute',
          description: language === 'ru'
            ? 'Институт финансовых аналитиков'
            : 'Chartered Financial Analyst Institute',
          url: '#',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('links.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('links.subtitle')}
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Links List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {linkCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIndex) => (
                    <Card key={linkIndex} className="border-border hover:border-accent/30 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground mb-1">{link.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-accent hover:text-accent hover:bg-accent/10 flex-shrink-0"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;
