export default function Nav() {
  return (
    <nav className="md:block w-full py-3 bg-white ring-1 ring-gray-900 ring-opacity-5 hidden">
      <ul
        className="flex max-w-[1024px] mx-auto 
        justify-center items-center
      "
      >
        <li className="mx-2 cursor-pointer">홈</li>
        <li className="mx-2 cursor-pointer">내정보</li>
      </ul>
    </nav>
  );
}
