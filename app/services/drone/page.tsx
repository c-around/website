import MasonryServiceSection from "@/components/sections/MasonryServiceSection";
import {SERVICE_IMAGES} from "@/settings";

const ServiceDonePage = () => {
    return (
        <MasonryServiceSection
            title={"Dronen Fotografie"}
            description={"Erhalten Sie einen neuen Blick auf Ihr Grundstück mit unseren professionellen Drohnenfotografie-Dienst"}
            images={SERVICE_IMAGES.drone}
        />
    )
}

export default ServiceDonePage