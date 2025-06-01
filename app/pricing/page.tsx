"use client"

import {useState} from "react"
import {Calculator} from "lucide-react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Slider} from "@/components/ui/slider"
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {GLOBAL_DISCOUNT, PRICES} from "@/lib/settings/prices"
import {cn} from "@/lib/utils";

export default function PricingPage() {
    const [selectedService, setSelectedService] = useState(PRICES[0])
    const [amount, setAmount] = useState(selectedService.min)
    const [extras, setExtras] = useState<Record<string, boolean | number>>({})

    const handleServiceChange = (value: string) => {
        const service = PRICES.find((p) => p.name === value) || PRICES[0]
        setSelectedService(service)
        setAmount(service.min)
        setExtras({})
    }

    const handleAmountChange = (value: number[]) => {
        setAmount(value[0])
    }

    const handleExtraChange = (name: string, value: boolean | number) => {
        setExtras((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const calculateBasePrice = () => {
        return selectedService.price(amount, selectedService.unit_price)
    }

    const calculateNormalPrice = () => {
        return amount * selectedService.unit_price
    }

    const calculateProgressionDiscount = () => {
        return calculateNormalPrice() - calculateBasePrice()
    }

    const calculateExtrasPrice = () => {
        return selectedService?.extra?.reduce((total, extra) => {
            const value = extras[extra.name]
            if (extra.type === "bool" && value === true) {
                return total + extra.unit_price
            }
            if (extra.type === "number" && typeof value === "number" && value > 0) {
                return total + extra.unit_price * value
            }
            return total
        }, 0) || 0
    }

    const calculateTotalPrice = () => {
        const basePrice = calculateBasePrice()
        const extrasPrice = calculateExtrasPrice()
        const totalBeforeDiscount = basePrice + extrasPrice
        const discountAmount = totalBeforeDiscount * GLOBAL_DISCOUNT.percentage
        return totalBeforeDiscount - discountAmount
    }

    const handleRequestQuote = () => {
        // asseble a string with the quote details and open the email client
        const extrasList = Object.entries(extras)
            .filter(([_, value]) => value)
            .map(([name, value]) => `${name}: ${typeof value === "boolean" ? "Ja" : value} Stück`)
            .join(", ");
        const quoteDetails = `
        Service: ${selectedService.name}
        Anzahl: ${amount} ${selectedService.unit}
        Basispreis: ${calculateBasePrice().toFixed(2)} CHF
        Extras: ${extrasList || "Keine"}
        Gesamtpreis: ${calculateTotalPrice().toFixed(2)} CHF
        `;
        const mailtoLink = `mailto:sales@c-around.ch?subject=Anfrage%20zum%20Preis%20f%C3%BCr%20${selectedService.name}&body=${encodeURIComponent(quoteDetails)}`;
        window.open(mailtoLink, "_blank");
    }

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-screen">
            <div className="container mx-auto px-4 ">
                <h2 className="text-4xl font-bold mt-8 text-center mb-4">
                    Unsere <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400">Preise</span>
                </h2>

                <div
                    className="max-w-2xl mx-auto text-center mb-12 text-lg text-muted-foreground">
                    Unsere Preise sind individuell anpassbar und richten sich nach dem Aufwand und den
                    spezifischen Anforderungen Ihres Projekts. Wen die untenstehenden Preise ihr Projekt nicht
                    abdecken, kontaktieren Sie uns bitte für ein individuelles Angebot.
                </div>

                <div className="max-w-4xl mx-auto">
                    <Tabs defaultValue={PRICES[0].name} onValueChange={handleServiceChange} className="w-full">
                        <TabsList className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
                        mb-4 bg-zinc-800/50 rounded-md shadow-2xl backdrop-blur-sm border border-zinc-700/50
                        h-auto min-h-10 ">
                            {PRICES.map((service, idx) => {
                                const Icon = service.icon;
                                return (
                                    <TabsTrigger key={idx} value={service.name}
                                                 className="flex items-center gap-2 data-[state=active]:text-sky-300">
                                        {Icon && <Icon className="w-5 h-5"/>}
                                        <span>{service.name}</span>
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>

                        {PRICES.map((service) => (
                            <TabsContent key={service.name} value={service.name} className="space-y-8">
                                <Card
                                    className={"bg-zinc-800/50 p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-zinc-700/50"}>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{service.name}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6 ">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <Label>Anzahl {service.unit} ({amount})</Label>
                                                <span className="text-sm text-muted-foreground">
                                              {service.min} - {service.max}
                                            </span>
                                            </div>
                                            <Slider
                                                value={[amount]}
                                                min={service.min}
                                                max={service.max}
                                                step={service.step}
                                                onValueChange={handleAmountChange}
                                                className="py-4"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-medium mb-3">Inklusivleistungen:</h4>
                                            <ul className="space-y-2">
                                                {service.includes.map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <div className="h-2 w-2 rounded-full bg-sky-400"/>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {(service.extra?.length || 0) > 0 && (
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-medium">Extras:</h4>
                                                <div className="grid gap-4">
                                                    {service.extra?.map((extra) => (
                                                        <div key={extra.name}
                                                             className="flex flex-col gap-2 border-t pt-4">
                                                            <div className="flex justify-between">
                                                                <div className="flex flex-col">
                                                                    <span className="font-medium">{extra.name} <Badge
                                                                        variant="outline">{extra.time_range}</Badge></span>
                                                                    <span
                                                                        className="text-sm text-muted-foreground">{extra.description}</span>
                                                                </div>

                                                            </div>

                                                            <div className="flex items-center justify-between mt-2">
                                                            <span className="text-sm">
                                                              {extra.unit_price} CHF {extra.type === "number" ? "pro Einheit" : ""}
                                                            </span>

                                                                {extra.type === "bool" ? (
                                                                    <Checkbox
                                                                        checked={!!extras[extra.name]}
                                                                        onCheckedChange={(checked) => handleExtraChange(extra.name, !!checked)}
                                                                    />
                                                                ) : (
                                                                    <Input
                                                                        type="number"
                                                                        min={0}
                                                                        className="w-20 text-right"
                                                                        value={(extras[extra.name] as number) || 0}
                                                                        onChange={(e) =>
                                                                            handleExtraChange(extra.name, Number.parseInt(e.target.value) || 0)
                                                                        }
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="flex-col items-start gap-4 border-t pt-6">
                                        <div className="w-full space-y-2">

                                            {
                                                calculateProgressionDiscount() > 0 && (
                                                    <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>
                                              Normalpreis ({amount} × {selectedService.unit_price} CHF):
                                            </span>
                                                        <span>
                                              {calculateNormalPrice().toFixed(2)} CHF
                                            </span>
                                                    </div>
                                                )
                                            }
                                            {
                                                calculateProgressionDiscount() > 0 && (
                                                    <div className="flex justify-between text-sm text-red-400">
                                                        <span>Mengenrabatt:</span>
                                                        <span>
                                                            -{calculateProgressionDiscount().toFixed(2)} CHF
                                                        </span>
                                                    </div>
                                                )
                                            }
                                            <div className={cn("flex justify-between text-sm", {
                                                " border-t pt-2": calculateProgressionDiscount() > 0
                                            })}>
                                                <span>Basispreis:</span>
                                                <span>
                                              {calculateBasePrice().toFixed(2)} CHF
                                            </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Extras:</span>
                                                <span>
                                                  {calculateExtrasPrice().toFixed(2)} CHF
                                                </span>
                                            </div>
                                            {
                                                GLOBAL_DISCOUNT.percentage > 0 && (
                                                    <div className="flex justify-between text-sm text-red-400">
                                                        <span>{GLOBAL_DISCOUNT.description}:</span>
                                                        <span>
                                                  -{((calculateBasePrice() + calculateExtrasPrice()) * GLOBAL_DISCOUNT.percentage).toFixed(2)}{" "}
                                                            CHF
                                                </span>
                                                    </div>
                                                )
                                            }
                                            <div className="flex justify-between font-bold text-lg pt-2 border-t">
                                                <span>Gesamtpreis:</span>
                                                <span className="text-sky-300">
                                              {calculateTotalPrice().toFixed(2)} CHF
                                            </span>
                                            </div>
                                            {calculateProgressionDiscount() > 0 && (
                                                <div
                                                    className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                                                    <div className="flex justify-between items-center">
                                                        <span
                                                            className="text-sm text-green-400 font-medium">Gesamtersparnis:</span>
                                                        <span className="text-green-400 font-bold">
                                                      {(
                                                          calculateProgressionDiscount() +
                                                          (calculateBasePrice() + calculateExtrasPrice()) * GLOBAL_DISCOUNT.percentage
                                                      ).toFixed(2)}{" "}
                                                            CHF
                                                    </span>
                                                    </div>
                                                    <p className="text-xs text-green-300 mt-1">
                                                        Durch Mengenrabatt
                                                        {calculateProgressionDiscount() > 0 ? ` und ${GLOBAL_DISCOUNT.description}` : ""}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <Button
                                            onClick={handleRequestQuote}
                                            className="w-full bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700">
                                            <Calculator className="mr-2 h-4 w-4"/>
                                            Angebot anfordern
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div>
                <p className="text-center text-sm text-muted-foreground mt-8">
                    Alle Preise verstehen sich zzgl. MwSt. und sind unverbindlich. Die tatsächlichen Kosten können je
                    nach
                    Objekt und Aufwand variieren.
                </p>
            </div>
        </section>
    )
}