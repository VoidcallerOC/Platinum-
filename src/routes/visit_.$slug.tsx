import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationDetail } from "@/components/location-detail";
import { locationById, type LocationId } from "@/lib/business";
import { pageTitle } from "@/lib/seo";

export const Route = createFileRoute("/visit_/$slug")({
  head: ({ params }) => {
    const loc = locationById(params.slug);
    return {
      meta: [
        { title: pageTitle(loc ? loc.city : "Location") },
        {
          name: "description",
          content: loc
            ? `${loc.name} at ${loc.addressLine}. ${loc.phone}. Hours, directions, and how to pawn or sell.`
            : "Platinum Pawn locations in Connecticut.",
        },
      ],
    };
  },
  component: VisitLocationPage,
});

function VisitLocationPage() {
  const { slug } = Route.useParams();
  const loc = locationById(slug);
  if (!loc) throw notFound();
  return (
    <main id="main" className="shell py-12 md:py-16">
      <LocationDetail id={loc.id as LocationId} />
    </main>
  );
}
