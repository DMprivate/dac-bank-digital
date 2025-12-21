import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/documents', label: t('nav.documents') },
    { path: '/video', label: t('nav.video') },
    { path: '/links', label: t('nav.links') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wide">
              D.A.C. Private Bank
            </span>
            <span className="text-xs md:text-sm text-accent font-medium tracking-widest uppercase">
              {t('footer.tagline')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  isActive(item.path)
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase font-medium">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('ru')}>
                  <span className={language === 'ru' ? 'font-bold' : ''}>Русский</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className={language === 'en' ? 'font-bold' : ''}>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link to="/?form=open">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                {t('nav.apply')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(item.path) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Button
                    variant={language === 'ru' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLanguage('ru')}
                  >
                    RU
                  </Button>
                  <Button
                    variant={language === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </Button>
                </div>
                <Link to="/?form=open" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    {t('nav.apply')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
