"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import clsx from 'clsx';

export default function Hero() {
  const [isFirstRolled, setIsFirstRolled] = useState(false);
  const [isSecondRolled, setIsSecondRolled] = useState(false);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  const handleFirstRoll = () => {
    setIsFirstRolled(true);
    setTimeout(() => {
      firstCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };

  const handleSecondRoll = () => {
    setIsSecondRolled(true);
    setTimeout(() => {
      secondCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };


  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-r from-[#D9F8F2] to-[#CFF2E9] dark:bg-gray-dark"
      >
        {/* Background SVG */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-full h-full text-white dark:text-gray-900 opacity-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 900"
          >
            <path
              fill="currentColor"
              d="M0 0h1440v900H0z"
            />
            <path
              fill="url(#a)"
              d="M0 0h1440v900H0z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="0"
                x2="1440"
                y1="0"
                y2="900"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9F8F2" stopOpacity=".2" />
                <stop offset="1" stopColor="#CFF2E9" stopOpacity=".2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="w-full flex flex-col items-center">
      {/* First Section */}
      <div className="relative w-full max-w-[1200px] my-10 md:h-[300px]">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Button + Text */}
          {!isFirstRolled && (
            <>
              <button
                onClick={handleFirstRoll}
                className="absolute right-[750px] top-1/2 translate-y-[30px] px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
              >
                Sounds like me
              </button>
              <div className="absolute left-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-white shadow-lg z-40 p-6 flex items-center justify-center">
                <p className="text-black dark:text-white text-center text-sm md:text-base">
                  "I'm doing alright. No major issues — and I'd like to keep it that way..."
                </p>
              </div>
            </>
          )}
          {/* Animated Card */}
          <div
            ref={firstCardRef}
            onClick={() => setIsFirstRolled(false)}
            className={clsx(
              'absolute left-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
              isFirstRolled ? 'scale-y-100' : 'scale-y-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">You've been doing great so far—now let's level up your activity!</p>
              <p className="font-semibold mb-2">Explore these Steppps challenges designed for your next move:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk Everyday in 2025</strong><br />Step into the new year by walking daily. Build healthy habits, one step at a time.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏏</span>
                  <span><strong>IPL Team Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Not a fan of leaderboards? Premium users can set private step goals and track progress on their terms.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] z-10">
            <Image
              src="/images/hero/active.png"
              alt="Active lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div className="pt-[350px]" />
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center">
          {/* Image */}
          <div className="w-full h-[200px] mb-4 relative">
            <Image
              src="/images/hero/active.png"
              alt="Active lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          {/* Text */}
          {!isFirstRolled && (
            <div className="bg-white shadow-lg z-40 p-6 flex items-center justify-center w-full mb-4">
              <p className="text-black dark:text-white text-center text-sm md:text-base">
                "I'm doing alright. No major issues — and I'd like to keep it that way..."
              </p>
            </div>
          )}
          {/* Button */}
          {!isFirstRolled && (
            <button
              onClick={handleFirstRoll}
              className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4"
            >
              Sounds like me
            </button>
          )}
          {/* Animated Card */}
          <div
            ref={firstCardRef}
            onClick={() => setIsFirstRolled(false)}
            className={clsx(
              'bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full',
              isFirstRolled ? 'scale-y-100 mb-4' : 'scale-y-0 mb-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">You've been doing great so far—now let's level up your activity!</p>
              <p className="font-semibold mb-2">Explore these Steppps challenges designed for your next move:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk Everyday in 2025</strong><br />Step into the new year by walking daily. Build healthy habits, one step at a time.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏏</span>
                  <span><strong>IPL Team Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Not a fan of leaderboards? Premium users can set private step goals and track progress on their terms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative w-full max-w-[1200px] my-10 md:h-[300px]">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Button + Text */}
          {!isSecondRolled && (
            <>
              <button
                onClick={handleSecondRoll}
                className="absolute left-[300px] top-1/2 translate-y-[25px] px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50"
              >
                Sounds like me
              </button>
              <div className="absolute right-44 top-1/2 -translate-y-1/2 h-[200px] w-[800px] bg-white shadow-lg z-40 p-6 flex items-center justify-center">
                <p className="text-black dark:text-white text-center text-sm md:text-base">
                  "I've been sitting more than I should. My energy's dropped, the belly's grown..."
                </p>
              </div>
            </>
          )}
          {/* Animated Card */}
          <div
            ref={secondCardRef}
            onClick={() => setIsSecondRolled(false)}
            className={clsx(
              'absolute right-44 top-1/2 -translate-y-1/2 h-[300px] w-[800px] bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top',
              isSecondRolled ? 'scale-y-100' : 'scale-y-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">We know change isn't easy after a sedentary lifestyle, but you're here to take the first step.</p>
              <p className="font-semibold mb-2">Here are some Steppps challenges to keep you motivated:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk - Lose - Win</strong><br />Join the steps challenge! Walk your way to the top 3 by June 2025 and win cash prizes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📣</span>
                  <span><strong>IPL Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Hate leaderboards? Premium users can set private step goals and track progress without the crowd.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] z-10">
            <Image
              src="/images/hero/lazy.png"
              alt="Lazy lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          <div className="pt-[350px]" />
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center">
          {/* Image */}
          <div className="w-full h-[200px] mb-4 relative">
            <Image
              src="/images/hero/lazy.png"
              alt="Lazy lifestyle"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
          {/* Text */}
          {!isSecondRolled && (
            <div className="bg-white shadow-lg z-40 p-6 flex items-center justify-center w-full mb-4">
              <p className="text-black dark:text-white text-center text-sm md:text-base">
                "I've been sitting more than I should. My energy's dropped, the belly's grown..."
              </p>
            </div>
          )}
          {/* Button */}
          {!isSecondRolled && (
            <button
              onClick={handleSecondRoll}
              className="px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 font-semibold z-50 w-full mb-4"
            >
              Sounds like me
            </button>
          )}
          {/* Animated Card */}
          <div
            ref={secondCardRef}
            onClick={() => setIsSecondRolled(false)}
            className={clsx(
              'bg-white dark:bg-gray-800 shadow-lg z-50 p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-500 origin-top w-full',
              isSecondRolled ? 'scale-y-100 mb-4' : 'scale-y-0 mb-0'
            )}
          >
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mb-4">We know change isn't easy after a sedentary lifestyle, but you're here to take the first step.</p>
              <p className="font-semibold mb-2">Here are some Steppps challenges to keep you motivated:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">👣</span>
                  <span><strong>Walk - Lose - Win</strong><br />Join the steps challenge! Walk your way to the top 3 by June 2025 and win cash prizes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📣</span>
                  <span><strong>IPL Challenges</strong><br />Support your favorite IPL team by turning your steps into team pride—no competition, just fun.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔒</span>
                  <span><strong>Personal Challenges</strong><br />Hate leaderboards? Premium users can set private step goals and track progress without the crowd.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" stopOpacity="0" />
                <stop offset="1" stopColor="#3BB273" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BB273" />
                <stop offset="1" stopColor="#3BB273" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        </div>
      </section>
    </>
  )
};

