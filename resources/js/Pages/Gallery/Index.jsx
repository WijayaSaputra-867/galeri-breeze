import { Head, usePage, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HiDotsVertical } from "react-icons/hi";
import Dropdown from "@/Components/Dropdown";

export default function Index({ auth }) {
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
                        <div className="md:max-w-[18rem] sm:max-w-[14rem] max-w-[12rem] mx-4 my-3 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="md:p-6 p-4 space-y-3">
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
                                </div>

                                <img
                                    className="h-full"
                                    src={`/storage/` + gallery.image}
                                    alt={gallery.title}
                                />
                                <div>
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
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
