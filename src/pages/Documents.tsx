import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Shield, BarChart3 } from 'lucide-react';

const Documents = () => {
  const { t } = useLanguage();

  const documentCategories = [
    {
      title: t('documents.licenses'),
      icon: Shield,
      documents: [
        { name: 'Banking License 2024', size: '245 KB', date: '2024-01-15' },
        { name: 'Trust Services Certification', size: '180 KB', date: '2023-12-01' },
        { name: 'Securities Trading License', size: '312 KB', date: '2024-02-20' },
      ],
    },
    {
      title: t('documents.reports'),
      icon: BarChart3,
      documents: [
        { name: 'Annual Report 2023', size: '2.4 MB', date: '2024-03-01' },
        { name: 'Q4 2023 Financial Summary', size: '890 KB', date: '2024-01-30' },
        { name: 'Q3 2023 Financial Summary', size: '756 KB', date: '2023-10-15' },
        { name: 'Semi-Annual Report 2023', size: '1.8 MB', date: '2023-07-20' },
      ],
    },
    {
      title: t('documents.policies'),
      icon: FileText,
      documents: [
        { name: 'Privacy Policy', size: '156 KB', date: '2024-01-01' },
        { name: 'Anti-Money Laundering Policy', size: '234 KB', date: '2023-11-15' },
        { name: 'Client Agreement Terms', size: '445 KB', date: '2024-02-01' },
        { name: 'Investment Risk Disclosure', size: '312 KB', date: '2023-12-01' },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {t('documents.title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('documents.subtitle')}
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>
      </section>

      {/* Documents List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {documentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <Card key={docIndex} className="border-border hover:border-accent/30 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground">{doc.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {doc.size} • {doc.date}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-accent hover:text-accent hover:bg-accent/10"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {t('documents.download')}
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

export default Documents;
