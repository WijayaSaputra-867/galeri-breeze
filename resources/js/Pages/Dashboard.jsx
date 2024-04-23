import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Head, Link } from "@inertiajs/react";
import SimpleDateTime from "react-simple-timestamp-to-date";
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
            <div className="flex flex-wrap">
                {galleries.map((gallery) => (
                    <div className="max-w-md rounded overflow-hidden shadow-lg mx-auto mt-8">
                        {/* <!-- Bagian atas card --> */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
                            {/* <!-- Pemilik gallery dan foto profil --> */}
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full mr-4"
                                    src={
                                        gallery.user.change_profile == false
                                            ? gallery.user.profile
                                            : `/storage/` + gallery.user.profile
                                    }
                                    alt={gallery.user.name}
                                />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">
                                        {gallery.user.name}
                                    </p>
                                    <p className="text-gray-600">
                                        <SimpleDateTime>
                                            {gallery.created_at}
                                        </SimpleDateTime>
                                    </p>
                                </div>
                            </div>
                            {/* <!-- Tombol dropdown --> */}
                            <div className="relative">
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
                        </div>
                        {/* <!-- Judul galeri --> */}
                        <h2 className="text-xl font-bold px-6 py-2 bg-gray-200 text-gray-800">
                            {gallery.title}
                        </h2>
                        {/* <!-- Category --> */}
                        <p className="px-6 py-2 text-gray-600">
                            {gallery.category.name}
                        </p>
                        {/* <!-- Tags --> */}
                        <div className="px-6 py-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                #Nature
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                #Travel
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                #Adventure
                            </span>
                        </div>
                        {/* <!-- Gambar --> */}
                        <img
                            className="w-full h-64 object-cover"
                            src={gallery.image}
                            alt={gallery.title}
                        />
                        {/* <!-- Tombol like dan form komentar --> */}
                        <div className="flex justify-between items-center px-6 py-4">
                            {/* <!-- Form komentar --> */}
                            <form className="flex-grow">
                                <div className="flex items-center border-b border-gray-500 py-2">
                                    <input
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                        type="text"
                                        placeholder="Comments Here......"
                                    />
                                    <button>
                                        <IoChatbubbleEllipses className="w-6 h-6 mx-3" />
                                    </button>
                                </div>
                            </form>
                            {/* <!-- Tombol like --> */}
                            <button>
                                <FaHeart className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
