import { useState, useEffect, useCallback } from "react";

const useAllert = () => {
  const [allertText, setAllertText] = useState();
  const [allertType, setAllertType] = useState();

  const allert = useCallback((props) => {
    setAllertText(props.text);
    setAllertType(props.type);
  }, []);

  useEffect(() => {
    const allertTimeout = setTimeout(() => {
      setAllertText(null);
      setAllertType(null);
    }, 5000);

    return () => clearTimeout(allertTimeout);
  }, [allertText, allertType]);

  return { allert, allertType, allertText };
};

export default useAllert;
