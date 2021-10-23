import Link from 'next/link'

export default function EcpertCard({expert = {}}){
    const {
        _id = "1",
        image = "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwwfDF8c2VhcmNofDM3fHxmYWNlfGVufDB8fHx8MTYzMzkxOTE4MA&ixlib=rb-1.2.1&q=80&w=200",
        name = "Jucinda Raymaz",
        title = "Havard, fellow, Paris Cooking Alumni",
        description = "Show touched parents of caught agreed her your a tower, so a her english of him, they she desires big the what continued copy. King know alarm the see countries findings. World a its understood. A into may last of typically of her occasion of each the own."
    } = expert;
    return (
        <Link href={`/experts/${_id}`}>
            <div className="p-4 hover:bg-gray-50 cursor-pointer relative border-2 rounded-lg overflow-hidden">
                <div className="flex items-center">
                    <div className="h-16 w-16 flex-shrink-0">
                        <div className="rounded overflow-hidden w-full h-full relative">
                            <img className="absolute w-full h-full object-cover" src={image} alt="" />
                        </div>
                    </div>

                    <div className="ml-4">
                        <h3 className="text-lg font-serif font-medium leading-none">
                            { name }
                        </h3>
                        <small className="block mt-2 text-sm leading-snug opacity-50 font-medium">
                            { title }
                        </small>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="mt-2.5 text-sm leading-loose opacity-50">
                        { description.substring(0, 150) }...
                    </p>
                </div>
            </div>
        </Link>
    );
}