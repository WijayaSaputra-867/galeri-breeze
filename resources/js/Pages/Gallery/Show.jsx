import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { HiDotsVertical } from "react-icons/hi";

export default function Show({ auth }) {
    const gallery = usePage().props.gallery;
    const user = usePage().props.user;
    const category = usePage().props.category;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Details Album
                </h2>
            }
        >
            <Head title="Details Album" />
            <div className="py-6 flex ">
                <div className="w-full md:w-2/3 mx-auto sm:px-6 lg:px-6 sm:mt-4 md:mt-0">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative ">
                                <h2 className="text-gray-900 font-medium md:text-xl sm:text-lg text-base capitalize top-0 left-0 absolute ">
                                    {gallery.title}
                                </h2>
                                {gallery.user_id == auth.user.id && (
                                    <div className="absolute right-0">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <HiDotsVertical />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route(
                                                        "galleries.edit",
                                                        gallery.id
                                                    )}
                                                >
                                                    Edit Album
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route(
                                                        "galleries.destroy",
                                                        gallery.id
                                                    )}
                                                >
                                                    Delete Album
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route(
                                                        "photos.create"
                                                    )}
                                                >
                                                    Add Photo
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                )}
                            </div>
                            <div className="mt-8 text-2xl text-sky-700">
                                <Link
                                    href={route("categories.show", category.id)}
                                >
                                    {category.name}
                                </Link>
                            </div>
                            {gallery.user_id != auth.user.id && (
                                <h3 className="text-xl text-gray-400">
                                    <Link href={route("user.show", user.id)}>
                                        By : {user.name}
                                    </Link>
                                </h3>
                            )}
                            <img
                                className="my-4"
                                src={`/storage/` + gallery.image}
                                alt={gallery.title}
                            />
                            <div className="text-lg text-gray-800">
                                <p>{gallery.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mx-auto sm:px-6 lg:px-6 sm:mt-4 md:mt-0">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900"></div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="md:max-w-[18rem] sm:max-w-[14rem] max-w-[12rem] mx-4 my-3 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="md:p-6 p-4 space-y-3"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
