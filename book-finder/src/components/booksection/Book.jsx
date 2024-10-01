// eslint-disable-next-line react/prop-types
export default function Book({ children, name, writer, year, price,  StarIcon, image }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4" >
                <img className="max-w-[144px] h-52" src={image} alt="book name" />
            </div>

            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">{name} ({year})</h4>
                <p className="text-xs lg:text-sm">By : <span>{writer}</span></p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
                    <div className="flex items-center space-x-1">
                        <img src={StarIcon} /><img src={StarIcon} /><img src={StarIcon} /><img src={StarIcon} />
                        <span className="text-xs lg:text-sm">({'4'} Star)</span>
                    </div>

                </div>

                {children}

            </div>
        </div>
    );
}
