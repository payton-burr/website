import Link from "next/link";

function Navigation() {
  return (
    <nav className="nav p-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">Payton Burr</h2>
      </Link>

      <Link href="/bio" passHref>
        <h2 className="ms-5 lead my-auto pointer">Bio</h2>
      </Link>
    </nav>
  );
}

export default Navigation;
