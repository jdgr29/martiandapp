const Inputs = ({
  placeholder,
  type,
  data,
  setData,
  name,
}: {
  placeholder: string;
  type: string;
  data: object;
  setData: Function;
  name: string;
}) => {
  return (
    <input
      type={type}
      className="rounded-xl w-1/2 bg-[#104afb] bg-opacity-50 text-center py-3  lg:text-base text-sm font-medium text-white outline-none 
     focus:border-[#104afb] focus:shadow-md h-full"
      placeholder={placeholder}
      onChange={(e) => {
        setData({ ...data, name: e.target.value });
      }}
    />
  );
};

export default Inputs;
