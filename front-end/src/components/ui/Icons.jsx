import {
  Moon,
  SunMedium,
  Wallet,
  User,
  ShoppingCart,
  Users
} from "lucide-react"


const Icons = {
  sun: SunMedium,
  moon: Moon,
  logout: (props) => (
    <svg width="22" height="22" fill="none" viewBox="0 0 22 22" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.667 21H3.222A2.222 2.222 0 0 1 1 18.778V3.222A2.222 2.222 0 0 1 3.222 1h4.445M15.444 16.555 21 11l-5.556-5.556M21 11H7.666"/>
    </svg>
  ),
  dashboard: (props) => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" {...props}>
      <path d="M8.77778 1H1V8.77778H8.77778V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.77778 14H1V21.7778H8.77778V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.9995 1H13.2217V8.77778H20.9995V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.9995 14H13.2217V21.7778H20.9995V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  product: (props) => (
    <svg width="23" height="22" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.448 8.37 7.482 3.2M20.93 14.944v-7.97a1.991 1.991 0 0 0-.996-1.723l-6.973-3.984a1.992 1.992 0 0 0-1.992 0L3.996 5.25A1.992 1.992 0 0 0 3 6.975v7.969a1.992 1.992 0 0 0 .996 1.723l6.973 3.984a1.993 1.993 0 0 0 1.992 0l6.973-3.984a1.991 1.991 0 0 0 .996-1.723Z"/>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.268 5.938 8.696 5.03 8.696-5.03M11.965 21V10.959"/>
    </svg>
  ),
  category: (props) => (
    <svg width="23" height="22" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 1 1 6l10 5 10-5-10-5ZM1 16l10 5 10-5M1 11l10 5 10-5"/>
    </svg>
  ),
  stack: (props) => (
    <svg width="23" height="22" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 1H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM19 13H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM5 5h.01M5 17h.01"/>
    </svg>
  ),
  wallet: Wallet,
  users: Users,
  user: User,
  settings: (props) => (
    <svg width="22" height="22" fill="none" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 13.727a2.727 2.727 0 1 0 0-5.455 2.727 2.727 0 0 0 0 5.455Z"/>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.727 13.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.635 0V19.1a1.5 1.5 0 0 0-.982-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.635H2.9a1.5 1.5 0 0 0 1.373-.982 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 6.491 3.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V2.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H19.1a1.499 1.499 0 0 0-1.373.91Z"/>
    </svg>
  ),
  add: (props) => (
    <svg width="20" height="20" fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 10h16M10 2v16"/>
  </svg>
  ),
  close: (props) => (
    <svg width="23" height="20" fill="none" {...props}>
    <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M11 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 7-6 6M14 13 8 7"/>
  </svg>
  ),
  cross: (props) => (
    <svg width="20" height="20" fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.343 15.656 15.657 4.343M4.343 4.344l11.314 11.314"/>
  </svg>
  ),
  cart: ShoppingCart
}

export default Icons