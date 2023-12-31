import { useMatches } from '@/hooks/useMatch';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const beliefSchema = z.object({
  belief: z.enum(['Yes', 'Somewhat', 'No']),
});

export type Belief = z.infer<typeof beliefSchema>;
const options = [
  {
    belief: 'Yes',
    text: "Yes,it's important to me",
  },
  {
    belief: 'Somewhat',
    text: "it's somewhat important to me",
  },
  {
    belief: 'No',
    text: "No,it's not a priority for me",
  },
];

function BeliefsFormComponent() {
  const { match, dispatch } = useMatches();
  const { handleSubmit, register, watch } = useForm<Belief>({
    resolver: zodResolver(beliefSchema),
    defaultValues: {
      belief: match.belief,
    },
  });

  const navigate = useNavigate();

  const selectedBelief = watch('belief');

  const onSubmit: SubmitHandler<Belief> = (data) => {
    if (!data.belief) return;
    dispatch({
      type: 'update-belief',
      payload: {
        belief: data.belief,
      },
    });
    navigate('/match/religion');
  };

  return (
    <>
      <h2 className="font-semibold text-healHavenBrand700">
        Religious & Spiritual beliefs
      </h2>
      <h3 className="text-2xl font-medium text-black">
        Do you want a therapist who understands or shares your religious or
        spiritual beliefs?
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-10 "
      >
        {/* <label className="text-textHealHavenGray700 pr-4">belief</label> */}
        <div className="flex flex-col items-start gap-4">
          {options.map((option) => (
            <label
              key={option.belief}
              htmlFor={option.belief}
              className={`${
                selectedBelief === option.belief
                  ? 'bg-healHavenBrand50 text-healHavenBrand800'
                  : 'text-textHealHavenGray700'
              } relative flex w-full items-center justify-between rounded-md border border-solid border-healHavenGray300 p-4 text-sm font-medium transition-all duration-300 hover:border-healHavenBrand300 hover:text-healHavenBrand800 `}
            >
              {option.belief.charAt(0).toUpperCase() + option.belief.slice(1)}
              <input
                type="radio"
                className="peer opacity-0"
                value={option.belief}
                id={option.belief}
                {...register('belief')}
              />
              <div className="pointer-events-none absolute right-[13px] flex h-5 w-5 items-center justify-center rounded-full border border-solid border-healHavenBrand700 peer-checked:bg-healHavenBrand800 ">
                <Check stroke="#fff" className="h-[0.875rem] w-[0.875rem]" />
              </div>
            </label>
          ))}
        </div>
        <div className="flex justify-between ">
          <button
            type="button"
            className=" rounded  border border-solid border-healHavenGray300 px-4 py-2 text-healHavenGray700"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="submit"
            className={`${
              selectedBelief === undefined || selectedBelief === null
                ? 'bg-healHavenBrand200 hover:bg-healHavenBrand300'
                : 'bg-healHavenBrand600 hover:bg-healHavenBrand900'
            }  rounded  px-4 py-2 text-white `}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default BeliefsFormComponent;
