function AboutUs(){
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
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px]"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-xTkGtIWOgOQdgB3C-wbx54Uaz19s4w54ukqZ0RzBFd6ykYr3Ug0m66jJAJ8QVHypcrymrlnjnW7mCIedSCurphozjaiSS-wbL4SrO4LIauX5JmcY-_dN10Pfsnaw5_ugEZ90NqhqyJDtCeKqb8v1GRotxzHCs5P65nq8Tav3yedoKT1qOqPHHfExo0fqOyUCFq0lfxXYo0AvY3rj7AtTqydun4MMQkRoGq7fMbYRCTAotahnToKcM6QYHdeW9Ge_TsXXqeHjVlOg")'
                }}
              >
                <div className="flex p-4">
                  <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                    About KK Computers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Story
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Founded in 2010, KK Computers began as a small initiative to bridge
            the digital skills gap in our community. Over the years, we've grown
            into a leading IT training and development institute, empowering
            individuals and organizations with the knowledge and tools to thrive
            in the digital age. Our journey is marked by a commitment to
            excellence, innovation, and a passion for technology.
          </p>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Mission
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            To empower individuals and organizations with cutting-edge IT skills
            and knowledge, fostering innovation and driving digital
            transformation in our community and beyond.
          </p>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Vision
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            To be the premier IT training and development institute, recognized
            for our commitment to excellence, innovation, and impactful
            contributions to the digital landscape.
          </p>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Values
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            At KK Computers, we are guided by the following core values: *
            **Excellence:** We strive for the highest standards in all our
            programs and services. * **Innovation:** We embrace new technologies
            and methodologies to deliver cutting-edge training. * **Integrity:**
            We operate with honesty, transparency, and ethical conduct. *
            **Community:** We are committed to making a positive impact on the
            communities we serve. * **Empowerment:** We believe in empowering
            individuals to achieve their full potential.
          </p>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Team
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMcn16vk2yS4NAJUauaNZy1rP-6OvVlOGTOhFILO6aVGHcRkAbrCEo31-vvtIWmutL0QI8aCmoW5WJcBH_XfzfmJ519jqdZAh1JxKqWUFhyscnw7n2BkwG4y3ZI2WyO_UzrOGhvaF47jYW2Rp0pkZvy15tmuq6wuS3jSnmksCLHHfuLqWa0a-Zh0DexM1ugNZIYSvHhH2Iepj_bc1KKMcasY7tINwEu9yfvdw-TnRc35mBIRNbsvccYocoA9x3X42r6c3wEXeQlCom")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Dr. Anya Sharma
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Lead Instructor, Data Science
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOrU2vUcD46wTGCBVrcpv7zy7YGC3hymCfuycJDN6eUhldxd6Tsrfy9aOP7Ed42FXYAT-0ypDkiUclfTS36DoCUtPtdey_WQle7K5ugb_zIdfoe-KtO1GIofvtjTXNmiG0zSoUOfOveYB4bygEHjB57sMEi-hVPB5u-1RM2f_QzlFjRBB0bTCfg1U1l5_6vF3tBPahIH8s4lxYExg9pfQDYLZa_65EzMOl36ISMgGJ8WnNjKivZF6SiSzVoGmuuPzuiIYWv3a-GjLk")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Mr. Rohan Verma
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Senior Trainer, Software Development
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARCC8sxpw5wetPBLTSxpon8fbX1W5YOUAKmIGnvGvtHnjvI8jZUVc-R1uM-_R4M5uo-eT9NNllLX2xDQsrsBqII4jHE1u1UY35_WrB7Q8b5gspNi2kyq81bKI_qAsGsZAVxbHNWnePBxhFm9PWp0l-T7Nn_cx01Djoiieu8g6C74WQOturRR0yCnZbVBJhZbZzZ0x96xMK4fN0T_49HRvcBr6Spvzql_opXfOO3Sadw6TCUPKefbmGYtCXoVVi_cNzsFCT6vFoFvP8")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Ms. Priya Kapoor
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Curriculum Director
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Community Impact
          </h2>
          <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
            KK Computers is deeply involved in community initiatives, offering
            free workshops and training programs to underserved groups. We
            partner with local organizations to support digital literacy and
            create opportunities for individuals to enter the tech industry. Our
            success stories include numerous graduates who have secured
            rewarding careers in IT, contributing to the growth and development
            of our community.
          </p>
          <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Ready to Partner or Learn More?
                </h1>
                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
                  Reach out to us to discuss collaboration opportunities or
                  inquire about our training programs.
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                    <span className="truncate">Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}

export default AboutUs;