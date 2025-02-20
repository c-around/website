import MasonryServiceSection from "@/components/sections/MasonryServiceSection";
import {SERVICE_IMAGES} from "@/settings";

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