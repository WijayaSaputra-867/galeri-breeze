export default function Index({ className = "" }) {
    return (
        <div className={className}>
            <div className="grid grid-cols-4 gap-4">
                {/* <!-- Contoh foto dari galeri --> */}
                <div className="relative group">
                    <img
                        src="path/to/gallery_image1.jpg"
                        alt="Gallery Image 1"
                        className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
                            Lihat
                        </button>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="path/to/gallery_image2.jpg"
                        alt="Gallery Image 2"
                        className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
                            Lihat
                        </button>
                    </div>
                </div>
                <div className="relative group">
                    <img
                        src="path/to/gallery_image3.jpg"
                        alt="Gallery Image 3"
                        className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg">
                            Lihat
                        </button>
                    </div>
                </div>
                {/* <!-- Tambahkan foto galeri lainnya di sini --> */}
            </div>
        </div>
    );
}
