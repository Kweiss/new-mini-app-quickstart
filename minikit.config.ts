const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
    "accountAssociation": {
      "header": "eyJmaWQiOjk3NDksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4NmY5Q2Q2NGJDMEM2YjhlNWQyOEY0M0I3MzlFYTM1Mjc0YjAxZTQ0In0",
      "payload": "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1seWFydC1laWdodC52ZXJjZWwuYXBwIn0",
      "signature": "hb6eZX1J3XsUwzyMuagHW/WDmn4E/G1O2EYqmxRdH3oM4P1TBkOHO5+0S+O7CXMQft3T8hfvT150J+WxncS9rRs="
  },
  miniapp: {
    version: "1",
    name: "Dusk to Dawn", 
    subtitle: "from the darkness comes the light", 
    description: "First comes darkness, and when the light is most needed that comes Dawn",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
  baseBuilder: {
    ownerAddress: "0xf195cab7521F9b3c9Ae9c0b0E11eA2b0A5095A47"
  }
} as const;

