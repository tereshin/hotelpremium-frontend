import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { cn } from '@/lib/utils';
import CheckIcon from '../icons/CheckIcon';

interface TextImageSectionProps {
  title: string;
  text: string;
  image: string;
  button: {
    text: string;
    link: string;
  }
  list?: string[];
  expiry?: string;
  reverse?: boolean;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({ title, text, image, button, list, expiry, reverse = false }) => {
  return (
    <section className="max-w-content relative w-full lg:mx-auto">
      <div className={cn("flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]", reverse ? "lg:flex-row-reverse" : "")}>
        {/* Left image column */}
        <div className={cn("w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0", reverse ? "right-0" : "left-0")}>
          <div className="w-full bg-cover bg-center rounded-sm" style={{ backgroundImage: `url(${image})` }}>
            <div className="pt-[70%]"></div>
          </div>
        </div>

        {/* Right content column */}
        <div className={cn("w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative", reverse ? "mr-auto" : "ml-auto ")}>
          <div className="flex flex-col gap-4 ">
            <h2 className="text-3xl lg:text-4xl text-[#093024] uppercase tracking-wide font-light leading-tight" dangerouslySetInnerHTML={{ __html: title }} />

            <div className="flex flex-col gap-5">
              <p className="text-lg text-[#021A13] max-w-[600px]">
                {text}
              </p>
            </div>
            {list && (
            <div className="flex flex-col gap-2">
              {list.map((item, index) => (
                <p key={index} className="flex lg:items-center gap-2"><CheckIcon className="relative top-1 lg:top-0" />{item}</p>
              ))}
            </div>
          )}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
            <CustomButton
              variant="base2"
              size="default"
              className="w-full lg:w-auto uppercase"
              onClick={() => {
                window.open(button.link, '_blank');
              }}
            >
              {button.text}

            </CustomButton>
            {expiry && (
              <p className="text-[#021A13] lg:text-lg flex items-center gap-3"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3832 3.68048C11.3208 3.63291 11.1997 3.6623 11.0737 3.65351C10.938 4.46449 11.2872 5.36742 10.5432 6.12177C9.81834 4.14813 8.94362 2.37618 7.30015 1.12322C6.92637 0.838255 6.51096 0.355888 6.05105 0.541315C5.52867 0.751927 5.77886 1.3906 5.73955 1.84454C5.55309 3.99804 4.46263 5.70013 3.1259 7.4703C2.7601 6.55046 2.75517 5.66177 1.83796 5.07646C1.80414 6.52918 1.30553 7.71818 0.751506 8.8883C0.427276 9.57308 0.18025 10.2822 0.0505403 11.0296C-0.348288 13.3275 1.66497 16.0316 4.26675 16.4016C2.36175 13.7416 4.54126 12.0789 5.53049 10.0722C6.06826 10.6155 6.05629 11.222 6.07558 11.9003C6.97541 11.0481 7.45442 9.98401 7.78016 8.83106C7.85173 8.57776 7.79889 8.20206 8.0963 8.11656C8.45095 8.01461 8.6175 8.38378 8.80536 8.60605C10.5759 10.7008 10.886 13.0652 10.0822 15.6324C10.0038 15.8828 9.75882 16.1922 9.9718 16.3956C10.264 16.6748 10.5392 16.3217 10.7751 16.176C15.6062 13.1914 15.8999 7.12042 11.3832 3.68048Z" fill="#FD3155"></path></svg>Срок действия: {expiry}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection; 