import { Metadata } from "next";
import Link from "next/link";
import { NEWSLETTERS } from "@/lib/settings/newsletters";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { format } from "date-fns";
import { de } from "date-fns/locale/de";

export const metadata: Metadata = {
  title: "C AROUND | Newsletter",
  description: "Übersicht unserer Newsletter",
};

const Page = () => {
  const sortedNewsletters = [...NEWSLETTERS].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unsere{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-400">
            Newsletter
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Bleiben Sie auf dem Laufenden mit unseren neuesten Updates, Tipps und
          Neuigkeiten.
        </p>
      </div>

      {sortedNewsletters.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            Aktuell sind keine Newsletter verfügbar.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedNewsletters.map((newsletter) => {
            return (
              <Link
                key={format(newsletter.date, "yyyy-MM-dd")}
                href={`/news/${format(newsletter.date, "yyyy-MM-dd")}`}
              >
                <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700/50 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                      {newsletter.name}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {format(newsletter.date, "d. MMMM yyyy", { locale: de })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 text-sm">
                      Klicken Sie hier, um den Newsletter anzuzeigen.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Page;
