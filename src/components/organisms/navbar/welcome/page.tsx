

export default function WelcomeSection() {
    return (
      <section id="welcome" className="w-full bg-gray-900 h-full pt-20">
        <div className="w-full">
          <div className="pt-6 w-full">
            <h1 className="text-6xl pb-3 text-[#ffb4ed] dark:text-white text-center">
              Welcome to the{" "}
              <span className="text-[#ffb4ed] dark:text-[#FFD6F5] hover:animate-pulse duration-500">
                commune
              </span>
              ! 👋
            </h1>
            <p className="hero__subtitle text-4xl text-center text-[#ffb4ed] opacity-80 dark:text-white">
              A place for{" "}
              <span className="text-[#ffb4ed] dark:text-[#FFD6F5]">everyone</span>{" "}
              to{" "}
              <span className="text-[#6db1ff] dark:text-[#6db1ff]">develop</span>,{" "}
              <span className="text-[#FF8F8F]  dark:text-[#FF8F8F]">design</span>,
              and{" "}
              <span className="text-[#ffef40] dark:text-[#FFF7A1]">create</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between">
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Networking and Wrapping</h1>
                <img
                  src="./gif/cubes/blue_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                 Our current economic landscape is characterized by fragmentation, with various sectors and industries operating independently.
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Reusability</h1>
                <img
                  src="./gif/cubes/green_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    Commune supports a modular architecture that encourages code reuse.
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Scalability</h1>
                <img
                  src="./gif/cubes/yellow_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    Commune supports horizontal scaling, enabling the addition of more resources to handle increased demand.
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Namespaces</h1>
                <img
                  src="./gif/cubes/red_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    We do not want to work with IP and ports as it can get confusing.
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Tokenomics</h1>
                <img
                  src="./gif/cubes/pink_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    The modules will vote on each block at regular intervals.
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Application Validators</h1>
                <img
                  src="./gif/cubes/black_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    Application validators validate modules that best performs that application
                </p>
            </div>
            <div className="mx-auto w-[250px] h-[350px] bg-slate-800 rounded-lg flex flex-col justify-cente shadow-2xl opacity-80">
                <h1 className="mt-[20px] text-center font-bold opacity-60 text-[16px]">Whitepaper</h1>
                <img
                  src="./gif/cubes/white_small.gif"
                  className="mt-[20px] mx-auto lg:w-[100px] lg:h-[100px] duration-300"
                />
                <div className="mt-[20px] mx-auto w-[80%] bg-slate-800 border-[1px]"></div>
                <p className="w-[80%] m-auto text-center">
                    Read Our Whitepaper
                </p>
            </div>
            
          </div>
        </div>
      </section>
    );
  }