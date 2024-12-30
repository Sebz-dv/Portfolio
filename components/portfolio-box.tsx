import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ data }) => {
  const { title, image, urlGithub, urlDemo } = data;

  return (
    <div className="p-4 border border-gray-300 rounded-lg    shadow-md max-w-sm mx-auto">
      <h3 className="mb-4 text-lg font-semibold text-terciary text-center">
        {title}
      </h3>
      <div className="w-full h-48">
        <Image
          src={image}
          alt={`${title} preview`}
          width={300}
          height={192}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between mt-4">
        <Link
          href={urlGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 mx-1 text-black bg-[#ffcd29] rounded-md hover:bg-[#fffc3b] transition-colors duration-150"
          aria-label={`View ${title} on GitHub`}
        >
          GitHub
        </Link>

        {urlDemo !== "#!" && (
          <Link
            href={urlDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 mx-1 text-white bg-teal-600 rounded-md hover:bg-teal-500 transition-colors duration-150"
            aria-label={`View live demo of ${title}`}
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioBox;
