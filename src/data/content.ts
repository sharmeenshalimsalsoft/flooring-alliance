import { images } from "./images";

/** Placeholder / illustrative content only — not client-verified data */
export const stats = [
  { id: "1", value: "275+", label: "Commercial Member Companies", note: "Illustrative" },
  { id: "2", value: "350+", label: "Commercial Locations", note: "Illustrative" },
  { id: "3", value: "450+", label: "Member Dealers", note: "Illustrative" },
  { id: "4", value: "600+", label: "Dealer Locations", note: "Illustrative" },
];

export const audiences = [
  {
    id: "residential",
    title: "Residential Dealers",
    description:
      "Keep your independence while gaining purchasing power, showroom support, supplier partnerships and peer networking across all 50 states.",
    cta: "Explore Dealer Membership",
    href: "/membership/residential",
    image: images.residential,
  },
  {
    id: "commercial",
    title: "Commercial Contractors",
    description:
      "Join a national network of independent commercial flooring contractors with trusted supplier partners, education and business resources.",
    cta: "Explore Commercial Membership",
    href: "/membership/commercial",
    image: images.commercial,
  },
  {
    id: "supplier",
    title: "Supplier Partners",
    description:
      "Work with a focused alliance of independent dealers and commercial contractors — close relationships, not an overcrowded vendor list.",
    cta: "Become a Supplier Partner",
    href: "/membership/supplier",
    image: images.supplier,
  },
];

export const benefits = [
  {
    title: "Purchasing Power",
    description:
      "Alliance purchasing pathways that help independent businesses compete with stronger supplier access.",
  },
  {
    title: "Loyalty & Rebate Programs",
    description:
      "Participate in supplier loyalty programs with tracking and reporting — terms vary by partner.",
  },
  {
    title: "Strategic Supplier Partners",
    description:
      "Relationships with leading manufacturers, intentionally limited so partnerships stay close and effective.",
  },
  {
    title: "Showroom Investment Support",
    description:
      "Co-investment in displays and merchandising so member showrooms stay current and fashion-forward.",
  },
  {
    title: "Training & Product Knowledge",
    description:
      "Education and product training that help teams sell and install with confidence.",
  },
  {
    title: "Peer Networking",
    description:
      "Connect with dealers and contractors nationwide to share best practices and operational insight.",
  },
  {
    title: "Marketing & Visualization Tools",
    description:
      "Digital marketing support and room visualization resources that help members win more projects.",
  },
  {
    title: "Summits & Industry Events",
    description:
      "Bi-annual meetings and expositions that bring members and suppliers together for growth.",
  },
];

export const services = [
  {
    slug: "training-education",
    title: "Training & Education",
    description: "Courses, webinars and professional development for your team.",
    image: images.training,
  },
  {
    slug: "member-resources",
    title: "Member Resources",
    description: "Guides, templates and operational tools for day-to-day business.",
    image: images.woodSamples,
  },
  {
    slug: "supplier-programs",
    title: "Supplier Programs",
    description: "Structured partnerships that connect members with trusted suppliers.",
    image: images.customSupplier,
  },
  {
    slug: "business-support",
    title: "Business Support",
    description: "Operational guidance to help independent businesses stay competitive.",
    image: images.designCenter,
  },
  {
    slug: "commercial-services",
    title: "Commercial Services",
    description: "Resources tailored for commercial flooring contractors and projects.",
    image: images.commercialFlooring,
  },
  {
    slug: "residential-resources",
    title: "Residential Dealer Resources",
    description: "Support designed specifically for independent flooring retailers.",
    image: images.residential,
  },
];

/** Fictional placeholder suppliers — not real companies */
export const suppliers = [
  {
    id: "s1",
    slug: "northridge-surfaces",
    name: "Northridge Surfaces",
    category: "Hardwood",
    description: "Premium hardwood collections for residential and light commercial spaces.",
    initials: "NS",
  },
  {
    id: "s2",
    slug: "cedarline-materials",
    name: "Cedarline Materials",
    category: "Resilient",
    description: "Resilient flooring solutions engineered for high-traffic environments.",
    initials: "CM",
  },
  {
    id: "s3",
    slug: "stonepath-collective",
    name: "Stonepath Collective",
    category: "Stone & Tile",
    description: "Natural stone and porcelain surfaces for architectural interiors.",
    initials: "SC",
  },
  {
    id: "s4",
    slug: "harborwood-group",
    name: "Harborwood Group",
    category: "Commercial",
    description: "Commercial-grade flooring systems for hospitality and workplace.",
    initials: "HG",
  },
  {
    id: "s5",
    slug: "atelier-floorworks",
    name: "Atelier Floorworks",
    category: "Specialty",
    description: "Specialty finishes and custom surface solutions for design-led projects.",
    initials: "AF",
  },
  {
    id: "s6",
    slug: "summit-tile-co",
    name: "Summit Tile Co.",
    category: "Tile",
    description: "Architectural tile collections for residential and commercial installers.",
    initials: "ST",
  },
];

export const supplierCategories = [
  "All",
  "Hardwood",
  "Resilient",
  "Stone & Tile",
  "Commercial",
  "Specialty",
  "Tile",
];

