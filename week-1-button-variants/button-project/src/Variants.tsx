import React from 'react';

interface VariantProps {
    name?: string;
    variant?: "primary" | "secondary" | "default";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

function Variants({ name = "Button", variant = "default", size = "md", disabled = false }: VariantProps) {  
    return (
        <>
            <button className={`px-4 py-2 rounded ${variant === "primary" ? "bg-blue-500 text-white" :
                    variant === "secondary" ? "bg-gray-500 text-white" :
                        "border border-gray-500 text-gray-500"
                } ${size === "sm" ? "text-sm" :
                    size === "lg" ? "text-lg" :
                        "text-md"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}   
            `}
                disabled={disabled}
            >
                {name}</button>
        </>
    );
}
export default Variants;