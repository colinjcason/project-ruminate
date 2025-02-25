import Link from "next/link";
import FLogo from "./logo/Flogo";
import ELogo from "./logo/Elogo";
import KLogo from "./logo/Klogo";
import RightLogo from "./logo/RightLogo";
import ALogo from "./logo/ALogo";
import CLogo from "./logo/CLogo";
import BLogo from "./logo/BLogo";
import FeedkcabLogo from "./logo/FeedkcabLogo";


const Navbar: React.FC = () => {
  return (
    <header className="border-b-2 border-black bg-white px-[50px] py-[16px] flex justify-between items-center self-stretch">
      <Link href="/" className="text-2xl font-bold">
        <FeedkcabLogo className="ml-2" />
      </Link>

      <div className="flex items-center gap-8">
        {["About Us", "How it Works", "Pricing"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
        >
          Log In
        </Link>
        <span className="text-[var(--d-color-base-1000,#000)]">|</span>
        <Link
          href="/signup"
          className="text-[16px] font-roboto text-[var(--d-color-base-1000,#000)] text-center font-normal leading-[20px] hover:text-gray-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
