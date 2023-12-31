import { Dribbble, Linkedin, Twitter } from 'react-feather';
import { Therapist } from '../recommended';

type InfoSideProps = {
  therapist: Therapist;
};

function InfoSide({ therapist }: InfoSideProps) {
  return (
    <ul className="flex flex-col  gap-4 bg-healHavenGray50 p-6 text-healHavenGray400 md:flex-row md:justify-between  lg:col-start-1 lg:row-start-1 lg:row-end-3 lg:flex-col lg:justify-start">
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Gender</h2>
        <p className="">{therapist.gender}</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Religion</h2>
        <p className="">{therapist.religion}</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Languages</h2>
        {therapist.languages &&
          therapist.languages.map((language) => (
            <p className="" key={`language-t-${language}`}>
              {language}
            </p>
          ))}
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Years of experience</h2>
        <p className="">Less than 3 years</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Specialties</h2>
        {therapist.experiences &&
          therapist.experiences.map((experience) => (
            <p key={`experience-t-${experience}`} className="">
              {experience}
            </p>
          ))}
      </li>

      <li className="flex gap-2">
        <Twitter className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
        <Linkedin className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
        <Dribbble className="aspect-square w-5 " />
      </li>
    </ul>
  );
}

export default InfoSide;
