import Dropdown from "@/Components/Dropdown";
import { HiDotsVertical } from "react-icons/hi";
import { usePage } from "@inertiajs/react";

export default function GalleryShowCard({ className = "" }) {
    const gallery = usePage().props.gallery;
    const user = usePage().props.user;
    const category = usePage().props.category;

    return (
        <div className={className}>
            <div className="mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                <div className="flex justify-between items-center px-6 py-4 bg-gray-200">
                    <h2 className="text-xl font-bold">Galeri</h2>
                    <div className="relative">
                        <button className="text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded-md cursor-pointer">
                            Dropdown
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden">
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Show Gallery
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Edit Gallery
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Delete Gallery
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">
                            Category Gallery
                        </h3>
                        <p className="text-gray-700">Category 1, Category 2</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Tags</h3>
                        <p className="text-gray-700">Tag 1, Tag 2, Tag 3</p>
                    </div>
                    <div className="mb-4">
                        <img
                            src="path/to/cover_image.jpg"
                            alt="Gallery Image"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Gallery Description
                        </h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce id justo vel sem pulvinar fermentum.
                            Duis vel suscipit lorem. Nam malesuada auctor
                            libero.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
