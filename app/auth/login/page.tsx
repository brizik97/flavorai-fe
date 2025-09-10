'use client';

import { signIn } from 'next-auth/react';
import * as yup from 'yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/buttons/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

type LoginType = yup.InferType<typeof schema>;

const Login = () => {
  const router = useRouter();
  const methods = useForm<LoginType>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { control, handleSubmit, formState, setError } = methods;

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    try {
      const signInResponse = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      });
      router.push('/');
      if (signInResponse?.error) {
        setError('root', { message: 'Invalid email or password' });
        return;
      }
    } catch {
      setError('root', { message: 'Invalid email or password' });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type="email"
              placeholder="Enter your email"
              labelText="Email"
              errors={formState.errors}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type="password"
              placeholder="Enter your password"
              labelText="Password (min 8 characters)"
              errors={formState.errors}
            />
          )}
        />
        <div className="mt-2 min-h-[1.45rem] text-red-600 text-sm">
          <span>{formState.errors?.root?.message}</span>
        </div>
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            variant="contained"
            loading={formState.isSubmitting}
          >
            Login
          </Button>
        </div>
      </form>
      <Link
        href="/auth/signup"
        className="text-sm text-blue-600 hover:underline mt-2 text-center w-full block"
      >
        Don&apos;t have an account? Sign up
      </Link>
    </div>
  );
};

export default Login;
