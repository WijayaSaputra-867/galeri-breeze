import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function GalleryEditForm({ className = "" }) {
    const categories = usePage().props.categories;
    const gallery = usePage().props.gallery;

    const {
        data,
        setData,
        patch,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        gallery_title: gallery.title,
        gallery_category: null,
        gallery_image: null,
        gallery_description: gallery.description,
    });

    const [preview, setPreview] = useState(gallery.image);

    const handleImageChange = (e) => {
        setData("gallery_image", e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("galleries.update", gallery.id));
        reset();
    };

    return (
        <section className={className}>
            <header>
                <h2 className="font-medium text-lg text-gray-900">
                    Upload a New Gallery
                </h2>
                <p className="text-base text-gray-600">Upload gallery</p>
            </header>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div>
                    <InputLabel htmlFor="title" value="Title Gallery" />
                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data.gallery_title}
                        onChange={(e) =>
                            setData("gallery_title", e.target.value)
                        }
                    />
                    <InputError
                        className="mt-2"
                        message={errors.gallery_title}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="category" value="Category Gallery" />
                    <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={data.gallery_category}
                        onChange={(e) =>
                            setData("gallery_category", e.target.value)
                        }
                    >
                        <option value="">Category</option>
                        {categories.map((category) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <InputLabel htmlFor="Image" value="Image Gallery" />
                    <TextInput
                        id="image"
                        type="file"
                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium mt-1"
                        onChange={handleImageChange}
                    />
                    <InputError
                        className="mt-2"
                        message={errors.gallery_image}
                    />
                </div>
                <div>
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="rounded-lg"
                        />
                    )}
                </div>
                <div>
                    <InputLabel htmlFor="title" value="Description Gallery" />
                    <textarea
                        id="title"
                        className="mt-1 block w-full rounded-lg"
                        rows="1"
                        value={data.gallery_description}
                        onChange={(e) =>
                            setData("gallery_description", e.target.value)
                        }
                    ></textarea>
                    <InputError
                        className="mt-2"
                        message={errors.gallery_description}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Updated.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
