import "tailwindcss/tailwind.css";
import Appbar from "@/app/components/Appbar";
import Drawer from "@/app/components/Drawer";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createMovie } from "@/app/utils/api";

const CreateMovie = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onSubmit = async (data) => {
    const success = await createMovie(data);

    if (success) {
      alert("Filme inserido");
      router.push(`/movies`);
    }
  };

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div className="flex items-center justify-center">
        <div className="bg-white-rounded p-8 shadow-lg w-full max-w-md">
          <h1 className="text-2x1 font-bold mb-4">Inserir Filme</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="Title"
                className="block text-sm font-medium text-gray-600"
              >
                Título
              </label>
              <input
                {...register("Title")}
                className="w-full border rounded py-2 px-3"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Poster"
                className="block text-sm font-medium text-gray-600"
              >
                Poster
              </label>
              <input
                {...register("Poster")}
                className="w-full border rounded py-2 px-3"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Plot"
                className="block text-sm font-medium text-gray-600"
              >
                Plot
              </label>
              <textarea
                rows="5"
                {...register("Plot")}
                className="w-full border rounded py-2 px-3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Genre"
                className="block text-sm font-medium text-gray-600"
              >
                Genre
              </label>
              <input
                {...register("Genre")}
                className="w-full border rounded py-2 px-3"
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Director"
                className="block text-sm font-medium text-gray-600"
              >
                Director
              </label>
              <input
                {...register("Director")}
                className="w-full border rounded py-2 px-3"
              ></input>
            </div>{" "}
            <button
              type="submit"
              className="bg-blue-500 rounded text-white font-semibold py-2 px-4"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateMovie;
