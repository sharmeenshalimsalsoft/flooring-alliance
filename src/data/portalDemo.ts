/** Fictional demo data for member + admin portal UI previews. */

export const demoMember = {
  name: "Jordan Hale",
  role: "Showroom Manager",
  email: "jordan.hale@heritagefloors.example",
  company: "Heritage Home Floors",
  companyType: "Residential Dealer",
  membership: "Dealer Member",
  memberSince: "Mar 2023",
  renewal: "Mar 15, 2027",
  region: "Southeast",
  accountId: "HHF-4821",
  accountManager: "Avery Brooks",
  teamSize: 3,
};

export const portalMetrics = [
  {
    title: "Company",
    value: "Heritage Home Floors",
    meta: "Residential · Active · SE Region",
    href: "/portal",
  },
  {
    title: "Membership",
    value: "Dealer",
    meta: "Renews Mar 15, 2027",
    href: "/membership",
  },
  {
    title: "Learning",
    value: "2 courses",
    meta: "1 certificate · 60% avg progress",
    href: "/portal/learning",
  },
  {
    title: "Active Offers",
    value: "5",
    meta: "2 expiring within 30 days",
    href: "/portal/offers",
  },
];

export const announcements = [
  {
    title: "Q4 supplier program updates now available",
    body: "Updated rebate calendars and display allowances for hardwood and resilient lines.",
    date: "Nov 4, 2025",
    tag: "Programs",
  },
  {
    title: "Annual Summit registration opens next month",
    body: "Member pricing and early-bird hotel block details publish December 1.",
    date: "Nov 2, 2025",
    tag: "Events",
  },
  {
    title: "New residential dealer resource pack published",
    body: "Showroom scripts, sample request forms, and brand assets in Documents.",
    date: "Oct 28, 2025",
    tag: "Resources",
  },
  {
    title: "Hardwood display allowance reminder for Q2",
    body: "Submit display photos by April 30 to qualify for the seasonal credit.",
    date: "Oct 21, 2025",
    tag: "Deadlines",
  },
];

export const upcoming = [
  { label: "Rebate statement window closes", when: "Nov 14", type: "Finance" },
  { label: "Hardwood Foundations module due", when: "Nov 18", type: "Learning" },
  { label: "Spring promo RSVP deadline", when: "Nov 22", type: "Offers" },
  { label: "Regional dealer call", when: "Dec 3", type: "Community" },
];

export const teamMembers = [
  { name: "Jordan Hale", role: "Showroom Manager", access: "Full + Financial" },
  { name: "Riley Chen", role: "Sales Associate", access: "Standard" },
  { name: "Sam Ortiz", role: "Operations", access: "Documents + Learning" },
];

export const communityGroups = [
  { name: "Residential", members: 148, posts: 32 },
  { name: "Commercial", members: 96, posts: 21 },
  { name: "Multi-family", members: 54, posts: 12 },
  { name: "Kitchen & Bath", members: 71, posts: 18 },
];

export const communityFeed = [
  {
    author: "Morgan Ellis",
    initials: "ME",
    group: "Commercial",
    time: "2h ago",
    title: "Looking for resilient install partners in Atlanta",
    excerpt:
      "We have a 42k sq ft multi-tenant lobby project kicking off in January. Seeking preferred commercial install crews with Alliance rates.",
    replies: 8,
    likes: 14,
  },
  {
    author: "Alliance Staff",
    initials: "AS",
    group: "Announcements",
    time: "Yesterday",
    title: "Pinned: Q4 program calendar",
    excerpt:
      "Download the updated supplier calendar from Documents → Suppliers. Display photo submissions open through December 15.",
    replies: 3,
    likes: 41,
  },
  {
    author: "Casey Rivera",
    initials: "CR",
    group: "Residential",
    time: "Yesterday",
    title: "Showroom tip: sample wall lighting",
    excerpt:
      "Switched to 3000K track lighting over our hardwood wall — conversion on premium grades jumped noticeably this month.",
    replies: 12,
    likes: 27,
  },
  {
    author: "Alex Quinn",
    initials: "AQ",
    group: "Multi-family",
    time: "2 days ago",
    title: "Vendor lead times for LVP?",
    excerpt:
      "Anyone seeing longer lead times from Cedarline on wide-plank LVP for Q1 buys?",
    replies: 6,
    likes: 9,
  },
];

