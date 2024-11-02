import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryCard from "@/components/gallery/GalleryCard";
import { CompHand, GuitarHand } from "@/assets/images";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Gallery = () => {
  const galleryItems = [
    {
      id: "114512353",
      avatar: CompHand,
      type: "gallery",
    },
    {
      id: "7823287",
      avatar: GuitarHand,
      type: "exhibition",
      date: "2024-10-13T10:10:10",
    },
  ];

  return (
    <main>
      <Tabs defaultValue="assets">
        <TabsList className="w-full *:flex-grow sticky top-0 p-0 z-[20]">
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="auction">Auction</TabsTrigger>
        </TabsList>
        <TabsContent value="assets" className="px-2  flex flex-col gap-4">
          <div className="flex items-center border p-2">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              type="search"
              placeholder="Search gallery"
              className="flex h-8 w-full rounded-md bg-transparent border-0 p-0 text-sm outline-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            {[...galleryItems, ...galleryItems, ...galleryItems].map((item) => (
              <GalleryCard
                key={item.id}
                id={item.id}
                avatar={item.avatar}
                type={item.type}
                date={item.date}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="auction" className="px-2">
          {/* <time className="text-right font-montserrat text-lg">
            <Countdown startDateTime={auctionElapsedTime} />
          </time> */}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Gallery;
