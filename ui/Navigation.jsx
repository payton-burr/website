import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="border-b pb-5 flex">
      <Link href="/" passHref>
        <h1 className="text-4xl cursor-pointer">Payton Burr</h1>
      </Link>
    </nav>
  );
}

export default Navigation;
