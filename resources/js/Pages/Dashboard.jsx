import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Head, Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import { FaHeart } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import Dropdown from "@/Components/Dropdown";

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
                        <div className="md:max-w-[18rem] sm:max-w-[14rem] max-w-[12rem] mx-4 my-3 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 space-y-3">
                                <div className="flex flex-col">
                                    <div>
                                        <div className="float-right">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <HiDotsVertical />
                                                </Dropdown.Trigger>
                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route(
                                                            "galleries.show",
                                                            gallery.id
                                                        )}
                                                    >
                                                        Show Album
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                        <h2 className="text-gray-900 font-medium md:text-xl sm:text-lg text-base capitalize float-left text-pretty">
                                            {gallery.title}
                                        </h2>
                                    </div>

                                    <div className="text-base text-sky-700">
                                        <Link
                                            href={route(
                                                "categories.show",
                                                gallery.category_id
                                            )}
                                        >
                                            {gallery.category.name}
                                        </Link>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        <Link
                                            href={route(
                                                "user.show",
                                                gallery.user_id
                                            )}
                                        >
                                            By : {gallery.user.name}
                                        </Link>
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
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
