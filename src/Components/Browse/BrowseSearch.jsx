import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { Jakan } from 'jakan';
import { useEffect, useState } from 'react';
import ComboBox from './ComboBox';
import SearchComponent from './SearchComponent';
import { genre, orderBy, rating, type } from './SearchParameters';

const jakan = new Jakan().withMemory().forSearch();

export default function BrowseSearch({
  setLoading,
  setAPIResponse,
  setQueryParameters,
}) {
  const [selectedGenre, setSeletedGenre] = useState('');
  const [selectedType, setSeletedType] = useState('');
  const [selectedRating, setSeletedRating] = useState('');
  const [selectedOrder, setSeletedOrder] = useState('');
  const [userInput, setUserInput] = useState('');

  function gatherQueryParameters() {
    const parametersToDisplay = [];
    const toCheck = [
      selectedGenre,
      selectedType,
      selectedRating,
      selectedOrder,
    ];
    if (userInput !== '') parametersToDisplay.push(userInput);
    toCheck.forEach((param) => {
      if (param.id !== 0) parametersToDisplay.push(param.name);
    });
    setQueryParameters(parametersToDisplay);
  }

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      handleInputChange();
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [userInput, selectedGenre, selectedType, selectedRating, selectedOrder]);

  async function handleInputChange() {
    try {
      const response = await jakan.anime({
        q: userInput,
        genres: selectedGenre.id,
        rating: selectedRating.id,
        type: selectedType.id,
        order_by: selectedOrder.id,
        sort: 'desc',
        limit: 24,
      });
      setAPIResponse(response.data);
      gatherQueryParameters();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex items-center justify-center gap-16 z-50">
      <div className="flex  items-center justify-center gap-6">
        <div className="flex flex-col gap-1">
          <p className="font-medium">Search</p>
          <SearchComponent userInput={userInput} setUserInput={setUserInput} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Genre</p>
          <ComboBox people={genre} setSelectedOption={setSeletedGenre} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Format</p>
          <ComboBox people={type} setSelectedOption={setSeletedType} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Rating</p>
          <ComboBox people={rating} setSelectedOption={setSeletedRating} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Order</p>
          <ComboBox people={orderBy} setSelectedOption={setSeletedOrder} />
        </div>
      </div>
      <AdjustmentsHorizontalIcon className="h-9 self-end w-9 rounded bg-zinc-700 text-zinc-400 p-2 cursor-not-allowed hover:text-amber-600" />
    </section>
  );
}
