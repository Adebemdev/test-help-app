'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// import the form components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import RadioGroupButton from '@/app/_components/RadioGroupButton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name input should be at least 2 letters long',
  }),
  phoneNumber: z.string().min(2).max(30),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  businessName: z.string().min(5).max(500),
  serviceType: z.string().min(5).max(500),
  location: z.string().min(5).max(500),
  serviceCategory: z.enum([
    'social media',
    'Family & Friends',
    'Fliers',
    'Goggle Search',
    'Blog or online Article',
  ]),
});

export default function RegistrationForm() {
  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      businessName: '',
      serviceType: '',
      location: '',
      serviceCategory: 'social media',
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values - for now we'll console log them.
    console.log(values);
  }

  return (
    <section className="bg-white px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-linear-to-b from-white to-[#EEECE8] border-2 border-[#E6E6E6] px-4 py-4 rounded-xl"
        >
          <div className="flex flex-col gap-4">
            <h1 className="font-lato font-extrabold text-2xl text-black leading-[100%]">
              Register as a Provider
            </h1>
            <p className="font-lato font-medium -tracking-normal text-sm leading-5 text-[#545454]">
              Please fill in the following fields below correctly to be a part
              of our provider community.
            </p>
          </div>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Olayinka Chukwuemeka Hassan"
                    {...field}
                    className="bg-[#FFFFFF]   py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g 081*********"
                    {...field}
                    className="bg-[#FFFFFF]   py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
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
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Olayi**@gmail.com"
                    {...field}
                    className="bg-[#FFFFFF]   py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Business Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Ola Ventures Limited"
                    {...field}
                    className="bg-[#FFFFFF]   py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Service Type
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Carpentar"
                    {...field}
                    className="bg-[#FFFFFF]   py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  Location
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Lagso State, Nigeria."
                    {...field}
                    className="bg-[#FFFFFF] py-3 px-2 font-lato text-sm leading-1 tracking-normal text-[#B0B0B0]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-semibold text-sm leading-5 tracking-[1.5%] text-[#333333]">
                  How did you hear about us ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="default"
                        id="r1"
                        className="bg-white"
                      />
                      <Label
                        htmlFor="r1"
                        className="text-sm  font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333]"
                      >
                        Social media
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="comfortable"
                        id="r2"
                        className="bg-white"
                      />

                      <Label
                        htmlFor="r2"
                        className="text-sm  font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333]"
                      >
                        Family & Friends
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="fliers"
                        id="r3"
                        className="bg-white"
                      />
                      <Label
                        htmlFor="r3"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333]"
                      >
                        Fliers
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="goggle"
                        id="r4"
                        className="bg-white"
                      />
                      <Label
                        htmlFor="r4"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333]"
                      >
                        Goggle Search
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="blog"
                        id="r5"
                        className="bg-white"
                      />
                      <Label
                        htmlFor="r5"
                        className="text-sm font-lato font-semibold leading-5 tracking-[1.5%] text-[#333333]"
                      >
                        Blog or online Article
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full h-full ">
            <Button
              className="text-white bg-[#9C28B1] w-full font-lato font-bold text-base h-full py-3"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
