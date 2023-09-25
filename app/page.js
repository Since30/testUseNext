"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <Link href="/contact">Contact</Link>&nbsp;&nbsp;
      <Link href="/cv">CV</Link>&nbsp;&nbsp;
      <Link href="/jeu">Jeu</Link>
    </main>
  );
}
