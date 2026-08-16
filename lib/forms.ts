// All three site forms (consultation request, institutional referral, general
// contact) submit to this single Formspree endpoint, which forwards every
// submission to kslcampus.org@gmail.com. Each form sends its own "_subject"
// field so submissions stay clearly labeled in the inbox even though they
// share one endpoint.
//
// To set this up:
// 1. Sign up free at https://formspree.io using kslcampus.org@gmail.com.
// 2. Create one form (any name, e.g. "KSLC Website").
// 3. Copy the endpoint ID (the part after /f/) and paste it below.
// See README.md for full setup steps.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgawlgoz";
