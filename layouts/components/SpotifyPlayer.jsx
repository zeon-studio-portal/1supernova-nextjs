const SpotifyPlayer = ({
  spotifyUrl,
  autoplay = false,
  onReady,
  className,
}) => {
  // Extract the Spotify URI and type from the URL
  const getSpotifyEmbedUrl = (url, autoplay) => {
    try {
      // Handle both URL formats:
      // https://open.spotify.com/track/1301WleyT98MSxVHPZCA6M
      // spotify:track:1301WleyT98MSxVHPZCA6M
      const spotifyRegex =
        /(?:spotify:|https:\/\/open\.spotify\.com\/)([a-z]+)(?::|\/)([\w\d]+)/i;
      const matches = url.match(spotifyRegex);

      if (!matches) {
        throw new Error('Invalid Spotify URL');
      }

      const [, type, id] = matches;
      return `https://open.spotify.com/embed/${type}/${id}?autoplay=${autoplay ? '1' : '0'}`;
    } catch (error) {
      console.error('Error parsing Spotify URL:', error);
      return null;
    }
  };

  const embedUrl = getSpotifyEmbedUrl(spotifyUrl, autoplay);

  if (!embedUrl) {
    return (
      <div className="border border-red-300 bg-red-50 p-4 text-red-700">
        Invalid Spotify URL. Please provide a valid Spotify URL or URI.
      </div>
    );
  }

  return (
    <iframe
      src={embedUrl}
      loading="lazy"
      width="600"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen"
      className={`w-full ${className}`}
      onLoad={onReady} // Trigger callback when iframe is loaded
    />
  );
};

export default SpotifyPlayer;
