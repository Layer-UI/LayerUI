// Avatars component displaying a list of avatars
const avatars = [
    { size: 6, image: "/person/men.jpg", zIndex: 0 },
    { size: 8, image: "/person/men.jpg", zIndex: 10 },
    { size: 10, image: "/person/men.jpg", zIndex: 20 },
    { size: 8, image: "/person/men.jpg", zIndex: 10 },
    { size: 6, image: "/person/men.jpg", zIndex: 0 },
];

export const Avatars: React.FC = () => (
    <div className="z-0 flex items-center -space-x-2">
        {avatars.map((avatar, index) => (
            <div
                key={index}
                className={`relative z-${avatar.zIndex} flex size-${avatar.size} shrink-0 items-center justify-center rounded-full`}
            >
                <img
                    src={avatar.image}
                    className="h-full w-full rounded-full object-cover object-center"
                    alt={`Avatar ${index + 1}`}
                />
            </div>
        ))}
    </div>
);

