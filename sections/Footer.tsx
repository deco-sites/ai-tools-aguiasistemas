import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10733/94ff840c-97bb-4ff2-b034-2f198a73fb2e",
    alt: "Logo",
  },
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link Thirteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Subscribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
}: Props) {
  return (
    <footer class="lg:container mx-auto md:max-w-6xl px-4 py-12 text-sm">
      <div class="flex flex-col items-center gap-12">
        <div class="flex flex-col items-center gap-4">
          <div class="w-full flex justify-center">
            <Image 
              src={logo.src || ""} 
              alt={logo.alt} 
              class="h-20 w-auto object-contain" 
            />
          </div>
          <div class="text-center">
            <h4 class="font-semibold mb-2">{subscribe?.title}</h4>
            <p class="font-normal">{subscribe.description}</p>
            <form class="flex flex-col md:flex-row gap-4 mt-4 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full md:w-auto input input-bordered input-primary"
              />
              <button
                type="submit"
                class="btn btn-outline font-normal"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
            <p
              class="text-xs mt-2"
              dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
            ></p>
          </div>
        </div>

        <div class="border-t border-primary flex flex-col items-center gap-4 py-8 w-full">
          <div class="flex flex-col items-center gap-2">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.label}
                class="object-contain"
              />
            </a>
            <span>{copyright}</span>
          </div>
          <div class="flex gap-4">
            {bottomLinks?.map((item) => (
              <a class="link" href={item.href} target="_blank" key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}