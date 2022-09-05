import Authenticated from "@/Layouts/Authenticated/index";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from '@inertiajs/inertia-react';
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";


export default function Edit({ auth, movie }) {
    const { data,setData, post, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0]: event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: "PUT",
            ...data
        });
    };

    return <Authenticated auth={auth}>
        <Head title="Admin - Update Movie"></Head>
        <h1 className="text-xl">Update Movie : {movie.name} </h1>
        <hr className="mb-4" />
        <ValidationErrors errors={errors} />
        <form onSubmit={submit}>
            <Label forInput="name" value="Name" className="mt-8" />
            <Input 
            type="text"
            name="name"
            defaultValue={movie.name}
            variant="primary-outline"
            handleChange={onHandleChange}
            placeholder="Enter the Name of the movie"
            isError={errors.name}
            />
            <Label forInput="category" value="Category" className="mt-4" />
            <Input 
            type="text"
            name="category"
            defaultValue={movie.category}
            variant="primary-outline"
            handleChange={onHandleChange}
            placeholder="Enter Category"
            isError={errors.category}
            />
            <Label forInput="video_url" value="Video Url" className="mt-4" />
            <Input 
            type="url"
            name="video_url"
            defaultValue={movie.video_url}
            variant="primary-outline"
            handleChange={onHandleChange}
            placeholder="Enter the video url of the movie"
            isError={errors.vedio_url}
            />
            <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
            <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40"/>
            <Input 
            type="file"
            name="thumbnail"
            variant="primary-outline"
            handleChange={onHandleChange}
            placeholder="Insert Thumbnail of the movie"
            isError={errors.thumbnail}
            />
            <Label forInput="rating" value="Rating" className="mt-4" />
            <Input 
            type="number"
            name="rating"
            defaultValue={movie.rating}
            variant="primary-outline"
            handleChange={onHandleChange}
            placeholder="Enter the Rating of the movie"
            isError={errors.rating}
            />
            <div className="flex flex-row mt-4 items-center">
                <Label forInput="is_featured" value="Is Featured" className="mr-3 mt-1" />
                <Checkbox
                    name="is_featured"
                    handleChange={(e) => setData("is_featured", e.target.Checked)}
                    Checked={movie.is_featured} 
                />
            </div>
            <Button type="submit" className="mt-4 w-40" processing={processing}>
                Save
            </Button>
        </form>
    </Authenticated>
}