import TourReferenceSection from "@/components/sections/TourReferenceSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | 360° Touren",
    description: "Erhalten Sie professionelle 360° Touren für Ihr Grundstück, Wohnung oder Haus",
}

const ServiceDonePage = () => {
    return (
        <TourReferenceSection
            title={"360° Touren"}
            description={"Erhalten Sie professionelle 360° Touren für Ihr Grundstück, Wohnung oder Haus"}
        />
    )
}

export default ServiceDonePage