export const directory = [
  {
    name: "Jordan Hale",
    company: "Heritage Home Floors",
    role: "Showroom Manager",
    region: "Southeast",
  },
  {
    name: "Morgan Ellis",
    company: "Apex Flooring Partners",
    role: "Commercial Lead",
    region: "Southeast",
  },
  {
    name: "Casey Rivera",
    company: "Rivera Design Floors",
    role: "Owner",
    region: "Midwest",
  },
  {
    name: "Alex Quinn",
    company: "Quinn Surfaces Group",
    role: "Buyer",
    region: "Northeast",
  },
  {
    name: "Taylor Brooks",
    company: "Brooks & Co. Flooring",
    role: "GM",
    region: "West",
  },
  {
    name: "Jamie Park",
    company: "Park Tile Studio",
    role: "Design Director",
    region: "West",
  },
];

export const offers = [
  {
    title: "Spring Hardwood Collection Promo",
    supplier: "Northridge Surfaces",
    category: "Hardwood",
    dates: "Mar 1 – May 31, 2026",
    savings: "Up to 12% off list",
    terms: "Minimum 8 SKUs · Display photo required",
    featured: true,
    status: "Active",
  },
  {
    title: "Commercial Resilient Volume Program",
    supplier: "Cedarline Materials",
    category: "Commercial",
    dates: "Jan 1 – Dec 31, 2026",
    savings: "Volume tiers from 3–9%",
    terms: "Quarterly true-up · Net 30",
    featured: false,
    status: "Active",
  },
  {
    title: "Tile Display Allowance",
    supplier: "Summit Tile Co.",
    category: "Tile",
    dates: "Apr 1 – Jun 30, 2026",
    savings: "$1,200 display credit",
    terms: "New wall install by Jun 15",
    featured: false,
    status: "Active",
  },
  {
    title: "Luxury Vinyl Early-Buy Incentive",
    supplier: "Cedarline Materials",
    category: "LVP",
    dates: "Nov 1 – Dec 15, 2025",
    savings: "Extra 4% early-buy",
    terms: "Prepaid orders only",
    featured: false,
    status: "Expiring soon",
  },
  {
    title: "Installer Training Rebate",
    supplier: "Alliance Programs",
    category: "Training",
    dates: "Ongoing 2026",
    savings: "$250 per certified tech",
    terms: "Up to 4 techs / company",
    featured: false,
    status: "Active",
  },
];

export const documents = [
  {
    title: "Member Handbook Overview",
    category: "Guides",
    type: "PDF",
    size: "2.4 MB",
    updated: "Oct 12, 2025",
    downloads: 186,
  },
  {
    title: "Supplier Program Summary — Q4",
    category: "Suppliers",
    type: "PDF",
    size: "1.8 MB",
    updated: "Nov 1, 2025",
    downloads: 94,
  },
  {
    title: "Brand Asset Guidelines (Temp)",
    category: "Marketing",
    type: "PDF",
    size: "6.1 MB",
    updated: "Sep 18, 2025",
    downloads: 210,
  },
  {
    title: "Q3 Alliance Update",
    category: "News",
    type: "PDF",
    size: "890 KB",
    updated: "Sep 30, 2025",
    downloads: 142,
  },
  {
    title: "Showroom Script Pack — Residential",
    category: "Sales",
    type: "DOCX",
    size: "420 KB",
    updated: "Oct 28, 2025",
    downloads: 67,
  },
  {
    title: "Sample Request Form",
    category: "Operations",
    type: "PDF",
    size: "210 KB",
    updated: "Aug 4, 2025",
    downloads: 301,
  },
];

export const newsItems = [
  {
    title: "Alliance announces 2026 Summit city shortlist",
    date: "Nov 3, 2025",
    category: "Events",
  },
  {
    title: "New resilient category partners join for 2026",
    date: "Oct 20, 2025",
    category: "Suppliers",
  },
  {
    title: "Member spotlight: Heritage Home Floors remodel",
    date: "Oct 8, 2025",
    category: "Members",
  },
];

export const courses = [
  {
    title: "Hardwood Installation Foundations",
    progress: 60,
    status: "In Progress",
    modules: 8,
    completed: 5,
    duration: "4h 20m",
    instructor: "Pat Nguyen",
    next: "Module 6 — Subfloor Prep",
  },
  {
    title: "Showroom Sales Excellence",
    progress: 100,
    status: "Completed",
    modules: 6,
    completed: 6,
    duration: "3h 10m",
    instructor: "Jordan Blake",
    next: "Certificate available",
  },
  {
    title: "Commercial Project Coordination",
    progress: 15,
    status: "In Progress",
    modules: 10,
    completed: 1,
    duration: "5h 45m",
    instructor: "Sam Rivera",
    next: "Module 2 — Spec Packages",
  },
  {
    title: "Tile & Stone Merchandising",
    progress: 0,
    status: "Not Started",
    modules: 5,
    completed: 0,
    duration: "2h 30m",
    instructor: "Lee Morgan",
    next: "Start orientation",
  },
];

