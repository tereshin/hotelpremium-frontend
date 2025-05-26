import React, { useState, useRef, useEffect } from "react";
import SliderNavigation from "../ui/slider-navigation";
import SliderCounter from "../ui/slider-counter";

// Sample gallery images - replace with actual images from your project
const galleryImages = [
    "/assets/images/gallery/1.jpg",
    "/assets/images/gallery/2.jpg",
    "/assets/images/gallery/3.jpg",
    "/assets/images/gallery/4.jpg",
    "/assets/images/gallery/5.jpg",
    "/assets/images/gallery/6.jpg",
];

const ImageGallerySlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const [slideWidth, setSlideWidth] = useState(0);

    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleSlides(1);
                setCurrentSlide(0);
            } else {
                setVisibleSlides(3);
            }

            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gap = 0; // Gap between slides
                const availableWidth = containerWidth - (gap * (visibleSlides - 1));
                const newSlideWidth = availableWidth / visibleSlides;
                setSlideWidth(newSlideWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [visibleSlides]);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }
    };

    const handlePrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.max(0, galleryImages.length - visibleSlides) : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide((prev) =>
            prev >= galleryImages.length - visibleSlides ? 0 : prev + 1
        );
    };

    const translateX = -(currentSlide * (slideWidth + 0));

    return (
        <div
            ref={containerRef}
            className="relative lg:-left-10 lg:w-[calc(100%+50px)]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div
                ref={sliderRef}
                className="flex touch-pan-y transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%", maxWidth: "480px" }}
                    >
                        <div
                            className="relative w-full pb-[77%] overflow-hidden"
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 lg:right-6 flex items-center gap-8 w-full justify-between lg:justify-end px-4 xl:px-0 text-white">
                <SliderCounter current={currentSlide + 1} total={galleryImages.length - visibleSlides + 1} />
                <SliderNavigation onPrev={handlePrev} onNext={handleNext} />
            </div>
        </div>
    );
};

export default ImageGallerySlider; 