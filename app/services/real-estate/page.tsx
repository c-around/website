import MasonryServiceSection from "@/components/sections/MasonryServiceSection";
import {SERVICE_IMAGES} from "@/lib/settings/services";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | Immobilien Fotografie",
    description: "Erhalten Sie professionelle Immobilienfotografie für Ihr Grundstück, Wohnung oder Haus",
}

const ServicePropertyPage = () => {
    return (
        <MasonryServiceSection
            title={"Immobilien Fotografie"}
            description={"Erhalten Sie professionelle Immobilienfotografie für Ihr Grundstück, Wohnung oder Haus"}
            images={SERVICE_IMAGES.realEstate}
        />
    )
}

export default ServicePropertyPage