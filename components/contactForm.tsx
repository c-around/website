import {Label} from "@/components/ui/label"; // Importing Label from shadcn
import {Input} from "@/components/ui/input"; // Importing Input from shadcn
import {Textarea} from "@/components/ui/textarea"; // Importing Textarea from shadcn
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {sendContactMail} from "@/lib/mail";
import {redirect} from "next/navigation";

export default async function ContactForm(props: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams;
    const handleSubmit = async (formData: FormData) => {
        "use server";
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;
        await sendContactMail(name, email, phone, subject, message);
        redirect("/contact/?success=true");
    };

    console.log(searchParams)

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <div
                    className="max-w-2xl mx-auto bg-zinc-800/50 p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-zinc-700/50">
                    {
                        searchParams?.success === 'true' && (
                            <div className="bg-sky-400 text-zinc-900 p-4 rounded-md mb-8">
                                Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen
                                melden.
                            </div>
                        )
                    }
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-8 text-center">
                        Kontaktformular
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8 text-center">
                        Bereits ein Konto bei uns? <br/>
                        Dann können Sie Ihre beshellung direkt über das
                        <Link href={"https://portal.c-around.ch/account/orders/new"}
                              className="text-sky-300 hover:underline">
                            {" "}
                            Kundenportal
                        </Link>{" "}
                        machen.
                    </p>

                    <form action={handleSubmit}
                          className="gap-y-10 gap-x-4 grid md:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Ihr Name / Firma *</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="C AROUND"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Ihre E-Mail-Adresse *</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="info@c-around.ch"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Telefon (optional)</Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+41 79 123 45 67"
                            />
                        </div>

                        {/* Subject */}
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Betreff</Label>
                            <Input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Anfrage Drohnenfotografie"
                            />
                        </div>

                        {/* Message */}
                        <div className="grid gap-2 md:col-span-2">
                            <Label htmlFor="message">Ihre Nachricht *</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Guten Tag, ich bin an einer Drohnenfotografie für mein Haus interessiert..."
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300 md:col-span-2"
                        >
                            Nachricht Senden
                        </Button>
                        <p className={
                            "text-center text-zinc-300 text-sm md:col-span-2"
                        }>
                            Wir werden uns so schnell wie möglich bei Ihnen melden.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
