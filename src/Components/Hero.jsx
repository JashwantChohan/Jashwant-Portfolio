import heroImg from "../assets/hero.png";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-16 bg-[--color-primary] text-[--color-text-primary]"
        >
            <div className="Left-Text-Section  max-w-xl space-y-6 mt-16 md:mt-0">
                <p className="text-5xl font-semibold">
                    Hello
                    <span
                        className="ml-2 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] shadow-[0_0_6px_rgba(255,107,53,0.8)]"
                    ></span>

                </p>
                <div className="flex items-center gap-4">
                    <div className="w-40 h-1 bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] rounded-full"></div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">
                        I’m <span className="text-[--color-accent]">Jashwant</span>
                    </h1>
                </div>

                <h2 className="text-3xl md:text-5xl font-heading font-bold">
                    Frontend Developer
                </h2>

                <div className="flex gap-4 pt-4">
                    <button
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="relative bg-gradient-to-b from-[#f07665] via-[#f28b78] to-[#f07665] text-white font-medium px-8 py-3 rounded-lg border border-[#FF7043] shadow-[0_4px_20px_rgba(255,107,53,0.3)] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(255,107,53,0.6)] hover:scale-[1.05] hover:brightness-90 cursor-pointer"
                    >
                        Got a project?
                    </button>


                    <a href="/Jashwant_Chohan_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#f28b78] text-[--color-accent] hover:bg-[--color-accent-hover] hover:text-white font-medium px-6 py-3 rounded-[2px] transition-all cursor-pointer inline-block"
                    >
                        My Resume
                    </a>

                </div>
            </div>

            <div className="Right-Image-Section relative mt-12 md:mt-0">
                <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[--color-accent]/30 to-transparent blur-2xl -z-10"></div>
                <img
                    src={heroImg}
                    alt="Jashwant"
                    className="w-72 md:w-96 object-cover rounded-full shadow-[0_0_40px_-10px_rgba(255,107,53,0.6)]"
                />
            </div>
        </section>
    );
}
