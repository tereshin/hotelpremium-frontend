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

  React.useEffect(() => {
    setIsFormValid(
      name.trim() !== '' &&
      phone.trim() !== '' &&
      agreeRules &&
      agreePrivacy
    );
  }, [name, phone, agreeRules, agreePrivacy]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    // Здесь можно добавить обработку отправки формы
    alert(`Заявка отправлена!\nИмя: ${name}\nТелефон: ${phone}`);
  };

  return (
    <div className={cn("rounded-lg mx-auto relative z-10 bg-transparent", className)}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-6 lg:gap-3 flex-wrap lg:flex-row lg:items-center"
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
          <CustomButton variant="base2" type="submit" className="w-full" disabled={!isFormValid}>
            Оставить заявку
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
          Вы соглашаетесь с правилами пользования сайтом.
        </label>
        <label className="flex items-center cursor-pointer text-gray-500">
          <Checkbox
            checked={agreePrivacy}
            onCheckedChange={checked => setAgreePrivacy(!!checked)}
            className="mr-3"
            required
          />
          Вы соглашаетесь с политикой конфиденциальности и даете свое согласие на обработку персональных данных.
        </label>
      </div>
    </div>
  );
}; 