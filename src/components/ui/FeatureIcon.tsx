import { ReactNode } from "react";

interface FeatureIconProps {
  icon: string | ReactNode;
  text: string;
  caption?: string;
}

const FeatureIcon = ({ icon, text, caption }: FeatureIconProps) => {
    return (
        <div className="flex lg:flex-col items-center lg:text-center gap-4 md:gap-9">
          {typeof icon === 'string' ? (
            <div className="min-h-[70px] h-[70px] min-w-[70px] lg:min-w-[152px] lg:w-[152px] lg:h-[152px] rounded-full border border-[#E8EEF3] flex items-center p-4 justify-center">
              <img src={icon} alt={text} className="w-10 h-10 lg:w-20 lg:h-20 object-contain" />
            </div>
          ) : (
            <div className="min-h-[70px] h-[70px] min-w-[70px] lg:min-w-[152px] lg:w-[152px] lg:h-[152px] rounded-full border border-[#E8EEF3] flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex flex-col text-sm lg:text-lg gap-2">
            <p className="text-[#021A13]" dangerouslySetInnerHTML={{ __html: text }} />
            {caption && <p className="text-[#021A13]" dangerouslySetInnerHTML={{ __html: caption }} />}
          </div>
        </div>
      );
}

export default FeatureIcon;