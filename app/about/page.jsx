import pageData from "@/data/pages/about.json";
import RenderBlock from "@/components/RenderBlock";

export default function Page(){ return <main>{pageData.components?.map((b,i)=>(<RenderBlock key={i} block={b}/>))}</main>; }