import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NEWSLETTERS } from "@/lib/settings/newsletters";
import { format } from "date-fns";
import { de } from "date-fns/locale/de";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

interface PageProps {
  params: Promise<{
    date: string;
  }>;
}

export async function generateStaticParams() {
  return NEWSLETTERS.map((newsletter) => ({
    date: format(newsletter.date, "yyyy-MM-dd"),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { date } = await params;
  const newsletter = NEWSLETTERS.find(
    (newsletter) => format(newsletter.date, "yyyy-MM-dd") === date
  );

  if (!newsletter) {
    return {
      title: "C AROUND | Newsletter nicht gefunden",
    };
  }

  return {
    title: `C AROUND | ${newsletter.name}`,
    description: `Newsletter vom ${format(newsletter.date, "d. MMMM yyyy", {
      locale: de,
    })}`,
  };
}

const Page = async ({ params }: PageProps) => {
  const { date } = await params;
  const newsletter = NEWSLETTERS.find(
    (newsletter) => format(newsletter.date, "yyyy-MM-dd") === date
  );

  if (!newsletter) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="mb-8">
        <Link href="/news">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Übersicht
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {newsletter.name}
        </h1>
        <p className="text-gray-400 text-lg">
          {format(newsletter.date, "d. MMMM yyyy", { locale: de })}
        </p>
      </div>

      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700/50 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              PDF herunterladen
            </h2>
            <p className="text-gray-400 text-sm">
              Laden Sie den Newsletter als PDF-Datei herunter.
            </p>
          </div>
          <a
            href={newsletter.pdfFile}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700">
              <Download className="mr-2 h-4 w-4" />
              PDF herunterladen
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700/50 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Newsletter anzeigen
        </h2>
        <div className="w-full h-[800px] border border-zinc-700/50 rounded-lg overflow-hidden">
          <iframe
            src={newsletter.pdfFile}
            className="w-full h-full"
            title={newsletter.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