/** Sample locations — fictional until verified data is provided */
export const locations = [
  { id: "l1", company: "Apex Flooring Partners", city: "Dallas", state: "TX", zip: "75201", type: "Commercial" },
  { id: "l2", company: "Heritage Home Floors", city: "Charlotte", state: "NC", zip: "28202", type: "Residential" },
  { id: "l3", company: "Pacific Surface Pros", city: "Portland", state: "OR", zip: "97201", type: "Commercial" },
  { id: "l4", company: "Midwest Dealer Network", city: "Chicago", state: "IL", zip: "60601", type: "Residential" },
  { id: "l5", company: "Coastal Flooring Group", city: "Tampa", state: "FL", zip: "33602", type: "Residential" },
  { id: "l6", company: "Mountain West Surfaces", city: "Denver", state: "CO", zip: "80202", type: "Commercial" },
];

export const newsItems = [
  {
    id: "n1",
    slug: "alliance-unification-update",
    title: "Alliance Unification Update: Building One Stronger Network",
    category: "News",
    date: "October 12, 2025",
    excerpt: "An overview of how two established organizations are coming together to serve members nationwide.",
    image: images.news1,
  },
  {
    id: "n2",
    slug: "supplier-partner-spotlight",
    title: "Supplier Partner Spotlight: Expanding Member Opportunities",
    category: "Industry",
    date: "September 28, 2025",
    excerpt: "How supplier partnerships continue to create value across residential and commercial markets.",
    image: images.news2,
  },
  {
    id: "n3",
    slug: "annual-summit-preview",
    title: "Annual Summit Preview: Education, Networking & Growth",
    category: "Events",
    date: "September 5, 2025",
    excerpt: "A look ahead at programming designed for dealers, contractors and supplier partners.",
    image: images.news3,
  },
];

export const events = [
  {
    id: "e1",
    title: "Regional Member Meetup — Southeast",
    date: "March 18, 2026",
    location: "Atlanta, GA",
    type: "Networking",
  },
  {
    id: "e2",
    title: "Commercial Flooring Roundtable",
    date: "April 9, 2026",
    location: "Virtual",
    type: "Education",
  },
  {
    id: "e3",
    title: "Annual Industry Summit",
    date: "September 22–24, 2026",
    location: "Chicago, IL",
    type: "Summit",
  },
];

/** Inspired by What’s Underfoot — official AHSG & Commercial USA podcast */
export const podcasts = [
  {
    id: "p1",
    title: "Foundations of Independent Growth",
    episode: "Episode 12",
    duration: "34 min",
    description:
      "Conversations with dealers on building resilient local businesses while staying independent.",
  },
  {
    id: "p2",
    title: "Commercial Project Partnerships",
    episode: "Episode 11",
    duration: "41 min",
    description:
      "How contractors and suppliers collaborate on complex commercial installations.",
  },
  {
    id: "p3",
    title: "The Future of Surfaces",
    episode: "Episode 10",
    duration: "28 min",
    description:
      "Trends shaping residential and commercial flooring markets across the U.S.",
  },
];

/** Placeholder testimonials — not authentic member quotes */
export const testimonials = [
  {
    id: "t1",
    name: "Jordan Hale",
    company: "Hale Residential Floors",
    position: "Owner",
    quote:
      "Being part of a national network has opened doors to suppliers and peer relationships we could not reach alone.",
  },
  {
    id: "t2",
    name: "Morgan Ellis",
    company: "Ellis Commercial Surfaces",
    position: "Operations Director",
    quote:
      "The educational resources and contractor community have become a core part of how we develop our teams.",
  },
  {
    id: "t3",
    name: "Casey Rivera",
    company: "Rivera Design Floors",
    position: "General Manager",
    quote:
      "Membership gives us a credible platform to grow — with partnerships that feel aligned to how we serve customers.",
  },
];

/** Markets aligned to AHSG’s published market structure */
export const markets = [
  {
    title: "Builder New Home Residential",
    description: "Serving residential builders and developers constructing quality homes.",
    image: images.newHome,
  },
  {
    title: "Residential Remodel & Replacement",
    description: "Supporting contractors and dealers focused on home remodel and replacement projects.",
    image: images.remodel,
  },
  {
    title: "Multi-Family",
    description: "Serving multi-family developers and contractors across apartment and condo projects.",
    image: images.multifamily,
  },
  {
    title: "Home Center Retail",
    description: "Supporting retailers and home centers for remodeling and construction needs.",
    image: images.retail,
  },
  {
    title: "Main Street Commercial",
    description: "Serving commercial developers and contractors on business and retail environments.",
    image: images.mainStreet,
  },
  {
    title: "Design Center",
    description: "Partnering with design centers focused on modern, distinctive interior spaces.",
    image: images.designCenter,
  },
  {
    title: "Kitchen & Bath",
    description: "Supporting kitchen and bath retailers with surface and flooring solutions.",
    image: images.kitchenBath,
  },
  {
    title: "Tenant Improvement",
    description: "Serving contractors and developers improving multi-family and commercial spaces.",
    image: images.tenant,
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Markets", href: "/markets" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
