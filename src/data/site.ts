export const siteConfig = {
  name: "Launch Labs",
  legalName: "Launch Labs LLC",
  url: "https://launchlabstx.com",
  locale: "en_US",

  description:
    "A private, Trackman-powered indoor golf studio in Garland, TX built for focused practice, digital access, and performance.",

  phone: "(469) 699-4340",
  email: "hello@launchlabstx.com",

  address: {
    street: "565 W Oates Rd #100",
    city: "Garland",
    state: "TX",
    zip: "75043",
    country: "US",
    streetAddress: "565 W Oates Rd #100",
    addressLocality: "Garland",
    addressRegion: "TX",
    postalCode: "75043",
    addressCountry: "US",
  },

  hours: "Open 24/7 for members",

  bookingUrl:
    "https://yourgolfbooking.com/venues/launch-labs-garland/memberships",
  defaultOgImage: "/opengraph-image",

  waiverCheckboxText:
    "I have read and agree to the Launch Labs Liability Waiver, Release, and Assumption of Risk Agreement. I understand that Launch Labs may be a self-service facility without staff present, and I agree that this waiver releases claims, including claims arising from the ordinary negligence of Launch Labs and the Released Parties.",
  waiverUrl: "/liability-waiver/",
  termsUrl: "/terms-of-service/",
  privacyUrl: "/privacy-policy/",
  termsCheckboxText:
    "I have read and agree to the Launch Labs Terms of Service, Privacy Policy, and Liability Waiver. I understand that Launch Labs may be a self-service facility without staff present, and I accept responsibility for my conduct, my guests, and any damage caused by me or my guests.",
  privacyCheckboxText:
    "By booking, creating an account, purchasing a membership, or entering Launch Labs, I acknowledge the Launch Labs Privacy Policy and agree to the Terms of Service and Liability Waiver. I understand Launch Labs may use booking records, access logs, payment records, SMS/email communications, and facility cameras to operate, secure, and support the self-service studio.",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=565%20W%20Oates%20Rd%20%23100%20Garland%20TX%2075043",

  instagramUrl: "https://www.instagram.com/launchlabs_tx/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61584262288990",
  social: {
    instagram: "https://www.instagram.com/launchlabs_tx/",
    facebook: "https://www.facebook.com/profile.php?id=61584262288990",
  },

  primaryCta: "Reserve Your Bay",
  secondaryCta: "See Memberships",
};

export const serviceAreas = [
  "Garland",
  "Rowlett",
  "Sachse",
  "Firewheel",
  "East Richardson",
  "Mesquite",
  "East DFW",
] as const;
