import { Head, usePage, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create({ auth }) {
    const galleries = usePage().props.galleries;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My Albums Gallery
                </h2>
            }
        >
            <Head title="My Gallery" />

            <div className="py-12">
                <div className="flex flex-wrap sm:px-6 lg:px-8">
                    {galleries.data.map((gallery) => (
                        <Link
                            href={`/galleries/${gallery.id}`}
                            key={gallery.id}
                        >
                            <div className="md:max-w-[18rem] sm:max-w-[14rem] max-w-[12rem] mx-4 my-3 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 space-y-3">
                                    <div>
                                        <h2 className="text-gray-900 font-medium text-xl capitalize">
                                            {gallery.title}
                                        </h2>
                                        <div className="text-base text-sky-700">
                                            Category
                                        </div>
                                    </div>

                                    <img
                                        src={`/storage/` + gallery.image}
                                        alt={gallery.title}
                                    />
                                    <div className="text-sm text-sky-400 lowercase">
                                        <span>#tags1</span>
                                        <span>#tags2</span>
                                        <span>#tags3</span>
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        <p>0 people liked your gallery</p>
                                        <p>0 people comments on your gallery</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
