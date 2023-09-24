import Image from "next/image";

export default function product() {

    const wow = "insane";

    const CurrentProducts = [
        {
            product: 'GreenGo',
            flavortext: 'Our classic taste',
            desc: 'The GreenGo flavour of lemon and lime, bold but tasteful.',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: 'greengo'
        },
        {
            product: 'GreenGo Peachy',
            flavortext: 'Our peachy',
            desc: 'A peachy twist adding elegance and a subtler flavour.',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: 'Peach'
        },
        {
            product: 'GreenGo Apple' ,
            flavortext: 'Our apples',
            desc: 'The apple flavour, adding its sweetness and fruity flavour.',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: 'Apple'
        },
        {
            product: 'GreenGo Lemon' ,
            flavortext: 'Our lemony',
            desc: 'A slightly different, but highly requested, flavour- only online.',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: 'Lemon'
        },
        {
            product: 'GreenGo 087' ,
            flavortext: 'its 087 time',
            desc: 'A burst of grape with its boldness and special flavouring.',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: '087'
        },
        {
            product: 'GreenGo Berries' ,
            flavortext: 'mmm berries',
            desc: 'A combo of strawberries, rasberries, blackberries and more- its iconic flavour is sure to impress',
            color:'border-purple-300',
            imageSrc: '/Product_CanPlaceholder.jpg',
            imageAlt: 'Product',
            datacolor: 'Berry'
        },
    ]   

    return(
        <div className='mt-16 mb-5'>
            <div>
                <p className='title text-gray-500 text-6xl ml-20'>All <span className='text-greengo'>Products</span></p>
            </div>
                <div className="grid grid-cols-3 gap-14  duration-150 ease-in delay-75 prodDesc mt-10 mx-32">
                {CurrentProducts.map((index) => (
                    <a key={index.product}>
                        <div data-color={index.datacolor} className='border-4 border-lightblue rounded-3xl shadow-2xl productCollect'>
                        <div className='bg-bordergreen m-5 rounded-b-2xl rounded-tr-3xl rounded-tl-xl shadow-xl'>
                            <Image className="rounded-tr-3xl rounded-tl-xl rounded-b-3xl " src="/Product_CanPlaceholder.jpg" width="700" height="100" alt="can"/>
                            <div>
                                <p className='text-3xl text-center p-2.5 font-lightbold'>{index.product}</p>
                            </div>
                        </div>
                            <p className='px-10 text-center text-3xl mb-2'>{index.flavortext}</p>
                            <p className="px-10 text-center text-3xl mb-10 prodDesc text-gray-600">geg</p>
                            <p className="px-10 text-center text-3xl mb-10 prodDesc text-gray-600">{index.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}