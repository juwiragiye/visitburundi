// Phase 2: set the approved public origin and localized metadata at launch.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
export const siteName = "VisitBurundi";
export const verifyNote = "Verify with official sources before you travel";
