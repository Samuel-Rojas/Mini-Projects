import './index.css';

type CardProps = {
    image?: string;
    imgAlt?: string;
    name?: string;
    occupation?: string;
    description?: string;
}

function Card({image, imgAlt, name, occupation, description}: CardProps) {
    return (
        // Container with max width, white background, rounded corners, and shadow
        // p-6 adds padding on all sides (1.5rem)
        // mx-auto centers the card horizontally
        // my-4 adds vertical margin (1rem top and bottom)
        <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto my-4 hover:skew-x-1">
            {/* Image container with fixed size and rounded corners */}
            {/* w-32 = width: 8rem, h-32 = height: 8rem */}
            {/* rounded-full makes it circular */}
            {/* mx-auto centers the image horizontally */}
            {/* mb-4 adds margin bottom (1rem) */}
            <img 
                src={image} 
                alt={imgAlt} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            {/* Text content with proper spacing and alignment */}
            {/* text-center centers text horizontally */}
            {/* mb-2 adds margin bottom (0.5rem) */}
            {/* text-xl makes text larger, font-bold makes it bold */}
            <h1 className="text-xl font-bold text-center mb-2">{name}</h1>
            {/* text-gray-600 gives a muted color */}
            {/* mb-4 adds more margin bottom (1rem) */}
            <h2 className="text-gray-600 text-center mb-4">{occupation}</h2>
            {/* text-gray-700 gives slightly darker text for better readability */}
            <p className="text-gray-700 text-center">{description}</p>
        </div>
    )
}

export default Card;