const logos = [
    { name: 'Docker', image: '/sociallogos/Docker.svg' },
    { name: 'Google', image: '/sociallogos/Google.svg' },
    { name: 'Instagram', image: '/sociallogos/Instagram.svg' },
    { name: 'Microsoft', image: '/sociallogos/Microsoft.svg' },
    { name: 'Netflix', image: '/sociallogos/Netflix.svg' },
    { name: 'Spotify', image: '/sociallogos/Spotify.svg' },
];

const LogoProof = () => (
    <section className="w-full py-12 flex flex-col items-center">
        <div className="max-w-2xl text-center">
            <p className="text-xl sm:text-4xl font-bold">Partnerships with Coveted Brands</p>
            <p className="p-6 sm:text-base text-sm m-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
            </p>
        </div>
        <div className="mx-auto w-full px-4 md:px-8 max-w-3xl">
            <div className="flex flex-wrap gap-10 justify-center">
                {logos.map(({ image, name }, index) => (
                    <div
                        key={index}
                        className="border py-1 px-2 rounded-md shadow-lg dark:shadow-white/20 dark:bg-white/30"
                    >
                        <img
                            src={image}
                            className="h-10 w-28"
                            alt={name || 'Logo'}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default LogoProof;
