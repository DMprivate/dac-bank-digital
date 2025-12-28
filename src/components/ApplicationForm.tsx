import { useState, useEffect } from 'react';
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
import { Send, Loader2, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (open) {
      setCaptcha(generateCaptcha());
      setCaptchaAnswer('');
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaAnswer) !== captcha.answer) {
      toast({
        title: 'Неверный ответ',
        description: 'Пожалуйста, решите пример правильно',
        variant: 'destructive',
      });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-telegram', {
        body: formData,
      });

      if (error) throw error;
      
      toast({
        title: t('form.success'),
        description: formData.name,
      });
      
      setFormData({ name: '', phone: '', email: '', message: '' });
      onOpenChange(false);
    } catch (error) {
      console.error('Error sending form:', error);
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

          <div className="space-y-2">
            <Label htmlFor="captcha">Решите пример: {captcha.num1} + {captcha.num2} = ?</Label>
            <div className="flex gap-2">
              <Input
                id="captcha"
                type="number"
                placeholder="Ваш ответ"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                className="border-border focus:border-accent"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={refreshCaptcha}
                className="shrink-0"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
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
