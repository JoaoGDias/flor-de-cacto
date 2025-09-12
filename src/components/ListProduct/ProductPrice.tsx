export default function ProductPrice(props) {
    const {salePrice, regularPrice} = props;
    const sale = Number(salePrice).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    const regular = Number(regularPrice).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return (
        <div className="mb-4">
            <div className="flex items-end gap-2">
                {Number(salePrice) > 0 ? (
                    <>
                        <span className="text-xl font-bold text-gray-800 md:text-2xl">{sale}</span>
                        <span className="mb-0.5 text-red-500 line-through">{regular}</span>
                    </>
                ) : (
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">{regular}</span>
                )}
            </div>

            <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
        </div>
    )
}