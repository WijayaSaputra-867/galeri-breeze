import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Transition } from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ({ className = "" }) {
    const { data, setData, errors, post, processing, recentlySuccessful } =
        useForm({
            name: "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("categories.store"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-gray-900 font-medium text-lg">
                    Create Category
                </h2>
                <p className="text-gray-600 text-base">Create a new category</p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div>
                    <InputLabel htmlFor="name" value="Category Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Created.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
