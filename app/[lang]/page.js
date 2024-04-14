import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries/disctionaries";

export default async function Home({params:{lang}}) {
  const dictionary=await getDictionary(lang)

  const response=await fetch(`${process.env.BASE_API_URL}/photos`);

  const photos=await response.json();
  return (
    <PhotoList photos={photos}/>
  );
}
