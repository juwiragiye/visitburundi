import { images, type ImageKey } from "@/lib/images";
export type Destination = {
  slug: string;
  name: string;
  region: string;
  category: string;
  summary: string;
  description: string[];
  bestSeason: string;
  seasonNote: string;
  highlights: string[];
  thingsToDo: string[];
  practicalNotes: string[];
  imageKey: ImageKey;
  image: string;
  gallery: string[];
  mapPoint: { x: number; y: number };
};
// Phase 2: replace this typed local collection with a reviewed CMS adapter.
const records: Omit<Destination, "image" | "gallery">[] = [
  {
    slug: "lake-tanganyika",
    name: "Lake Tanganyika",
    region: "Western lakeshore",
    category: "Lakes & beaches",
    summary: "Slow days at the water’s edge.",
    description: [
      "Bujumbura meets Lake Tanganyika along Burundi’s western edge. The shoreline is a natural place to pause between city life and a wider journey through the country.",
      "Make room for an unhurried afternoon: a lakeside meal, changing light on the water, and time to take in the horizon. Beach access and water activities depend on the site; ask locally before making plans.",
    ],
    bestSeason: "Year-round planning",
    seasonNote:
      "Plan around current local conditions and access arrangements; this is not a guarantee of year-round availability.",
    highlights: [
      "Bujumbura’s lakeshore",
      "Wide lake horizons",
      "Lakeside food culture",
    ],
    thingsToDo: [
      "Walk at an established lakeside venue",
      "Ask about locally prepared lake fish",
      "Stay for the changing evening light",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "lake",
    mapPoint: {
      x: 27,
      y: 48,
    },
  },
  {
    slug: "kibira-national-park",
    name: "Kibira National Park",
    region: "Northern highlands",
    category: "Nature & wildlife",
    summary: "Into the green of the highland forest.",
    description: [
      "Kibira protects montane forest along the Congo–Nile divide. This is a different Burundi: elevated, wooded, and far from the pace of the lakeshore.",
      "A forest visit is best approached with patience and a knowledgeable guide. Listen before looking, leave space for the forest’s own rhythms, and treat any wildlife encounter as a possibility rather than a promise.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Montane forest",
      "Highland landscapes",
      "Forest biodiversity",
    ],
    thingsToDo: [
      "Ask a qualified guide about permitted walks",
      "Listen for birds along approved trails",
      "Learn about forest conservation",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "forest",
    mapPoint: {
      x: 39,
      y: 23,
    },
  },
  {
    slug: "ruvubu-national-park",
    name: "Ruvubu National Park",
    region: "Eastern landscapes",
    category: "Nature & wildlife",
    summary: "River country, with room to breathe.",
    description: [
      "Ruvubu National Park protects a landscape of river, grassland and woodland in eastern Burundi. It invites a slower, more carefully prepared journey beyond the urban centres.",
      "Build your visit around local guidance and current access information. Spend time observing the landscape rather than expecting a fixed list of wildlife sightings; conditions and opportunities vary.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Ruvubu River landscape",
      "Grassland and woodland",
      "Birdwatching possibilities",
    ],
    thingsToDo: [
      "Plan an authorized guided visit",
      "Observe wildlife from a safe distance",
      "Learn about river habitats",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "savanna",
    mapPoint: {
      x: 72,
      y: 35,
    },
  },
  {
    slug: "source-du-nil",
    name: "Source du Nil at Rutovu",
    region: "Southern highlands",
    category: "Heritage",
    summary: "A small spring. A much larger story.",
    description: [
      "The Rutovu area is associated with Gasumo, a southern source within the Nile river system. The source and its monument connect a modest highland setting to a continent-spanning geography.",
      "Visit with curiosity about how rivers are named, mapped and remembered. The site is one chapter in the Nile’s complex source story, not a claim that a single monument explains the entire river.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Gasumo source site",
      "Nile-system geography",
      "Highland setting",
    ],
    thingsToDo: [
      "Visit the source monument when access is confirmed",
      "Ask a local guide about the watershed",
      "Combine the stop with a measured highland journey",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "hills",
    mapPoint: {
      x: 47,
      y: 72,
    },
  },
  {
    slug: "gitega",
    name: "Gitega",
    region: "Central highlands",
    category: "Culture",
    summary: "A capital with memory in its streets.",
    description: [
      "Gitega is Burundi’s political capital, set in the central highlands. It is a starting point for engaging with the country’s history and with cultural sites in the surrounding area.",
      "Leave enough space in the day for conversation and context. A museum or heritage visit becomes more meaningful when local interpretation leads the experience; confirm access and opening arrangements ahead.",
    ],
    bestSeason: "Year-round planning",
    seasonNote:
      "Plan around current local conditions and access arrangements; this is not a guarantee of year-round availability.",
    highlights: [
      "Political capital",
      "National Museum context",
      "Central highland setting",
    ],
    thingsToDo: [
      "Ask about visiting the National Museum",
      "Explore the city with local guidance",
      "Plan a separate visit to nearby Gishora",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "heritage",
    mapPoint: {
      x: 57,
      y: 48,
    },
  },
  {
    slug: "karera-falls",
    name: "Karera Falls",
    region: "Southern highlands",
    category: "Adventure",
    summary: "Follow the sound of falling water.",
    description: [
      "Karera’s waterfalls are among Burundi’s recognized natural sites. Water, rock and vegetation shape a landscape that rewards attention to the details as much as the wider view.",
      "Plan a guided visit suited to the conditions. Paths and viewpoints may be wet or uneven; seeing the falls should never mean stepping beyond safe, authorized access.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Waterfall scenery",
      "Rock and vegetation",
      "A southern nature stop",
    ],
    thingsToDo: [
      "Use approved paths to the viewpoints",
      "Photograph the falls from a safe distance",
      "Ask about local landscape interpretation",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "falls",
    mapPoint: {
      x: 70,
      y: 69,
    },
  },
  {
    slug: "rusizi-national-park",
    name: "Rusizi River National Park",
    region: "Western lakeshore",
    category: "Nature & wildlife",
    summary: "Where the river meets the lake.",
    description: [
      "The Rusizi landscape near Bujumbura brings river and wetland habitats close to the lakeshore. The delta is associated with birdlife and large aquatic wildlife.",
      "Enjoy it with an experienced guide and respect the space that wildlife needs. A quiet observation stop can be rewarding without approaching the riverbank or assuming that boat trips are available.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "River-delta habitat",
      "Wetland birdlife",
      "Close to Bujumbura",
    ],
    thingsToDo: [
      "Arrange a permitted guided visit",
      "Watch birds from designated areas",
      "Learn about river and lake ecology",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "wetland",
    mapPoint: {
      x: 22,
      y: 39,
    },
  },
  {
    slug: "gishora",
    name: "Royal drummers of Gishora",
    region: "Central highlands",
    category: "Culture",
    summary: "Rhythm held across generations.",
    description: [
      "Gishora is a royal heritage site associated with Burundi’s drum tradition. The place and its custodians offer an important context for understanding the cultural meaning of the drums.",
      "Approach a visit as an exchange rather than a spectacle. Performances require prior arrangement; ask permission before recording and allow the custodians to explain the traditions in their own terms.",
    ],
    bestSeason: "Year-round planning",
    seasonNote:
      "Plan around current local conditions and access arrangements; this is not a guarantee of year-round availability.",
    highlights: [
      "Royal heritage",
      "Drum traditions",
      "Living cultural knowledge",
    ],
    thingsToDo: [
      "Arrange a visit with the site’s custodians",
      "Learn the context of the royal drums",
      "Ask permission before photography or recording",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "drums",
    mapPoint: {
      x: 58,
      y: 40,
    },
  },
  {
    slug: "nyakazu",
    name: "Nyakazu Fault",
    region: "Southern highlands",
    category: "Adventure",
    summary: "A dramatic cut in the highlands.",
    description: [
      "Nyakazu is a striking escarpment and geological landscape in southern Burundi. Its steep terrain gives a different perspective on the country’s highland scenery.",
      "The appeal here is the shape of the land itself. Choose authorized viewpoints with a guide and keep well back from exposed edges; route and weather checks belong at the beginning of the plan.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Escarpment scenery",
      "Geological interest",
      "Southern highland views",
    ],
    thingsToDo: [
      "Visit an approved viewpoint",
      "Explore the landscape’s history with a guide",
      "Pair with Karera only after checking the route",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "canyon",
    mapPoint: {
      x: 77,
      y: 76,
    },
  },
  {
    slug: "lake-rwihinda",
    name: "Lake Rwihinda",
    region: "Northern lakes",
    category: "Lakes & beaches",
    summary: "A quieter kind of lakeside journey.",
    description: [
      "Lake Rwihinda is part of Burundi’s northern lake landscapes, near Kirundo. The wetland setting offers a contrast to the broad shores of Lake Tanganyika.",
      "Come with an interest in the small details: reeds, reflections and the movement of birds. Ask locally about permitted access and conservation practices before planning activities on or beside the water.",
    ],
    bestSeason: "Dry season",
    seasonNote:
      "Dry periods can make some outdoor journeys easier, but weather, access and local advice take priority. Confirm conditions before setting out.",
    highlights: [
      "Northern lake scenery",
      "Wetland habitats",
      "Birdwatching interest",
    ],
    thingsToDo: [
      "Arrange a locally guided observation visit",
      "Keep a respectful distance from birds",
      "Ask about wetland conservation",
    ],
    practicalNotes: [
      "Confirm current access, guiding arrangements and any permits with the site or a qualified local operator.",
      "Check official travel advice before planning this stop. Some regions and parks may be subject to restrictions.",
      "No admission prices, opening hours or transport times are confirmed in this preview.",
    ],
    imageKey: "wetland",
    mapPoint: {
      x: 61,
      y: 15,
    },
  },
];
export const destinations: Destination[] = records.map((item) => ({
  ...item,
  image: images[item.imageKey],
  gallery: [images[item.imageKey], images.hills],
}));
export const findDestination = (slug: string) =>
  destinations.find((item) => item.slug === slug);
