export const siteConfig = {
  name: 'Hien Nguyen',
  title: 'Frontend Engineer',
  tagline: 'I build accessible, pixel-perfect experiences for the web.',
  email: 'nguyenhien2942000@gmail.com',
  phone: '+84 333854312',
  resumeUrl: '/resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/nguyenhien1221',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hi%E1%BB%83n-nguy%E1%BB%85n-033aa6185/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/nguyenhien294',
    icon: 'facebook',
  },
] as const;
