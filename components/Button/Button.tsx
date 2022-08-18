import { NextPage } from "next";

interface Props {
  label: string;
  link: string;
}

const Button: NextPage<Props> = ({ label, link }) => {
  return (
    <a href={link} className="flex hoverButton mb-6 md:mx-4 lg:mb-8 text-lg">
      <p>{label}</p>
    </a>
  );
};

export default Button;
