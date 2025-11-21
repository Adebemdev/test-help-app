import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters long',
  }),
  phoneNumber: z.string().min(8, {
    message: 'Phone number is too short',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  businessName: z.string().min(2),
  serviceType: z.string().min(2),
  location: z.string().min(2),

  how_do_you_hear_about_us: z.enum([
    'social_media',
    'family_friends',
    'fliers',
    'google_search',
    'blog_article',
  ]),
});

export type FormSchema = z.infer<typeof formSchema>;

export const SERVICE_CATEGORY_OPTIONS = [
  { value: 'social_media', label: 'Social Media' },
  { value: 'family_friends', label: 'Family & Friends' },
  { value: 'fliers', label: 'Fliers' },
  { value: 'google_search', label: 'Google Search' },
  { value: 'blog_article', label: 'Blog or Online Article' },
];
