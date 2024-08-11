import sulih from "../favicon.jpeg";
export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Sulih.
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
              Alumni of STMIK-AUB Surakarta majoring in System Information, 
              An individual who as aninterest in technology especially programming, 
              Specializing in software and application development, 
              whit exstensive industry experience. Proficient in PHP, Javascript, Typescript and Java for Web Development. 
              Whit adept utilization of varios Development tools and freamworks. 
              Experience in crefting modern interface, alongside expertisein developing back-end system including API creation,
               database management, and server performance optimization, Highly curious and driven to countinuously learn and develop professionally.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src={sulih}
                className="object-cover object-center rounded"
                alt="hero"
                
              />
            </div>
          </div>
        </section>
      );
}