import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  tags: string[];
  url: string; // Nova propriedade para o link
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      title: "Title of blogpost #1",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
      url: "https://example.com/blogpost1"
    },
    {
      title: "Title of blogpost #2",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
      url: "https://example.com/blogpost2"
    },
    {
      title: "Title of blogpost #3",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
      url: "https://example.com/blogpost3"
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl leading-snug">
              {title}
            </h2>
            <p class="text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {posts?.map((post) => (
            <div class="border border-secondary rounded-lg overflow-hidden flex flex-col hover:bg-purple-700 transition-colors duration-300">
              <a href={post.url} target="_blank" rel="noopener noreferrer" class="flex flex-col h-full">
                <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="p-6 flex flex-col flex-grow text-white">
                  <div class="space-y-2 flex-grow">
                    <h3 class="text-2xl">{post.title}</h3>
                    <p class="text-base">{post.excerpt}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                      {post.tags?.map((tag) => (
                        <div class="badge badge-lg badge-primary text-xs">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div class="mt-4">
                    <span class="block text-gray-300">{post.date}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}