function Services(){
    return(
        <>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>Stitch Design</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
            KK Computers
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Courses
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Services
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Contact
            </a>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Enroll Now</span>
          </button>
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                Our Services
              </p>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                KK Computers offers a comprehensive suite of IT training and
                development services designed to empower individuals and
                organizations with the skills and knowledge needed to thrive in
                today's digital landscape.
              </p>
            </div>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                  IT Training
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Certifications
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Final Year Projects
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Digital Awareness Programs
                </p>
              </a>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            IT Training
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our IT training programs are designed to equip you with the latest
            skills in software development, data science, cybersecurity, and
            more. Whether you're a beginner or an experienced professional, we
            have courses tailored to your needs.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Curriculum
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our curriculum is developed by industry experts and includes
            hands-on projects, real-world case studies, and interactive learning
            modules. We cover a wide range of topics, including programming
            languages, database management, cloud computing, and artificial
            intelligence.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Benefits
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            By enrolling in our IT training programs, you'll gain practical
            skills, enhance your career prospects, and stay ahead in the rapidly
            evolving tech industry. Our programs also offer networking
            opportunities and mentorship from experienced professionals.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Prerequisites
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Prerequisites vary depending on the specific course. Some courses
            may require basic programming knowledge, while others are designed
            for beginners with no prior experience. Please refer to the
            individual course descriptions for detailed prerequisites.
          </p>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Explore Courses</span>
            </button>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  IT Training
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                  Certifications
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Final Year Projects
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Digital Awareness Programs
                </p>
              </a>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Certifications
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Validate your skills and knowledge with industry-recognized
            certifications. We offer training and preparation for leading
            certifications in various IT domains, helping you stand out in the
            competitive job market.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Program Information
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our certification programs provide comprehensive training, practice
            exams, and study materials to ensure you're well-prepared for the
            certification exams. We cover a wide range of certifications,
            including those from CompTIA, Cisco, Microsoft, and more.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Benefits
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Achieving industry certifications enhances your credibility,
            demonstrates your expertise, and increases your earning potential.
            Our programs provide the support and resources you need to succeed
            in your certification journey.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Prerequisites
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Prerequisites for certification programs vary depending on the
            specific certification. Some certifications may require prior work
            experience or specific training, while others have minimal
            prerequisites. Please refer to the individual certification program
            details for more information.
          </p>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">View Certifications</span>
            </button>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  IT Training
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Certifications
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                  Final Year Projects
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Digital Awareness Programs
                </p>
              </a>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Final Year Projects
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Gain practical experience and showcase your skills with our final
            year project support. We provide guidance, resources, and mentorship
            to help you develop innovative and impactful projects.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Project Support
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our project support includes topic selection assistance, technical
            guidance, project management support, and access to necessary
            resources and tools. We ensure you have the support you need to
            successfully complete your final year project.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Benefits
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Completing a final year project with our support enhances your
            practical skills, builds your portfolio, and prepares you for the
            challenges of the professional world. It also provides valuable
            experience working on real-world projects.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Prerequisites
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Final year project support is typically available to students in
            their final year of relevant academic programs. Specific
            prerequisites may vary depending on the project area and complexity.
            Please contact us for more details.
          </p>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Explore Projects</span>
            </button>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  IT Training
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Certifications
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Final Year Projects
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                  Digital Awareness Programs
                </p>
              </a>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Digital Awareness Programs
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Stay informed and empowered with our digital awareness programs. We
            offer workshops and seminars on topics such as online safety,
            digital literacy, and emerging technologies.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Program Information
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our digital awareness programs cover a range of topics, including
            cybersecurity awareness, social media safety, digital citizenship,
            and the impact of new technologies on society. These programs are
            designed for individuals of all ages and backgrounds.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Benefits
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Participating in our digital awareness programs helps you navigate
            the digital world safely and effectively, protect your personal
            information, and make informed decisions about technology use. These
            programs are essential for staying safe and responsible online.
          </p>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Prerequisites
          </h3>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Our digital awareness programs are open to everyone, regardless of
            their technical background. There are no specific prerequisites,
            making these programs accessible to a wide audience.
          </p>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}

export default Services;