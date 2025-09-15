'use client';

import * as yup from 'yup';
import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { addRecipe } from '@/lib/api/recipe';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  ingredients: yup.string().required('Ingredients are required'),
  instructions: yup.string().required('Instructions are required'),
});

type AddRecipeFormType = yup.InferType<typeof schema>;

const AddRecipe = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const { data: session } = useSession();

  const methods = useForm<AddRecipeFormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
    },
  });
  const { control, handleSubmit, formState, setError } = methods;
  const onSubmit: SubmitHandler<AddRecipeFormType> = async (data) => {
    try {
      await addRecipe(data);
      handleModalClose();
    } catch {
      setError('root', { message: 'Failed to add recipe' });
    }
  };

  return (
    <>
      {session && (
        <Button variant="contained" className="h-12" onClick={handleModalOpen}>
          Add Recipe
        </Button>
      )}
      <Dialog open={open} onClose={handleModalClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Recipe</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="text"
                  placeholder="Enter recipe title"
                  labelText="Recipe Title"
                  errors={formState.errors}
                />
              )}
            />
            <Controller
              name="ingredients"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="text"
                  placeholder="Enter recipe ingredients"
                  labelText="Recipe Ingredients"
                  errors={formState.errors}
                  rows={3}
                  multiline
                />
              )}
            />
            <Controller
              name="instructions"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="text"
                  placeholder="Enter recipe instructions"
                  labelText="Recipe Instructions"
                  errors={formState.errors}
                  rows={3}
                  multiline
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="text"
                  placeholder="Enter recipe description"
                  labelText="Recipe Description"
                  errors={formState.errors}
                  rows={3}
                  multiline
                />
              )}
            />
            <div className="mt-2 min-h-[1.45rem] text-red-600 text-sm">
              <span>{formState.errors?.root?.message}</span>
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                loading={formState.isSubmitting}
              >
                Create Recipe
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddRecipe;
