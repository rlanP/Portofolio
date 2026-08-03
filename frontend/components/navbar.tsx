"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    { href: "/portofolio", label: "Portofolio"},
    {href: "/skills", label: "Skills"},
    {href : "/certificates", label: "Certificates"},
    {href: "/testimonials", label: "Testimonials"},
    {href: "/contact", label: "Contact" }


];

