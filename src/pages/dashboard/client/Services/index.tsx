import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getProfessional } from '@/api/user/get-professional';
import { Search } from '@/components/search';

import { ProfessionalCard } from './ProfessionalCard';

type categories = {
  title: string;
  id: number;
};

export const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  const { data: professionals } = useQuery({
    queryKey: ['professionals'],
    queryFn: getProfessional,
    staleTime: Infinity,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (categories.includes(value)) {
      setCategories(categories.filter((category) => category !== value));
    } else {
      setCategories([...categories, value]);
    }
  };

  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredProfessionals = professionals?.data.filter((professional) => {
    const lowerCaseSearchTerm = removeAccents(searchTerm.toLowerCase());

    if (categories.length) {
      return categories
        .map((category) => removeAccents(category.toLowerCase()))
        .includes(removeAccents(professional?.occupationArea?.toLowerCase() ?? ''));
    }

    if (!searchTerm) {
      return true;
    }

    return (
      removeAccents(professional?.name.toLowerCase()).includes(lowerCaseSearchTerm) ||
      removeAccents(professional?.occupationArea?.toLowerCase() ?? '').includes(lowerCaseSearchTerm)
    );
  });

  const categoriesMock: categories[] = [
    { title: 'Saúde', id: 1 },
    { title: 'Advocacia', id: 2 },
    { title: 'Design', id: 3 },
    { title: 'Tecnologia', id: 4 },
    { title: 'Coach', id: 5 },
  ];

  return (
    <div className="w-full max-sm:mt-10">
      <h1 className="my-10 text-center">Serviços</h1>
      <div>
        <div className="flex flex-col items-center gap-5">
          <Search
            placeholder="Busque por um serviço ou profissional"
            onChange={handleSearchChange}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {categoriesMock.map((categorie) => {
            return (
              <div className="flex items-center gap-2" key={categorie.id}>
                <input
                  type="checkbox"
                  className="h-6 w-6 appearance-none rounded-md border-2 border-primary checked:border-primary checked:bg-primary"
                  name="category"
                  id={categorie.title}
                  value={categorie.title}
                  onChange={handleSearchCategoryChange}
                />

                <label htmlFor={categorie.title} id={categorie.title}>
                  {categorie.title}
                </label>
              </div>
            );
          })}
        </div>

        <div className="flex">
          <div className="flex flex-wrap justify-center gap-10 px-16 py-16 max-lg:gap-2 max-sm:gap-1 ">
            {filteredProfessionals &&
              filteredProfessionals.map((professional) => (
                <ProfessionalCard
                  name={professional.name}
                  occupationArea={professional.occupationArea}
                  headLine={professional.headLine}
                  photoUrl={professional.photoUrl}
                  _id={professional._id}
                  key={professional._id}
                  myScheduleId={professional.myScheduleId}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
