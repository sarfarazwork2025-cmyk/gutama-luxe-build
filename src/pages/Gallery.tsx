import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

import galleryRoof1 from "@/assets/gallery-roof-1.jpg";
import galleryRoof2 from "@/assets/gallery-roof-2.jpg";
import galleryRoof3 from "@/assets/gallery-roof-3.jpg";
import gallerySiding1 from "@/assets/gallery-siding-1.jpg";
import galleryAddition1 from "@/assets/gallery-addition-1.jpg";
import galleryChimney1 from "@/assets/gallery-chimney-1.jpg";
import serviceReRoofing from "@/assets/service-re-roofing.jpg";
import serviceFlatRoof from "@/assets/service-flat-roof.jpg";
import serviceSiding from "@/assets/service-siding.jpg";
import serviceAdditions from "@/assets/service-additions.jpg";
import serviceChimney from "@/assets/service-chimney.jpg";
import serviceDormers from "@/assets/service-dormers.jpg";

const categories = ["All", "Roofing", "Siding", "Additions", "Chimney"];

const projects = [
  { title: "Complete Roof Replacement", category: "Roofing", desc: "Architectural shingle installation in West Orange", image: galleryRoof1 },
  { title: "Storm Damage Repair", category: "Roofing", desc: "Emergency roof repair after severe weather in Newark", image: serviceReRoofing },
  { title: "Flat Roof Installation", category: "Roofing", desc: "TPO membrane system for commercial building in Bloomfield", image: serviceFlatRoof },
  { title: "Slate Roof Restoration", category: "Roofing", desc: "Historic slate roof repair in South Orange", image: galleryRoof2 },
  { title: "James Hardie Siding", category: "Siding", desc: "Full siding replacement in Maplewood", image: gallerySiding1 },
  { title: "Vinyl Siding Upgrade", category: "Siding", desc: "Modern vinyl siding installation in Belleville", image: serviceSiding },
  { title: "Two-Story Addition", category: "Additions", desc: "Master suite addition in Livingston", image: galleryAddition1 },
  { title: "Sunroom Addition", category: "Additions", desc: "Four-season sunroom in Verona", image: serviceAdditions },
  { title: "Chimney Rebuild", category: "Chimney", desc: "Complete chimney rebuild from roofline in Nutley", image: galleryChimney1 },
  { title: "Chimney Waterproofing", category: "Chimney", desc: "Crown repair and waterproof coating in Caldwell", image: serviceChimney },
  { title: "Dormer Installation", category: "Roofing", desc: "Shed dormer for expanded attic space in Glen Ridge", image: galleryRoof3 },
  { title: "Gable Dormer Addition", category: "Roofing", desc: "Beautiful gable dormer with custom trim in Millburn", image: serviceDormers },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-background" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Our Work</h1>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Browse our portfolio of completed projects across Essex County.</p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title + active} delay={i * 60}>
                <div className="glass-card overflow-hidden break-inside-avoid group cursor-pointer hover:border-secondary/30 transition-all duration-500">
                  <div className={`relative overflow-hidden ${i % 3 === 0 ? "h-64" : i % 3 === 1 ? "h-48" : "h-56"}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 bg-secondary/90 text-secondary-foreground text-xs font-bold px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-foreground text-base font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
