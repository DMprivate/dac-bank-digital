import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll just simulate a successful submission
      // The Telegram integration will be added after Cloud is enabled
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: t('form.success'),
        description: formData.name,
      });
      
      setFormData({ name: '', phone: '', email: '', message: '' });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: t('form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">
            {t('form.title')}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('form.subtitle')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('form.name')}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t('form.name.placeholder')}
              value={formData.name}
              onChange={handleChange}
              required
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('form.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('form.phone.placeholder')}
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('form.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('form.email.placeholder')}
              value={formData.email}
              onChange={handleChange}
              required
              className="border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('form.message.placeholder')}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border-border focus:border-accent resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t('form.submit')}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
