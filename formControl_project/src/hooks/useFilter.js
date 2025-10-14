import { useMemo, useState } from "react";

function useFilter(data, initialSelected) {
  const [selected, setSelected] = useState(initialSelected);

  const filteredData = useMemo(() => {
    // return data if All is selected
    if (selected === "All") return data;

    //else filter the data
    return data.filter(
      (item) => item.category.toLowerCase() === selected.toLowerCase()
    );
  }, [data, selected]);

  return [filteredData, selected, setSelected];
}

export default useFilter;