export const certificates = [
  {
    title: "Showroom Sales Excellence",
    earned: "Sep 14, 2025",
    id: "CERT-8842",
  },
];

export const financialSummary = [
  { label: "YTD Rebates Accrued", value: "$48,260", meta: "Sample figure" },
  { label: "Open Statements", value: "2", meta: "Ready to review" },
  { label: "Last Access", value: "Nov 5", meta: "Jordan Hale · MFA" },
  { label: "Next True-Up", value: "Dec 31", meta: "Q4 window" },
];

export const rebateStatements = [
  {
    period: "Q2 2025",
    supplier: "Northridge Surfaces",
    amount: "$12,480",
    status: "Available",
  },
  {
    period: "Q1 2025",
    supplier: "Cedarline Materials",
    amount: "$9,210",
    status: "Available",
  },
  {
    period: "Q4 2024",
    supplier: "Summit Tile Co.",
    amount: "$4,860",
    status: "Archived",
  },
];

export const purchasingReports = [
  {
    title: "YTD Purchasing Summary",
    detail: "Category + supplier rollup",
    updated: "Nov 1, 2025",
  },
  {
    title: "Hardwood vs Resilient Mix",
    detail: "Trailing 12 months",
    updated: "Oct 28, 2025",
  },
  {
    title: "Display Allowance Tracker",
    detail: "Claims & photo status",
    updated: "Oct 15, 2025",
  },
];

/* ── Admin ── */

export const adminMetrics = [
  { label: "Active Companies", value: "12", href: "/admin/members", delta: "+2 MoM" },
  { label: "Active Users", value: "34", href: "/admin/members", delta: "+5 MoM" },
  { label: "Pending Applications", value: "3", href: "/admin/members", delta: "Needs review" },
  { label: "Pending Invitations", value: "5", href: "/admin/members", delta: "2 expiring" },
  { label: "Published Offers", value: "8", href: "/admin/content", delta: "2 scheduled" },
  { label: "Access Events (7d)", value: "21", href: "/admin/audit", delta: "1 denied" },
];

export const adminQueue = [
  {
    title: "Summit Surfaces LLC — membership application",
    meta: "Residential · Submitted Nov 3",
    status: "Pending",
    href: "/admin/members",
  },
  {
    title: "Cedarline LVP Early-Buy — scheduled publish",
    meta: "Content · Goes live Nov 10",
    status: "Scheduled",
    href: "/admin/content",
  },
  {
    title: "5 invitations still unaccepted",
    meta: "Oldest invite: 11 days",
    status: "Invites",
    href: "/admin/members",
  },
  {
    title: "Reported post in Commercial group",
    meta: "Flagged by Morgan Ellis",
    status: "Moderation",
    href: "/admin/moderation",
  },
];

export const adminActivity = [
  {
    who: "Avery Brooks",
    what: "Approved invite for Park Tile Studio",
    when: "Today · 9:14 AM",
  },
  {
    who: "Jamie Cole",
    what: "Published Q4 Supplier Program Summary",
    when: "Yesterday · 4:02 PM",
  },
  {
    who: "System",
    what: "Denied financial access for alex.quinn@example.com",
    when: "Yesterday · 2:18 PM",
  },
  {
    who: "Avery Brooks",
    what: "Updated Homepage Statistics draft",
    when: "Nov 4 · 11:40 AM",
  },
];

export const memberCompanies = [
  {
    company: "Heritage Home Floors",
    type: "Residential",
    status: "Active",
    users: 3,
    region: "Southeast",
    joined: "Mar 2023",
    lastActive: "Today",
  },
  {
    company: "Apex Flooring Partners",
    type: "Commercial",
    status: "Active",
    users: 4,
    region: "Southeast",
    joined: "Jun 2022",
    lastActive: "Yesterday",
  },
  {
    company: "Summit Surfaces LLC",
    type: "Residential",
    status: "Pending",
    users: 1,
    region: "Midwest",
    joined: "—",
    lastActive: "Nov 3",
  },
  {
    company: "Rivera Design Floors",
    type: "Residential",
    status: "Active",
    users: 2,
    region: "Midwest",
    joined: "Jan 2024",
    lastActive: "2 days ago",
  },
  {
    company: "Quinn Surfaces Group",
    type: "Multi-family",
    status: "Active",
    users: 5,
    region: "Northeast",
    joined: "Sep 2021",
    lastActive: "Today",
  },
  {
    company: "Park Tile Studio",
    type: "Specialty",
    status: "Invited",
    users: 0,
    region: "West",
    joined: "—",
    lastActive: "—",
  },
];

