import Nav from "./Nav";

function Main() {
  return (
    <main className="relative bg-slate-900 w-full h-screen min-w-fit">
      <div className="absolute -top-36 -left-36 h-64 w-64 bg-pink-300 rounded-full filter blur-3xl opacity-50 lg:w-80 lg:h-80"></div>
      <Nav />
      <div className="  h-72 mx-auto flex flex-col justify-between items-center text-center mt-44 lg:w-2/5 lg:h-96">
        <h1 className="text-creme text-4xl font-bold w-2/3 lg:text-6xl">
          Creative websites that will blow your mind
        </h1>
        <div className="flex gap-5 lg:gap-8 justify-center">
          <a
            href="#contact"
            className="bg-creme text-slate-800 font-bold p-2 rounded-md flex justify-center items-center"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="border text-white p-2 rounded-md flex justify-center items-center"
          >
            My services
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
