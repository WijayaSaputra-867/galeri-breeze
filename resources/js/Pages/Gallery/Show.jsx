import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import GalleryShowCard from "@/Components/Gallery/GalleryShowCard";
import GalleryCommentsShow from "@/Components/Gallery/GalleryCommentsShow";
import GalleryCommentsForm from "@/Components/Gallery/GalleryCommentsForm";
import Index from "@/Components/Gallery/Photo/Index";

export default function Show({ auth }) {
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
            <div className="flex justify-center py-8">
                <GalleryShowCard className="w-2/3 pr-8" />
                <div className="w-1/3 pl-8">
                    <GalleryCommentsShow className="max-w-md mx-auto mb-3" />

                    <GalleryCommentsForm />
                </div>
            </div>
            <Index className="container mx-auto mt-8" />
        </AuthenticatedLayout>
    );
}
