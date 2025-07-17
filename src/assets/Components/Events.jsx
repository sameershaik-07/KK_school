function Events(){
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
              Courses
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
                Events
              </p>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                Explore upcoming workshops, bootcamps, and tech talks designed
                to enhance your skills and career in IT.
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
                  Upcoming Events
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Past Events
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 p-4">
            <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
              <div className="flex items-center p-1 justify-between">
                <button>
                  <div
                    className="text-[#111418] flex size-10 items-center justify-center"
                    data-icon="CaretLeft"
                    data-size="18px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                    </svg>
                  </div>
                </button>
                <p className="text-[#111418] text-base font-bold leading-tight flex-1 text-center">
                  July 2024
                </p>
                <button>
                  <div
                    className="text-[#111418] flex size-10 items-center justify-center"
                    data-icon="CaretRight"
                    data-size="18px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="grid grid-cols-7">
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  S
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  M
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  T
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  W
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  T
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  F
                </p>
                <p className="text-[#111418] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">
                  S
                </p>
                <button className="h-12 w-full text-[#111418] col-start-4 text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    1
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    2
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    3
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    4
                  </div>
                </button>
                <button className="h-12 w-full text-white text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full bg-[#0c7ff2]">
                    5
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    6
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    7
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    8
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    9
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    10
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    11
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    12
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    13
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    14
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    15
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    16
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    17
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    18
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    19
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    20
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    21
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    22
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    23
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    24
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    25
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    26
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    27
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    28
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    29
                  </div>
                </button>
                <button className="h-12 w-full text-[#111418] text-sm font-medium leading-normal">
                  <div className="flex size-full items-center justify-center rounded-full">
                    30
                  </div>
                </button>
              </div>
            </div>
          </div>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Upcoming Events
          </h3>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-lg">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">
                    Hack The Web
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Join our annual web development competition and showcase
                    your skills. Prizes and recognition await!
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Register Now</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBre0Zxy5nt6JzqCUmL2MAs14ORtEK1g2cgHEiO-kVnLdALvPaGE_SX73HYCguuULY7WL7ymPgli6uN8orQOPMHgiQ8B4kHEkGss_02blLRYEvsqdDSaU9iQM7N6voKzd0tvKA48M_7IEJKz7CAqG5isz8x7X1nzFiNNjZrMFl1oDSU77koFCwrSS3-IxUdGAzENPW23OJ0U_OuNJtmTNC_Rkx_3j4SMxTf_nfLvXAPkdLlB7hJAYYOOfmxc3wx53wdMofjsGHfUZdt")'
                }}
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-lg">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">
                    Python for Data Science Workshop
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    A hands-on workshop covering the fundamentals of Python and
                    its applications in data science.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Register Now</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSz3BE_-lc1sx7otn1j_efdwtMRbe-tXHQ26FKltoFf6F9e7UO0_MgSc46xQd6TzomwC0w-QvteyACEF9xc-uQZ0EMgcS2rtrf3wTQ9sdXRAiPsrFiZUjKaGp7o2eiG1tcN2MAu8_-obI636mAfmOKoTq4PyRkC0puLJ-YBuf0LTWZpmCTBelfJ3Bz78K1G5jlcw9hLMhQbdOi49dXdlG7kM4kuloB5tT-Cxb08BcyabK-R2lbbxp2vwByz111ZCT-S5TdcPguWovQ")'
                }}
              />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-lg">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#111418] text-base font-bold leading-tight">
                    Cybersecurity Bootcamp
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    An intensive bootcamp to learn about cybersecurity threats,
                    prevention, and ethical hacking.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Register Now</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClIq6y9rQXFP-h2tfaWkGKaF0sR9U5lYxf0LbcRLeKhalNuc_lyLbTZlr2LpZHd_tDJgB47qmBpeSURV2V9Ne-AlXUee5GE9c8JTklGU_MmgNqWejPHUGWRkVygLMY791I3ZVHbXUZtP4z_Fr54VG5OabOnencDZ4F92qcshT35qtx17xZdSFumAPDqqkVjehwMkMAt_zBmXWhSaopjFiy3Im6ANqZbdq05Qyk4XN_tVJWD5Ng6geTdyANAeEdWsvoDgcztzaih5C_")'
                }}
              />
            </div>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                  Upcoming Events
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
                href="#"
              >
                <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                  Past Events
                </p>
              </a>
            </div>
          </div>
          <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Past Events
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX5FGhQAzwNcwmPQ-smmCEEKgmL_mKhQY7e0V4ickTR7AJtaqE-60oFJzVNYdAvaPC6njOi_eoyoJtzaJM1Ag84mQRM0b5q_lxrGViGwp4imRkc9qGdAKuFQJe_oAd74NWz71OaLmsDf-xwPkgepWA484UxlQFReOp6oHi-bWLdOD1HI3YFQOhTzupixZo8gvvHrh1kM4-xXYEn3NIxC6VHOHV8Ocuv2W24QqayM1NfAO3hp__MmyLcF_XvIXI2x4jNmzwLzgS6LBa")'
                }}
              />
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Web Development Workshop
                </p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Participants learned to build responsive websites using modern
                  frameworks.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHn-YLqVO--8cT4IRTH6ka4QtzByrvmAOAfVlO7Anfhmqoz1ftp0TFKymxwcwTvixSZUn-RLqbXtOA4NA35OytiWoQ6zhkRvLavUUfQtmPycuZ8Yqa-ObqD3zXDvnz_aR1Fxn8StTnEzGDGxI4vadV3cS3RkE1TCHrBlKDxDEzqrhGwXyPTyBRrzoZYVFVKAmuFDNl0fxeSiSFRYcYql89TmZpjps0Zza-nE-Z0oZNOqpqzQgNLYqV-Gc2J9HtRK567XVqkIitlJSP")'
                }}
              />
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Data Science Seminar
                </p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Experts discussed the latest trends and techniques in data
                  analysis.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOE2vDhWky3Gpon70Bb1AoMoB3L_aiiOXwfBhjst0ck6xZhIj38_7zV3kATAlpEIW3R4DA5hlctFDKzdKfvCPCjWxt_fYQH8ujJ1DPM6WLgZh_fu_sDSD1Rct2EuUtqkqpnOjyebcjVi4iRQ4iF-L3vgn6GBhNXTyhz7CDXcgjHatNXcTMidCIW5yOOxHovUVFAHmIR_gJdTj6xGHYAlMqxjpTpRPTiiLpZlgsrZFCeRf2GeMpOCWvRrzKK0jHdBl7l5l6dgpE67q0")'
                }}
              />
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Cybersecurity Conference
                </p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Industry leaders shared insights on emerging cybersecurity
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALkRy9ythE0vrv30uwvKDBSvQSshCecfnf7glURkC4ayJVT2FdoHUQU1oHHuLrTd0EzK4R202kskGC0ekpO5gleAr0Gu2omMgVsLSPUqbpEsA9yibOUKWH2Pe3A5OCL8qgdl1aicjId82xeo8J143av1_xZJGv9m-OJXWL9WLfJ_jZKFr4y-ohlLxSfc7FPJQDYDxGD7Ufp2ty8r2q2Kng50hBd_lg51OfDfnj2Jv-R0P6JCmRRhUB221_tb_cMd9Cx4CeEmcrh5Yb")'
                  }}
                />
                <div className="flex-1">
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Ethan Carter
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    June 15, 2024
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal">
                The Web Development Workshop was incredibly informative and
                practical. I learned so much in just a few days!
              </p>
              <div className="flex gap-9 text-[#60758a]">
                <button className="flex items-center gap-2">
                  <div
                    className="text-inherit"
                    data-icon="ThumbsUp"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                    </svg>
                  </div>
                  <p className="text-inherit">12</p>
                </button>
                <button className="flex items-center gap-2">
                  <div
                    className="text-inherit"
                    data-icon="ThumbsDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                    </svg>
                  </div>
                  <p className="text-inherit">2</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-white">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjIChjy3iV5uMjuyzleExK2ziMguZmq1mu_9hIust12D-YcpOYs0WWe18hKInaimqZU_K6M0wBl2WOXvU8zQ4hSBkE3x1QM9F_exemqexeKZarT4Xo_1qnLbp8f24c4qkJENY57P6qrTLZjeu-cAKvEctMmnG3xCoiWNJqIc0DHxHC50cUW4TwF6R5Xo36GBtackGyzAQn1R5dRAGYi-LLYjzJj7RSrDDPS7-FIcu7H4F3hEXFjQ8VLJ6JCtd2YaxrlIcOi6hpQF-C")'
                  }}
                />
                <div className="flex-1">
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Olivia Bennett
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    May 20, 2024
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#111418]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="fill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div
                  className="text-[#bac4cf]"
                  data-icon="Star"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#111418] text-base font-normal leading-normal">
                The Data Science Seminar provided valuable insights into the
                field. The speakers were knowledgeable and engaging.
              </p>
              <div className="flex gap-9 text-[#60758a]">
                <button className="flex items-center gap-2">
                  <div
                    className="text-inherit"
                    data-icon="ThumbsUp"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                    </svg>
                  </div>
                  <p className="text-inherit">8</p>
                </button>
                <button className="flex items-center gap-2">
                  <div
                    className="text-inherit"
                    data-icon="ThumbsDown"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                    </svg>
                  </div>
                  <p className="text-inherit">1</p>
                </button>
              </div>
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
                Privacy Policy
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Contact Us
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

export default Events;