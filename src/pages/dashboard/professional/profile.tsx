import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Pencil } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  getProfile,
  getServiceByPage,
  updateProfile,
  UpdateProfileBody,
  UpdateProfileResponse,
} from '@/api';
import { Input } from '@/components/Input';
import { ProfessionalService } from '@/components/professionalService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-provider';
import { env } from '@/env';
import { queryClient } from '@/lib/react-query';

const UserProfileSchema = z.object({
  name: z.string(),
  headLine: z.string(),
  email: z.string(),
  password: z.string(),
  photoUrl: z.any(),
});

type UpdatedProfileSchema = z.infer<typeof UserProfileSchema>;

export function Profile() {
  const { user } = useAuth();

  const { data: services, isLoading: isLoadingService } = useQuery({
    queryKey: ['servicesProfile'],
    queryFn: () => getServiceByPage({ userId: user?._id, page: 1 }),
    staleTime: Infinity,
    enabled: !!user,
  });

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile({ _id: user?._id }),
    staleTime: Infinity,
    enabled: !!user,
  });

  function updateProfileCache({ headLine, name, email, password, photoUrl }: UpdateProfileBody) {
    const cached = queryClient.getQueryData<UpdateProfileResponse>(['profile']);

    if (cached) {
      queryClient.setQueryData<UpdateProfileBody>(['profile'], {
        ...cached,
        headLine,
        name,
        email,
        password,
        photoUrl,
      });
    }

    return { cached };
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ headLine, name, email, password, photoUrl }) {
      const { cached } = updateProfileCache({ headLine, name, email, password, photoUrl });

      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateProfileCache(context.previousProfile);
      }
    },
  });

  const form = useForm<UpdatedProfileSchema>({
    resolver: zodResolver(UserProfileSchema),
    values: {
      name: profile?.name ?? '',
      headLine: profile?.headLine ?? '',
      email: profile?.email ?? '',
      password: '',
      photoUrl: profile?.photoUrl ?? '',
    },
  });

  async function handleUpdateProfile(data: UpdatedProfileSchema) {
    try {
      console.log('Update profile data', data);
      await updateProfileFn(data);
      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar perfil');
    }
  }
  return (
    <div>
      <Card className="my-16 ml-[5%] mr-[15%] rounded-md">
        <CardHeader>
          {isLoadingProfile ? (
            <Skeleton className="z-0 h-80 w-full gap-y-12 rounded-md" />
          ) : (
            <Card>
              <CardHeader className="h-32 rounded-tl-md rounded-tr-md bg-indigo-300  pt-14 max-lg:rounded-none">
                <Avatar>
                  {profile?.photoUrl ? (
                    <AvatarImage
                      src={`${env.VITE_URL_R2CLOUDFLARE}${profile.photoUrl}`}
                      className="ml-5 w-36 rounded-full border-4 border-background"
                    />
                  ) : (
                    <AvatarFallback className="ml-5 w-36 rounded-full border-4 border-background">
                      {profile?.name[0].toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
              </CardHeader>
              <CardContent className="mt-20 flex flex-col  gap-y-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="ml-6 text-left font-bold " style={{ maxWidth: '600px' }}>
                      {profile?.name}
                    </CardTitle>
                    <CardDescription className="ml-6  font-light">
                      {profile?.headLine}
                    </CardDescription>
                    <span className="ml-5 mt-3 font-bold text-indigo-600/90">
                      + {profile?.appointmentsTotal} agendamentos
                    </span>
                  </div>
                  <div>
                    <Dialog>
                      <DialogTrigger className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-indigo-500">
                          <Pencil className=" flex text-indigo-600/90" />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <div className="flex w-full items-center justify-center border-b-2 py-5">
                            <DialogTitle className="text-xl">Editar sua conta</DialogTitle>
                          </div>

                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(handleUpdateProfile)}
                              className="space-y-5"
                            >
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                        placeholder="Editar nome"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="headLine"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Título</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                        placeholder="Editar Título"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                        type="email"
                                        placeholder="Mudar e-mail"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                        type="password"
                                        placeholder="Inserir nova senha"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="photoUrl"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Photo</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                        type="file"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                className="flex w-full items-center justify-center rounded-lg px-10 text-lg"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </form>
                          </Form>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardHeader>
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle>Meus serviços</CardTitle>
              <CardDescription>Aqui esta todos os seus serviços criados</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingService ? (
                <Skeleton className="m-10 h-64 w-[90%] p-3" />
              ) : (
                <ProfessionalService services={services} />
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
