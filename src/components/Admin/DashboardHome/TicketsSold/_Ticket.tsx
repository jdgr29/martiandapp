export const Ticket = ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) => {
  return (
    <div className="flex justify-around flex-col py-1 px-4">
      <p>{title}</p>
      <div className="flex items-center gap-x-2 justify-between">
        <div className="  w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            style={{ width: `${amount}%` }}
            className="bg-blue-600 h-2.5 rounded-full"
          ></div>
        </div>

        <div>{amount}/100</div>
      </div>
    </div>
  );
};
