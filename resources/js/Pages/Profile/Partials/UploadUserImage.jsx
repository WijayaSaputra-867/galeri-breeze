import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function UploadUserImage({ className = "" }) {
    const { selectedImage, setSelectedImage } = useState(null);

    const handleImageChange = (e) => {
        const file = setData("image", e.target.files[0]);
        setSelectedImage(URL.createObjectURL(file));
    };

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            image: null,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("profile.upload-image"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-gray-900">
                    Upload Profile Image
                </h2>
                <p className="text-base text-gray-600">Profile image</p>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    {selectedImage && <img src={selectedImage} alt="preview" />}
                </div>
                <div>
                    <InputLabel htmlFor="image" value="Profile" />
                    <TextInput
                        id="profile"
                        type="file"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                        onChange={handleImageChange}
                    />
                    <InputError className="mt-2" message={errors.image} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
