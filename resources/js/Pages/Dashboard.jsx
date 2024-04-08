import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Head, Link } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

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
                                            Category
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="mx-auto w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            className="w-1/4 bg-rose-700 text-white rounded-lg hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-rose-300 ease-in-out duration-150"
                                            disabled={
                                                gallery.user_id == auth.user.id
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="mx-auto h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                />
                                            </svg>
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
