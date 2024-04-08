import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CategoryAddForm from "@/Components/Category/CategoryAddForm";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-6 flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2 mx-auto sm:px-6 lg:px-6 sm:mt-4 md:mt-0">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mx-auto sm:px-6 lg:px-6">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CategoryAddForm className="space-y-6" />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
