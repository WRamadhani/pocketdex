import type { Route } from "./+types/about";
import { useQueryClient } from "@tanstack/react-query";

// export async function loader() {
//   return new Response("About");
// }

// export async function action() {}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "This is about page" },
  ];
}

export default function About() {
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(["pokemonList"]);
  console.log(cachedData);
  return (
    <div className="mt-8 prose prose-slate mx-4 lg:prose-lg">
      <p className="lead">
        Until now, trying to style an article, document, or blog post with
        Tailwind has been a tedious task that required a keen eye for typography
        and a lot of complex custom CSS.
      </p>
      <div className="chat chat-start">
      <p className="chat-bubble">
        By default, Tailwind removes all of the default browser styling from
        paragraphs, headings, lists and more. This ends up being really useful
        for building application UIs because you spend less time undoing
        user-agent styles, but when you <em>really are</em> just trying to style
        some content that came from a rich-text editor in a CMS or a markdown
        file, it can be surprising and unintuitive.
      </p>
      </div>
      <p>
        We get lots of complaints about it actually, with people regularly
        asking us things like:
      </p>
    </div>
  );
}
