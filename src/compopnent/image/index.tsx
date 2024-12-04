export type ImagePropsType = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const Image = ({ fallbackSrc, ...props }: ImagePropsType) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackSrc ?? "/img/empty.jpg";
    event.currentTarget.onerror = null;
  };

  return <img {...props} onError={handleError} />;
};

export default Image;
