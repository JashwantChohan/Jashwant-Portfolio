const Footer = () => {
  return (
    <footer className="border-t border-[#f07665]/30 bg-[--color-bg-secondary] text-[--color-text-secondary] py-8 text-center">
      <h2 className="text-xl font-semibold text-white mb-2">
        Jashwant Chohan
      </h2>
      <p className="max-w-2xl mx-auto text-sm text-[#707070] mb-5">
        A passionate MERN stack learner, turning ideas into elegant web
        experiences — one project at a time.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/jashwant-chohan-622054258/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f07665] hover:text-[#f28b78] transition-colors"
        >
          <i className="ri-linkedin-box-fill text-2xl"></i>
        </a>
        <a
          href="https://github.com/JashwantChohan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f07665] hover:text-[#f28b78] transition-colors"
        >
          <i className="ri-github-fill text-2xl"></i>
        </a>
        <a
          href="mailto:jchohan142@gmail.com"
          className="text-[#f07665] hover:text-[#f28b78] transition-colors"
        >
          <i className="ri-mail-fill text-2xl"></i>
        </a>
      </div>

      <p className="text-xs text-[#707070] mt-6 opacity-70">
        © {new Date().getFullYear()} Jashwant Chohan — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
