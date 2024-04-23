export default function GalleryCommentsForm({}) {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 bg-gray-200">
                <h2 className="text-xl font-bold">Tambah Komentar</h2>
            </div>
            <div className="px-6 py-4">
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label
                            for="comment"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Komentar
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows="4"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Masukkan komentar Anda"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