export const applications = [
  {
    company: "Summit Surfaces LLC",
    contact: "Chris Summit",
    type: "Residential",
    submitted: "Nov 3, 2025",
    notes: "3 showrooms · Midwest",
  },
  {
    company: "Lakeview Floor Co.",
    contact: "Dana Shore",
    type: "Residential",
    submitted: "Nov 1, 2025",
    notes: "Referral from Heritage",
  },
  {
    company: "Metro Contract Surfaces",
    contact: "Evan Cole",
    type: "Commercial",
    submitted: "Oct 29, 2025",
    notes: "Requests financial access later",
  },
];

export const invitations = [
  { email: "ops@parktile.example", company: "Park Tile Studio", sent: "Oct 26", status: "Pending" },
  { email: "gm@brooksfloors.example", company: "Brooks & Co.", sent: "Oct 28", status: "Pending" },
  { email: "buyer@northline.example", company: "Northline Floors", sent: "Nov 1", status: "Pending" },
  { email: "owner@coastalsurfaces.example", company: "Coastal Surfaces", sent: "Nov 2", status: "Expiring" },
  { email: "team@atelierplank.example", company: "Atelier Plank", sent: "Nov 4", status: "Pending" },
];

export const contentAreas = [
  { name: "News", items: 14, status: "Published", updated: "Nov 3" },
  { name: "Events", items: 6, status: "Published", updated: "Oct 30" },
  { name: "Offers", items: 8, status: "2 drafts", updated: "Nov 5" },
  { name: "Suppliers", items: 11, status: "Published", updated: "Nov 1" },
  { name: "Documents", items: 28, status: "Published", updated: "Nov 1" },
  { name: "Courses", items: 9, status: "1 draft", updated: "Oct 22" },
  { name: "Homepage Statistics", items: 4, status: "Draft", updated: "Nov 4" },
  { name: "Testimonials", items: 7, status: "Published", updated: "Sep 18" },
];

export const scheduledContent = [
  { title: "LVP Early-Buy Incentive", type: "Offer", when: "Nov 10 · 9:00 AM" },
  { title: "December Member Newsletter", type: "News", when: "Dec 1 · 8:00 AM" },
  { title: "Summit Registration Open", type: "Event", when: "Dec 1 · 10:00 AM" },
];

export const moderationQueue = [
  {
    id: "RPT-1042",
    author: "Guest link share",
    group: "Commercial",
    reason: "Off-topic vendor solicitation",
    reporter: "Morgan Ellis",
    when: "Nov 5 · 11:20 AM",
    excerpt: "DM me for discounted install rates outside the Alliance network…",
  },
  {
    id: "RPT-1038",
    author: "Casey Rivera",
    group: "Residential",
    reason: "Duplicate post",
    reporter: "Alliance Staff",
    when: "Nov 4 · 3:45 PM",
    excerpt: "Reposted showroom lighting tip with same photos.",
  },
];

export const moderationHistory = [
  { id: "RPT-1021", action: "Removed", by: "Jamie Cole", when: "Oct 28" },
  { id: "RPT-1014", action: "Dismissed", by: "Avery Brooks", when: "Oct 12" },
  { id: "RPT-1009", action: "Warned author", by: "Jamie Cole", when: "Sep 30" },
];

export const auditLogs = [
  {
    user: "jordan.hale@example.com",
    company: "Heritage Home Floors",
    action: "Viewed rebate statement",
    outcome: "Allowed",
    time: "2025-11-05 14:22",
    ip: "198.51.100.24",
  },
  {
    user: "alex.quinn@example.com",
    company: "Quinn Surfaces Group",
    action: "Attempted financial access",
    outcome: "Denied",
    time: "2025-11-05 14:18",
    ip: "203.0.113.9",
  },
  {
    user: "admin@example-alliance.org",
    company: "Alliance Staff",
    action: "Assigned Financial Access",
    outcome: "Allowed",
    time: "2025-11-04 09:10",
    ip: "192.0.2.44",
  },
  {
    user: "riley.chen@example.com",
    company: "Heritage Home Floors",
    action: "Downloaded purchasing report",
    outcome: "Allowed",
    time: "2025-11-04 08:41",
    ip: "198.51.100.24",
  },
  {
    user: "sam.ortiz@example.com",
    company: "Heritage Home Floors",
    action: "Viewed account information",
    outcome: "Allowed",
    time: "2025-11-03 16:05",
    ip: "198.51.100.31",
  },
  {
    user: "morgan.ellis@example.com",
    company: "Apex Flooring Partners",
    action: "Opened rebate module",
    outcome: "Allowed",
    time: "2025-11-03 11:12",
    ip: "203.0.113.55",
  },
  {
    user: "guest.token@example.com",
    company: "—",
    action: "Session revoked after MFA timeout",
    outcome: "Denied",
    time: "2025-11-02 19:48",
    ip: "198.51.100.77",
  },
];
