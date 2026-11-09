export type ItineraryStop = { slug: string; day: number };
export type SampleItinerary = { id: string; title: string; days: number; description: string; imageKey: "lake"|"drums"|"falls"; stops: ItineraryStop[] };
export const sampleItineraries: SampleItinerary[] = [
 {id:"lakeside",title:"Bujumbura & the lakeshore",days:3,description:"Leave room for lakeside pauses and a separately arranged wetland visit.",imageKey:"lake",stops:[{slug:"lake-tanganyika",day:1},{slug:"rusizi-national-park",day:2},{slug:"lake-tanganyika",day:3}]},
 {id:"living-culture",title:"A journey through living culture",days:4,description:"An unhurried outline linking Gitega, royal drum heritage and the highlands.",imageKey:"drums",stops:[{slug:"gitega",day:1},{slug:"gishora",day:2},{slug:"gitega",day:3},{slug:"source-du-nil",day:4}]},
 {id:"southern-landscapes",title:"Waterfalls & southern horizons",days:5,description:"A starting point for a locally reviewed journey between lake, hills and escarpments.",imageKey:"falls",stops:[{slug:"lake-tanganyika",day:1},{slug:"source-du-nil",day:2},{slug:"karera-falls",day:3},{slug:"nyakazu",day:4},{slug:"gitega",day:5}]},
];
