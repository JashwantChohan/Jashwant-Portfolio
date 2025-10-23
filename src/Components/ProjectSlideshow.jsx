import { useState, useEffect } from "react";

const ProjectSlideshow = () => {
    const images = [
        "/HMS_pic1.png",
        "/HMS_pic2.png",
        "/HMS_pic3.png",
        "/HMS_pic4.png",
        "/HMS_pic5.png",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full flex-1">
            <img
                src={images[current]}
                alt={`HMS Screenshot ${current + 1}`}
                className="w-full rounded-lg border border-[#f07665]/50 shadow-lg transition-opacity duration-700 ease-in-out"
            />

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                            ? "bg-[#f07665]"
                            : "bg-[#f07665]/40"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlideshow;
