import { createContext, useState } from "react";

interface IBucket {
  id:number
}

export const BucketContext = createContext<{
  content?: IBucket;
  setContent?: React.Dispatch<React.SetStateAction<IBucket|undefined>>;
}>({});

const BucketProvider: React.FC<{ children: any }> = ({ children }) => {
  const [content, setContent] = useState<IBucket>();
  return (
    <BucketContext.Provider value={{ content, setContent }}>
      {children}
    </BucketContext.Provider>
  );
};

export default BucketProvider;
