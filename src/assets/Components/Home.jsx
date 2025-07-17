import kkLogo from '../Images/logos/kk.png';

function Home(){
    return(
        <>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Inter%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>KK school</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
           <img src={kkLogo} alt="logo" className='relative  height-5    ' />
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
              Services
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Events
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
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              News
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
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxfiGqZlFjOQ4sXiX2v2V2gZ7M1FSKgoh3xzJ18HRJcpbk0ErM-1DOv8BhD4R63EVD5fM3p2Uc-joBP6q6qMriryCNNH--bzwQWFDeab6hivuDlS4_q2mzUx8DQSmdxfjzhtR2xWGaAUg4RwjHuYQuMhvNQhLQMdXnrdSFkufjydFY3hSOY31T0Hfn0OuzLvVectxNTJYotLE6umkrRD25am--KRtX9ynh0OX3zNRFWf5aD9ukfrrNyjKQq2OSPTxzO3MbbdNOpvgN")'
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Empowering Your Future in Technology
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    KK Computers is a leading IT training and development
                    institute, dedicated to providing cutting-edge education and
                    fostering innovation in the digital world.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Explore Courses</span>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Services
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
              <div
                className="text-[#111418]"
                data-icon="Laptop"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  IT Training
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Comprehensive courses covering various IT domains.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
              <div
                className="text-[#111418]"
                data-icon="Certificate"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  Certifications
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Industry-recognized certifications to boost your career.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
              <div
                className="text-[#111418]"
                data-icon="ProjectorScreen"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  Projects
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Hands-on projects to apply your skills in real-world
                  scenarios.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
              <div
                className="text-[#111418]"
                data-icon="Megaphone"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  Digital Awareness
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Workshops and seminars to enhance digital literacy.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Upcoming Events
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYmuUYUgQJTQaWKzOyFVe1PDIBIHZGxFqSNAi_B882g1Vt-1MWjzuJfB_9-qrIgDp0bn-aYDr8HADS8nwwqdynu5qJp7DD3Gax3vL2sspS1zUmnkp52RLREiSLqP_XaLK-qpv4FuoX_ww8x_8z-LwLKHoc9vwmQ5KYehB2p3EmRc_fUVyBmOFcZvVbN1JZmv3XbPT9ULmxQbiEw4li9A0pxpOC51IE4s0S_mO3xhtIIE4wBnhSvtq_I9rFM7ytru08dzgWdeSCYe5c")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Tech Conference 2024
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Join us for the biggest tech conference of the year.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYP_cM2O88FI0-MNsFj3BUZbflKtPf93SyeiChWZ9l834CM1GuMDObPv0ccwOKEFBLcoxAnUpQlhX-6rO9Beh3PtLcaO9UTfokGyOYQb_bCL9LG1hQ2E3RsLqR1wVzY_eQbNojKfQg5OYnI8syQis38bC14G6JUneu9qbCK8bptjStSAkHYVTQO0CXoCkX7N-kS5ezPT-p_ahYgJa2jLkgpRQWKl5DD1kCzyZnJeWCF2YW6gBLBS6ovpDgkvQgYV1_q-jWahQAIkM8")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Advanced Programming Workshop
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Enhance your programming skills with our expert-led
                    workshop.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHC6Fs-TRjRjm63CoPEgytykK9jA7QQ0BqWJ1Ux_U1Bi2Yw9eoVLc0BCLmM7Nzl6rBiAC2azNVs0d_h8dPW0HSKezSMNMmUzbxaEqvHZk-1FJtsXbPOm2InprMRAfpT02-FtMlZvvzTVqNASgagwq1kosddtjled_tEI56S30ThpQqDRsaS5PWxHpe7iqWOsiduGYOWO7aZSH9U3sfDp1X7PhO1Z790t_ay85P7jrCUpvRwWGWm2ESZbyaHK5OaMZMS9cUou7IyCjQ")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Digital Marketing Seminar
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Learn the latest digital marketing strategies from industry
                    leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Get Involved
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Become a Trainer</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Partner With Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Services
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Events
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                About Us
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Contact
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                News
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#">
                <div
                  className="text-[#60758a]"
                  data-icon="TwitterLogo"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div
                  className="text-[#60758a]"
                  data-icon="FacebookLogo"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div
                  className="text-[#60758a]"
                  data-icon="InstagramLogo"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div
                  className="text-[#60758a]"
                  data-icon="LinkedinLogo"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-[#60758a] text-base font-normal leading-normal">
              @2024 KK Computers. All rights reserved.
            </p>
          </footer>
        </div>
      </footer>
    </div>
  </div>
</>

    )
}

export default Home;