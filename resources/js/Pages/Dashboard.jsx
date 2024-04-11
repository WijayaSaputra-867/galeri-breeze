import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Head, Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { FaHeart } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function Dashboard({ auth }) {
    const galleries = usePage().props.galleries;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="flex flex-wrap sm:px-6 lg:px-8">
                    {galleries.map((gallery) => (
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
                                        <div className="text-xs text-gray-400">
                                            By : {gallery.user.name}
                                        </div>
                                        <div className="text-base text-sky-700">
                                            {gallery.category.name}
                                        </div>
                                    </div>

                                    <img
                                        src={`/storage/` + gallery.image}
                                        alt={gallery.title}
                                    />
                                    <div className="flex space-x-2">
                                        <TextInput
                                            className="w-2/4 placeholder:text-sm"
                                            placeHolder="Comments ..."
                                        />
                                        <button className="w-1/4 bg-teal-700 text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-300 transition ease-in-out duration-150">
                                            <IoChatbubbleEllipses className="mx-auto w-6 h-6" />
                                        </button>
                                        <button
                                            className="w-1/4 bg-rose-700 text-white rounded-lg hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-rose-300 ease-in-out duration-150"
                                            disabled={
                                                gallery.user_id == auth.user.id
                                            }
                                        >
                                            <FaHeart className="mx-auto w-6 h-6" />
                                        </button>
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
