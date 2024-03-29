import { Link } from "react-router-dom";
import config from "../config";

const Services = () => {
    return (
        <section className="my-32">
            <div className="mb-12 text-2xl font-semibold text-center md:text-3xl">What We Do</div>
            <div className="flex flex-wrap justify-center gap-10 px-8">
                {config.services.map((service, i) => {
                    return <ServiceCard key={i} {...service} />;
                })}
            </div>
        </section>
    );
}

const ServiceCard = ({ title, image, description }: { title: string, image: string, description: string }) => {
    return (
        <div className="overflow-hidden bg-white rounded-sm shadow md:w-1/4">
            <div className="w-full mb-4 bg-gray-400 aspect-square">
                <img src={image} alt={title} />
            </div>
            <div className="mx-4 mb-2 text-2xl font-medium text-center">{title}</div>
            <div className="mx-4 mb-4 text-center">{description}</div>
            <div className="mx-4 mb-8 text-center">
                <Link to="/contact" state={{ subject: `Service: ${title}` }}>
                    <button className="p-4 font-medium text-white bg-black rounded-sm">Contact Sales</button>
                </Link>
            </div>
        </div>
    );
}

export default Services;
