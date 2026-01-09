import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export function useSeo({ title, description, image, url }: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);

    if (image) {
      setMetaProperty("og:image", image);
    }

    if (url) {
      setMetaProperty("og:url", url);
    }
  }, [title, description, image, url]);
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
