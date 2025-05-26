import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CustomButton } from './ui/custom-button';
import { Checkbox } from './ui/checkbox';
import InputMask from 'react-input-mask';

interface FormProps {
  className?: string;
  color?: 'default' | 'white';
}

export const Form: React.FC<FormProps> = ({ className, color = 'default' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeRules, setAgreeRules] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogText, setDialogText] = useState('');

  React.useEffect(() => {
    setIsFormValid(
      name.trim() !== '' &&
      phone.trim() !== '' &&
      agreeRules &&
      agreePrivacy
    );
  }, [name, phone, agreeRules, agreePrivacy]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    setDialogText('');
    setDialogOpen(false);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      const response = await fetch('/submit.php', {
        method: 'POST',
        body: formData,
      });
      const text = await response.text();
      if (response.ok && text.trim() === 'ok') {
        setDialogText('Ваша заявка успешно отправлена!');
        setName('');
        setPhone('');
        setAgreeRules(false);
        setAgreePrivacy(false);
      } else {
        setDialogText('Произошла ошибка при отправке. Попробуйте еще раз.');
      }
    } catch (error) {
      setDialogText('Ошибка сети. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
      setDialogOpen(true);
    }
  };

  return (
    <div className={cn("rounded-lg mx-auto relative z-10 bg-transparent", className)}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-6 lg:gap-3 flex-wrap flex-col lg:flex-row lg:items-center"
        )}
      >
        {/* Имя */}
        <div className="w-full lg:w-auto flex-1">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={e => {
              // Разрешаем только буквы (кириллица и латиница) и пробелы
              const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
              setName(value);
            }}
            className={cn(
              "w-full flex flex-wrap font-montserrat items-center justify-between bg-transparent border border-gray-200 rounded-sm py-5 px-5 leading-none font-semibold text-hotel-dark-blue focus:outline-none",
              color === 'white' && 'text-white border-white'
            )}
            required
          />
        </div>
        {/* Телефон */}
        <div className="w-full lg:w-auto flex-1">
          <InputMask
            mask="+9 (999) 999 99 99"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                type="tel"
                placeholder="Телефон"
                className={cn(
                  "w-full flex flex-wrap font-montserrat items-center justify-between bg-transparent border border-gray-200 rounded-sm py-5 px-5 leading-none font-semibold text-hotel-dark-blue focus:outline-none",
                  color === 'white' && 'text-white border-white'
                )}
                required
              />
            )}
          </InputMask>
        </div>
        {/* Кнопка */}
        <div className="flex items-end w-full lg:w-auto">
          <CustomButton variant="base2" type="submit" className="w-full" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
          </CustomButton>
        </div>
      </form>
      {/* Чекбоксы */}
      <div className="mt-6 space-y-2">
        <label className="flex items-center cursor-pointer text-gray-500">
          <Checkbox
            checked={agreeRules}
            onCheckedChange={checked => setAgreeRules(!!checked)}
            className="mr-3"
            required
          />
          <span>Вы соглашаетесь <a href="/terms" className="text-hotel-dark-blue inline border-b" target="_blank">правилами пользования сайтом</a>.</span>
        </label>
        <label className="flex items-center cursor-pointer text-gray-500">
          <Checkbox
            checked={agreePrivacy}
            onCheckedChange={checked => setAgreePrivacy(!!checked)}
            className="mr-3"
            required
          />
          <span>Вы соглашаетесь с <a href="/privacy-policy" className="text-hotel-dark-blue inline border-b" target="_blank">политикой конфиденциальности</a> и даете свое согласие на <a href="/personal" className="text-hotel-dark-blue inline border-b" target="_blank">обработку персональных данных</a>.</span>
        </label>
      </div>
      {/* Диалог */}
      {dialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full text-center">
            <div className="mb-4">{dialogText}</div>
            <button
              className="mt-2 px-4 py-2 bg-hotel-dark-blue text-white rounded hover:bg-hotel-blue"
              onClick={() => setDialogOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 