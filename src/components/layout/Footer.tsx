import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold">D.A.C. Private Bank</h3>
              <p className="text-accent text-sm tracking-widest uppercase mt-1">
                {t('footer.tagline')}
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-md leading-relaxed">
              {t('about.mission.text').substring(0, 150)}...
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              {t('nav.home')}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/documents" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.documents')}
              </Link>
              <Link to="/video" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.video')}
              </Link>
              <Link to="/links" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                {t('nav.links')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              {t('about.contact')}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +1 (212) 555-0100
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@dacprivatebank.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} D.A.C. Private Bank. {t('footer.rights')}.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
