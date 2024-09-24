import Image from "next/image";
import image from "../../public/images/perfil.jpeg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-center text-3xl font-bold">My Portfolio</h1>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">About Me! 😊</div>
        <div className="collapse-content">
          <p className="text-2xl">
          ¡Hola! Soy un apasionado diseñador y desarrollador web 💻. Me encanta crear diseños modernos e interactivos, con un enfoque en la experiencia del usuario 🎨. ¡Trabajemos juntos para construir algo increíble! 🚀
          </p>
          <div className="divider divider-info text-2xl font-extrabold"> </div>
          <p className="text-2xl">
            Hi! I'm a passionate web designer and developer 💻. I love creating
            modern and interactive designs with a focus on user experience 🎨.
            Let’s work together to build something amazing! 🚀
          </p>
        </div>
      </div>
      <div className="avatar">
        <div className="w-40 rounded-full">
          <Image src={image} alt="Imagen de perfil" />
        </div>
        {/* <p className="text 2xl text-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          corporis dicta soluta
        </p> */}
      </div>
      <div className="text-center mt-4">
    <h2 className="text-2xl font-bold">Abraham García</h2>
    <p className="text-lg">
      Desarrollador web apasionado por el diseño moderno y las experiencias interactivas.
    </p>
  </div>
      {/* Boton para el modo oscuro */}
      <label className="swap swap-rotate bottom-40 place-self-start">
        <input type="checkbox" className="theme-controller" value="cupcake" />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
      <div className="flex w-full flex-col">
        <div className="divider divider-primary text-2xl font-extrabold">
          Proyectos
        </div>

        {/* Carrusel de proyectos */}
        <div className="carousel w-full rounded-lg shadow-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/images/url_shortner.png"
              className="h-64 w-full object-cover"
              alt="Proyecto 1"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="h-64 w-full object-cover"
              alt="Proyecto 2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="h-64 w-full object-cover"
              alt="Proyecto 3"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="h-64 w-full object-cover"
              alt="Proyecto 4"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="divider divider-info text-2xl font-extrabold">
          Contacto
        </div>
        <br />
        <h2 className="text-center text-xl font-medium text-blue-500">
          Email:
        </h2>
        <a
          className="link link-accent text-center font-extrabold"
          href="mailto:maharba1707@gmail.com?"
        >
          maharba1707@gmail.com
        </a>
      </div>
    </main>
  );
}
