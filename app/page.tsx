import Image from "next/image";
import FadeUpWhenVisible from "@/compronents/FadeUpWhenVisible";
import "../style/style.css"
import React from "react";

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { GiPig, GiCow, GiChicken } from "react-icons/gi";
import Silder from "@/compronents/Slider";

export default function Home() {
  return (
    <main className="bg-[#623e2a]">
      <section id="Home">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
            autoPlay
            loop
            muted
          >
            <source src="/img/hamburgervideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

          {/* Content Centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 max-w-2xl">
              <h1 className="text-6xl font-extrabold mb-4">The Juiciest Burger
                in Town</h1>
              <div className="mt-5">
                <p className="text-2xl font-bold">
                  Fresh ingredients
                </p>
                <p className="text-2xl font-bold">
                  Bold flavors
                </p>
                <p className="text-2xl font-bold">
                  Delivered fast
                </p>
              </div>
              <div className="mt-5">
                <a
                  href="https://lineman.line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-6 py-3 bg-black/50 text-white rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 mt-auto"
                >
                  Order now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Our Menu">
        <div className="relative w-full p-15">
          <FadeUpWhenVisible>
            <h1 className="text-5xl font-bold text-center md:text-left mb-10">Our Menu</h1>
          </FadeUpWhenVisible>
          <div className="w-full px-15 space-y-10">
            <FadeUpWhenVisible>
              <div className="backdrop-blur-md bg-black/50 max-w-6xl shadow-xl rounded-2xl mx-auto flex flex-col p-6 sm:p-10">
                <h2 className="text-white text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
                  Classic Cheeseburger
                </h2>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 w-full">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/img/cheeseburger.png"
                        alt="Classic Cheeseburger"
                        width={800}
                        height={600}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full flex flex-col text-white text-base sm:text-lg leading-relaxed space-y-4">
                    <div className="flex gap-6 text-3xl">
                      <GiPig title="Pork" />
                      <GiChicken title="Chicken" />
                      <GiCow title="Beef" />
                    </div>
                    <div className="text-xl font-bold">
                      <p>Hamburger + French fries + water : 199 THB</p>
                      <p>Hamburger : 100 THB</p>
                      <p>Beef +20 THB</p>
                    </div>
                    <a
                      href="https://lineman.line.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-6 py-3 bg-white/20 text-white rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 mt-auto"
                    >
                      Order now!
                    </a>
                  </div>

                </div>
              </div>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <div className="backdrop-blur-md bg-black/50 max-w-6xl shadow-xl rounded-2xl mx-auto flex flex-col p-6 sm:p-10">
                {/* หัวเรื่อง */}
                <h2 className="text-white text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
                  BBQ Bacon Blast
                </h2>

                {/* เนื้อหา 2 ฝั่ง */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* ฝั่งซ้าย - รูปภาพ */}
                  <div className="lg:w-1/2 w-full">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/img/BBQBaconBlast.png"
                        alt="BBQ Bacon Blast Cheeseburger"
                        width={800}
                        height={600}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>

                  {/* ฝั่งขวา - ข้อความ */}
                  <div className="lg:w-1/2 w-full flex flex-col text-white text-base sm:text-lg leading-relaxed space-y-4">
                    {/* ไอคอนเนื้อ */}
                    <div className="flex gap-6 text-3xl">
                      <GiPig title="Pork" />
                      <GiChicken title="Chicken" />
                      <GiCow title="Beef" />
                    </div>

                    {/* รายการราคา */}
                    <div className="text-xl font-bold">
                      <p>Hamburger + French fries + water : 199 THB</p>
                      <p>Hamburger : 100 THB</p>
                      <p>Beef +20 THB</p>
                    </div>

                    {/* ปุ่มสั่งอาหาร */}
                    <a
                      href="https://lineman.line.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-6 py-3 bg-white/20 text-white rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 mt-auto"
                    >
                      Order now!
                    </a>
                  </div>

                </div>
              </div>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <div className="backdrop-blur-md bg-black/50 max-w-6xl shadow-xl rounded-2xl mx-auto flex flex-col p-6 sm:p-10">
                {/* หัวเรื่อง */}
                <h2 className="text-white text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
                  Double Trouble
                </h2>

                {/* เนื้อหา 2 ฝั่ง */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* ฝั่งซ้าย - รูปภาพ */}
                  <div className="lg:w-1/2 w-full">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/img/DoubleTrouble.png"
                        alt="Double Trouble"
                        width={800}
                        height={600}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>

                  {/* ฝั่งขวา - ข้อความ */}
                  <div className="lg:w-1/2 w-full flex flex-col text-white text-base sm:text-lg leading-relaxed space-y-4">
                    {/* ไอคอนเนื้อ */}
                    <div className="flex gap-6 text-3xl">
                      <GiPig title="Pork" />
                      <GiChicken title="Chicken" />
                      <GiCow title="Beef" />
                    </div>

                    {/* รายการราคา */}
                    <div className="text-xl font-bold">
                      <p>Hamburger + French fries + water : 199 THB</p>
                      <p>Hamburger : 100 THB</p>
                      <p>Beef +20 THB</p>
                    </div>

                    {/* ปุ่มสั่งอาหาร */}
                    <a
                      href="https://lineman.line.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-6 py-3 bg-white/20 text-white rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 mt-auto"
                    >
                      Order now!
                    </a>
                  </div>

                </div>
              </div>
            </FadeUpWhenVisible>
          </div>
        </div>
      </section>
      <section id="Best Seller">
        <div className="container mx-auto text-center">
          <FadeUpWhenVisible>
            <div className="font-bold text-center h-screen flex flex-col items-center justify-center">
              <h1 className="text-5xl">Promotion</h1>
              <h1 className="my-10 text-3xl">Every Wednesday, 10% off on all menu items!</h1>
              <h1 className="text-5xl font-bold text-center mb-10">
                Best Seller
              </h1>
              <Silder />
            </div>
          </FadeUpWhenVisible>
        </div>
      </section>
      <section id="Location">
        <div className="h-screen w-full flex flex-col p-10 relative overflow-hidden">
          <Image
            src="/img/Burger1.png"
            alt="Burger Background"
            width={500}
            height={500}
            className="z-0 absolute bottom-0 left-[-200px] w-[500px] opacity-30 rotate-[22deg] z-0 pointer-events-none"
          />
          <div className="flex justify-start">
            <h1 className="text-4xl font-bold z-10 text-white">BurgerHeaven</h1>
          </div>
          <div className="w-full h-full mt-10">
            <div className="flex flex-col z-10 space-x-5 lg:flex-row w-full h-full p-4 z-10">
              <div className="w-full space-y-4 z-10 lg:w-1/2 mb-10 lg:mb-0">
                <div className="w-full bg-black/50 p-4 border border-white/50 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4">Our Location</h2>
                  <p className="text-white">
                    1234 Burger Street, Bangkok, Thailand, 12345
                    <br />
                    Open every day from 10 AM - 10 PM
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799214652!2d100.524916!3d13.7563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e7ed1d08979%3A0x39db95759b6b651!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1649551417304!5m2!1sen!2sth"
                  className="w-full min-h-[300px] border-0 rounded-xl"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="lg:w-1/2 z-10">
                <Image
                  src="/img/burgerrasterrunt.png"
                  alt="Our Restaurant"
                  width={500}
                  height={500}
                  className=" w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="h-screen w-full flex flex-col p-10 relative overflow-hidden">
          <div className="flex justify-start">
            <h1 className="text-4xl font-bold z-10 text-white">Contact</h1>
          </div>
          <div className="w-full h-full mt-10">
            <div className="flex flex-col space-x-5 lg:flex-row w-full h-full p-4 z-10">

              <div className="lg:w-1/2">
                <Image
                  src="/img/burgerrasterrunt.png"
                  alt="Our Restaurant"
                  width={500}
                  height={500}
                  className="z-20 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0 space-y-4">
                <div className="w-full bg-black/50 p-4 border border-white/50 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4">Social</h2>
                  <div className="flex space-x-3 items-center">
                    {/* Facebook */}
                    <div className="relative group">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-blue-600 transition"
                      >
                        <FaFacebookF />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Facebook
                      </span>
                    </div>

                    {/* Instagram */}
                    <div className="relative group">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-pink-600 transition"
                      >
                        <FaInstagram />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        Instagram
                      </span>
                    </div>

                    {/* X / Twitter */}
                    <div className="relative group">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-sky-600 transition"
                      >
                        <FaXTwitter />
                      </a>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                        X (Twitter)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black/50 p-4 border border-white/50 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4">Tel</h2>
                  <p className="text-xl font-bold mb-4">0xx-xxx-xxxx</p>
                </div>
                <div className="w-full bg-black/50 p-4 border border-white/50 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4">Gmail</h2>
                  <p className="text-xl font-bold mb-4">123456@Portfolio.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
