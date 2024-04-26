import { useQuery } from '@tanstack/react-query';
import { SearchX, X } from 'lucide-react';
import { useState } from 'react';

import { getProfessional } from '@/api/user/get-professional';
import { Search } from '@/components/search';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { useAuth } from '@/context/auth-provider';
import { Occupations } from '@/utils/Occupation';

import { ProfessionalCard } from './ProfessionalCard';

type categories = {
  title: string;
  id: number;
};

export const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState('Filtrar por categoria');
  const { user } = useAuth();

  const { data: professionals } = useQuery({
    queryKey: ['professionals'],
    queryFn: getProfessional,
    staleTime: Infinity,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectValue('Filtrar por categoria');
  };

  const handleSearchCategoryChange = (value: string) => {
    if (categories.includes(value)) {
      setCategories(categories.filter((category) => category !== value));
    } else {
      setCategories([...categories, value]);
    }
    setSelectValue(value);
  };

  const handleFilter = () => {
    setFilteredCategories(categories);
  };

  const handleRemoveFilter = () => {
    setFilteredCategories([]);
    setSelectValue('Filtrar por categoria');
  };

  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredProfessionals = professionals?.data.filter((professional) => {
    const lowerCaseSearchTerm = removeAccents(searchTerm.toLowerCase());

    if (filteredCategories.length) {
      return filteredCategories
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

  const categoriesMock: categories[] = Occupations.map((occupation, index) => ({
    title: occupation,
    id: index + 1,
  }));
  return (
    <div className="w-full max-sm:mt-10">
      <h1 className="my-10 text-center max-md:my-5">Serviços</h1>
      <div>
        <div className="flex flex-wrap items-center justify-center gap-5 px-2 sm:px-16">
          <Search
            placeholder="Busque por um serviço ou profissional"
            onChange={handleSearchChange}
          />
          <div className="flex w-72 rounded-md border border-primary sm:mt-0 sm:w-60">
            <Select onValueChange={handleSearchCategoryChange}>
              <SelectTrigger>{selectValue}</SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categoriesMock.map((categorie) => (
                    <SelectItem key={categorie.id} value={categorie.title}>
                      {categorie.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleFilter} variant={'ghost'}>
            <SearchX className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button onClick={handleRemoveFilter} variant={'ghost'}>
            <X className="mr-2 h-4 w-4" />
            Remover filtro
          </Button>
        </div>

        <div className="flex">
          <div className="flex flex-wrap justify-center gap-4 px-4 py-16 sm:px-16">
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
                  role={user?.role}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
