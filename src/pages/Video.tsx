import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Video = () => {
  const { t, language } = useLanguage();

  const videos = [
    {
      id: 1,
      title: language === 'ru' ? 'Добро пожаловать в D.A.C. Private Bank' : 'Welcome to D.A.C. Private Bank',
      description: language === 'ru' 
        ? 'Узнайте о нашей истории, ценностях и подходе к управлению частным капиталом.'
        : 'Learn about our history, values, and approach to private wealth management.',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=360&fit=crop',
      duration: '3:45',
    },
    {
      id: 2,
      title: language === 'ru' ? 'Услуги трастового управления' : 'Trust Management Services',
      description: language === 'ru'
        ? 'Обзор наших трастовых услуг и планирования наследства для защиты вашего состояния.'
        : 'Overview of our trust services and estate planning to protect your wealth.',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=640&h=360&fit=crop',
      duration: '5:20',
    },
    {
      id: 3,
      title: language === 'ru' ? 'Инвестиционные стратегии' : 'Investment Strategies',
      description: language === 'ru'
        ? 'Наши эксперты рассказывают о консервативных и сбалансированных инвестиционных подходах.'
        : 'Our experts discuss conservative and balanced investment approaches.',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&h=360&fit=crop',
      duration: '7:15',
    },
    {
      id: 4,
      title: language === 'ru' ? 'Клиентский сервис' : 'Client Service Excellence',
      description: language === 'ru'
        ? 'Как мы обеспечиваем персонализированный подход к каждому клиенту.'
        : 'How we provide personalized approach to every client.',
      thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=640&h=360&fit=crop',
      duration: '4:30',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('video.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('video.subtitle')}
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((video) => (
              <Card key={video.id} className="border-border overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-7 w-7 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-primary/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
