import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import UserTable from "@/Components/User/UserTable";
import UserAddForm from "@/Components/User/UserAddForm";
import UserEditForm from "@/Components/User/UserEditForm";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User
                </h2>
            }
        >
            <Head title="User" />

            <div className="py-6 flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2 mx-auto sm:px-6 lg:px-6 sm:mt-4 md:mt-0">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <UserTable className="space-y-6" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mx-auto sm:px-6 lg:px-6">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            {route().current("user.index") && (
                                <UserAddForm className="space-y-6" />
                            )}
                            {route().current("user.edit") && (
                                <UserEditForm className="space-y-6" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
