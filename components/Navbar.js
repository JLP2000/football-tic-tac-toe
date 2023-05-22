import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={75} height={75} />
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">How To</Link>
        <Link href="/play">Play</Link>
      </div>
    </nav>
  );
};

export default Navbar;
