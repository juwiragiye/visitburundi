// Phase 2: set the approved public origin and localized metadata at launch.
const deploymentHost =
  process.env.VERCEL_ENV === "production"
    ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL)
    : (process.env.VERCEL_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL);
export const siteUrl = deploymentHost
  ? `https://${deploymentHost}`
  : "http://localhost:3000";
export const siteName = "VisitBurundi";
export const verifyNote = "Verify with official sources before you travel";
