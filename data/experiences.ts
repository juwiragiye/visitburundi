export type Experience = { slug: string; name: string; description: string; icon: "culture"|"nature"|"lake"|"adventure"|"food"|"heritage"; destinations: string[] };
export const experiences: Experience[] = [
 {slug:"culture",name:"Culture, carried forward",description:"Make time for the people who keep traditions alive. Listen, ask, and let local voices lead the story.",icon:"culture",destinations:["gishora","gitega"]},
 {slug:"nature",name:"The green, the wild",description:"From forest canopy to river wetlands, approach the landscape with a guide and a patient eye.",icon:"nature",destinations:["kibira-national-park","ruvubu-national-park","rusizi-national-park"]},
 {slug:"lakes",name:"Life by the water",description:"Wide horizons on Tanganyika; a more intimate wetland landscape in the north. Two ways to slow the pace.",icon:"lake",destinations:["lake-tanganyika","lake-rwihinda"]},
 {slug:"adventure",name:"Beyond the everyday",description:"Waterfalls and highland viewpoints reward considered planning. Choose your path with current local guidance.",icon:"adventure",destinations:["karera-falls","nyakazu"]},
 {slug:"food",name:"A place at the table",description:"Ask what is being prepared today. Let meals become a conversation about ingredients, places, and everyday life.",icon:"food",destinations:["lake-tanganyika","gitega"]},
 {slug:"heritage",name:"Stories in the landscape",description:"Follow the connections between place, memory and living tradition, with context from local custodians.",icon:"heritage",destinations:["source-du-nil","gishora","gitega"]},
];
