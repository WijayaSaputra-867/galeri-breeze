export default function GalleryCommentsShow({ className = "" }) {
    return (
        <div class="bg-white shadow-md rounded-md p-4">
            <h2 class="text-lg font-semibold mb-4">Komentar</h2>
            <div class="overflow-y-auto max-h-[400px]">
                {/* untukk looping data */}
                <div class="flex items-center mb-4">
                    <div class="flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full"
                            src="https://via.placeholder.com/50"
                            alt="Avatar"
                        />
                    </div>
                    <div class="ml-3">
                        <div class="font-semibold">Nama Pengguna 1</div>
                        <div class="text-gray-600">Komentar 1</div>
                    </div>
                </div>
                {/* untuk looping data */}
            </div>
        </div>
    );
}
