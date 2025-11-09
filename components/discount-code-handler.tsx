"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export const DiscountCodeHandler = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get("code");
        const service = searchParams.get("service");
        
        if (code) {
            localStorage.setItem("discount_code", code);
        }
        
        if (service) {
            localStorage.setItem("selected_service", service);
        }
    }, [searchParams]);

    return null;
};
