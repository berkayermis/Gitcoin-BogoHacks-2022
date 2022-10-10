import college from '../../public/college.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Link href={"/"}>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={college} alt="college" width={60} height={60} />
    <span className="ml-5 text-2xl text-[#333]">uniDAO</span>
    </a>
    </Link>
    <p class="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 MedipolDAO —
      <a href="https://twitter.com/mberkayermis" class="text-black ml-1" rel="noopener noreferrer" target="_blank">@berkayermis</a>
      <a href="https://twitter.com/metehanozdemr" class="text-black ml-1" rel="noopener noreferrer" target="_blank">@metehanozdemr</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="ml-3 text-gray-500" href='https://twitter.com/medipolDAO' target="_blank">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500" href='https://www.linkedin.com/company/medipoldao' target="_blank">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    );
}

export default Footer;