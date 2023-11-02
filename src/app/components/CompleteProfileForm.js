import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import AvatarEditor from 'react-avatar-editor';

const ZoomSlider = ({ zoom, onZoomChange }) => {
    return (
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={zoom}
        onChange={(e) => onZoomChange(parseFloat(e.target.value))}
      />
    );
};
  
const CompleteProfileForm = ({ user }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [editedImage, setEditedImage] = useState(null);
    const [zoom, setZoom] = useState(2);
    const editorRef = useRef(null);
  
    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        if (user) {
          const { name, email } = user;
          setValue('name', name);
          setValue('email', email);
          // ... Outros campos que você queira preencher
        }
      }, [user, setValue]);

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedImage(file);
      };
    
      const handleImageCrop = () => {
        if (editorRef.current) {
          const canvas = editorRef.current.getImageScaledToCanvas();
          canvas.toBlob((blob) => {
            setEditedImage(blob);
          });
        }
      };
    
      const handleZoomChange = (newZoom) => {
        setZoom(newZoom);
      };
    
      const handleCancel = () => {
        setEditedImage(null);
      };
    
      const handleSave = () => {
        handleImageCrop();
        setEditedImage(null);
      };


return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Nome:
        </label>
        <input {...register('name')} id="name" className="border rounded w-full py-2 px-3" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input {...register('email')} id="email" className="border rounded w-full py-2 px-3" />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Telefone:
        </label>
        <input {...register('phone')} id="phone" className="border rounded w-full py-2 px-3" />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700">
          Imagem:
        </label>
        <input type="file" accept="image/*" onChange={handleImageChange} id="image" className="py-2 px-3" />
      </div>

      {editedImage && (
        <>
          <AvatarEditor
            ref={editorRef}
            image={editedImage}
            width={200}
            height={200}
            border={10}
            color={[255, 255, 255, 0.6]}
            rotate={0}
            scale={zoom}
          />
          <ZoomSlider zoom={zoom} onZoomChange={handleZoomChange} />
          
          <div className="flex justify">
          <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancelar
            </button>
            </div>
        </>
      )}
          <div className="flex justify">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Salvar
            </button>
          </div>
    </form>
  );
};

export default CompleteProfileForm;
