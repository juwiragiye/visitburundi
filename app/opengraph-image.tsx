import { ImageResponse } from "next/og";
export const alt = "VisitBurundi — A different rhythm. A deeper journey. Stakeholder preview.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraph() { return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",background:"#173e32",color:"#faf7f0",padding:70}}><div style={{display:"flex",fontSize:30}}>VisitBurundi · Preview edition</div><div style={{display:"flex",fontSize:86,fontFamily:"serif",maxWidth:1000}}>A different rhythm. A deeper journey.</div><div style={{display:"flex",fontSize:24,color:"#dce5d8"}}>Lake shores. Living traditions. Highland horizons.</div></div>,size); }
