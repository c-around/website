"use client"

import {Label} from "@/components/ui/label"; // Importing Label from shadcn
import {Input} from "@/components/ui/input"; // Importing Input from shadcn
import {Textarea} from "@/components/ui/textarea"; // Importing Textarea from shadcn
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {sendContactMail} from "@/lib/mail";
import {redirect} from "next/navigation";
import {useState} from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [referral, setReferral] = useState("");
    const [referralPerson, setReferralPerson] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function validateInput() {
        if (!name || !email || !message) {
            alert("Bitte füllen Sie alle Pflichtfelder aus.");
            return false;
        }
        if (referral === "Person" && !referralPerson) {
            alert("Bitte geben Sie den Namen der Person an.");
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        if (!validateInput()) {
            return;
        }

        let mailtoLink = `mailto:info@c-around.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nReferral: ${referral}`)}`;
        if (referral === "Person") {
            mailtoLink += `\nReferral Person: ${referralPerson}`;
        }
        mailtoLink += `\n\nMessage: ${message}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <div
                    className="max-w-2xl mx-auto bg-zinc-800/50 p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-zinc-700/50">
                    {/*{*/}
                    {/*    success === 'true' && (*/}
                    {/*        <div className="bg-sky-400 text-zinc-900 p-4 rounded-md mb-8">*/}
                    {/*            Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen*/}
                    {/*            melden.*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-8 text-center">
                        Kontaktformular
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8 text-center">
                        Bereits ein Konto bei uns? <br/>
                        Dann können Sie Ihre Bestellung direkt über das
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
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPhone(e.target.value)}
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
                                onChange={(e) => setSubject(e.target.value)}
                                name="subject"
                                placeholder="Anfrage Drohnenfotografie"
                            />
                        </div>

                        {/* Message */}
                        <div className="grid gap-2 md:col-span-2">
                            <Label htmlFor="message">Ihre Nachricht *</Label>
                            <Textarea
                                id="message"
                                onChange={(e) => setMessage(e.target.value)}
                                name="message"
                                placeholder="Guten Tag, ich bin an einer Drohnenfotografie für mein Haus interessiert..."
                                required
                            />
                        </div>

                        {/* How did you hear about us */}
                        <div className="grid gap-2 md:col-span-2">
                            <Label htmlFor="referral">Wie sind Sie auf uns aufmerksam geworden? *</Label>
                            <Select name="referral" onValueChange={(value) => setReferral(value)} required>
                                <SelectTrigger className="bg-zinc-800 text-zinc-300 p-2 rounded-md">
                                    <SelectValue placeholder="Bitte auswählen" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Google">Google</SelectItem>
                                    <SelectItem value="Social Media">Social Media</SelectItem>
                                    <SelectItem value="Person">Person</SelectItem>
                                    <SelectItem value="Other">Sonstiges</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Person Name */}
                        {
                            referral === "Person" &&
                            <div id="referral-person-field" className="grid gap-2 md:col-span-2">
                                <Label htmlFor="referral-person">Name der Person *</Label>
                                <Input
                                    type="text"
                                    id="referral-person"
                                    name="referral-person"
                                    placeholder="Vor- und Nachname"
                                    onChange={(e) => setReferralPerson(e.target.value)}
                                    required
                                />
                            </div>
                        }

                        {/* Hidden Person Name */}
                        {
                            referral !== "Person" &&
                        <div id="referral-person-field" className="grid gap-2 md:col-span-2 hidden">
                            <Label htmlFor="referral-person">Name der Person *</Label>
                            <Input
                                type="text"
                                id="referral-person"
                                name="referral-person"
                                placeholder="Vor- und Nachname"
                                onChange={(e) => setReferralPerson(e.target.value)}
                            />
                        </div>
                        }

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
