function Logo({ size }: { size: string }) {
    const sizeClasses: { [key: string]: string } = {
        'sm': 'text-sm',
        'md': 'text-md',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        // Adicione outros tamanhos conforme necessário
    };

    const textSizeClass = sizeClasses[size] || 'text-base'; // Default to 'text-base' if size is not found

    return (
        <div>
            <h1 className={`bg-gradient-to-r from-brand2 to-brand inline-block text-transparent bg-clip-text ${textSizeClass} lg:text-[40px]`}>
                Kenai
            </h1>
        </div>
    );
}


export default Logo;