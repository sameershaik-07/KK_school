function News(){
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
              Programs
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Admissions
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              News
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              About Us
            </a>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Apply Now</span>
          </button>
        </div>
      </header>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
              News &amp; Updates
            </p>
          </div>
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div
                  className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0"
                  data-icon="MagnifyingGlass"
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
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search news"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAeCcNZGNQIAbOTcg4e8OEc9lqwd9gh59uTD2gCSdf-GPeNuu8I58I9XBC84miG7GeG4I6hiA8ZQlXSqBgku6cRYXfS-LU3arQzLYpRaC0MPQJa9_S7IG1c9bVTIrxPIHB-WD5ENbekjXx8GweZ7RTUtX8biGJb9dxUa_DcCC1C5jkWniJxAEEuKeT11jyG8klmVdFGV-0Wmv5qJ1VpfGEI5tsVOrEwpsNqFmCH02scjTn95NzpPG1oS6mHSFZuwldbfDk_UsCqUg8")'
                }}
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                  New Cybersecurity Course Launched
                </p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    KK Computers introduces a comprehensive cybersecurity course
                    designed to equip students with the skills to protect
                    digital assets and combat cyber threats. The course covers
                    network security, ethical hacking, and incident response.
                  </p>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0c7ff2] text-white text-sm font-medium leading-normal">
                    <span className="truncate">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXI3DWUXbBOxCX9X8V-JlJj9RtAX2J1Jk6o9Jaq3hU9xgAt7WR8uPgPYl9qEekcPZKXjsMODPr5EYf1jQHXeDP07Eoi92r2145nUJy6j1qGuBbQe5VCKnIk5RSjXJG4NoqtlzBelnVSFF9C13wPLT8hr7SzGLWKYxkozGbSZgEviW7OiRTrDSKwcLW5BvTlp5OMQELKPNizaXEry-u-LIL9fmcv9JuQdpQUHWEhjyJIfiMjWtopdP1Fik9cM8-1t7P-m4qDU_kokVh")'
                }}
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Student Success Story: Alex's Journey to IT Excellence
                </p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    Follow Alex's inspiring journey from a beginner to a
                    successful IT professional, highlighting the impact of KK
                    Computers' training programs on career advancement.
                  </p>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0c7ff2] text-white text-sm font-medium leading-normal">
                    <span className="truncate">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJsVdU_knrIsF8Y2-ID_nNYhDITdOo1Y7e7a6TLn070cwWxkz7OVLGayyg3vLLrRMdqYT-lHhw0SzJLcdBeSTOBpxmnhgVmuOcddjSjtuS42CJpf6wdyFLlwqZL2yrbXzvIMWhgxfoyaAhSg_xeXQov9ykqSj9SDxrSZguUssKuSN7pp80WfsrRRYRg3GRWvJNmH2rFgob6o8PlyasLhUYp-_1OVCs7xkP4XB3hpVuk5kNTxpNgEUofXGMPY6L9QJB-vLl9rmWkT-e")'
                }}
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Industry Insights: The Future of Cloud Computing
                </p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    Explore the latest trends and developments in cloud
                    computing, with insights from industry experts and KK
                    Computers' faculty.
                  </p>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0c7ff2] text-white text-sm font-medium leading-normal">
                    <span className="truncate">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhIRsILDP1tbiFrA_MzuIXuB9RCWGtfuGcO7EWM8KJgmyErmW5IyrlYWV6qLWrJi5IExnGHvrX3fUsXKSoeA42h6kbfpM2F638okaTH4cAYuhZR6kZ2sZfd0GX_YT32ODiTVcdga7bgVGPQ2js9FtaURoszHSbZ6O6Dn9deRdNs2jLLla1FYgJn3G58Qnb_JesL5cQbkxHXpo0vO0ZDf4mQr7JEv3JsEYtzkaOBRJcKV1d8oE_LVq93QsXoJsFYEFMiO5-k25e4EOS")'
                }}
              />
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Upcoming Workshop: Data Science Fundamentals
                </p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#60758a] text-base font-normal leading-normal">
                    Join our upcoming workshop on data science fundamentals,
                    covering data analysis, machine learning, and data
                    visualization techniques.
                  </p>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0c7ff2] text-white text-sm font-medium leading-normal">
                    <span className="truncate">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
              <div
                className="text-[#111418]"
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
            </a>
            <a
              className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f5]"
              href="#"
            >
              1
            </a>
            <a
              className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
              href="#"
            >
              2
            </a>
            <a
              className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
              href="#"
            >
              3
            </a>
            <span
              className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
              href="#"
            >
              ...
            </span>
            <a
              className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
              href="#"
            >
              10
            </a>
            <a href="#" className="flex size-10 items-center justify-center">
              <div
                className="text-[#111418]"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}
export default News;