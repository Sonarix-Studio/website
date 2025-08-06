const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

export const getYouTubeThumbnail = (
  url: string,
  quality:
    | "default"
    | "hqdefault"
    | "mqdefault"
    | "sddefault"
    | "maxresdefault" = "hqdefault"
) => {
  const videoId = getYouTubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
    : null;
};

export const getYouTubeEmbedUrl = (url: string) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
};
