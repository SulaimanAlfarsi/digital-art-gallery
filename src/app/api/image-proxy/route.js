export async function GET(request) {
  const source = request.nextUrl.searchParams.get("url");

  if (!source) {
    return new Response("Missing image URL", { status: 400 });
  }

  let imageUrl;

  try {
    imageUrl = new URL(source);
  } catch {
    return new Response("Invalid image URL", { status: 400 });
  }

  if (!["http:", "https:"].includes(imageUrl.protocol)) {
    return new Response("Unsupported image URL", { status: 400 });
  }

  const imageResponse = await fetch(imageUrl, {
    headers: {
      "User-Agent": "Riwaq Art image proxy",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  if (!imageResponse.ok) {
    return new Response("Image not found", { status: imageResponse.status });
  }

  const contentType = imageResponse.headers.get("content-type") || "image/jpeg";

  if (!contentType.startsWith("image/")) {
    return new Response("URL is not an image", { status: 415 });
  }

  return new Response(imageResponse.body, {
    headers: {
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "Content-Type": contentType,
    },
  });
}
